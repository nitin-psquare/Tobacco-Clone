import { Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import LandingPage from "./Components/LandingPage";
import "./App.css";
import { useEffect } from "react";
import Lenis from "lenis";
const App = () => {
  // const lenis = useLenis((lenis) => {
  //   // called every scroll
  //   console.log(lenis)
  // })

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 3,
    });

    lenis.on("scroll", (e) => {
      // console.log(e);
    });
  }, []);

  return (
    <div>
      <ReactLenis root />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export default App;
