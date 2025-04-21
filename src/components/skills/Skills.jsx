import React from 'react';
import './Skills.css';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', percentage: 95 },
    { name: 'CSS3 / Bootstrap', percentage: 90 },
    { name: 'JavaScript', percentage: 92 },
    { name: 'React.js', percentage: 88 },
    { name: 'Vue.js', percentage: 82 },
    { name: 'TypeScript', percentage: 85 }
  ];
  
  const backendSkills = [
    { name: 'Node.js', percentage: 86 },
    { name: 'Express.js', percentage: 85 },
    { name: 'Python', percentage: 80 },
    { name: 'MongoDB', percentage: 83 },
    { name: 'PostgreSQL', percentage: 78 },
    { name: 'AWS', percentage: 75 }
  ];
  
  const otherSkills = [
    'Git & GitHub',
    'RESTful APIs',
    'GraphQL',
    'Docker',
    'Figma',
    'Webpack',
    'Next.js',
    'Firebase',
    'UI/UX Design'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-grid">
          <div className="skills-column">
            <h3 className="skills-category">Frontend Development</h3>
            <div className="progress-bars">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="progress-item">
                  <div className="progress-info">
                    <div className="skill-name">{skill.name}</div>
                    <div className="percentage">{skill.percentage}%</div>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-column">
            <h3 className="skills-category">Backend Development</h3>
            <div className="progress-bars">
              {backendSkills.map((skill, index) => (
                <div key={index} className="progress-item">
                  <div className="progress-info">
                    <div className="skill-name">{skill.name}</div>
                    <div className="percentage">{skill.percentage}%</div>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="other-skills">
          <h3 className="skills-category">Other Skills & Technologies</h3>
          <div className="skill-tags">
            {otherSkills.map((skill, index) => (
              <div key={index} className="skill-tag">{skill}</div>
            ))}
          </div>
        </div>
        
        <div className="skills-cta">
          <a href="#projects" className="btn primary-btn">View My Work</a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
