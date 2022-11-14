import React from 'react';
import { Routes,Route } from "react-router-dom";
import Frame from './features/frame/Frame';
import StartPage from './features/startPage/StartPage'

function App() {
  return (
     <Routes>
      <Route path={'/'} element={<Frame/>}>
        <Route path={'start'} element={<StartPage/>}/>
      </Route>
     </Routes>
  );
}

export default App;
