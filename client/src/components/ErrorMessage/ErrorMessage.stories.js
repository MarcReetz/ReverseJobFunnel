import ErrorMessage from "./ErrorMessage";

export default {
  name: "ErrorMessage",
  component: ErrorMessage
}

const Template = (args) => <ErrorMessage {...args}/>

export const First = Template.bind()

First.args = {
  title: "Important Error",
  text: "This is how to fix it, you first have to click on fix it to fix it obvious i know",
  isVisible: true,
  buttonText: "Try again"
}