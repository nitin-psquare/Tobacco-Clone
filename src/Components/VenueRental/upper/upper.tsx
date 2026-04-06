import "./upper.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Upper = () => {
  useGSAP(() => {
    gsap.from([".venue-hero-label", ".venue-hero-btn"], {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      delay: 0.8,
      ease: "power4.out",
    });

    gsap.from(".word-inner", {
      y: "100%",
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.08,
      delay: 0.3,
    });
  });

  const splitWords = (lines: string[]) =>
    lines.map((line, lineIndex) => (
      <span key={lineIndex} style={{ display: "block" }}>
        {line.split(" ").map((word, i) => (
          <span
            key={i}
            className="word"
            style={{ display: "inline-block", overflow: "hidden" }}
          >
            <span className="word-inner" style={{ display: "inline-block" }}>
              {word}&nbsp;
            </span>
          </span>
        ))}
      </span>
    ));

  return (
    <section className="venue-hero">
      <span className="venue-hero-label">Rent Location</span>
      <h1 className="venue-hero-heading">
        {splitWords(["Organize Unique Events In The", "Heart Of Amsterdam"])}
      </h1>
      <button className="venue-hero-btn">
        <span className="btn-inner">
          <span className="btn-text">View Our Spaces</span>
          <span className="btn-text">View Our Spaces</span>
        </span>
      </button>
    </section>
  );
};

export default Upper;
