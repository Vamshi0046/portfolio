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
        description: "Streamline parking operations and enhance user expirence",
        tags: ["Python", "Web Projects"],
        imgUrl: images.parkingimg,
        projectLink: "",
        codeLink: "https://github.com/Vamshi0046/Parking_Management_System.git",
      },
      {
        title: "News APP",
        description: "Stay informed with real-time news updates on a user-friendly app.",
        tags: ["Python", "Web Projects"],
        imgUrl: images.news,
        projectLink: "https://newsjet.vercel.app",
        codeLink: "https://github.com/Vamshi0046/newsjet.git",
      },
      {
        title: "Food Order App",
        description: "Delicious food on your way...using React JS",
        tags: ["ReactJS", "Web Projects"],
        imgUrl: images.food,
        projectLink: "",
        codeLink: "",
      },
      {
        title: "Portfolio Website",
        description: "A visually attractive Portfolio website uses ReactJS & EmailJS",
        tags: ["ReactJS", "Web Projects"],
        imgUrl: images.portfolio,
        projectLink: "https://vamshis.netlify.app",
        codeLink: "https://github.com/Vamshi0046/portfolio.git",
      },
    ];
    setWorks(data);
    setFilterWorks(data);
  }, []);


  const handleFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ opacity: 0, scale: 0.5, y: -100 });

    setTimeout(() => {
      setAnimateCard({ opacity: 1, scale: 1, y: 0 });
      if (item === "All") {
        setFilterWorks(works);
      } else {
        setFilterWorks(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text" style={{ fontFamily: 'var(--font-base)' }}>
        My creative <span>Portfolio</span> section
      </h2>

      <div className="app__work-filter" style={{ fontFamily: 'var(--font-base)' }}>
        {["All", "ReactJS", "Web Projects", "Python",].map((item, index) => (
          <div
            key={index}
            onClick={() => handleFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? "item-active" : ""
              }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
        onClick={() => setTouched(null)}
      >
        {filterWorks.map((work, index) => (
          <motion.div
            className={`app__work-item app__flex ${touched === index ? "app__work-touched-nowrap" : ""
              }`}
            key={index}
            onClick={() => setTouched(index)}
            onTouchStart={() => setTouched(index)}
          >
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className={`app__work-hover app__flex ${touched === index ? "app__work-touched" : ""
                  }`}
              >
                <a
                  href={work.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`app__flex ${
                    // work.projectLink.toLowerCase() === "na" ? "none" : ""
                    work.projectLink === "" ? "none" : ""
                    }`}
                >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                </a>

                <a
                  href={work.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="app__flex"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex" style={{ fontFamily: 'var(--font-base)' }}>
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

// export default Work;
export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);



