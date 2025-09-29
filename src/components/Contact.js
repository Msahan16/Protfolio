import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';
import contactImage from '../assests/Contact.png'; // 👈 Import your image

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_zifgs9h',   // Your EmailJS service ID
      'template_ful6ldb', // Your EmailJS template ID
      form.current,
      'tRKpAizH48MSbPrnX' // Your EmailJS public key
    )
    .then(() => {
      toast.success('Message sent successfully!', { autoClose: 3000 });
      form.current.reset();
    })
    .catch(() => {
      toast.error('Failed to send message, please try again.', { autoClose: 3000 });
    });
  };

  return (
    <footer id="contact" className="contact-section">
      <div className="contact-left">
        <p className="contact-subtitle">HELLO! WE'RE LISTENING</p>
        <h2 className="contact-title">
          Let&apos;s talk about <span>your project</span>
        </h2>
        <p className="contact-text">Sound good? Let&apos;s connect! →</p>

        {/* Contact Illustration */}
        <img src={contactImage} alt="Contact illustration" className="contact-image" />
      </div>

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
            <a href="https://www.linkedin.com/in/mohamed-saman-linked/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/mohamedsaman" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://instagram.com/mohamedsaman" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
            </a>
            <a href="https://wa.me/+94761265772" target="_blank" rel="noopener noreferrer">
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
            <textarea name="message" placeholder="Your Message" rows="3" required></textarea>
            <button type="submit">→</button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </footer>
  );
};

export default Contact;
