import "./Footer.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <a
            href="https://bluebyrddevelopment.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="Visit Blue Byrd Development"
          >
            <img
              src="/assets/images/blueByrdDevelopmentLogo.webp"
              loading="lazy"
              alt="Blue Byrd Developments Logo"
              className="footer-logo"
              width='75'
              height='75'
            />
          </a>
          <span className="footer-text">
              © {new Date().getFullYear()}, Developed by Blue Byrd Developments
          </span>
        </div>
        <div className="footer-right">
          <span className="footer-text">All Rights Reserved.</span>
          <a
            href="#home"
            className="footer-text footer-back-to-top"
            aria-label="Back to top"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
