import React, { useRef } from "react";
import "./upper.css";
import gsap from "gsap";

const Upper = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent) => {
    gsap.set([imageRef.current, textRef.current], {
      WebkitMaskImage: `radial-gradient(circle 0px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
      maskImage: `radial-gradient(circle 0px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
    });

    gsap.to([imageRef.current, textRef.current], {
      WebkitMaskImage: `radial-gradient(circle 300px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
      maskImage: `radial-gradient(circle 300px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    gsap.to([imageRef.current, textRef.current], {
      WebkitMaskImage: `radial-gradient(circle 250px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
      maskImage: `radial-gradient(circle 250px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
      duration: 0.8,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    gsap.to([imageRef.current, textRef.current], {
      WebkitMaskImage: `radial-gradient(circle 0px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
      maskImage: `radial-gradient(circle 0px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  return (
    <div
      className="upper"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imageRef}
        src="https://images.unsplash.com/photo-1773402269635-3484c42a7860?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <h1 className="text">
        TOBACCO <br /> THEATRE
      </h1>
      <div className="text-mask-container" ref={textRef}>
        <h1 className="text-filled">
          TOBACCO <br /> THEATRE
        </h1>
      </div>
    </div>
  );
};

export default Upper;
