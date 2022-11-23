import ResponsiveContainer from '../../components/ResponsiveContainer/ResponsiveContainer'
import Title from "../../components/Title/Title";
import QuizButton from "../../components/QuizButton/QuizButton";
import QuizButtonContainer from "../../components/QuizButtonContainer/QuizButtonContainer";
import { useNavigate } from "react-router-dom";
import SubTitle from '../../components/SubTitle/SubTitle';

export default function ConcentrationQuizPage () {
  const navigate = useNavigate();

  return (
    <ResponsiveContainer>
      <Title>
        Die Abwechslungs machts! 
      </Title>
      <SubTitle>
      Neben Guten Team Work bekommt man bei euch im Team auch genügent zeit um alleine oder beim Pair Programming <strong>Konzentriet</strong> zu arbeiten 
      </SubTitle>
      <QuizButtonContainer>
        <QuizButton emoji="🔊" text={"Wie du brauchst ruhe zum arbeiten !?"} onClick={() => navigate('/concentration-quiz-fail')} />
        <QuizButton emoji="🧠" text={"Natürlich"} onClick={() => navigate('/benefits')}/>
      </QuizButtonContainer>
    </ResponsiveContainer>
  )
}
