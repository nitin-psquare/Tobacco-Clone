import { useRef, useState, useEffect } from "react";
import "./Navbar.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useGSAP(
    () => {
      if (isOpen) {
        gsap.to(".menu-panel", {
          xPercent: -50,
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          pointerEvents: "auto",
        });
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
        gsap.to(".menu-open", { y: -20, duration: 0.3, ease: "power2.inOut" });
        gsap.to(".menu-close", { y: -20, duration: 0.3, ease: "power2.inOut" });
      } else {
        gsap.to(".menu-panel", {
          y: 40,
          opacity: 0,
          duration: 0.4,
          ease: "power3.in",
          pointerEvents: "none",
        });
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
        gsap.to(".menu-open", { y: 0, duration: 0.3, ease: "power2.inOut" });
        gsap.to(".menu-close", { y: 0, duration: 0.3, ease: "power2.inOut" });
      }

      if (isHovered) {
        gsap.to(".pill-text-top, .circle-icon-top", {
          y: -48,
          duration: 0.16,
          ease: "power2.inOut",
        });
        gsap.to(".pill-text-bottom, .circle-icon-bottom", {
          y: -48,
          duration: 0.16,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(".pill-text-top, .circle-icon-top", {
          y: 0,
          duration: 0.16,
          ease: "power2.inOut",
        });
        gsap.to(".pill-text-bottom, .circle-icon-bottom", {
          y: 0,
          duration: 0.16,
          ease: "power2.inOut",
        });
      }
    },
    { scope: containerRef, dependencies: [isOpen, isHovered] },
  );

  return (
    <div ref={containerRef}>
      <nav className="navbar">
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
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">TOBACCO</span>
          </Link>
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

      <div
        className="top-right"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className="pill">
          <span className="pill-text-top">ZAKELIJK VERHUUR</span>
          <span className="pill-text-bottom">ZAKELIJK VERHUUR</span>
        </button>
        <button className="circle">
          <span className="circle-icon-top">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="circle-icon-bottom">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>

      <div className="menu-panel">
        <ul className="menu-panel-list">
          <li className="menu-panel-item">
            <span className="menu-item-num">01</span>
            <span className="menu-item-text-wrap">
              <span className="menu-item-text">WHAT'S ON - TICKETS</span>
              <span className="menu-item-text">WHAT'S ON - TICKETS</span>
            </span>
          </li>
          <li className="menu-panel-item">
            <Link
              to="/venue-rental"
              style={{
                textDecoration: "none",
              }}
            >
              <span className="menu-item-num">02</span>
              <span className="menu-item-text-wrap">
                <span className="menu-item-text">BOOK THIS VENUE</span>
                <span className="menu-item-text">BOOK THIS VENUE</span>
              </span>
            </Link>
          </li>
          <li className="menu-panel-item">
            <span className="menu-item-num">03</span>
            <span className="menu-item-text-wrap">
              <span className="menu-item-text">GALLERY</span>
              <span className="menu-item-text">GALLERY</span>
            </span>
          </li>
          <li className="menu-panel-item">
            <span className="menu-item-num">04</span>
            <span className="menu-item-text-wrap">
              <span className="menu-item-text">ABOUT US</span>
              <span className="menu-item-text">ABOUT US</span>
            </span>
          </li>
          {/* ddd */}
          <li className="menu-panel-item">
            <span className="menu-item-num">05</span>
            <span className="menu-item-text-wrap">
              <span className="menu-item-text">CONTACT</span>
              <span className="menu-item-text">CONTACT</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
