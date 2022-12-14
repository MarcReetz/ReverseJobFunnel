import ResponsiveContainer from '../../components/ResponsiveContainer/ResponsiveContainer'
import Title from "../../components/Title/Title";
import QuizButton from "../../components/QuizButton/QuizButton";
import QuizButtonContainer from "../../components/QuizButtonContainer/QuizButtonContainer";
import SubTitle from '../../components/SubTitle/SubTitle'
import { useNavigate } from "react-router-dom";


export default function TeamQuizPage () {
  const navigate = useNavigate();

  return (
    <ResponsiveContainer>
      <Title>
        Im Team besitzt ihr eine offene und ehrliche Kritik- und Lobkultur?
      </Title>
      <SubTitle>
        Flache Hierachien sind bei euch nicht nur ein Buzzword?
      </SubTitle>
      <SubTitle>
        Ihr Ã¼bernehmt gemeisam Verantwortung fÃ¼r eure Arbeit?
      </SubTitle>
      <QuizButtonContainer>
        <QuizButton emoji="â" text={"Nein"} onClick={() => navigate('/team-quiz-fail')}/>
        <QuizButton emoji="ð©ð½âð»ð¨ð¼âð»ð§ð»âð»" text={"Ja! Teamwork makes the dream work!"} onClick={() => navigate('/concentration-quiz')}/>
      </QuizButtonContainer>
    </ResponsiveContainer>
  )
}