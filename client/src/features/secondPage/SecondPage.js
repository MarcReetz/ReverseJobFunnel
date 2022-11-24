import ResponsiveContainer from "../../components/ResponsiveContainer/ResponsiveContainer"
import Title from "../../components/Title/Title"
import EmojiTextTable from "../../components/EmojiTextTable/EmojiTextTable"
import EmojiTextTableElement from "../../components/EmojiTextTable/EmojiTextTableElement"
import CenterX from "../../components/Center/CenterX"
import Button from "../../components/Button/Button"
import { useNavigate } from "react-router-dom";

export default function SecondPage () {

  const navigate = useNavigate();

  return (
    <ResponsiveContainer>
      <Title><strong>Ein paar worte zu mir</strong></Title>
      <EmojiTextTable>
      <EmojiTextTableElement emoji={"🙋🏻‍♂️"}>Die Basics: Ich bin Marc Reetz 24 Jahre alt und Wohne im Schönen Bremen.</EmojiTextTableElement>
      <EmojiTextTableElement emoji={"💻"}>Ich behersche folgende Programmier Sprachen: Go, Javascript, Typescritpt.</EmojiTextTableElement>
      <EmojiTextTableElement emoji={"👔"}>In Meinen Berufsleben könnte ich bereits 1,5 Jahre Nachweisbare erfahrung in der Softwarentwicklung, insbesondere mit Java,Css3,Html5,Javascript sammeln.</EmojiTextTableElement>
      <EmojiTextTableElement emoji={"🧑🏻‍💻"}>In Letzter Zeit habe ich mich Intensiv mit React und dem dazugehörigen Eco System (ReactRouter,I18n,Redux,storybook...) Auseinander gesetzt.</EmojiTextTableElement>
      <EmojiTextTableElement emoji={"🌈"}>Natürlich kommt auch das design nicht zu kurz. Ich behersche: HTML5 und CSS3.</EmojiTextTableElement>
      <EmojiTextTableElement emoji={"📍"}>Diese Seite verwendet einen PRO Stack 😉 (PostgreSQL,React,Go). Schaue dir den Code auf Github an!</EmojiTextTableElement>
      </EmojiTextTable>
      <CenterX>
        <Button text={"Cool was hast du noch zu bieten"} onClick={() => navigate('/softskills')}/>
      </CenterX>
    </ResponsiveContainer>
  )
}