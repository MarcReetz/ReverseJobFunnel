package main

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/cors"
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

func main() {
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
		r.Get("/mail/{apiID}", mailSignup)
	})

}

func signup(w http.ResponseWriter, r *http.Request) {
	var inquiry Inquiry

	err := json.NewDecoder(r.Body).Decode(&inquiry)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

}

func mailSignup(w http.ResponseWriter, r *http.Request) {

}
