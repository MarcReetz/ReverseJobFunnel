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
      <Title><strong>Ein paar Worte zu mir</strong></Title>
      <EmojiTextTable>
      <EmojiTextTableElement emoji={"🙋🏻‍♂️"}>Die Basics: Ich bin Marc Reetz, 24 Jahre alt und wohne im schönen Bremen.</EmojiTextTableElement>
      <EmojiTextTableElement emoji={"💻"}>Ich beherrsche folgende Programmiersprachen: Go, Javascript und Typescritpt.</EmojiTextTableElement>
      <EmojiTextTableElement emoji={"👔"}>In meinen Berufsleben konnte ich bereits 1,5 Jahre nachweisbare Erfahrung in der Softwareentwicklung, insbesondere mit Java, Css3, Html5 und Javascript sammeln.</EmojiTextTableElement>
      <EmojiTextTableElement emoji={"🧑🏻‍💻"}>In letzter Zeit habe ich mich intensiv mit React und dem dazugehörigen Ecosystem (ReactRouter, I18n, Redux, Storybook...) auseinandergesetzt.</EmojiTextTableElement>
      <EmojiTextTableElement emoji={"🌈"}>Natürlich kommt auch das Design nicht zu kurz. Ich beherrsche: HTML5 und CSS3.</EmojiTextTableElement>
      <EmojiTextTableElement emoji={"📍"}>Diese Seite verwendet einen PRO Stack 😉 (PostgreSQL, React, Go). Schaue dir den Code auf Github an!</EmojiTextTableElement>
      </EmojiTextTable>
      <CenterX>
        <Button text={"Cool was hast du noch zu bieten"} onClick={() => navigate('/softskills')}/>
      </CenterX>
    </ResponsiveContainer>
  )
}