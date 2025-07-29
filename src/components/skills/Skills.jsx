import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faVuejs,
  faNodeJs,
  faGithub,
  faFigma,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { faServer, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Skills.css";
import { useEffect, useRef, useState } from "react";

const techSkills = [
  { icon: faHtml5, label: "HTML5" },
  { icon: faCss3Alt, label: "CSS3" },
  { icon: faJs, label: "JavaScript" },
  { icon: faReact, label: "React" },
  { icon: faVuejs, label: "Vue.js" },
  { icon: faNodeJs, label: "Node.js" },
  { icon: faServer, label: "Express (generic)" },
  { icon: faDocker, label: "Docker" },
  { icon: faGithub, label: "GitHub" },
  { icon: faFigma, label: "Figma" },
  { icon: faProjectDiagram, label: "GraphQL" },
  { icon: "/assets/images/typescript.svg", label: "TypeScript", isImage: true },
  { icon: "/assets/images/nextjs.svg", label: "Next.js", isImage: true },
  { icon: "/assets/images/webpack.svg", label: "Webpack", isImage: true },
  { icon: "/assets/images/firebase.svg", label: "Firebase", isImage: true },
  { icon: "/assets/images/postman.svg", label: "Postman", isImage: true },
];

const otherSkills = [
  "Cybersecurity",
  "Web Development",
  "Responsive Design",
  "GitHub",
  "Figma",
  "UI/UX Design",
  "Leadership",
  "Teamwork",
  "Problem Solving",
  "Communication",
  "Time Management",
  "Adaptability",
  "Critical Thinking",
];

const getSeededMotionStyle = (
  index,
  total,
  isTag,
  containerWidth,
  containerHeight
) => {
  let columns;
  if (isTag) {
    columns = containerWidth < 600 ? 2 : containerWidth < 900 ? 3 : 4;
  } else {
    columns = containerWidth < 600 ? 3 : containerWidth < 900 ? 4 : 5;
  }

  const itemWidth = isTag ? 140 : 60;
  const itemHeight = isTag ? 50 : 60;

  let rows;
  if (isTag) {
    rows = Math.ceil(total / columns);
  } else {
    rows = Math.ceil(total / columns);
  }

  const row = Math.floor(index / columns);
  const col = index % columns;

  const actualRow = row;

  const padding = 10;
  const effectiveWidth = containerWidth - padding * 2;
  const effectiveHeight = containerHeight - padding * 2;

  const cellWidth = effectiveWidth / columns;
  const cellHeight = effectiveHeight / rows;

  const xCenter = col * cellWidth + cellWidth / 2;
  const yCenter = actualRow * cellHeight + cellHeight / 2;

  const maxXOffset = isTag
    ? Math.min(cellWidth * 0.2, 10)
    : Math.min(cellWidth * 0.15, 8);
  const maxYOffset = isTag
    ? Math.min(cellHeight * 0.2, 10)
    : Math.min(cellHeight * 0.15, 8);

  const xOffset = (Math.random() - 0.5) * maxXOffset * 2;
  const yOffset = (Math.random() - 0.5) * maxYOffset * 2;

  let left = xCenter - itemWidth / 2 + xOffset + padding;
  let top = yCenter - itemHeight / 2 + yOffset + padding;

  left = Math.max(
    padding,
    Math.min(containerWidth - itemWidth - padding, left)
  );
  top = Math.max(
    padding,
    Math.min(containerHeight - itemHeight - padding, top)
  );

  return {
    top: `${top}px`,
    left: `${left}px`,
    animationDelay: `${(Math.random() * 5).toFixed(2)}s`,
    animationDuration: `${Math.floor(Math.random() * 10 + 5)}s`,
  };
};

const motionClasses = [
  "motion-drift",
  "motion-driftFast",
  "motion-driftTwist",
  "motion-driftWide",
];

const getRandomMotionClass = () =>
  motionClasses[Math.floor(Math.random() * motionClasses.length)];

const Skills = () => {
  useEffect(() => {
    import("./Skills.min.css");
  }, []);

  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(800);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const tagRows = Math.ceil(
    otherSkills.length /
      (containerWidth < 600 ? 2 : containerWidth < 900 ? 3 : 4)
  );
  const iconRows = Math.ceil(
    techSkills.length /
      (containerWidth < 600 ? 3 : containerWidth < 900 ? 4 : 5)
  );

  const tagHeight = tagRows * 80;
  const iconHeight = iconRows * 90;

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-icon-container" ref={containerRef}>
          <h3 className="skills-category">Tech Stack</h3>
          <div className="floating-icons" style={{ height: `${iconHeight}px` }}>
            {techSkills.map(({ icon, label, isImage }, i) => (
              <div
                key={i}
                className={`floating-icon ${getRandomMotionClass()}`}
                style={getSeededMotionStyle(
                  i,
                  techSkills.length,
                  false,
                  containerWidth,
                  iconHeight
                )}
                title={label}
              >
                {isImage ? (
                  <img src={icon} alt={label} width={30} height={30} />
                ) : (
                  <FontAwesomeIcon icon={icon} size="2x" />
                )}

              </div>
            ))}
          </div>
        </div>
        <div className="skills-icon-container">
          <h3 className="skills-category">Other Skills</h3>
          <div className="floating-tags" style={{ height: `${tagHeight}px` }}>
            {otherSkills.map((skill, i) => (
              <div
                key={i}
                className={`floating-tag ${getRandomMotionClass()}`}
                style={getSeededMotionStyle(
                  i,
                  otherSkills.length,
                  true,
                  containerWidth,
                  tagHeight
                )}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
