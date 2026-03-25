import { useRef, useState } from "react";
import "./Navbar.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (isOpen) {
        gsap.to(".top", {
          y: 0,
          rotation: 45,
          duration: 0.3,
          ease: "power2.inOut",
        });
        gsap.to(".mid", {
          opacity: 0,
          scaleX: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
        gsap.to(".bottom", {
          y: 0,
          rotation: -45,
          duration: 0.3,
          ease: "power2.inOut",
        });

        gsap.to(".menu-open", {
          y: -20,
          duration: 0.3,
          ease: "power2.inOut",
        });
        gsap.to(".menu-close", {
          y: -20,
          duration: 0.3,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(".top", {
          y: -5,
          rotation: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
        gsap.to(".mid", {
          opacity: 1,
          scaleX: 1,
          duration: 0.3,
          ease: "power2.inOut",
        });
        gsap.to(".bottom", {
          y: 5,
          rotation: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });

        gsap.to(".menu-open", {
          y: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
        gsap.to(".menu-close", {
          y: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    },
    { scope: containerRef, dependencies: [isOpen] },
  );

  return (
    <nav className="navbar" ref={containerRef}>
      <div className="nav-left">
        <div className="hamburger-box" onClick={() => setIsOpen(!isOpen)}>
          <div className="top line"></div>
          <div className="mid line"></div>
          <div className="bottom line"></div>
        </div>
        <span className="menu-txt-wrapper">
          <span className="menu-txt menu-open">MENU</span>
          <span className="menu-txt menu-close">CLOSE</span>
        </span>
      </div>

      <div className="nav-center">
        <span className="logo">TOBACCO</span>
      </div>

      <div className="nav-right">
        <span className="lang-text">NL</span>
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
            width="1em"
            height="1em"
          >
            <path
              fill="currentColor"
              d="M9 1.69A7.31 7.31 0 1 0 9 16.3 7.31 7.31 0 0 0 9 1.7ZM15.19 9c0 .57-.08 1.14-.24 1.69h-2.7c.17-1.12.17-2.26 0-3.38h2.7c.16.55.24 1.12.24 1.69Zm-8.02 2.81h3.66A8.1 8.1 0 0 1 9 14.98a8.1 8.1 0 0 1-1.83-3.17ZM6.9 10.7a9.9 9.9 0 0 1 0-3.38h4.2a9.9 9.9 0 0 1 0 3.38H6.9ZM2.8 9c0-.57.08-1.14.24-1.69h2.7a11.07 11.07 0 0 0 0 3.38h-2.7A6.16 6.16 0 0 1 2.8 9Zm8.02-2.81H7.17A8.1 8.1 0 0 1 9 3.02a8.1 8.1 0 0 1 1.83 3.17Zm3.68 0H12a9.51 9.51 0 0 0-1.57-3.2 6.2 6.2 0 0 1 4.07 3.2Zm-6.95-3.2A9.51 9.51 0 0 0 6 6.18H3.49a6.2 6.2 0 0 1 4.07-3.2ZM3.5 11.8h2.5a9.51 9.51 0 0 0 1.57 3.2 6.2 6.2 0 0 1-4.07-3.2Zm6.95 3.2a9.52 9.52 0 0 0 1.56-3.2h2.51a6.2 6.2 0 0 1-4.07 3.2Z"
            ></path>
          </svg>
        </span>
      </div>
    </nav>
  );
}
