import SubTitle from "./SubTitle";

export default {
  name:"SubTitle",
  component: SubTitle
}

const Template = (args) => <SubTitle {...args}>Hello</SubTitle>

export const First = Template.bind({})

First.args = {

}

const Template2 = (args) => <SubTitle {...args}><strong>Hello</strong> how are you</SubTitle>

export const Second = Template2.bind({})

Second.args = {

}