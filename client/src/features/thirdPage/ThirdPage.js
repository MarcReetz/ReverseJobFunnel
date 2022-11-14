import ResponsiveContainer from "../../components/ResponsiveContainer/ResponsiveContainer"
import Title from "../../components/Title/Title"
import SubTitle from "../../components/SubTitle/SubTitle"
import EmojiTextTable from "../../components/EmojiTextTable/EmojiTextTable"
import EmojiTextTableElement from "../../components/EmojiTextTable/EmojiTextTableElement"
import CenterX from "../../components/Center/CenterX"
import Button from "../../components/Button/Button"

export default function ThirdPage () {
  return (
    <ResponsiveContainer>
      <Title>Was sonst so</Title>
      <EmojiTextTable>
        <EmojiTextTableElement emoji={"🛩 "}>Ihr braucht jemand der durch Deutschland und die Welt reist kein problem </EmojiTextTableElement>
        <EmojiTextTableElement emoji={"🚗"}>Falls man ihn braucht besitze ich den Führerschein Klasse B</EmojiTextTableElement>
      </EmojiTextTable>
      <SubTitle>Das hört sich alles gut an bis jetzt? <br/>Finde im Quiz Heraus ob wir zu einander passen</SubTitle>
      <CenterX>
        <Button text={"jetzt in wenigen Quizfragen heraus finden"}/>
      </CenterX>
    </ResponsiveContainer>
  )
}