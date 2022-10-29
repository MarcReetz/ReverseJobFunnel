import Input from "./Input";

export default {
  name:"Input",
  component: Input
}

const Template = (args) => <Input {...args} />;

export const First = Template.bind({})

First.args = {
  isValid: false,
  isError: false,
  placeholder: 'placeholder'
}