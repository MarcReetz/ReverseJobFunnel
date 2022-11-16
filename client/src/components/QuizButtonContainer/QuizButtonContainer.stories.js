import QuizButton from "../QuizButton/QuizButton"
import QuizButtonContainer from "./QuizButtonContainer"

export default {
  name:"QuizButtonContainer",
  component: QuizButtonContainer
}

const Template = (args) => <QuizButtonContainer {...args}><QuizButton  emoji= '📜' text={'Abschlüsse'}/><QuizButton emoji= '💡' text={'Fähigkeiten'}/></QuizButtonContainer>

export const First = Template.bind()

First.args = {

}