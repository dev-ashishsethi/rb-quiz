import { createContext, useContext, useEffect, useState } from "react";
import {
  firebaseRealtimeDB,
  realTimeDBRef,
  get,
  child,
} from "../firebase.config";
import { data } from "../../data.js";

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
      
      const db = data;
      const dbRef = realTimeDBRef(firebaseRealtimeDB);
      try {
        const allQuestions = await get(child(dbRef, "quizDB"));

        // setDbQues(allQuestions.val());
        setDbQues(db);
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
