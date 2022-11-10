import EmojiTextTableElement from "./EmojiTextTableElement";

export default {
  name:"EmojiTextTableElement",
  component:EmojiTextTableElement
}

const Template = (args) => <EmojiTextTableElement {...args}>Ihr habt freie Hardware wahl im unternehmen nice!</EmojiTextTableElement>

export const First = Template.bind()

First.args = {
  emoji: '💻'
}