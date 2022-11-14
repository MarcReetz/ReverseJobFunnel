import Button from "./Button";

export default {
  name:"Button",
  component: Button
}

const Template = (args) => <Button {...args} />;

export const First = Template.bind()

First.args = {
  text:"Press me 👋🏻"
}

export const ButtonInactive = Template.bind()

ButtonInactive.args = {
  text:"Press me 👋🏻",
  isInactive: true
}