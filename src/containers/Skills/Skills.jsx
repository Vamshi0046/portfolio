import React from "react";
import { motion } from "framer-motion";
// import { ReactTooltip } from "react-tooltip";
import { Tooltip as ReactTooltip } from 'react-tooltip';

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";


const Skills = () => {
  const skills =[
    {
      name: "Python",
      icon: images.python,
      bgColor: "#edf2f8",
    },
    {
      name: "React JS",
      icon: images.react,
      bgColor: "#edf2f8",
    },
    {
      name: "CSS",
      icon: images.css,
      bgColor: "#edf2f8",
    },
    {
      name: "MySQL",
      icon: images.mysql,
      bgColor: "#edf2f8",
    },
    {
      name: "JavaScript",
      icon: images.javascript,
      bgColor: "#edf2f8",
    },
    {
      name: "HTML",
      icon: images.html,
      bgColor: "#edf2f8",
    },
    {
      name: "Django",
      icon: images.django,
      bgColor:"#edf2f8",
    },
    {
      name: "Git",
      icon: images.git,
      bgColor:"#edf2f8",
    },
    // Add more skills as needed
  ];

  const experience = [
    {
      year: 2023,
      works: [
        {
          name: "Full Stack Developer",
          company: "Ihub Technologis",
        },
        {
          name: "Learned Python & Django",
          company: "Individual"
        },
        {
          name: "Learned React JS",
          company: "Individual"
        },
        {
          name: "Learned Basics of Web Development",
          company: "Individual"
        },
        // Add more works as needed
      ],
    },
    // Add more experiences as needed
  ];

  const skillVariants = {
    view: {
      x: [-15, 0],
      opacity: [0, 1],
      transition: {
        x: {
          type: "spring",
          stiffness: "10",
        },
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    hover: {
      y: -7,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      y: -7,
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <h2 className="head-text" style={{fontFamily:'var(--font-base)'}}>
        Skills <span>&</span> Experience
      </h2>
      <div className="app__skills-container" style={{fontFamily:'var(--font-base)'}}>
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              variants={skillVariants}
              whileInView="view"
              whileHover="hover"
              whileTap="tap"
              className="app__skills-item app__flex"
              key={skill.name + "-" + index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experience.map((exp) => (
            <motion.div className="app__skills-exp-item" key={exp.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{exp.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {exp?.works?.map((work) => (
                  <React.Fragment key={work.name}>
                    <motion.div
                      whileInView={{
                        opacity: [0, 1],
                        x: [-100, 5, 0],
                      }}
                      transition={{
                        duration: 1,
                      }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#313bac"
                      className="skills-tooltip"
                    >
                      {/* {work.desc} */}
                    </ReactTooltip>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

// export default Skills;

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
