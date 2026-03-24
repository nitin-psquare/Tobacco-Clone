import "./Card.css";
import cardimage from "../../assets/cardimage.png";

const Card = () => {
  return (
    <div className="middle-card-main">
      <div className="card-image">
        <img src={cardimage} alt="" />
      </div>
      <div className="card-title">Lorem, ipsum dolor.</div>
    </div>
  );
};

export default Card;
