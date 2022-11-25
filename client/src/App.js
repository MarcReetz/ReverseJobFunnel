import React from "react";
import { Routes, Route } from "react-router-dom";
import Frame from "./features/frame/Frame";
import StartPage from "./features/startPage/StartPage";
import SecondPage from "./features/secondPage/SecondPage";
import ThirdPage from "./features/thirdPage/ThirdPage";
import BenefitsPage from "./features/benefitsPage/BenefitsPage";
import SubmitPage from "./features/submitPage/SubmitPage";
import SkillQuizPage from "./features/skillQuizPage/SkillQuizPage";
import TrainingQuizPage from "./features/trainingQuizPage/TrainingQuizPage";
import TeamQuizPage from "./features/teamQuizPage/TeamQuizPage";
import FailPage from "./features/failPage/FailPage";
import ConcentrationQuizPage from "./features/concentrationQuizPage/ConcentrationQuizPage";
import SucessSubmitPage from "./features/sucessSubmitPage/SucessSubmitPage";


function App() {
  return (
    <Routes>
      <Route element={<Frame />}>

        <Route path={"/"} element={<StartPage />} />
        <Route path={"skills"} element={<SecondPage />} />
        <Route path={"softskills"} element={<ThirdPage />} />
        <Route path={"benefits"} element={<BenefitsPage />} />
        <Route path={"submit"} element={<SubmitPage />} />
        <Route path={"skill-quiz"} element={<SkillQuizPage />} />
        <Route
          path={"skill-quiz-fail"}
          element={
            <FailPage
              text={
                "ich kann dir und deinen Team leider nicht viele Abschlüsse anbieten. Ich habe einige Kurse auf codecademy abgeschlossen. Ich besitze relevante Fähigkeiten in der Front- und Backend Entwicklung, schaue dir dazu gerne mein verlinktes Github Profile an!"
              }
              navigate={"/skill-quiz"}
            />
          }
        />
        <Route path={"training-quiz"} element={<TrainingQuizPage />} />
        <Route
          path={"training-quiz-fail"}
          element={
            <FailPage
              text={"ich suche jedoch eine Firma die mich gut einarbeitet."}
              navigate={"/training-quiz"}
            />
          }
        />
        <Route path={"team-quiz"} element={<TeamQuizPage />} />
        <Route path={"team-quiz-fail"} element={<FailPage text={'jedoch suche ich ein Unternehmen mit einem modernen Teamverständis.'} navigate={"/team-quiz"}/>}/>
        <Route
          path={"concentration-quiz"}
          element={<ConcentrationQuizPage />}
        />
        <Route
          path={"concentration-quiz-fail"}
          element={
            <FailPage
              text={
                "ich brauche jedoch manchmal am Tag meine Ruhe um Aufgaben schnell und sauber zu bearbeiten."
              }
              navigate={"/concentration-quiz"}
            />
          }
        />
        <Route path={"sucess"} element={<SucessSubmitPage />} />
      </Route>
    </Routes>
  );
}

export default App;
