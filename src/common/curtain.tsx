import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import "./curtain.css";
import { createPortal } from "react-dom";

export default function Curtain() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      console.log("Curtain mounted! Starting animation...");

      const tl = gsap.timeline({
        onComplete: () => console.log("Curtain animation completed."),
      });

      // Force scaleX 1 initially
      gsap.set(".curtain-panel", { scaleX: 1 });

      tl.to(
        ".left-panel",
        {
          scaleX: 0,
          duration: 0.5,
          ease: "power4.inOut",
          delay: 0.3,
          stagger: { amount: 0.3, from: "end" },
        },
        0,
      );

      tl.to(
        ".right-panel",
        {
          scaleX: 0,
          duration: 0.5,
          ease: "power4.inOut",
          delay: 0.3,
          stagger: { amount: 0.3, from: "end" },
        },
        0,
      );
    },
    { scope: container },
  );

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

  return createPortal(
    <div ref={container} className="curtain-container">
      {curtainRows}
    </div>,
    document.body,
  );
}
