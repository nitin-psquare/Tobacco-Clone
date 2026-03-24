import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import "./curtain.css";

export default function Curtain() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Left panels
      gsap.to(".left-panel", {
        scaleX: 0,
        duration: 0.5,
        ease: "power4.inOut",
        delay: 0.3,
        stagger: { amount: 0.3, from: "end" },
      });

      // Right panels
      gsap.to(".right-panel", {
        scaleX: 0,
        duration: 0.5,
        ease: "power4.inOut",
        delay: 0.3,
        stagger: { amount: 0.3, from: "end" },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const curtainRows = [];
  for (let i = 0; i < 6; i++) {
    curtainRows.push(
      <div key={i} className="curtain-row">
        <div
          className="curtain-panel left-panel"
          style={{ backgroundColor: "#640139ff" }}
        ></div>
        <div
          className="curtain-panel right-panel"
          style={{ backgroundColor: "#640139ff" }}
        ></div>
      </div>,
    );
  }

  return (
    <div ref={container} className="curtain-container">
      {curtainRows}
    </div>
  );
}
