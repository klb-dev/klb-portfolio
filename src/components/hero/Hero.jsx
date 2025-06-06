import { useEffect, useRef } from 'react';
import './Hero.min.css';

const Hero = () => {
  // creates my typing effect
    const textRef = useRef(null);
    useEffect(() => {
      const texts = ['Web-Developer', 'Game-Developer', 'App-Developer', 'UI/UX Designer'];
      let count = 0;
      let index = 0;
      let currentText = '';
      let letter = '';
  
      const type = () => {
        if (count === texts.length) {
          count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);
  
        if (textRef.current) {
          textRef.current.textContent = letter;
        }
  
        if (letter.length === currentText.length) {
          count++;
          index = 0;
          setTimeout(type, 1500);
        } else {
          setTimeout(type, 120);
        }
      };
  
      setTimeout(type, 1500);
    }, []);
  
    return (
      <section id="home" className="hero">
        <div className="hero-content">
                  <div className="hero-image">
            <div className="profile-img-container">
              <img 
                src="/assets/images/klbHeadShot.webp" 
                alt="Karen Byrd" 
                className="profile-img"
                width="300"
                height="300" 
                fetchPriority='high'
                loading='eager'
                />
              <div className="background-shape"></div>
            </div>
          </div>
          <div className="hero-text">
            <h1>Hello! I'm <span className="highlight">Karen Byrd </span></h1>
            <h2 className="profession" aria-label="I'm a web developer, game developer, app developer, and UI/UX designer">
              I'm a <span ref={textRef} className="typed-text"></span>
            </h2>
            <p className="hero-description">
              Passionate about creating beautiful, functional, and user-centered digital experiences.
              Let's build something amazing together.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn primary-btn">View My Work</a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  