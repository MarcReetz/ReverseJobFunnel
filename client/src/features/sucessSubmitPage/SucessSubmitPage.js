import ResponsiveContainer from "../../components/ResponsiveContainer/ResponsiveContainer";
import SubTitle from "../../components/SubTitle/SubTitle";
import Title from "../../components/Title/Title";
import TextLeft from "../../components/TextLeft/TextLeft"

export default function SucessSubmitPage () {
  return (
    <ResponsiveContainer>
      <Title>Deine Daten sind sicher angekommen!</Title>
      <SubTitle>Bitte <strong>bestätige</strong> deine <strong>E-mail Adresse</strong></SubTitle>
      <SubTitle>Die E-mail zur Bestätigung wurde an deine E-mail versendet. Absender ist <i>automation@marc-reetz.de</i> eventuell musst du in deinen Spamordner schauen. Ich hoffe, wir hören uns bald 👋!</SubTitle>
      <TextLeft>Bestätigst du nicht deine E-Mail-Adresse werden alle Daten von dir automatisch nach 48-49 Stunden gelöscht. Ich nehme erst Kontakt zu dir auf, wenn du deine E-Mail-Adresse bestätigst hast.</TextLeft>
    </ResponsiveContainer>
  )
}