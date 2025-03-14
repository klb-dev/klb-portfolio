import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: '/api/placeholder/600/400',
      description: 'A modern e-commerce platform with React frontend and Node.js backend.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: '#'
    },
    {
      id: 2,
      title: 'Tons of Hearts',
      category: 'game',
      image: '../images/hearts-and-more-hearts.png',
      description: 'Single level Match-3 game with real-time movement tracking.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://klb-dev.github.io/hearts-and-more-hearts/'
    },
    {
      id: 3,
      title: 'Travel Blog',
      category: 'design',
      image: '/api/placeholder/600/400',
      description: 'Responsive travel blog with modern design and CMS integration.',
      technologies: ['Figma', 'WordPress', 'CSS', 'JavaScript'],
      link: '#'
    },
    {
      id: 4,
      title: 'Social Media App',
      category: 'app',
      image: '/api/placeholder/600/400',
      description: 'Mobile app for social networking with real-time messaging.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      link: '#'
    },
    {
      id: 5,
      title: 'Corporate Website',
      category: 'web',
      image: '/api/placeholder/600/400',
      description: 'Modern corporate website with custom animations and CMS.',
      technologies: ['Next.js', 'GSAP', 'Tailwind CSS', 'Strapi'],
      link: '#'
    },
    {
      id: 6,
      title: 'Design System',
      category: 'design',
      image: '/api/placeholder/600/400',
      description: 'Comprehensive design system with components and guidelines.',
      technologies: ['Figma', 'Storybook', 'React', 'Styled Components'],
      link: '#'
    }
  ];
  
  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'game', label: 'Game Development' },
    { value: 'design', label: 'UI/UX Design' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="filter-container">
          {filters.map(filter => (
            <button
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} loading="lazy" alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="project-link">
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="more-projects">
          <a href="#" className="btn primary-btn">View All Projects</a>
        </div>
      </div>
      
      <style jsx>{`
        .projects {
          padding: var(--spacing-xl) 0;
          position: relative;
          background-color: var(--light-bg);
        }
        
        .projects:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at 90% 10%,
            rgba(0, 217, 255, 0.1) 0%,
            transparent 70%
          );
          z-index: 0;
        }
        
        .filter-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: var(--spacing-lg);
          position: relative;
          z-index: 1;
          gap: var(--spacing-sm);
        }
        
        .filter-btn {
          background-color: transparent;
          border: 2px solid var(--primary);
          color: var(--text);
          padding: 8px 20px;
          border-radius: var(--border-radius);
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .filter-btn:hover,
        .filter-btn.active {
          background-color: var(--primary);
          transform: translateY(-3px);
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: var(--spacing-md);
          position: relative;
          z-index: 1;
        }
        
        .project-card {
          background-color: var(--background);
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }
        
        .project-image {
          position: relative;
          overflow: hidden;
          height: 230px;
        }
        
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .project-card:hover .project-image img {
          transform: scale(1.1);
        }
        
        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        
        .project-link {
          color: white;
          background-color: var(--primary);
          padding: 10px 20px;
          border-radius: var(--border-radius);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }
        
        .project-link:hover {
          background-color: var(--secondary);
          transform: scale(1.05);
        }
        
        .project-info {
          padding: var(--spacing-md);
        }
        
        .project-title {
          font-size: 1.3rem;
          margin-bottom: var(--spacing-xs);
          color: var(--text);
        }
        
        .project-description {
          color: var(--light-text);
          margin-bottom: var(--spacing-sm);
          line-height: 1.6;
        }
        
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .tech-tag {
          background-color: rgba(0, 217, 255, 0.1);
          color: var(--secondary);
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        
        .more-projects {
          margin-top: var(--spacing-lg);
          text-align: center;
          position: relative;
          z-index: 1;
        }
        
        .primary-btn {
          background: linear-gradient(45deg, var(--primary), var(--secondary));
          padding: 12px 30px;
          font-size: 1.1rem;
        }
        
        @media (max-width: 1200px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
          
          .filter-container {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: var(--spacing-xs);
          }
          
          .filter-btn {
            white-space: nowrap;
          }
        }
        
        @media (max-width: 576px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;