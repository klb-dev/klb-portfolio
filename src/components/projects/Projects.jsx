import React, { useState } from "react";
import "./Projects.css";
import { FaGithub, FaLock } from "react-icons/fa";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Forever Home",
      category: "web",
      image: "",
      description:
        "A modern e-commerce platform with React frontend and Node.js backend.",
      technologies: [
        "HTML",
        "Style-components jsx",
        "JavaScript",
        "React",
        "Node.js",
      ],
      link: "#",
      github: ""
    },
    {
      id: 2,
      title: "Tons of Hearts",
      category: "game",
      image: "/src/assets/images/hearts-and-more-hearts.png",
      description:
        "Single level Match-3 game with real-time movement tracking. Made with Vanilla JS.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://klb-dev.github.io/hearts-and-more-hearts/",
      github: "https://github.com/klb-dev/hearts-and-more-hearts"
    },
    {
      id: 3,
      title: "Dream Getaways",
      category: "web",
      image: "",
      description:
        "Responsive travel blog with modern design and CMS integration.",
      technologies: ["Figma", "WordPress", "CSS", "JavaScript"],
      link: "#",
      github: ""
    },
    {
      id: 4,
      title: "Infinity Chat",
      category: "app",
      image: "../../assets/images/infinity-chat.png",
      description: "A real-time, responsive direct messaging chat app built with React, Firebase, and styled-components. Supports email login, guest mode, emoji reactions, typing indicators, and dark/light mode — all deployed via Firebase Hosting.",
      technologies: [
        "Vite",
        "React",
        "Firebase",
        "Styled-components",
        "React Icons/Emojis"
      ],
      link: "https://infinity-chat-ed2a5.web.app",
      github: "https://github.com/klb-dev/infinity-chat-app"
    },
    {
      id: 5,
      title: "Born to Ride, Pleasanton, TX",
      category: "web",
      image: "/src/assets/images/bornToRide.png",
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
      private: true
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
      : projects.filter((project) => project.category === activeFilter);

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
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
            {project.private ? (
              <div className="github-badge locked" title="Private Repository">
                <FaLock />
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
                  <FaGithub />
                </a>
              )
            )}
              <div className="project-image">
                <img src={project.image} loading="lazy" alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="project-link" target="_blank">
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
        <div className="more-projects">
          <a href="#" className="btn primary-btn">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
