import ResponsiveContainer from "../../components/ResponsiveContainer/ResponsiveContainer";
import Title from "../../components/Title/Title";
import QuizButton from "../../components/QuizButton/QuizButton";
import QuizButtonContainer from "../../components/QuizButtonContainer/QuizButtonContainer";
import { useNavigate } from "react-router-dom";

export default function SKillQuizPage() {
  const navigate = useNavigate();

  return (
    <ResponsiveContainer>
      <Title>
        Was Zählt bei der Bewerbung <br />
        mehr für Euch:
      </Title>
      <QuizButtonContainer>
        <QuizButton emoji="📜" text={"Abschlüsse"} />
        <QuizButton emoji="💡" text={"Fähigkeiten"} onClick={() => navigate()}/>
      </QuizButtonContainer>
    </ResponsiveContainer>
  );
}
