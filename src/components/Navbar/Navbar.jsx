import React, { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
// import { motion } from "framer-motion";
// import { images } from "../../constants";
import "./Navbar.scss";
// import { CloseOutlined } from "@ant-design/icons"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [classFloat, setClassFloat] = useState("");
  // const [active, setActive] = useState("");
  // const [isVisible, setIsVisible] = useState(false);
  // const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    window.addEventListener("scroll", stickNavBar);
    return () => {
      window.removeEventListener("scroll", stickNavBar);
    };
  }, []);

  const stickNavBar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      if (windowHeight > 250) {
        setClassFloat("navbar-float");
      } else {
        setClassFloat("");
      }
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLinkClick = (item) => {
    // setActive(item);
    setToggle(false);
  };

  return (
    <>
      {/* 🔥 Modern Services Banner */}
      {/* {isVisible && (
        <div className="expertise-banner">
          <span>
            🚀 <strong>Full-Stack Developer (MERN)</strong> &nbsp; | &nbsp;
            💡 <strong>Building Scalable Web Apps & AI-Driven Solutions</strong> &nbsp; | &nbsp;
            📩 <strong>Open to Freelance & Collaboration</strong> —
            <a href="#contact"><span className="ctc"> Let's Connect</span></a>
          </span>
          <button className="close-btn" onClick={() => setIsVisible(false)}>
            <CloseOutlined />
          </button>
        </div>
      )} */}

      <div>
        <nav className={`app__navbar ${classFloat}`}>
          <div className="app__navbar-logo"  >
            {/* <img src={images.vamshilogo} alt="logo"  loading="lazy"  /> */}
            <p className="logoname">
              {/* VamshiDev <span className="symbol">&lt;/&gt;</span> */}
              Vamshi<span className="highlight">Dev</span> <span className="symbol">&lt;/&gt;</span>
            </p>
          </div>
          {/* <ul className="app__navbar-links">
          {["home", "about", "work", "skills", "contact"].map(
            (item) => (
              <li
                key={`link-${item}`}
                className={`app__flex p-text ${active === item ? "active" : ""}`}
              >
                <a href={`#${item}`} onClick={() => handleLinkClick(item)}>
                  {item}
                </a>
              </li>
            )
          )}
        </ul> */}

          <div className="app__navbar-menu">
            <HiMenuAlt4 onClick={handleToggle} />
            {toggle && (
              <div className="burger-menu">
                <HiX onClick={handleToggle} />
                <ul>
                  {["home", "about", "work", "skills", "services", "contact"].map((item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => handleLinkClick(item)}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
