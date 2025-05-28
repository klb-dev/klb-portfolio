import { useState, useEffect } from "react";
import "./Projects.min.css";
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Projects = () => {
  useEffect(() => {
    import('./Projects.min.css');
  }, []);
  
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  // array of projects
  const projects = [
       {
      id: 1,
      title: "Blue Byrd Development",
      category: ["web", "app"],
      image: "/assets/images/BBD-screenshot.webp",
      description:
        "Blue Byrd Development is a sleek, responsive landing page built to represent a freelance web development brand. Designed with a clean, modern aesthetic and smooth animations, the site highlights core services, featured projects, testimonials, and a contact form—all structured for high conversion and great user experience across devices.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "Node.js",
        "CORS",
        "Firebase Authentication",
        "Firebase Firestore",
        "Epress",
        "Axios",
        "Vercel Hosting",
        "Railway Backend",
        "Admin Custom Dashboard",
      ],
      link: "https://bluebyrddevelopment.com",
      github: "https://github.com/klb-dev/bbd-landing-client",
    },
        {
      id: 2,
      title: "Born to Ride, Pleasanton, TX",
      category: "web",
      image: "/assets/images/bornToRide.webp",
      description:
        "Born to Ride - 501(c)(3)- landing page. Frontend uses Three.js to showcase skateboards and one skater. Donates can be submitted.",
      technologies: [
        "HTML 5",
        "CSS3",
        "JavaScript",
        "Three.js",
        "Firebase Firestore",
        "Node.js",
        "Express",
        "CORS",
        "Stripe SDK",
      ],
      link: "https://borntoridepleasantontx.org",
      github: "",
      private: true,
    },
    {
      id: 3,
      title: "Forever Home",
      category: ["web", "app"],
      image: "/assets/images/ForeverHome.webp",
      description:
        "Forever Home is a sleek, modern web app that connects people with adoptable pets near them.",
      technologies: [
        "React",
        "Style-components",
        "Vite",
        "Node.js",
        "Firebase Hosting",
        "Epress",
        "Axios",
        "Render",
      ],
      link: "https://forever-home-b1dba.web.app/",
      github: "",
      private: true,
    },
    {
      id: 4,
      title: "Tons of Hearts",
      category: "game",
      image: "/assets/images/hearts-and-more-hearts.webp",
      description:
        "Single level Match-3 game with real-time movement tracking. Made with Vanilla JS.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://klb-dev.github.io/hearts-and-more-hearts/",
      github: "https://github.com/klb-dev/hearts-and-more-hearts",
    },
    {
      id: 5,
      title: "Wanderlust Chronicles",
      category: "web",
      image: "/assets/images/wc-travel-blog.webp",
      description:
        "Responsive travel blog with modern design and CMS integration.",
      technologies: ["React", "Vite", "CSS", "Unsplash"],
      link: "https://travel-log-b.netlify.app/",
      github: "https://github.com/klb-dev/travel-log-blog",
    },
    {
      id: 6,
      title: "Infinity Chat",
      category: "app",
      image: "/assets/images/infinity-chat.webp",
      description:
        "A real-time, responsive direct messaging chat app built with React, Firebase, and styled-components. Supports email login, guest mode, emoji reactions, typing indicators, and dark/light mode — all deployed via Firebase Hosting.",
      technologies: [
        "Vite",
        "React",
        "Firebase",
        "Styled-components",
        "React Icons/Emojis",
      ],
      link: "https://infinity-chat-ed2a5.web.app",
      github: "https://github.com/klb-dev/infinity-chat-app",
    },
    {
      id: 7,
      title: "Password Generator",
      category: ["web", "app"],
      image: "/assets/images/passwordGenerator.webp",
      description:
        "A sleek and secure browser extension that generates strong, customizable passwords instantly — with a stylish dark/light mode toggle and clean user interface.",
      technologies: ["HTML 5", "CSS3", "JavaScript"],
      link: "https://klb-dev.github.io/password-generator/",
      github: "https://github.com/klb-dev/password-generator",
    },
    {
      id: 8,
      title: "My To Do List",
      category: ["web", "app"],
      image: "/assets/images/toDoList.webp",
      description:
        "A sleek, animated to-do list app with dark/light theme support, localStorage persistence, and mobile-friendly interactions. Built with vanilla JavaScript, HTML, and CSS — no frameworks, just vibes.",
      technologies: ["HTML 5", "CSS3", "JavaScript", "LocalStorage"],
      link: "https://klb-dev.github.io/todoList/",
      github: "https://github.com/klb-dev/todoList",
    },
    {
      id: 9,
      title: "Tech Skills Icon Burst",
      category: "web",
      image: "/assets/images/TechIconsBurst.webp",
      description:
        "A vibrant canvas animation showcasing an energetic burst of technology logos using HTML5 Canvas and JavaScript.",
      technologies: ["HTML 5", "CSS3", "JavaScript"],
      link: "https://techskillsiconburst.netlify.app/",
      github: "https://github.com/klb-dev/techSkillsIconBurst",
    },
    {
      id: 10,
      title: "Glowing Buttons",
      category: "web",
      image: "/assets/images/glowingBtn.webp",
      description:
        "This project showcases stylish glowing buttons built purely with HTML and CSS. It’s lightweight, modern, and visually engaging — perfect for portfolios, call-to-action sections, or any site that needs a futuristic UI touch.",
      technologies: ["HTML 5", "CSS3", "Google Fonts (Ubuntu)"],
      link: "https://klb-dev.github.io/glowingButton/",
      github: "https://github.com/klb-dev/glowingButton",
    },
    {
      id: 11,
      title: "Star Field Animation",
      category: "web",
      image: "/assets/images/Starfield.webp",
      description:
        "An interactive, colorful starfield animation built with HTML5 `<canvas>`, JavaScript, and CSS. This effect creates a 3D illusion of stars zooming past as you move your mouse — a sleek visual that can be used as a dynamic background or landing page effect.",
      technologies: ["HTML 5", "CSS3", "JavaScript"],
      link: "https://klb-dev.github.io/Starfield/",
      github: "https://klb-dev.github.io/Starfield/",
    },
  ];

  const filters = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Development" },
    { value: "app", label: "App Development" },
    { value: "game", label: "Game Development" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          Array.isArray(project.category)
            ? project.category.includes(activeFilter)
            : project.category === activeFilter
        );

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="filter-container">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`filter-btn ${
                activeFilter === filter.value ? "active" : ""
              }`}
              onClick={() => {
                setActiveFilter(filter.value);
                setShowAll(false); // reset view when filter changes
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <div key={project.id} className="project-card" role="group" aria-label={project.title}>
              {project.private ? (
                <div
                  className="github-badge locked"
                  title="Private Repository"
                  aria-label={`Private repository: ${project.title}`}
                >
                  <FontAwesomeIcon icon={faLock}  />
                </div>
              ) : (
                project.github && (
                  <a
                    href={project.github}
                    className="github-badge"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View GitHub repository"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                )
              )}
              <div className="project-image">
                <img 
                  src={project.image} loading="lazy" 
                  alt={project.title}
                  width='350'
                  height='200' />
                <div className="project-overlay">
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View project: ${project.title}`}
                >
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length > 6 && (
          <div className="more-projects">
            <button
              className="btn primary-btn"
              onClick={() => setShowAll(!showAll)}
              aria-label={showAll ? "Show fewer projects" : "Show all projects"}
            >
              {showAll ? "Show Less" : "View All Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
