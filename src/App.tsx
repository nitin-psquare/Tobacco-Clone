import { Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import LandingPage from "./Components/Home/LandingPage";
import "./App.css";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import VenueRental from "./Components/VenueRental/VenueRental";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current as HTMLElement,
      smooth: true,
    } as any);

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 3,
      wheelMultiplier: 0.3,
    });

    lenis.on("scroll", () => {
      // console.log(e);
    });
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      <ReactLenis root />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/venue-rental" element={<VenueRental />} />
      </Routes>
    </div>
  );
};

export default App;
