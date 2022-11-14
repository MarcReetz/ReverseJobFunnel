import Selector from "./Selector"

export default {
  name: 'Selector',
  component: Selector
}

const Template = (args) => <Selector {...args} />;

export const First = Template.bind({})

First.args = {
  isChecked: true,
  emoji: "💻",
  text: "you use cool tech"
}