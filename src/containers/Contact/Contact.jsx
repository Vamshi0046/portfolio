import React, { useState, useRef } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { notification } from 'antd';
import "./Contact.scss";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading when email is being sent

    emailjs
      .sendForm('service_l4huv9a', 'template_ab2t8x9', form.current, '1USoWhPmzKjnORC_a')
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset(); // Reset the form after successful submission
          setIsLoading(false);
          setIsFormSubmitted(true);
          notification.success({
            message: 'Email Sent',
            description: 'Your email was sent successfully!',
          });
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false); // Set loading to false in case of an error
          notification.error({
            message: 'Error',
            description: 'Failed to send email. Please try again later.',
          });
        }
      );
  }
  return (
    <>
      <h2 className="head-text" style={{ fontFamily: 'var(--font-base)' }}>
        Take a coffee & <span>chat</span> with <span>me</span>
      </h2>

      <div className="app__contact-cards" style={{ fontFamily: 'var(--font-base)' }}>
        <div className="app__contact-card">
          <img src={images.email} alt="Email Icon" />
          <a href="mailto:vamshi0046@gmail.com" className="p-text">
            vamshi0046@gmail.com
          </a>
        </div>
        <div className="app__contact-card">
          <img src={images.mobile} alt="Mobile Icon" />
          <a href="tel:+919963610978" className="p-text">
            +91 9963610978
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form className="app__contact-form app__flex" ref={form} onSubmit={sendEmail}>
          <div className="app__flex">
            <input type="text" className="p-text" placeholder="Your Name" name="from_name" required={true} />
          </div>
          <div className="app__flex">
            <input type="email" className="p-text" placeholder="Your Email" name="from_email" required={true} />
          </div>
          <div className="app__flex">
            <input type="text" className="p-text" placeholder="Subject" name="subject" required={true} />
          </div>
          <div>
            <textarea name="message" placeholder="Your Message" required={true} />
          </div>
          <button type="submit" className="portfolio-button">
            {loading ? "Sending Message" : "Send Message"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in <span>Touch!</span>
          </h3>
        </div>
      )}
    </>
  );
};


export default AppWrap(
  MotionWrap(Contact, "app__contact"),
  "contact",
  "app__whitebg"
);
