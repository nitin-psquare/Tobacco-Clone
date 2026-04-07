import { useRef } from "react";
import MIddle from "./Middle/Middle";
import Curtain from "../../common/curtain";
import Upper from "./upper/upper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const VenueRental = () => {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(imageRef.current, {
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: wrapperRef },
  );

  return (
    <div>
      <Curtain key="venue" />
      <div className="venue-rental-upper">
        <Upper />
      </div>

      <div
        ref={wrapperRef}
        className="venue-hero-image-wrapper"
        style={{
          width: "100%",
          height: "1200px",
          margin: 0,
          padding: 0,
          overflow: "hidden",
        }}
      >
        <img
          ref={imageRef}
          src="https://tobacco.nl/wp-content/uploads/2024/10/gallery_img_11.jpg"
          alt="Tobacco Venue Exterior"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            scale: 0.99,
          }}
        />
      </div>

      <div className="venue-rental-middle">
        <MIddle />
      </div>
      <div className="venue-rental-lower"></div>
    </div>
  );
};

export default VenueRental;
