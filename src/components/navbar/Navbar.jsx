import { useState, useEffect, useRef } from 'react';
import './Navbar.min.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsmobileMenuOpen] = useState(false);
    const menuRef = useRef(null);

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

    useEffect(() => {
    const trapFocus = (e) => {
        if (!isMobileMenuOpen || !menuRef.current) return;

        setTimeout(() => {
            const focusable = menuRef.current.querySelector(
                'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
            );
            focusable?.focus();
            }, 0);

        const focusableElements = menuRef.current.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );

        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.key === 'Tab') {
        if (e.shiftKey) {
            if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
            }
        } else {
            if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
            }
        }
        }
    };

    document.addEventListener('keydown', trapFocus);
    return () => document.removeEventListener('keydown', trapFocus);
    }, [isMobileMenuOpen]);


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
            
            <button
                className="mobile-menu-toggle"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
                >
                <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
            </button>
            {/* mobile menu and desktop menu */}
            <div
            id="mobile-menu"
            ref={menuRef}
            className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
            >
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