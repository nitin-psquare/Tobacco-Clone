import "./MIddle.css";
import Card from "./Card";
import img14 from "../../assets/img14.webp"
import img9 from "../../assets/img9.png"
import img15 from "../../assets/img15.png"
import img11 from "../../assets/img11.jpg"
const MIddle = () => {
  return (
    <div className="middle-main">
      <div className="middle-main-header">
        <div className="middle-main-heading">
          <span className="italics">On stage at </span>

          <span className="middle-main-font">TOBACCO</span>
        </div>
        <div className="middle-main-button">AGENDA</div>
      </div>

      <div className="middle-main-cards">
        <Card src = {img14}/>
        <Card src = {img9}/>
        <Card src = {img15}/>
        <Card src = {img11}/>
      </div>
    </div>
  );
};

export default MIddle;
