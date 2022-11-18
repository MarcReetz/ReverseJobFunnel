import FailPage from "./FailPage";

export default {
  name: 'FailPage',
  component: FailPage
}

const Template = (args) => <FailPage {...args}/>

export const First = Template.bind()

First.args = {
  text:'ich suche ein Team bei dehm ich auch zeit bekomme um in ruhe zu arbeiten.'
}