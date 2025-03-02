import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWorks, setFilterWorks] = useState([]);
  const [works, setWorks] = useState([]);
  const [touched, setTouched] = useState(null);

  useEffect(() => {
    const data = [
      {
        title: "Parking Management App",
        description: "Streamline parking operations and enhance user experience.",
        tags: ["Personal Projects"],
        imgUrl: images.parkingimg,
        projectLink: "",
        codeLink: "https://github.com/Vamshi0046/Parking_Management_System.git",
      },
      {
        title: "News App",
        description: "Stay informed with real-time news updates on a user-friendly platform.",
        tags: ["Personal Projects"],
        imgUrl: images.news,
        projectLink: "https://newsjet.vercel.app",
        codeLink: "https://github.com/Vamshi0046/newsjet.git",
      },
      {
        title: "Food Order App",
        description: "Delicious food on your way... Built using React.js",
        tags: ["Personal Projects"],
        imgUrl: images.food,
        projectLink: "",
        codeLink: "",
      },
      {
        title: "Portfolio Website",
        description: "A visually attractive portfolio website built with React.js & EmailJS.",
        tags: ["Personal Projects"],
        imgUrl: images.portfolio,
        projectLink: "https://vamshis.netlify.app",
        // codeLink: "https://github.com/Vamshi0046/portfolio.git",
      },
      {
        title: "No Freelance Projects Yet",
        description: "Currently, I haven’t worked on freelance projects, but I’m open to small freelance opportunities. Feel free to reach out!",
        tags: ["Side Projects / freelance"],
        imgUrl: images.commingsoon, // Add a placeholder image if needed
        projectLink: "",
        codeLink: "",
      }
    ];
    setWorks(data);
    // setFilterWorks(data);
    setFilterWorks(data.filter((work) => work.title !== "No Freelance Projects Yet"));

  }, []);

  const handleFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ opacity: 0, scale: 0.5, y: -100 });

    setTimeout(() => {
      setAnimateCard({ opacity: 1, scale: 1, y: 0 });
      // setFilterWorks(item === "All" ? works : works.filter((work) => work.tags.includes(item)));
      if (item === "All") {
        setFilterWorks(works.filter((work) => work.title !== "No Freelance Projects Yet"));
      } else {
        setFilterWorks(works.filter((work) => work.tags.includes(item)));
      }

    }, 500);
  };

  return (
    <>
      <h2 className="head-text" style={{ fontFamily: 'var(--font-base)' }}>
        My <span>Creative Portfolio</span>
      </h2>

      <div className="app__work-filter">
        {["All", "Personal Projects","Side Projects / freelance"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? "item-active" : ""}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWorks.map((work, index) => (
          <motion.div
            className={`app__work-item app__flex ${touched === index ? "app__work-touched-nowrap" : ""}`}
            key={index}
            onMouseEnter={() => setTouched(index)}
            onTouchStart={() => setTouched(index)}
          >
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} loading="lazy" />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
                className={`app__work-hover app__flex ${touched === index ? "app__work-touched" : ""}`}
              >
                {work.projectLink && (
                  <a href={work.projectLink} target="_blank" rel="noreferrer" aria-label="Live Project">
                    <motion.div whileHover={{ scale: 0.9 }} transition={{ duration: 0.25 }} className="app__flex">
                      <AiFillEye />
                    </motion.div>
                  </a>
                )}

                {work.codeLink && (
                  <a href={work.codeLink} target="_blank" rel="noreferrer" aria-label="Source Code">
                    <motion.div whileHover={{ scale: 0.9 }} transition={{ duration: 0.25 }} className="app__flex">
                      <AiFillGithub />
                    </motion.div>
                  </a>
                )}
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text" title={work.title}>
                {work.title}
              </h4>
              <p className="p-text" style={{ marginTop: 10 }} title={work.description}>
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__works"), "work", "app__primarybg");
