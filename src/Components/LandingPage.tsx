import Upper from "./upper/upper";
import Curtain from "../common/curtain";
import MIddle from "./MIddle/MIddle";
import Middle2 from "./Middle2/MIddle2";
const LandingPage = () => {
  return (
    <div>
      <Curtain />
      <div className="upper">
        <Upper />
      </div>
      <div className="midle">
        <MIddle />
        <Middle2 />
        
      </div>  
      <div className="lower">


      </div>
    </div>
  );
};

export default LandingPage;
