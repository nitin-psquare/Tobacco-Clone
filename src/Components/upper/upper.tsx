import React, { useRef, useState } from "react";
import "./upper.css";
import gsap from "gsap";

const Upper = () => {
  const imageRef = useRef<HTMLVideoElement>(null);
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
      duration: 1.4,
      delay: 1.5,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (show) return;
    gsap.to([imageRef.current, textRef.current], {
      WebkitMaskImage: `radial-gradient(circle 250px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
      maskImage: `radial-gradient(circle 250px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
      duration: 2.7,
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
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    } else {
      gsap.set([outlintTextRef.current, textRef.current], {
        opacity: 1,
        y: 0,
      });

      gsap.to([imageRef.current, textRef.current], {
        WebkitMaskImage: `radial-gradient(circle 200px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
        maskImage: `radial-gradient(circle 200px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
        duration: 2,
        delay: 0.1,
        ease: "power2.out",
        overwrite: "auto",
      });

      gsap.fromTo(
        ".tobacco-char, .tobacco-filled-char",
        { opacity: 0, y: -200 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: { amount: 0.5, from: "end" },
        },
      );

      gsap.fromTo(
        ".theatre-char, .theatre-filled-char",
        { opacity: 0, y: -200 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: { amount: 0.5, from: "start" },
        },
      );
    }
  };

  const splitText = (word: string, className: string) => {
    return word.split("").map((char, index) => (
      <span key={index} className={`inline-block ${className}`}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div
      className="upper"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <video
        ref={imageRef}
        src="https://vz-ea87cf19-19f.b-cdn.net/e69b62f9-4e0c-4544-9b97-a709779773c6/play_720p.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="video"
      />
      <h1 className="text" ref={outlintTextRef}>
        {splitText("TOBACCO", "tobacco-char")} <br />
        {splitText("THEATRE", "theatre-char")}
      </h1>

      <div className="text-mask-container" ref={textRef}>
        <h1 className="text-filled">
          {splitText("TOBACCO", "tobacco-filled-char")} <br />
          {splitText("THEATRE", "theatre-filled-char")}
        </h1>
      </div>
    </div>
  );
};

export default Upper;
