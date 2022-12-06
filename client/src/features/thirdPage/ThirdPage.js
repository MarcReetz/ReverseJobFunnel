import ResponsiveContainer from "../../components/ResponsiveContainer/ResponsiveContainer"
import Title from "../../components/Title/Title"
import SubTitle from "../../components/SubTitle/SubTitle"
import EmojiTextTable from "../../components/EmojiTextTable/EmojiTextTable"
import EmojiTextTableElement from "../../components/EmojiTextTable/EmojiTextTableElement"
import CenterX from "../../components/Center/CenterX"
import Button from "../../components/Button/Button"
import { useNavigate } from "react-router-dom";


export default function ThirdPage () {
  const navigate = useNavigate();
  return (
    <ResponsiveContainer>
      <Title>Was sonst so</Title>
      <EmojiTextTable>
        <EmojiTextTableElement emoji={"📊 "}>Auch mit Daten kann ich umgehen: SQL, PostgreSQL, JSON, usw. stellen keine Fremdwörter für mich da! </EmojiTextTableElement>
        <EmojiTextTableElement emoji={"🧮 "}>Mathe und Formeln sind keine Angstgegner. Siehe dir dazu gerne meine Implementierung eines Spring Embedder Algorithmus <a href={"https://github.com/MarcReetz/Portfolio/blob/dev/src/services/SpringEmbedder.ts"} target="_blank" rel="noopener noreferrer">hier</a> an</EmojiTextTableElement>
        <EmojiTextTableElement emoji={"🇺🇳"}>Deutsch ist meine Muttersprache und English beherrsche ich gut bis sehr gut. Mein Chinesich und Französich bräuchten aber ganz sicher mal wieder ein bisschen Übung um gesprächssicher zu sein.</EmojiTextTableElement>
        <EmojiTextTableElement emoji={"🛩 "}>Ihr braucht jemand der durch Deutschland und die Welt reist, kein Problem! </EmojiTextTableElement>
        <EmojiTextTableElement emoji={"🚗"}>Falls man ihn braucht besitze ich den Führerschein Klasse B.</EmojiTextTableElement>
      </EmojiTextTable>
      <SubTitle>Das hört sich alles gut an bis jetzt? <br/>Finde im Quiz heraus, ob wir zueinander passen.</SubTitle>
      <CenterX>
        <Button text={"Jetzt in wenigen Quizfragen herausfinden!"} onClick={() => navigate('/skill-quiz')}/>
      </CenterX>
      <SubTitle>Noch nicht überzeugt? Schaue gerne auf mein <a href="https://github.com/MarcReetz" target="_blank" rel="noopener noreferrer">GitHub</a> Profil vorbei oder gehe auf meine <a href="https://www.marc-reetz.me/" target="_blank" rel="noopener noreferrer">Portfolio</a> Seite</SubTitle>
    </ResponsiveContainer>
  )
}