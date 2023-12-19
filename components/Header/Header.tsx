// Importing necessary CSS and components
import "./Header.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image";

interface HeaderProps {
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
  missionRef: React.MutableRefObject<null>;
  featuresRef: React.MutableRefObject<null>;
  projectRef: React.MutableRefObject<null>;
  teamRef: React.MutableRefObject<null>;
  signupRef: React.MutableRefObject<null>;
  faqRef: React.MutableRefObject<null>;
}

const Header = ({
  activePage,
  setActivePage,
  missionRef,
  featuresRef,
  projectRef,
  teamRef,
  signupRef,
  faqRef,
}: HeaderProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <FaBars />
      </div>
      {/* Logo and application name section */}
      <div
        onClick={() => {
          setActivePage("");
        }}
        className="header-items logo-container"
      >
        <Image
          src="/assets/components/header.svg"
          width={200}
          height={200}
          alt="StudyCrew Logo"
          className="logo-1"
        />
        <Link to="/" className="logo-name">
          StudyCrew
        </Link>
      </div>

      {/* Conditionally render this div based on isMenuOpen state */}
      {isMenuOpen && (
        <div className={`mobile-navbar ${isMenuOpen ? "open" : ""}`}>
          <Navbar
            activePage={activePage}
            setActivePage={setActivePage}
            missionRef={missionRef}
            featuresRef={featuresRef}
            projectRef={projectRef}
            teamRef={teamRef}
            signupRef={signupRef}
            faqRef={faqRef}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      )}

      {/* This will always be rendered, but hidden on mobile */}
      <div className="desktop-navbar">
        <Navbar
          activePage={activePage}
          setActivePage={setActivePage}
          missionRef={missionRef}
          featuresRef={featuresRef}
          projectRef={projectRef}
          teamRef={teamRef}
          signupRef={signupRef}
          faqRef={faqRef}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>

      <div className="header-items waitlist-container">
        <Link className="waitlistLink" to="/">
          <Button
            onClick={() => {
              setActivePage("signup");
              const refContainerCurrent =
                signupRef.current as HTMLDivElement | null;
              if (refContainerCurrent) {
                const y =
                  refContainerCurrent.getBoundingClientRect().top +
                  window.scrollY +
                  -60;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            size="small"
          >
            Join Waitlist
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
