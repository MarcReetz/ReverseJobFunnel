import QuizButton from "./QuizButton";

export default {
  name: 'QuizButton',
  component: QuizButton
}

const Template = (args) => <QuizButton {...args} />

export const First = Template.bind()

First.args = {
  text: 'Hello'
}