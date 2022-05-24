import { useState, useRef, useLayoutEffect} from "react";
import "./Rules.css";

export function Rules() {

  const [display, setDisplay] = useState("");
  const dialogModalref  = useRef(null);
  function timeout(ms) {
    return new Promise(res => setTimeout(res, ms))
  }
  
  async function closeHandler() {
    setDisplay("out-of-view");
    await timeout(350);
    dialogModalref.current.close();
  }

  useLayoutEffect(() => {
    dialogModalref.current.showModal();
  }, [])

  return (
    <dialog ref={dialogModalref} className={`rules-modal ${display}`}>
      <div className="close-btn-container">
        <span className="close-btn" onClick={closeHandler}>
          x
        </span>
      </div>
      <h2 className="rules-title">Quiz Rules </h2>
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
      <div className="modal-btn-container">
        <button className="btn btn-primary" onClick={closeHandler}>Start Quiz</button>
      </div>
    </dialog>
  );
}
