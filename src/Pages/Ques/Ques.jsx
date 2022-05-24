import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { Rules } from "../../Components/Rules/Rules.jsx";
import { useQuiz } from "../../Context/quizContext.js";
import { data } from "../../data.js";
import "./Ques.css";

export function Ques() {
  const { quizId } = useParams();
  const {
    scorePage,
    setScorePage,
    dbQues,
    questions,
    setQuestions,
    score,
    setScore,
  } = useQuiz();
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const navigate = useNavigate();

  //! fix pointer events none

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

  function timeout(ms) {
    return new Promise(res => setTimeout(res, ms));
  }

  async function answerHandler(e) {
    setSelectedAnswer(e.target.innerText)
    await timeout(900);
    setIndex((prevIndex) => {
            if (prevIndex < 2) {
              return prevIndex + 1;
            } else {
              navigate("/Score");
              return prevIndex+1
            }
          });
  }

  // function answerHandler(e) {
  //   setTimeout(() => {
  //     setIndex((prevIndex) => {
  //       if (prevIndex < 2) {
  //         return prevIndex + 1;
  //       } else {
  //         navigate("/Score");
  //         return prevIndex+1
  //       }
  //     });
  //   }, 1000);
    
  //   setSelectedAnswer(e.target.innerText);
  // }

  useEffect(() => {
    setQuestions(dbQues?.find((quiz) => quiz._id === quizId)?.questions[index]);
    if (index === 0) {
      setScore(0);
      setScorePage([
        { questionNumber: 0, question: "", yourAnswer: "", correctAnswer: "" },
      ]);
    }
    if (selectedAnswer.length > 0) {
      if (selectedAnswer === questions?.correct_answer) {
        setScorePage((scorePage) => [
          ...scorePage,
          {
            questionNumber: index === questions?.length - 1 ? index + 1 : index,
            question: questions?.question,
            yourAnswer: selectedAnswer,
            color: "green",
            correctAnswer: questions?.correct_answer,
          },
        ]);
        setScore((score) => score + 5);
      } else {
        setScorePage((scorePage) => [
          ...scorePage,
          {
            questionNumber: index === questions?.length - 1 ? index + 1 : index,
            question: questions?.question,
            yourAnswer: selectedAnswer,
            color:"red",
            correctAnswer: questions?.correct_answer,
          },
        ]);
        setScore(score);
      }
    }
    
    setSelectedAnswer("");
    
  }, [index, score]);

  return (
    <>
      {dbQues.length > 0 ? (
        <div className="question">
          <h1>
            Question {index + 1}: {questions?.question}
          </h1>
          <Rules />
          <h2>Score: {score}</h2>
          <div className="options">
            {questions?.incorrect_answers?.map((option) => (
              <button
                onClick={answerHandler}
                className={`option-answer ${getClassname(option)}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}
