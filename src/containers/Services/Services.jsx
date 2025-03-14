import React from "react";
import { FaCode, FaUserTie, FaChartLine } from "react-icons/fa";
import "./Services.scss";
import { AppWrap, MotionWrap } from "../../wrapper";

const Services = () => {
    const services = [
        {
            icon: <FaUserTie />,
            title: "Personal Branding & Portfolio Websites",
            text: "Enhance your professional presence with a modern, visually appealing portfolio that showcases your skills and achievements.",
            features: ["Modern UI/UX", "SEO Optimization", "Fast & Responsive"],
        },
        {
            icon: <FaChartLine />,
            title: "Business & Corporate Websites",
            text: "Establish a strong online presence with a professional website designed to engage customers and drive growth.",
            features: ["Tailored UI/UX", "SEO & Analytics", "Mobile Friendly"],
        },
        {
            icon: <FaCode />,
            title: "Full-Stack Web Applications",
            text: "Build scalable, secure, and high-performance web applications customized to your business requirements.",
            features: ["Database Integration", "Custom Features", "Fast & Secure"],
        },
    ];

    return (
        <section className="services-section">
            <div className="services-intro app__about-data app__flex">
                <h4 className="head-text" style={{ fontFamily: 'var(--font-base)' }}>
                    Choose <span>the right service</span> for your business growth
                </h4>
                <p className="" style={{ width: '80%', textAlign: 'center', margin: 'auto' }}>
                    Elevate your brand and accelerate your business with tailored web solutions. Select a service that aligns with your goals and make an impact online.
                </p>
            </div>
            <div className="services-container">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon">{service.icon}</div>
                        <h3 className="head-text" >{service.title}</h3>
                        <p className="p-text">{service.text}</p>
                        {/* Uncomment if needed */}
                        {/* <ul>
                            {service.features.map((feature, i) => (
                                <li key={i}>✅ {feature}</li>
                            ))}
                        </ul> */}
                        {/* <a href="#contact" >Let’s Build Something Great!</a> */}
                        <button
                            className="portfolio-button"
                            style={{ margin: "-1px" }}
                            onClick={() => window.location.href = "#contact"}
                        >
                            Let’s Build Something Great!
                        </button>


                    </div>
                ))}
            </div>
        </section>
    );
};

export default AppWrap(
    MotionWrap(Services, "app__contact"),
    "services",
    "app__primarybg"
);
