import { Link } from "react-router-dom";
import randomImage from "../../assets/images/random.jpg";
import "./Card.css";
export function Card({data}) {
  return (
    <div className="quiz-card">
      <img src={data.image} alt="" className="card-img" />
      <h3 className="card-title">{data.category}</h3>
      <p className="card-txt">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nostrum
        quia doloribus omnis dolor suscipit id corrupti, quaerat nam dolorem?
      </p>
      <Link to={`quiz/${data._id}`}>
        <button className="btn btn-primary w-100">Play Quiz</button>
      </Link>
    </div>
  );
}
