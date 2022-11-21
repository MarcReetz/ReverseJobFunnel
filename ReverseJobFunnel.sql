CREATE TABLE inquiry (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" text ,
  "phone" text UNIQUE,
  "email" text UNIQUE,
  "send_at" text
);

CREATE TABLE answers (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "inquiry_id" int,
  "dataProtection" bool,
  "hardware" bool,
  "workingtime" bool,
  "fitness" bool,
  "holiday" bool,
  "education" bool,
  "workingFromHome" bool
);

CREATE TABLE email_verification (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "inquiry_id" text,
  "time_send" text,
  "verifyt" bool DEFAULT false,
  "verifyt_at" text
);

ALTER TABLE "answers" ADD FOREIGN KEY ("inquiry_id") REFERENCES "inquiry" ("id");

ALTER TABLE "email_verification" ADD FOREIGN KEY ("inquiry_id") REFERENCES "inquiry" ("id");
