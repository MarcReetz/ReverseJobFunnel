import ResponsiveContainer from '../../components/ResponsiveContainer/ResponsiveContainer'
import Title from "../../components/Title/Title";
import QuizButton from "../../components/QuizButton/QuizButton";
import QuizButtonContainer from "../../components/QuizButtonContainer/QuizButtonContainer";
import { useNavigate } from "react-router-dom";

export default function TrainingQuizPage () {
  const navigate = useNavigate();

  return (
    <ResponsiveContainer>
      <Title>
        Eine gute Einarbeitung ist selbstverständlich
        <br/> für dich und dein Team ?
      </Title>
      <QuizButtonContainer>
        <QuizButton emoji="⌛" text={"Nach 3 Tagen hat man alles drauf!"} />
        <QuizButton emoji="🤜🏼🤛🏾" text={"Klar!"} onClick={() => navigate()}/>
      </QuizButtonContainer>
    </ResponsiveContainer>
  )
}