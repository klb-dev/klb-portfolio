import React from 'react';

const About = () => {
  const stats = [
    { value: '2', label: 'Years Experience' },
    { value: '6+', label: 'Projects Completed' },
    { value: '1', label: 'Happy Client' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img src="/src/images/blueByrdDevelopmentLogo.png" alt="About Me" className="about-img" />
            <div className="experience-badge">
              <span className="years">2</span>
              <span className="text">Years of<br />Experience</span>
            </div>
          </div>
          
          <div className="about-text">
            <h3 className="about-greeting">Hello, I'm Karen owner of Blue Byrd Developments</h3>
            <h4 className="about-title">A passionate Web Developer based in Texas</h4>
            
            <p className="about-description">
              I specialize in creating interactive websites. With 2 years of experience in web development and design, I've mainly created webistes for personal projects, but have developed and maintain my fathers 501(c)(3) non-profit organization website. I'm currently looking for new opportunities to expand my portfolio and work with clients from all around the world.
            </p>
            
            <p className="about-description">
              My approach combines clean code, thoughtful UX, and modern frameworks to build scalable and maintainable products. I'm constantly exploring new technologies and methodologies to enhance my skills and deliver better solutions.
            </p>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="about-buttons">
              <a href="#contact" className="btn primary-btn">Hire Me</a>
              <a href="#" className="btn secondary-btn">Download CV</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          padding: var(--spacing-xl) 0;
          background-color: var(--background);
          position: relative;
          overflow: hidden;
        }
        
        .about:before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle,
            rgba(255, 214, 0, 0.05) 0%,
            transparent 70%
          );
          z-index: 0;
        }
        
        .about-content {
          display: flex;
          justify-content: space-around;
          gap: var(--spacing-lg);
          position: relative;
          z-index: 1;
        }
        
        .about-image {
          flex: 1;
          position: relative;
          max-width: 300px;
        }
        
        .about-img {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          border: 5px solid var(--light-bg);
        }
        
        .experience-badge {
          position: absolute;
          bottom: 30px;
          left: 18rem;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          padding: 20px;
          border-radius: 50%;
          width: 120px;
          height: 120px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .years {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1;
        }
        
        .text {
          font-size: 0.8rem;
          font-weight: 500;
          margin-top: 5px;
        }
        
        .about-text {
          flex: 1;
          max-width: 600px;
        }
        
        .about-greeting {
          font-size: 1.8rem;
          margin-bottom: var(--spacing-xs);
          color: var(--primary);
        }
        
        .about-title {
          font-size: 1.3rem;
          margin-bottom: var(--spacing-md);
          color: var(--secondary);
        }
        
        .about-description {
          margin-bottom: var(--spacing-md);
          color: var(--light-text);
          font-size: 1.1rem;
          line-height: 1.8;
        }
        
        .about-stats {
          display: flex;
          justify-content: space-between;
          margin: var(--spacing-lg) 0;
          flex-wrap: wrap;
        }
        
        .stat-item {
          text-align: center;
          flex: 1;
          min-width: 120px;
          margin-bottom: var(--spacing-md);
        }
        
        .stat-value {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 5px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .stat-label {
          font-size: 1rem;
          color: var(--light-text);
        }
        
        .about-buttons {
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
        
        @media (max-width: 992px) {
          .about-content {
            flex-direction: column;
            align-items: center;
          }
          
          .about-image {
            margin-bottom: var(--spacing-lg);
          }
          
           .about-text {
            max-width: 100%;
            text-align: center;
          }
          
          .about-buttons {
            justify-content: center;
          }
          
          .experience-badge {
            right: 50%;
            transform: translateX(50%);
            bottom: -60px;
          }
        }
        
        @media (max-width: 576px) {
          .about-stats {
            gap: var(--spacing-xs);
          }
          
          .stat-item {
            min-width: 45%;
          }
          
          .stat-value {
            font-size: 2rem;
          }
          
          .stat-label {
            font-size: 0.9rem;
          }

          .experience-badge {
            left: 10%;
            transform: translateX(50%);
            bottom:-120px;
          }
        }
    `}</style>
    </section>
    );
}

export default About;