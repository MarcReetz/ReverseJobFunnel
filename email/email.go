package email

import (
	"encoding/base64"
	"fmt"
	"log"
	"net/mail"
	"net/smtp"
)

type Mailer struct {
	displayname string
	username    string
	password    string
	smtpHost    string
	smtpPort    string
}

func NewMailer(displayname string, username string, password string, smtpHost string, smtpPort string) *Mailer {
	mailer := &Mailer{displayname: displayname, username: username, password: password, smtpHost: smtpHost, smtpPort: smtpPort}
	return mailer
}

func (m *Mailer) SendMail(to, text string, title string) error {

	// Create authentication
	auth := smtp.PlainAuth("", m.username, m.password, m.smtpHost)

	from := mail.Address{Name: m.displayname, Address: m.username}

	body := text

	header := make(map[string]string)
	header["From"] = from.String()
	header["To"] = to
	header["Subject"] = title
	header["MIME-Version"] = "1.0"
	header["Content-Type"] = "text/plain; charset=\"utf-8\""
	header["Content-Transfer-Encoding"] = "base64"

	message := ""
	for k, v := range header {
		message += fmt.Sprintf("%s: %s\r\n", k, v)
	}
	message += "\r\n" + base64.StdEncoding.EncodeToString([]byte(body))

	// Send actual message
	err := smtp.SendMail(m.smtpHost+":"+m.smtpPort, auth, m.username, []string{to}, []byte(message))
	if err != nil {
		log.Println("Somethink went wrong while sending a mail")
		log.Println(err)
		return err
	}

	return nil
}
