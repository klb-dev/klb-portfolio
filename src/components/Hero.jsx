import React, { useEffect, useRef } from 'react';

const Hero = () => {
    const textRef = useRef(null);
  
    useEffect(() => {
      const texts = ['Developer', 'Designer', 'Creator'];
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
          <div className="hero-text">
            <h1>Hello, I'm <span className="highlight">Karen Byrd</span></h1>
            <h2 className="profession">
              I'm a <span ref={textRef} className="typed-text"></span>
            </h2>
            <p className="hero-description">
              Passionate about creating beautiful, functional, and user-centered digital experiences.
              Let's build something amazing together.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn primary-btn">View My Work</a>
              <a href="#contact" className="btn secondary-btn">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-img-container">
              <img src="/src/images/klbHeadShot.png" alt="Karen Byrd" className="profile-img" />
              <div className="background-shape"></div>
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
  
        <style jsx>{`
          .hero {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            padding-top: 4rem;
            overflow: hidden;
          }
  
          .hero:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(
              circle at 10% 20%,
              rgba(255, 87, 87, 0.1) 0%,
              rgba(0, 217, 255, 0.1) 90%
            );
            z-index: -1;
          }
  
          .hero-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: var(--container-width);
            width: 100%;
            padding: 0 var(--spacing-sm);
          }
  
          .hero-text {
            flex: 1;
            max-width: 600px;
          }
  
          .highlight {
            color: var(--primary);
          }
  
          .profession {
            font-size: 2.5rem;
            margin-bottom: var(--spacing-md);
            display: flex;
            gap: 0.5rem;
            align-items: center;
          }
  
          .typed-text {
            color: var(--secondary);
            position: relative;
            padding-right: 5px;
          }
  
          .typed-text::after {
            content: '|';
            position: absolute;
            right: -5px;
            color: var(--secondary);
            animation: blink 0.7s infinite;
          }
  
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
  
          .hero-description {
            font-size: 1.2rem;
            color: var(--light-text);
            margin-bottom: var(--spacing-md);
          }
  
          .hero-cta {
            display: flex;
            gap: var(--spacing-sm);
          }
  
          .primary-btn {
            background-color: var(--primary);
          }
  
          .secondary-btn {
            background-color: transparent;
            border: 2px solid var(--secondary);
            color: var(--secondary);
          }
  
          .secondary-btn:hover {
            background-color: var(--secondary);
            color: var(--background);
          }
  
          .hero-image {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
  
          .profile-img-container {
            position: relative;
            width: 350px;
            height: 350px;
          }
  
          .profile-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20% 5% 20% 5%;
            position: relative;
            z-index: 2;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }
  
          .background-shape {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 20px;
            left: 20px;
            border-radius: 5% 20% 5% 20%;
            background: linear-gradient(45deg, var(--primary), var(--secondary));
            z-index: 1;
          }
  
          .scroll-indicator {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            opacity: 0.7;
          }
  
          .mouse {
            width: 30px;
            height: 50px;
            border: 2px solid var(--text);
            border-radius: 20px;
            display: flex;
            justify-content: center;
          }
  
          .wheel {
            width: 4px;
            height: 10px;
            background-color: var(--text);
            border-radius: 2px;
            margin-top: 10px;
            animation: scroll 1.5s infinite;
          }
  
          @keyframes scroll {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(15px); opacity: 0; }
          }
  
          .arrow {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
          }
  
          .arrow span {
            display: block;
            width: 10px;
            height: 10px;
            border-bottom: 2px solid var(--text);
            border-right: 2px solid var(--text);
            transform: rotate(45deg);
            animation: arrow 1.5s infinite;
          }
  
          .arrow span:nth-child(2) {
            animation-delay: 0.2s;
          }
  
          .arrow span:nth-child(3) {
            animation-delay: 0.4s;
          }
  
          @keyframes arrow {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }
  
          @media (max-width: 992px) {
            .hero-content {
              flex-direction: column-reverse;
              text-align: center;
              gap: var(--spacing-lg);
            }
  
            .hero-text {
              max-width: 100%;
            }
  
            .profession {
              justify-content: center;
            }
  
            .hero-cta {
              justify-content: center;
            }
  
            .profile-img-container {
              width: 300px;
              height: 300px;
            }
          }
  
          @media (max-width: 576px) {
            .hero {
              padding-top: 6rem;
            }
  
            .profession {
              font-size: 2rem;
            }
  
            .hero-description {
              font-size: 1rem;
            }
  
            .profile-img-container {
              width: 250px;
              height: 250px;
            }
          }
        `}</style>
      </section>
    );
  };
  
  export default Hero;
  