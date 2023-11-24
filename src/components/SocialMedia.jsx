import React from "react";

import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/siddhapuram-vamshi-78086a257"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://wa.me/9963610978"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <FaWhatsapp />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/va_m_shi_46"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
