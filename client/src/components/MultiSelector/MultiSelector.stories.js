import MultiSelector from "./MultiSelector";

export default {
  name:"MultiSelector",
  component: MultiSelector
}

const Template = (args) => <MultiSelector {...args} />;

export const First = Template.bind({})

First.args = {
  entrys:[
    {text:"timeslot",isChecked: true},
    {text:"timeslot",isChecked: true}
  ],
  onClick: (element) => {}
}

