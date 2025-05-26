import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaDocker
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiWebpack,
  SiFirebase,
  SiExpress,
  SiPostman,
  SiGraphql
} from 'react-icons/si';
import './Skills.min.css';
import { useEffect, useRef, useState } from 'react';

const techSkills = [
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, SiTypescript,
  FaNodeJs, SiExpress, SiPostman, FaDocker, FaGithub, SiNextdotjs, SiWebpack, SiFirebase, SiGraphql
];

const otherSkills = [
  'Cybersecurity', 'Web Development', 'Responsive Design', 'GitHub', 'Figma',
  'UI/UX Design', 'Leadership', 'Teamwork', 'Problem Solving', 'Communication',
  'Time Management', 'Adaptability', 'Critical Thinking'
]

const getSeededMotionStyle = (index, total, isTag, containerWidth, containerHeight) => {
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
    const minRows = Math.ceil(total / columns);
    const hasExtraSpace = containerHeight > (minRows * (itemHeight + 30));
    rows = hasExtraSpace ? Math.min(minRows + 1, Math.ceil(containerHeight / (itemHeight + 20))) : minRows;
  } else {
    rows = Math.ceil(total / columns);
  }
  
  const row = Math.floor(index / columns);
  const col = index % columns;

  const actualRow = row;

  const padding = 10;
  const effectiveWidth = containerWidth - (padding * 2);
  const effectiveHeight = containerHeight - (padding * 2);

  const cellWidth = effectiveWidth / columns;
  const cellHeight = effectiveHeight / rows;

  const xCenter = col * cellWidth + cellWidth / 2;
  const yCenter = actualRow * cellHeight + cellHeight / 2;

  const maxXOffset = isTag ? Math.min(cellWidth * 0.3, 15) : Math.min(cellWidth * 0.2, 10);
  const maxYOffset = isTag ? Math.min(cellHeight * 0.3, 15) : Math.min(cellHeight * 0.2, 10);

  const xOffset = (Math.random() - 0.5) * maxXOffset * 2;
  const yOffset = (Math.random() - 0.5) * maxYOffset * 2;

  let left = xCenter - itemWidth / 2 + xOffset + padding;
  let top = yCenter - itemHeight / 2 + yOffset + padding;

  left = Math.max(padding, Math.min(containerWidth - itemWidth - padding, left));
  top = Math.max(padding, Math.min(containerHeight - itemHeight - padding, top));

  return {
    top: `${top}px`,
    left: `${left}px`,
    animationDelay: `${(Math.random() * 5).toFixed(2)}s`,
    animationDuration: `${Math.floor(Math.random() * 10 + 5)}s`
  };
};

const motionClasses = ['motion-drift', 'motion-driftFast', 'motion-driftTwist', 'motion-driftWide'];

const getRandomMotionClass = () =>
  motionClasses[Math.floor(Math.random() * motionClasses.length)];

const Skills = () => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(800);
  const [containerHeight, setContainerHeight] = useState(300);
  
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-icon-container" ref={containerRef}>
          <h3 className="skills-category">Tech Stack</h3>
          <div className="floating-icons">
            {techSkills.map((Icon, i) => (
              <div
                key={i}
                className={`floating-icon ${getRandomMotionClass()}`}
                style={getSeededMotionStyle(i, techSkills.length, false, containerWidth, containerHeight)}
              >
                <Icon size={30} />
              </div>
            ))}
          </div>
        </div>

        <div className="skills-icon-container">
          <h3 className="skills-category">Other Skills</h3>
          <div className="floating-tags">
            {otherSkills.map((skill, i) => (
              <div
                key={i}
                className={`floating-tag ${getRandomMotionClass()}`}
                style={getSeededMotionStyle(i, otherSkills.length, true, containerWidth, containerHeight)}
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