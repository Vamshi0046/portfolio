// import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";


const About = () => {
  const aboutMe = {
    profileImg: images.profilepicbg,
    description: "Hi there, I'm Vamshi - a full stack web developer. I develop beautiful and user-friendly websites. I like what I’m currently doing (Web Development!…) and very much interested in Machine Learning & AI. Challenging myself to learn new things and expanding my skillset - my driving force. Talking about my personality, I describe myself as a result-oriented person; great team player yet competent solo worker and an efficient individual. You can image me as a diligent and easygoing person with a good sense of humour.",
    resumeUrl: images.resume,
  };

  const aboutsdata = [
    {
      title: "Fullstack Developer",
      imgUrl: images.fullstack,
      description: "Skilled in MERN stack (MongoDB, Express.js, React, Node.js), building fast and scalable web applications.",
    },
    {
      title: "Tech Enthusiast",
      imgUrl: images.robots,
      description: "Love new technologies and like to explore the field of Machine Learning, AI and Image Processing.",
    },
    {
      title: "Problem Solver",
      imgUrl: images.problemsolving,
      description: "Equipped with good analytical and problem solving skills. Creative thinker and love to take up any challenges or puzzles.",
    },
    // {
    //   title: "Visionary",
    //   imgUrl: images.leadership,
    //   description: "A visionary with commendable leadership qualities. Aiming to reach new heights. Tend to recover quickly from setbacks and learn from failures.",
    // },
    {
      title: "Freelancer & Consultant",
      imgUrl: images.leadership,
      description:
        "Open to freelance projects and collaborations. Whether you need a personal portfolio, a business website, or a full-stack web app, I can turn your ideas into reality.",
    },
  ];

  const viewResumeHandler = () => {
    window.open(aboutMe.resumeUrl, "_blank");
  };

  return (
    <>
      <h2 className="head-text" style={{fontFamily:'var(--font-base)'}}>
        I know that <span>Good Design</span>
        <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__about-context app__flex" style={{fontFamily:'var(--font-base)'}}>
        <div className="app__about-img app__flex">
          <div className="app__flex">
            <img
              src={
                aboutMe.profileImg
              }
              alt="Profile"
              loading="lazy" 
              className="profilepicstyle"
            />
          </div>
        </div>
        <div className="app__about-data app__flex" style={{fontFamily:'var(--font-base)'}}>
          <h2 className="head-text">About Me</h2>
          <p
            className="p-text"
            dangerouslySetInnerHTML={{ __html: aboutMe.description }}
          ></p>
          <div>
            <button className="portfolio-button" onClick={viewResumeHandler}>
              Resume
            </button>
          </div>
        </div>
      </div>

      <div className="app__profiles" style={{fontFamily:'var(--font-base)'}}>
        {aboutsdata.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.2, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title}  loading="lazy"  />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <h2 className="p-text" style={{ marginTop: "10px" }}>
              {about.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

// export default About;
export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
