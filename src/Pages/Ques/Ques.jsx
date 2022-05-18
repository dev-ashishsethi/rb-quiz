import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useQuiz } from "../../Context/quizContext.js";
import { data } from "../../data.js";
import "./Ques.css";

export function Ques() {
  const { quizId } = useParams();
  const { questions, setQuestions } = useQuiz();
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const navigate = useNavigate();
  const db = data;

  function getClassname(option) {
    if (selectedAnswer === "") {
      return "";
    } else {
      if (
        option === selectedAnswer &&
        selectedAnswer === questions?.correct_answer
      ) {
        return "correct";
      }

      if (option === selectedAnswer) {
        return "wrong";
      }

      if (
        selectedAnswer !== "" &&
        option !== selectedAnswer &&
        option === questions?.correct_answer
      ) {
        return "correct";
      }
    }
  }

  function answerHandler(e) {
    setTimeout(() => {
      setSelectedAnswer("");
      setIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : navigate("/")));
    }, 1000);
    setSelectedAnswer(e.target.innerText);
  }

  useEffect(() => {
    setQuestions(db.find((quiz) => quiz._id === quizId).questions[index]);
    shuffleArray(questions?.incorrect_answers);
  }, [index]);

  function shuffleArray(array) {
    for (let i = array?.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div className="question">
      <h1>
        Question {index + 1}: {questions?.question}
      </h1>
      <ul className="options">
        {questions?.incorrect_answers?.map((option) => (
          <li
            onClick={answerHandler}
            className={`option-answer ${getClassname(option)}`}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
