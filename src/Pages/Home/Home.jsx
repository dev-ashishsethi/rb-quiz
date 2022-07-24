import { data } from "../../data.js";
import { Card } from "../../Components/Card/Card";
import "./Home.css";
import { useQuiz } from "../../Context/quizContext.js";

export function Home() {
  const db = data;
  const { dbQues } = useQuiz();
  return (
    <section className="home-page">
      <h1 className="home-title">Choose your quiz category</h1>
      <div className="card-section">
        {dbQues.map((quiz) => (
          <Card data={quiz} key={quiz._id} />
        ))}
      </div>
    </section>
  );
}
