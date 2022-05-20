import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useQuiz } from "../../Context/quizContext";
import "./Score.css";
export function ScorePage() {
  const { score, scorePage } = useQuiz();

  return (
    <>
      <h1 className="scorecard">Your score : {score}</h1>

      {scorePage.map((scoreObj) => (
        <>
          {scoreObj.questionNumber > 0 && (
            <div className="score-question">
              {scoreObj.question.length > 0 && (
                <h1 className="score-ques">
                  Question {scoreObj.questionNumber} : {scoreObj.question}
                </h1>
              )}

              {scoreObj.yourAnswer.length > 0 && (
                <h1 className="score-answer">
                  Your Answer :{" "}
                  <span className={`score-span ${scoreObj.color}`}>
                    {" "}
                    {scoreObj.yourAnswer}
                  </span>
                </h1>
              )}
              {scoreObj.correctAnswer.length > 0 && (
                <h1 className="score-answer">
                  Correct Answer :{" "}
                  <span className="score-span green">
                    {scoreObj.correctAnswer}
                  </span>
                </h1>
              )}
            </div>
          )}
        </>
      ))}
    </>
  );
}
