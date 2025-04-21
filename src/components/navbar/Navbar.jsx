import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsmobileMenuOpen] = useState(false);

useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

const toggleMobileMenu = () => {
    setIsmobileMenuOpen(!isMobileMenuOpen);
};

return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
            <a href="#" className="logo">
               <span className="logo-text">Karen Byrd Portfolio</span>   
            </a>

            <div className="desktop-menu">
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
            </button>

            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-links">
                    <li><a href="#home" onClick={toggleMobileMenu}>Home</a></li>
                    <li><a href="#about" onClick={toggleMobileMenu}>About</a></li>
                    <li><a href="#projects" onClick={toggleMobileMenu}>Projects</a></li>
                    <li><a href="#skills" onClick={toggleMobileMenu}>Skills</a></li>
                    <li><a href="#contact" onClick={toggleMobileMenu}>Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
);  
};

export default Navbar;