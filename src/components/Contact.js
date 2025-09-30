import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaServer,
  FaTools,
  FaSmile,
  FaCogs,
  FaDesktop,
  FaChevronDown
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import ContactImg from "../assests/Contact.png";

const trustDetails = {
  "Free Hosting": "Enjoy free premium hosting for your website projects for the first year, ensuring fast, secure, and reliable performance from day one.",
  "Long-time Maintenance": "Benefit from long-term maintenance and proactive updates, keeping your systems smooth, secure, and future-ready.",
  "Friendly User Support": "Receive 24/7 personalized support via call, chat, or email – I'm here to solve any issue promptly and professionally.",
  "100% Customizable Systems": "Every system is fully tailored to your unique requirements, giving you complete control and flexibility.",
  "User-Friendly Modern Designs": "Experience visually stunning, intuitive, and modern designs that are easy to navigate and leave a lasting impression on your users."
};

const Contact = () => {
  const form = useRef();
  const [activeFeature, setActiveFeature] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zifgs9h",
        "template_ful6ldb",
        form.current,
        "tRKpAizH48MSbPrnX"
      )
      .then(() => {
        toast.success("Message sent successfully!", { autoClose: 3000 });
        form.current.reset();
      })
      .catch(() => {
        toast.error("Failed to send message, please try again.", { autoClose: 3000 });
      });
  };

  return (
    <footer id="contact" className="contact-section">
      {/* Left Side */}
      <div className="contact-left">
        <div className="contact-left-inner">
          <div className="contact-left-text">
            <p className="contact-subtitle">LET'S CREATE TOGETHER</p>
            <h2 className="contact-title">
              Why Work <span className="highlight-text">With Me?</span>
            </h2>
            <p className="contact-text">
              I turn ideas into reality. Let’s discuss your project and make it extraordinary!
            </p>

            {/* Trust Features */}
            <div className="trust-features">
              {Object.keys(trustDetails).map((featureName) => {
                const IconMap = {
                  "Free Hosting": <FaServer className="feature-icon" />,
                  "Long-time Maintenance": <FaTools className="feature-icon" />,
                  "Friendly User Support": <FaSmile className="feature-icon" />,
                  "100% Customizable Systems": <FaCogs className="feature-icon" />,
                  "User-Friendly Modern Designs": <FaDesktop className="feature-icon" />
                };

                return (
                  <div key={featureName} className="feature-wrapper">
                    <div
                      className="feature"
                      onClick={() =>
                        setActiveFeature(activeFeature === featureName ? null : featureName)
                      }
                      title="Click to view details"
                    >
                      <div className="feature-title">
                        {IconMap[featureName]} {featureName}
                      </div>
                      <FaChevronDown
                        className={`arrow-icon ${activeFeature === featureName ? "active" : ""}`}
                      />
                    </div>
                    {activeFeature === featureName && (
                      <div className="feature-detail">{trustDetails[featureName]}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="contact-left-image">
            <img src={ContactImg} alt="Contact Visual" />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="contact-right">
        <div className="connect-box">
          <h4>Contact with me</h4>
          <div className="contact-info">
            <a href="mailto:mohamedsaman.dev@gmail.com">
              <FaEnvelope /> mohamedsaman.dev@gmail.com
            </a>
            <a href="tel:+94761265772">
              <FaPhone /> (+94) 761265772
            </a>
          </div>
        </div>

        <div className="social-box">
          <h4>Follow me</h4>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/mohamed-saman/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/mohamedsaman" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.instagram.com/mohamed-saman/" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
            </a>
            <a href="https://wa.me/+94761265772" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>

        <div className="newsletter-box">
          <h4>Send me a message</h4>
          <form ref={form} onSubmit={sendEmail} className="newsletter-form">
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />

            {/* Message field without arrow mark */}
            <input
              type="text"
              name="message"
              placeholder="Your Message"
              list="predefined-messages"
              required
              className="no-arrow"
            />
            <datalist id="predefined-messages">
              <option value="I want to build a website." />
              <option value="I have an idea for a mobile app." />
              <option value="I want a custom software solution." />
              <option value="I need help with UI/UX design." />
            </datalist>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </footer>
  );
};

export default Contact;
