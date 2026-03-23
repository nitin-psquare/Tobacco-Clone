import React, { useRef, useState } from "react";
import "./upper.css";
import gsap from "gsap";

const Upper = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const outlintTextRef = useRef<HTMLHeadingElement>(null);

  const [show, setShow] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (show) return;
    gsap.set([imageRef.current, textRef.current], {
      WebkitMaskImage: `radial-gradient(circle 0px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
      maskImage: `radial-gradient(circle 0px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
    });

    gsap.to([imageRef.current, textRef.current], {
      WebkitMaskImage: `radial-gradient(circle 250px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
      maskImage: `radial-gradient(circle 250px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (show) return;
    gsap.to([imageRef.current, textRef.current], {
      WebkitMaskImage: `radial-gradient(circle 250px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
      maskImage: `radial-gradient(circle 250px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
      duration: 0.8,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (show) return;
    gsap.to([imageRef.current, textRef.current], {
      WebkitMaskImage: `radial-gradient(circle 0px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
      maskImage: `radial-gradient(circle 0px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
      duration: 0,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleClick = (e: React.MouseEvent) => {
    const reveal = !show;
    setShow(reveal);

    if (reveal) {
      gsap.to([outlintTextRef.current, textRef.current], {
        opacity: 0,
        y: -150,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });

      gsap.to([imageRef.current, textRef.current], {
        WebkitMaskImage: `radial-gradient(circle 3000px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
        maskImage: `radial-gradient(circle 3000px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
        duration: 2,
        ease: "power2.out",
        overwrite: "auto",
      });
    } else {
      gsap.to([outlintTextRef.current, textRef.current], {
        opacity: 1,
        y: 0,
        duration: 2,
        delay: 1,
        ease: "power3.out",
        overwrite: "auto",
      });

      gsap.to([imageRef.current, textRef.current], {
        WebkitMaskImage: `radial-gradient(circle 200px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
        maskImage: `radial-gradient(circle 200px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
        duration: 3,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  return (
    <div
      className="upper"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <img
        ref={imageRef}
        src="https://images.unsplash.com/photo-1773402269635-3484c42a7860?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <h1 className="text" ref={outlintTextRef}>
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
