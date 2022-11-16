import React from 'react';
import { Routes,Route } from "react-router-dom";
import Frame from './features/frame/Frame';
import StartPage from './features/startPage/StartPage'
import SecondPage from './features/secondPage/SecondPage'
import ThirdPage from './features/thirdPage/ThirdPage'
import BenefitsPage from "./features/benefitsPage/BenefitsPage"
import SubmitPage from './features/submitPage/SubmitPage'
import SKillQuizPage from './features/skillQuizPage/SkillQuizPage';

function App() {
  return (
     <Routes>
      <Route path={'/'} element={<Frame/>}>
        <Route path={'start'} element={<StartPage/>}/>
        <Route path={'skills'} element={<SecondPage/>}/>
        <Route path={'softskills'} element={<ThirdPage/>}/>
        <Route path={'benefits'} element={<BenefitsPage/>}/>
        <Route path={'submit'} element={<SubmitPage/>}/>
        <Route path={'skillQuiz'} element={<SKillQuizPage/>}/>
      </Route>
     </Routes>
  );
}

export default App;
