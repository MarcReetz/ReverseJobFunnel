import React from 'react';
import { Routes,Route } from "react-router-dom";
import Frame from './features/frame/Frame';
import StartPage from './features/startPage/StartPage'
import SecondPage from './features/secondPage/SecondPage'
import ThirdPage from './features/thirdPage/ThirdPage'
import BenefitsPage from "./features/benefitsPage/BenefitsPage"
import SubmitPage from './features/submitPage/SubmitPage'
import SkillQuizPage from './features/skillQuizPage/SkillQuizPage';
import TrainingQuizPage from './features/trainingQuizPage/TrainingQuizPage';
import TeamQuizPage from './features/teamQuizPage/TeamQuizPage';
import ConcentrationQuizPage from './features/concentrationQuizPage/ConcentrationQuizPage';

function App() {
  return (
     <Routes>
      <Route path={'/'} element={<Frame/>}>
        <Route path={'start'} element={<StartPage/>}/>
        <Route path={'skills'} element={<SecondPage/>}/>
        <Route path={'softskills'} element={<ThirdPage/>}/>
        <Route path={'benefits'} element={<BenefitsPage/>}/>
        <Route path={'submit'} element={<SubmitPage/>}/>
        <Route path={'skill-quiz'} element={<SkillQuizPage/>}/>
        <Route path={'training-quiz'} element={<TrainingQuizPage/>}/>
        <Route path={'team-quiz'} element={<TeamQuizPage/>}/>
        <Route path={'concentration-quiz'} element={<ConcentrationQuizPage/>}/>
      </Route>
     </Routes>
  );
}

export default App;
