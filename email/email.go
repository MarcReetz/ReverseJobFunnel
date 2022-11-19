package email

import (
	"log"
	"net/smtp"
)

type Mailer struct {
	from     string
	password string
	smtpHost string
	smtpPort string
}

func NewMailer(from string, password string, smtpHost string, smtpPort string) *Mailer {
	mailer := &Mailer{from: from, password: password, smtpHost: smtpHost, smtpPort: smtpPort}
	return mailer
}

func (m *Mailer) SendMail(to []string, text string) {
	// Configuration
	message := []byte(text)

	// Create authentication
	auth := smtp.PlainAuth("", m.from, m.password, m.smtpHost)

	// Send actual message
	err := smtp.SendMail(m.smtpHost+":"+m.smtpPort, auth, m.from, to, message)
	if err != nil {
		log.Fatal(err)
	}
}
