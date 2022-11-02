import EmojiText from "./EmojiText";
export default {
  name:"EmojiText",
  component: EmojiText
}

const Template = (args) => <EmojiText {...args} />;

export const First = Template.bind({})

First.args = {
  text:"Leptop",
  emoji:"💻"
}