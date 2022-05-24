import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {  BrowserRouter as Router } from "react-router-dom";
import { QuizProvider } from './Context/quizContext';
import { LoginProvider } from './Context/loginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <LoginProvider>
        <QuizProvider>
          <App />
        </QuizProvider>
      </LoginProvider>
    </Router>
);
