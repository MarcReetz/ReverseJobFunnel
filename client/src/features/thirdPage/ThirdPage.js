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
        <EmojiTextTableElement emoji={"📊 "}>Auch mit Daten Kann ich umgehen: SQL, PostgreSQL, JSON, usw stellen keine Fremdwörter für mich da! </EmojiTextTableElement>
        <EmojiTextTableElement emoji={"🧮 "}>Mathe und Formeln sind keine Agnstgegner. Siehe dir dazu gerne meine Implementierung eines Spring Embedder Algorithmuses <a href={"https://github.com/MarcReetz/Portfolio/blob/dev/src/services/SpringEmbedder.ts"}>hier</a> an</EmojiTextTableElement>
        <EmojiTextTableElement emoji={"🇺🇳"}>Deutsch ist meine Muttersprache und English behersche ich gut bis Sehr gut. Mein Chinesich und Französich brauchten aber ganz sicher mal wieder ein bische übung um Gesprächs sicher zu sein.</EmojiTextTableElement>
        <EmojiTextTableElement emoji={"🛩 "}>Ihr braucht jemand der durch Deutschland und die Welt reist kein Problem! </EmojiTextTableElement>
        <EmojiTextTableElement emoji={"🚗"}>Falls man ihn braucht besitze ich den Führerschein Klasse B.</EmojiTextTableElement>
      </EmojiTextTable>
      <SubTitle>Das hört sich alles gut an bis jetzt? <br/>Finde im Quiz heraus ob wir zu einander passen.</SubTitle>
      <CenterX>
        <Button text={"jetzt in wenigen Quizfragen heraus finden"} onClick={() => navigate('/skill-quiz')}/>
      </CenterX>
      <SubTitle>Noch nicht Überzeugt? Schaue gerne auf meine Github Profiel Vorbei oder gehe auf meine Portfolio Seite</SubTitle>
    </ResponsiveContainer>
  )
}