import React, { useState, useEffect } from "react";
import { CloseOutlined } from "@ant-design/icons";
import "./topBanner.scss";

const TopBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Update CSS variable dynamically
        document.documentElement.style.setProperty(
            "--navbar-margin-top",
            isVisible ? "40px" : "0px"
        );
        document.documentElement.style.setProperty(
            "--navbar-margin-top-mobile",
            isVisible ? "60px" : "0px"
        );
    }, [isVisible]);

    return (
        isVisible && (
            <div className="expertise-banner">
                <span>
                    🚀 <strong>Full-Stack Developer (MERN)</strong> &nbsp; | &nbsp;
                    <span className="hide-on-mobile">
                        💡 <strong>Building Scalable Web Apps & AI-Driven Solutions</strong> &nbsp; | &nbsp;
                    </span>
                    📩 <strong>Open to Freelance & Collaboration</strong> —
                    <a href="#contact">
                        <span className="ctc"> Let's Connect</span>
                    </a>
                </span>

                <button className="close-btn" onClick={() => setIsVisible(false)}>
                    <CloseOutlined />
                </button>
            </div>
        )
    );
};

export default TopBanner;
