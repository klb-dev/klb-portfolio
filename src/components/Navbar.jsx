import { useState, useEffect } from 'react';

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

            {/* style */}
            <style jsx>{`

            .navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            padding: 1rem 0;
            transition: all 0.3s ease;
            background-color: transparent;
            }

            .navbar.scrolled {
            background-color: rgba(18, 18, 18, 0.95);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
            padding: 0.8rem 0;
            }

            .navbar-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            }

            .logo {
            display: flex;
            align-items: center;
            }

            .logo-text {
            font-size: 1.8rem;
            font-weight: 700;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            }

            .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
            }

            .nav-links a {
            color: var(--text);
            font-weight: 500;
            position: relative;
            }

            .nav-links a:after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--accent);
            transition: width 0.3s ease;
            }

            .nav-links a:hover:after {
            width: 100%;
            }

            .mobile-menu-toggle {
            display: none;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0.5rem;
            }

            .hamburger {
            display: block;
            position: relative;
            width: 30px;
            height: 3px;
            background-color: var(--text);
            border-radius: 3px;
            transition: all 0.3s ease;
            }

            .hamburger:before, .hamburger:after {
            content: '';
            position: absolute;
            width: 30px;
            height: 3px;
            background-color: var(--text);
            border-radius: 3px;
            transition: all 0.3s ease;
            }

            .hamburger:before {
            transform: translateY(-10px);
            }

            .hamburger:after {
            transform: translateY(10px);
            }

            .hamburger.open {
            background-color: transparent;
            }

            .hamburger.open:before {
            transform: rotate(45deg);
            }

            .hamburger.open:after {
            transform: rotate(-45deg);
            }

            .mobile-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--background);
            padding: 1rem 0;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            }

            .mobile-menu.open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
            }

            .mobile-nav-links {
            list-style: none;
            padding: 0 2rem;
            }

            .mobile-nav-links li {
            margin: 1.5rem 0;
            }

            .mobile-nav-links a {
            color: var(--text);
            font-size: 1.2rem;
            font-weight: 500;
            }

            @media (max-width: 768px) {
            .desktop-menu {
                display: none;
            }

            .mobile-menu-toggle {
                display: block;
            }

            .mobile-menu {
                display: block;
            }
            }
        `}</style>

        </nav>
    );  
};

export default Navbar;