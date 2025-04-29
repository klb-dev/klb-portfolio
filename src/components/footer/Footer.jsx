import './Footer.min.css'; 


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src="/assets/images/blueByrdDevelopmentLogo.png" loading="lazy" alt="Blue Byrd Developments Logo" className="footer-logo" />
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
