import './About.min.css';
import { FaDownload } from 'react-icons/fa';

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
            <img src="/assets/images/blueByrdDevelopmentLogo.webp" loading="lazy" alt="About Me" className="about-img" />
            <div className="experience-badge">
              <span className="years">2</span>
              <span className="text">Years of<br />Experience</span>
            </div>
          </div>
          
          <div className="about-text">
            <h3 className="about-greeting">Hello, I'm Karen owner of Blue Byrd Developments</h3>
            <h4 className="about-title">A passionate Web Developer based in Texas</h4>
            
            <p className="about-description">
              I specialize in creating interactive websites. With 2 years of experience in web development and design, I've mainly created webistes for personal projects, but have developed and maintain Born To Ride, Plesanton, TX 501(c)(3) non-profit organization website. I'm currently looking for new opportunities to expand my portfolio and work with clients from all around the world.
            </p>
            
            <p className="about-description">
              My approach combines clean code, thoughtful design, and modern frameworks to build scalable and maintainable products. I'm constantly exploring new technologies and methodologies to enhance my skills and deliver better solutions.
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
              <a 
                href="/assets/resume/Karen Byrd Resume.pdf" 
                className="btn secondary-btn" 
                download="Karen Byrd Resume"
              >
                <FaDownload style={{marginRight: '8px', fontSize: '1.2rem'}} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default About;