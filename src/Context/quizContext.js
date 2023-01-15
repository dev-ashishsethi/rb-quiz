import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [dbQues, setDbQues] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [scorePage, setScorePage] = useState([
    {
      questionNumber: 0,
      question: "",
      yourAnswer: "",
      color:"",
      correctAnswer: "",
    },
  ]);

  useEffect(() => {
    (async () => {
      try {
        const allQuestions = await axios.get('https://Quiz.aashishsethii01.repl.co');
        console.log(allQuestions?.data.quizDB);
        setDbQues(allQuestions?.data.quizDB);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <QuizContext.Provider
      value={{
        scorePage,
        setScorePage,
        dbQues,
        setDbQues,
        questions,
        setQuestions,
        score,
        setScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuiz = () => useContext(QuizContext);
