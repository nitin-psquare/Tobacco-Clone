import Upper from "./upper/upper";
import Curtain from "../../common/curtain";
import MIddle from "./MIddle/MIddle";
import Middle2 from "./Middle2/Middle2";
import FaceIcon from "./ui/FaceIcon";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Curtain />
      <div className="upper">
        <Upper />
      </div>
      <div className="midle">
        <MIddle />
        <Middle2 />
      </div>
      <div className="lower"></div>
      <div className="lower">
        <FaceIcon />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
