import Title from "./Title";

export default {
  name:'Title',
  component: Title
}

const Template = (args) => <Title {...args}>Hello</Title>

export const First = Template.bind({})

First.args = {

}

const Template2 = (args) => <Title {...args}><strong>Hello</strong> I am Marc</Title>

export const Second = Template2.bind({})

Second.args = {

}