import React from 'react';

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
      
      <style jsx>{`
        .skills {
          padding: var(--spacing-xl) 0;
          background-color: var(--background);
          position: relative;
          overflow: hidden;
        }
        
        .skills:before {
          content: '';
          position: absolute;
          bottom: -50%;
          left: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle,
            rgba(255, 87, 87, 0.05) 0%,
            transparent 70%
          );
          z-index: 0;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-lg);
          position: relative;
          z-index: 1;
        }
        
        .skills-column {
          background-color: var(--light-bg);
          border-radius: var(--border-radius);
          padding: var(--spacing-md);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }
        
        .skills-category {
          font-size: 1.5rem;
          margin-bottom: var(--spacing-md);
          color: var(--text);
          padding-bottom: var(--spacing-xs);
          border-bottom: 2px solid var(--primary);
          display: inline-block;
        }
        
        .progress-bars {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        
        .progress-item {
          margin-bottom: 15px;
        }
        
        .progress-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        
        .skill-name {
          font-weight: 500;
          color: var(--text);
        }
        
        .percentage {
          color: var(--secondary);
          font-weight: 700;
        }
        
        .progress-bar {
          height: 8px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
        }
        
        .progress {
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          border-radius: 10px;
          transition: width 1.5s ease-in-out;
        }
        
        .other-skills {
          margin-top: var(--spacing-lg);
          background-color: var(--light-bg);
          border-radius: var(--border-radius);
          padding: var(--spacing-md);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          position: relative;
          z-index: 1;
        }
        
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: var(--spacing-sm);
        }
        
        .skill-tag {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .skill-tag:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .skills-cta {
          margin-top: var(--spacing-lg);
          text-align: center;
          position: relative;
          z-index: 1;
        }
        
        .primary-btn {
          background: linear-gradient(45deg, var(--secondary), var(--primary));
          padding: 12px 30px;
          font-size: 1.1rem;
        }
        
        @media (max-width: 992px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }
        }
        
        @media (max-width: 576px) {
          .skill-tags {
            gap: 8px;
          }
          
          .skill-tag {
            padding: 6px 12px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
