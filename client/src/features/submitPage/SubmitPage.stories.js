import SubmitPage from "./SubmitPage";

export default {
  name:"SubmitPage",
  component: SubmitPage
}

const Template = (args) => <SubmitPage{...args} />;

export const First = Template.bind({})

First.args = {
  
}