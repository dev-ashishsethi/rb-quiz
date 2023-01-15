import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {  BrowserRouter as Router } from "react-router-dom";
import { Route, Routes,Outlet } from 'react-router';
import { Home } from './Pages/Home/Home';
import { Ques } from './Pages/Ques/Ques';
import { ScorePage } from './Pages/Score/Score';
import { SignIn } from './Pages/SignIn/SignIn';
import { SignUp } from './Pages/SignUp/SignUp';
import { QuizProvider } from './Context/quizContext';
import { LoginProvider } from './Context/loginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <LoginProvider>
        <QuizProvider>
        <Routes>
          <Route path={"/"} element={<App/>}>
            <Route index element={<Home/>}/>
            <Route path={"/quiz/:quizId"} element={<Ques/>}/>
            <Route path={"/Score"} element={<ScorePage/>}/>
            <Route path={"/SignIn"} element={<SignIn/>}/>
            <Route path={"/SignUp"} element={<SignUp/>}/>
          </Route>
        </Routes>
        </QuizProvider>
      </LoginProvider>
    </Router>
);
