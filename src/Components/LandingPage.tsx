import MIddle from "./MIddle/MIddle";
import Upper from "./upper/Upper";

const LandingPage = () => {
  return (
    <div>
      <div className="upper">
        <Upper />
      </div>
      <div className="midle">
        <MIddle />
      </div>
      <div className="lower"></div>
    </div>
  );
};

export default LandingPage;
