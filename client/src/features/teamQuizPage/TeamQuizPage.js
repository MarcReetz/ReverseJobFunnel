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
        Im Team besitzt ihr eine Offene und Ehrliche Kritik und Lob Kultur?
      </Title>
      <SubTitle>
        Flache Hirachien sind bei euch nicht nur ein Buzzword ?
      </SubTitle>
      <SubTitle>
        Ihr übernehmt gemeisam Verantwortung für eure Arbeit ?
      </SubTitle>
      <QuizButtonContainer>
        <QuizButton emoji="❌" text={"Nein"} />
        <QuizButton emoji="👩🏽‍💻👨🏼‍💻🧑🏻‍💻" text={"Ja! Teamwork lets the Dream Work!"} onClick={() => navigate()}/>
      </QuizButtonContainer>
    </ResponsiveContainer>
  )
}