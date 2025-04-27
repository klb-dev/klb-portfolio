import './Footer.css'; 
import logo from '../../assets/images/blueByrdDevelopmentLogo.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="Blue Byrd Developments Logo" className="footer-logo" />
          <span className="footer-text">© 2025, Developed by Blue Byrd Developments</span>
        </div>
        <div className="footer-right">
          <span className="footer-text">All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
