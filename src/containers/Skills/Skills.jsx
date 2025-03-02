import React, { useState } from "react";
import { motion } from "framer-motion";
import { Timeline } from "antd";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

const Skills = () => {
  const [expandedIndexes, setExpandedIndexes] = useState({});

  const skills = [
    { name: "Python", icon: images.python, bgColor: "#edf2f8" },
    { name: "React JS", icon: images.react, bgColor: "#edf2f8" },
    { name: "Node JS", icon: images.node, bgColor: "#edf2f8" },
    { name: "Mongo DB", icon: images.monggodb, bgColor: "#edf2f8" },
    { name: "CSS", icon: images.css, bgColor: "#edf2f8" },
    { name: "MySQL", icon: images.mysql, bgColor: "#edf2f8" },
    { name: "JavaScript", icon: images.javascript, bgColor: "#edf2f8" },
    { name: "HTML", icon: images.html, bgColor: "#edf2f8" },
    { name: "Django", icon: images.django, bgColor: "#edf2f8" },
    { name: "Git", icon: images.git, bgColor: "#edf2f8" },
  ];

  const experience = [
    {
      company: "Kims Hospitals",
      logo: images.kims_logo,
      location: "Hyderabad, Telangana, India",
      employmentType: "Full-time",
      duration: "2023-12-01",
      positions: [
        {
          title: "Software Engineer",
          startDate: "2024-12-01",
          endDate: null,
          description:
            "Working as a Full Stack Developer specializing in the MERN stack. Responsible for designing, developing, and maintaining scalable web applications. Collaborating with cross-functional teams to deliver robust solutions.",
        },
        {
          title: "Trainee Software Engineer",
          startDate: "2023-12-01",
          endDate: "2024-11-30",
          description:
            "Completed a one-year training program focused on MERN stack development. Gained hands-on experience in building full-stack applications, collaborating with teams, and delivering high-quality code.",
        },
      ],
    },
    // {
    //   company: "Git",
    //   logo: images.git,
    //   location: "Hyderabad, Telangana, India",
    //   employmentType: "Full-time",
    //   duration: "2023-12-01",
    //   positions: [
    //     {
    //       title: "Sr Software Engineer",
    //       startDate: "2024-12-01",
    //       endDate: null,
    //       description:
    //         "Working as a Full Stack Developer specializing in the MERN stack. Responsible for designing, developing, and maintaining scalable web applications. Collaborating with cross-functional teams to deliver robust solutions.",
    //     },
    //   ],
    // },
  ];

  const formatDateRange = (startDate, endDate) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date(); // If endDate is null, use the current date.

    const formattedStart = `${months[start.getMonth()]} ${start.getFullYear()}`;
    const formattedEnd = endDate ? `${months[end.getMonth()]} ${end.getFullYear()}` : "Present";

    // Calculate difference in years and months
    let years = end.getFullYear() - start.getFullYear();
    let monthsDiff = end.getMonth() - start.getMonth() + 1; // +1 to include the current month

    if (monthsDiff <= 0) {
      years -= 1;
      monthsDiff += 12;
    }

    let durationText = "";
    if (years > 0) durationText += `${years} yr${years > 1 ? "s" : ""} `;
    if (monthsDiff > 0) durationText += `${monthsDiff} mos`;

    return `${formattedStart} - ${formattedEnd} · ${durationText.trim()}`;
  };


  return (
    <>
      <h2 className="head-text" style={{ fontFamily: "var(--font-base)" }}>
        Skills <span>&</span> Experience
      </h2>
      <div className="app__skills-container" style={{ fontFamily: "var(--font-base)" }}>
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              className="app__skills-item app__flex"
              key={skill.name + "-" + index}
              whileInView={{ opacity: [0, 1], x: [-15, 0] }}
              whileHover={{ y: -7 }}
              whileTap={{ y: -7, scale: 1.05 }}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={skill.icon} alt={skill.name}  loading="lazy"  />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experience.map((exp, expIndex) => {
            // State for expanding descriptions
            const toggleExpand = (idx) => {
              setExpandedIndexes((prev) => ({
                ...prev,
                [idx]: !prev[idx],
              }));
            };

            return (
              <div key={expIndex} className="experience-section">
                <div className="company-header">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "5px",
                      background: "#f8f8f8",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      style={{
                        width: "80%",
                        height: "80%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <span className="company-sec">
                    <h4 className="">{exp.company}</h4>
                    <p className="p-text">
                      {exp.employmentType} · {formatDateRange(exp.duration)}
                    </p>
                    <p className="p-text">{exp.location}</p>
                  </span>
                </div>

                <Timeline
                  className="timeline-margin"
                  items={exp.positions.map((position, idx) => ({
                    key: idx,
                    children: (
                      <div style={{ marginLeft: "10px" }}>
                        <h4>{position.title}</h4>
                        <p className="p-text">{formatDateRange(position.startDate, position.endDate)}</p>
                        <p className={`p-text description ${expandedIndexes[idx] ? "expanded" : ""}`}>
                          {position.description}
                        </p>
                        {position.description.length > 100 && (
                          <button onClick={() => toggleExpand(idx)} className="toggle-btn">
                            {expandedIndexes[idx] ? "Show Less" : "Show More"}
                          </button>
                        )}
                      </div>
                    ),
                  }))}
                />

              </div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__whitebg");
