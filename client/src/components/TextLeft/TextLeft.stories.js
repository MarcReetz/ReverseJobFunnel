import TextLeft from "./TextLeft";

export default {
  name:'TextLeft',
  component: TextLeft
}

const Template = (args) => <TextLeft>Hello how are you, i hope <strong>you are </strong> good </TextLeft>

export const First = Template.bind()