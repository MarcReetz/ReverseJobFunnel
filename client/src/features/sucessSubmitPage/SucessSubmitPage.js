import ResponsiveContainer from "../../components/ResponsiveContainer/ResponsiveContainer";
import SubTitle from "../../components/SubTitle/SubTitle";
import Title from "../../components/Title/Title";
import TextLeft from "../../components/TextLeft/TextLeft"

export default function SucessSubmitPage () {
  return (
    <ResponsiveContainer>
      <Title>Deine Daten sind sicher Angekommen!</Title>
      <SubTitle>Bitte <strong>bestätige</strong> deine <strong>E-mail Adresse</strong></SubTitle>
      <SubTitle>Die E-mail zur Bestätigung würde an deine E-mail versendet. Absender ist <i>automation@marc-reetz.de</i> Eventuel must du in deinen Spam Ordner schauen. Ich hoffe wir Hören uns bald 👋!</SubTitle>
      <TextLeft>Bestätigst du nicht deine Email Adresse werden alle daten von dir automatisch nach 48-49H gelöscht. Ich nehme erst Kontakt zu dir auf wenn du deine E-mail Adresse bestätigst hast.</TextLeft>
    </ResponsiveContainer>
  )
}