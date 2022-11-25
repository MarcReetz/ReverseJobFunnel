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
        Ihr übernehmt gemeisam Verantwortung für eure Arbeit?
      </SubTitle>
      <QuizButtonContainer>
        <QuizButton emoji="❌" text={"Nein"} onClick={() => navigate('/team-quiz-fail')}/>
        <QuizButton emoji="👩🏽‍💻👨🏼‍💻🧑🏻‍💻" text={"Ja! Teamwork makes the dream work!"} onClick={() => navigate('/concentration-quiz')}/>
      </QuizButtonContainer>
    </ResponsiveContainer>
  )
}