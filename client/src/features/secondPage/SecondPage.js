import ResponsiveContainer from "../../components/ResponsiveContainer/ResponsiveContainer"
import Title from "../../components/Title/Title"
import EmojiTextTable from "../../components/EmojiTextTable/EmojiTextTable"
import EmojiTextTableElement from "../../components/EmojiTextTable/EmojiTextTableElement"

export default function SecondPage () {
  return (
    <ResponsiveContainer>
      <Title><strong>Ein paar worte zu mir</strong></Title>
      <EmojiTextTable>
        <EmojiTextTableElement emoji={"💻"}>Ein paar dinge mit dehnen ich Arbeite: Go, Javascript, Css3, Html5</EmojiTextTableElement>
      </EmojiTextTable>
    </ResponsiveContainer>
  )
}