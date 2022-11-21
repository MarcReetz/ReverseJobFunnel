package main

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/cors"
	"github.com/jackc/pgx/v5/pgxpool"
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

const twodays = time.Hour * 48

func main() {

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

}

func signup(w http.ResponseWriter, r *http.Request) {
	var inquiry Inquiry

	err := json.NewDecoder(r.Body).Decode(&inquiry)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	time.Now().MarshalText()

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
		w.WriteHeader(http.StatusAccepted)
	}

}
