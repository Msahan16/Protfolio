import React, { useRef } from "react";
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
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import ContactImg from "../assests/Contact.png";

const Contact = () => {
  const form = useRef();

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
        toast.error("Failed to send message, please try again.", {
          autoClose: 3000,
        });
      });
  };

  return (
    <footer id="contact" className="contact-section">
      {/* Left Side */}
      <div className="contact-left">
        <div className="contact-left-inner">
          {/* Left Text */}
          <div className="contact-left-text">
            <p className="contact-subtitle">LET'S CREATE TOGETHER</p>
            <h2 className="contact-title">
             Why Work <span className="highlight-text">With Me?</span>
            </h2>
            <p className="contact-text"> I turn ideas into reality. Let’s discuss your project and make it extraordinary !
            </p>

            {/* Trust Features */}
            <div className="trust-features">
              <div className="feature">
                <FaServer className="feature-icon" />
                Free Hosting & Domain
              </div>
              <div className="feature">
                <FaTools className="feature-icon" />
                Long-time Maintenance
              </div>
              <div className="feature">
                <FaSmile className="feature-icon" />
                Friendly User Support
              </div>
              <div className="feature">
                <FaCogs className="feature-icon" />
                100% Customizable Systems
              </div>
              <div className="feature">
                <FaDesktop className="feature-icon" />
                User-Friendly Modern Designs
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="contact-left-image">
            <img src={ContactImg} alt="Contact Visual" />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="contact-right">
        {/* Contact Box */}
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

        {/* Social Links */}
        <div className="social-box">
          <h4>Follow me</h4>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/mohamed-saman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/mohamedsaman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-saman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://wa.me/+94761265772"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>

        {/* Message Form */}
        <div className="newsletter-box">
          <h4>Send me a message</h4>
          <form ref={form} onSubmit={sendEmail} className="newsletter-form">
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="3" required />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </footer>
  );
};

export default Contact;
