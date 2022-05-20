import { useState } from "react";
import "./Rules.css";

export function Rules() {
  const [display, setDisplay] = useState("");
  function closeHandler() {
    setDisplay("display-none");
  }
  return (
    <div className={`rules-modal ${display}`}>
      <h2 className="rules-title">Quiz Rules </h2>
      <span className="close-btn" onClick={closeHandler}>
        x
      </span>
      <ol className="rules">
        <li className="rules-list">
          For each correct answer you will be awarded with 5 points.
        </li>
        <li className="rules-list">
          You can choose only 1 answer amongs the given choices.
        </li>
        <li className="rules-list">You cannot skip the question.</li>
        <li className="rules-list">
          After finishing the quiz total score will be shown.
        </li>
      </ol>
      <button className="btn btn-primary" onClick={closeHandler}>Start Quiz</button>
    </div>
  );
}
