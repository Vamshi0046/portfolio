import React, { useState, useEffect } from "react";

import { HiMenuAlt4, HiX } from "react-icons/hi";
// import { motion } from "framer-motion";

import { images } from "../../constants";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [classFloat, setClassFloat] = useState("");
  const [active, setActive] = useState("");

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
    setActive(item);
    setToggle(false);
  };

  return (
    <nav className={`app__navbar ${classFloat}`}>
      <div className="app__navbar-logo">
        <img src={images.vamshilogo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
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
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={handleToggle} />
        {toggle && (
          <div className="burger-menu">
            <HiX onClick={handleToggle} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
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
  );
};

export default Navbar;
