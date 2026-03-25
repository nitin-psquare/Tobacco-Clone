import React, { useRef, useState } from "react";
import "./upper.css";
import gsap from "gsap";

const Upper = () => {
  const imageRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const outlintTextRef = useRef<HTMLHeadingElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const spotlightRef = useRef({ x: 0, y: 0, radius: 0 });
  const [show, setShow] = useState(false);

  const updateSize = () => {
    const { x, y, radius } = spotlightRef.current;
    const mask = `radial-gradient(circle ${radius}px at ${x}px ${y}px, black 40%, transparent 100%)`;
    gsap.set([imageRef.current, textRef.current], {
      WebkitMaskImage: mask,
      maskImage: mask,
    });
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (show) return;

    gsap.set([imageRef.current, textRef.current], {
      WebkitMaskImage: `radial-gradient(circle 0px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
      maskImage: `radial-gradient(circle 0px at ${e.clientX}px ${e.clientY}px, black 40%, transparent 100%)`,
    });

    spotlightRef.current.x = e.clientX;
    spotlightRef.current.y = e.clientY;

    gsap.to(spotlightRef.current, {
      radius: 250,
      duration: 1.4,
      ease: "power3.out",
      overwrite: "auto",
      onUpdate: updateSize,
    });

    gsap.set(cursorRef.current, {
      xPercent: -50,
      yPercent: -50,
      x: e.clientX,
      y: e.clientY,
      opacity: 1,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (show) return;

    gsap.to(spotlightRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 3.4,
      ease: "power3.out",
      overwrite: "auto",
      onUpdate: updateSize,
    });

    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 3.4,
      ease: "power3.out",
      overwrite: "auto",
    });

    const isRadiusAnimating = gsap
      .getTweensOf(spotlightRef.current)
      .some((t) => t.vars.radius);
    if (!isRadiusAnimating) {
      gsap.to(spotlightRef.current, {
        radius: 450,
        duration: 3,
        ease: "power3.out",
        onUpdate: updateSize,
        onComplete: () => {
          gsap.to(spotlightRef.current, {
            radius: 250,
            duration: 3,
            ease: "power3.inOut",
            onUpdate: updateSize,
          });
        },
      });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (show) return;

    gsap.to(spotlightRef.current, {
      radius: 0,
      duration: 0.4,
      ease: "power2.inOut",
      overwrite: "auto",
      onUpdate: updateSize,
    });

    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0,
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

      gsap.to(spotlightRef.current, {
        radius: 3000,
        duration: 0.8,
        ease: "expo.inOut",
        overwrite: "auto",
        onUpdate: updateSize,
      });

      gsap.to(cursorRef.current, { opacity: 0, duration: 0.3 });
    } else {
      gsap.set([outlintTextRef.current, textRef.current], {
        opacity: 1,
        y: 0,
      });

      gsap.to(spotlightRef.current, {
        radius: 250,
        x: e.clientX,
        y: e.clientY,
        duration: 2,
        ease: "power2.out",
        overwrite: "auto",
        onUpdate: updateSize,
      });

      gsap.to(cursorRef.current, { opacity: 1, duration: 0.3, delay: 0.1 });

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
      <div className="cursor-dot" ref={cursorRef}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 19H5v-5m9-9h5v5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>

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
        {splitText("THEATER", "theatre-char")}
      </h1>

      <div className="text-mask-container" ref={textRef}>
        <h1 className="text-filled">
          {splitText("TOBACCO", "tobacco-filled-char")} <br />
          {splitText("THEATER", "theatre-filled-char")}
        </h1>
      </div>
    </div>
  );
};

export default Upper;
