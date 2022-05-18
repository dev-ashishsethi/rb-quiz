import { data } from "../../data.js";
import { Card } from "../../Components/Card/Card";
import "./Home.css";

export function Home() {
  const db = data;
  return (
    <section className="home-page">
      <h1 className="home-title">Choose your quiz category</h1>
      <div className="card-section">
        {db.map((quiz) => (
          <Card data={quiz} key={quiz._id}/>
        ))}
      </div>
    </section>
  );
}
