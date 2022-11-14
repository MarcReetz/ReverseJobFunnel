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
        <EmojiTextTableElement emoji={"💻"}>Ein paar dinge mit dehnen ich Arbeite: Go, Javascript, Css3, Html5</EmojiTextTableElement>
      </EmojiTextTable>
      <CenterX>
        <Button text={"Cool was hast du noch zu bieten"} onClick={() => navigate('/softskills')}/>
      </CenterX>
    </ResponsiveContainer>
  )
}