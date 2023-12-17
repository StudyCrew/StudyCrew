import React from "react";
import {
  FaFacebookF,
  FaLinkedin,
  FaGithubSquare,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import "./Footer.css";
import Image from "next/image";

interface FooterProps {
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
  missionRef: React.MutableRefObject<null>;
  featuresRef: React.MutableRefObject<null>;
  projectRef: React.MutableRefObject<null>;
  teamRef: React.MutableRefObject<null>;
  signupRef: React.MutableRefObject<null>;
  faqRef: React.MutableRefObject<null>;
}

const Footer = ({
  activePage,
  setActivePage,
  missionRef,
  featuresRef,
  projectRef,
  teamRef,
  signupRef,
  faqRef,
}: FooterProps): JSX.Element => {
  // Helper function to determine if a link is active
  const isActive = (name: string): string =>
    activePage === name ? "activeNavLink" : "";
  // Scrolls smoothly to the provided reference
  const scrollToRef = (ref: React.MutableRefObject<null>): void => {
    const refContainerCurrent = ref.current as HTMLDivElement | null;
    if (refContainerCurrent) {
      const y =
        refContainerCurrent.getBoundingClientRect().top +
        window.scrollY +
        -60;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  // Handles the navigation link click based on the section's name
  const handleNavLinkClick = (name: string): void => {
    let ref;
    switch (name) {
      case "mission":
        ref = missionRef;
        break;
      case "features":
        ref = featuresRef;
        break;
      case "project":
        ref = projectRef;
        break;
      case "team":
        ref = teamRef;
        break;
      case "signup":
        ref = signupRef;
        break;
      case "faq":
        ref = faqRef;
        break;
      default:
        return;
    }
    scrollToRef(ref);
  };

  return (
    <div className="footer">
      {/* Footer logo */}
      <div className="footer-logo">
        {/* SVG Logo */}
        <Image
          src="/assets/components/footer.svg"
          alt="StudyCrew Logo"
          width={75}
          height={75}
          className="footer-logo-1"
        />
        <h3 className="footer-title">StudyCrew</h3>
      </div>

      {/* Footer menu */}
      <div className="footer-menu">
        <ul>
          <li
            className={isActive("mission")}
            onClick={() => {
              handleNavLinkClick("mission");
              setActivePage("mission");
            }}
          >
            Mission
          </li>
          <li
            className={isActive("features")}
            onClick={() => {
              handleNavLinkClick("features");
              setActivePage("features");
            }}
          >
            Features
          </li>
          <li
            className={isActive("project")}
            onClick={() => {
              handleNavLinkClick("project");
              setActivePage("project");
            }}
          >
            Project
          </li>
          <li
            className={isActive("signup")}
            onClick={() => {
              handleNavLinkClick("signup");
              setActivePage("signup");
            }}
          >
            Sign Up
          </li>
          <li
            className={isActive("team")}
            onClick={() => {
              handleNavLinkClick("team");
              setActivePage("team");
            }}
          >
            Team
          </li>
          <li
            className={isActive("faq")}
            onClick={() => {
              handleNavLinkClick("faq");
              setActivePage("faq");
            }}
          >
            FAQs
          </li>
        </ul>
        <hr />
      </div>

      {/* Social media icons */}
      <div className="social-media-icons">
        <ul>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaGithubSquare />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </div>

      {/* Join Discord */}
      <div className="footer-join-discord">
        <h3 className="footer-label">StudyCrew</h3>
        <button>
          <FaDiscord
            size={23}
            color="white"
            className="discord-logo"
          />
          <label>Join our community</label>
        </button>
      </div>
    </div>
  );
};

export default Footer;
