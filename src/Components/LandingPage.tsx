import Upper from "./upper/upper";
import Curtain from "../common/curtain";
import MIddle from "./MIddle/MIddle";
import FaceIcon from "./ui/FaceIcon";

const LandingPage = () => {
  return (
    <div>
      <Curtain />
      <div className="upper">
        <Upper />
      </div>
      <div className="midle">
        <MIddle />
      </div>
      <div className="lower">
              <FaceIcon />

      </div>
    </div>
  );
};

export default LandingPage;
