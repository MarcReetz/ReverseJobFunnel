package main

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/MarcReetz/ReverseJobFunnel/email"
	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/cors"
	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/joho/godotenv"
)

type Inquiry struct {
	Name            string `json:"name"`
	Email           string `json:"email"`
	Phone           string `json:"phone"`
	DataProtection  bool   `json:"dataprotection"`
	Hardware        bool   `json:"hardware"`
	Workingtime     bool   `json:"workingtime"`
	Fitness         bool   `json:"fitnes"`
	Holiday         bool   `json:"holiday"`
	Education       bool   `json:"education"`
	WorkingFromHome bool   `json:"workingfromhome"`
}

var db *pgxpool.Pool
var mailer *email.Mailer

const twodays = time.Hour * 48

func main() {
	log.Println("Starting up Server")
	log.Println("Loading env")
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Some error occured. Err: %s", err)
	}
	log.Println("Loading Database")
	log.Println(os.Getenv("DATABASE_URL"))
	poolConfig, err := pgxpool.ParseConfig(os.Getenv("DATABASE_URL"))
	if err != nil {
		log.Fatalln("Unable to parse DATABASE_URL:", err)
	}

	log.Println(poolConfig.ConnConfig.Database)

	db, err = pgxpool.NewWithConfig(context.Background(), poolConfig)
	if err != nil {
		log.Fatalln("Unable to create connection pool:", err)
	}

	defer db.Close()

	log.Println("Init Mail Service")
	mailer = email.NewMailer(os.Getenv("EMAIL_DISPLAYNAME"), os.Getenv("EMAIL_USERNAME"), os.Getenv("EMAIL_PASSWORD"), os.Getenv("EMAIL_SMTP_HOST"), os.Getenv("EMAIL_SMTP_PORT"))

	r := chi.NewRouter()
	r.Use(middleware.Logger)

	r.Use(cors.Handler(cors.Options{
		// AllowedOrigins:   []string{"https://foo.com"}, // Use this to allow specific origin hosts
		AllowedOrigins: []string{"https://*", "http://*"},
		// AllowOriginFunc:  func(r *http.Request, origin string) bool { return true },
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: true,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	}))

	r.Route("/api", func(r chi.Router) {
		r.Post("/signup", signup)
		r.Get("/mail/{mailID}", mailSignup)
	})

	http.ListenAndServe(":3000", r)

}

func signup(w http.ResponseWriter, r *http.Request) {
	var inquiry Inquiry

	err := json.NewDecoder(r.Body).Decode(&inquiry)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	timeString, _ := time.Now().MarshalText()

	if result, err := db.Exec(context.Background(), "INSERT INTO inquiry (name,phone,email,send_at) values ($1,$2,$3,$4)", inquiry.Name, inquiry.Phone, inquiry.Email, timeString); err != nil {
		log.Println(err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	} else {
		log.Println(result)
	}

	emailToken, err := uuid.NewRandom() //at error Handling !!
	baseUrl := os.Getenv("SERVER_BASE_URL")
	message := "PLS confirm your email Best wishes Marc /n" + "go to the following link to confirm you email:" + baseUrl + "/api/mail/" + emailToken.String()
	if err := mailer.SendMail(inquiry.Email, message, "Confirm your email"); err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	timeStringEmail, _ := time.Now().MarshalText()
	if _, err := db.Exec(context.Background(), "INSERT INTO email_verification (id,time_send) values ($1,$2)", emailToken, timeStringEmail); err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	if _, err := db.Exec(context.Background(),"INSERT INTO answers (dataProtection,hardware,workingtime,fitness,holiday,education,workingFromHome) values ($1,$2,$3,$4,$5,$6,$7)",inquiry.DataProtection)

	w.WriteHeader(http.StatusCreated)
}

func mailSignup(w http.ResponseWriter, r *http.Request) {
	mailId := chi.URLParam(r, "mailID")
	if mailId == "" {
		http.Error(w, "Missing verification string", http.StatusBadRequest)
		return
	}

	var time_send string
	if err := db.QueryRow(context.Background(), "SELECT time_send FROM email_verification WHERE inquiry_id = $1", mailId).Scan(&time_send); err != nil {
		http.Error(w, "No sending time found", http.StatusBadRequest)
		return
	}

	date, err := time.Parse(time.RFC3339, time_send)
	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	if !time.Now().Before(date.Add(twodays)) {
		http.Error(w, "Sorry your Inquiry expired. You normally have only 48h to verify your Email", http.StatusBadRequest)
		//TODO delete old entry
		return
	}

	timeNow, _ := time.Now().MarshalText()

	if _, err := db.Exec(context.Background(), "UPDATE email_verification SET verifyt = $1, verifyt_at = $2 WHERE inquiry_id = $3", true, timeNow, mailId); err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
	}

	w.WriteHeader(http.StatusAccepted)
}
