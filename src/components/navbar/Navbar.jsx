import { useState, useEffect, useRef } from 'react';
import './Navbar.min.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsmobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const menuRef = useRef(null);

     useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
            });
        },
        { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

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
            <a href="#home" className="logo" aria-label="Back to top — Karen Byrd Portfolio homepage">
            <span className="logo-text">Karen Byrd Portfolio</span>
            </a>
            <div className="desktop-menu" aria-label="Main navigation">
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
                {["home", "about", "projects", "skills", "contact"].map((id) => (
                <li key={id}>
                    <a
                    href={`#${id}`}
                    onClick={toggleMobileMenu}
                    aria-current={activeSection === id ? "page" : undefined}
                    >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                </li>
                ))}
                </ul>
            </div>
        </div>
    </nav>
);  
};

export default Navbar;