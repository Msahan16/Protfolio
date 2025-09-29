

import React from 'react';
import './Hero.css';
import './FloatingLogos.css';


import heroImage from '../assests/Hero-removebg-preview.png';

// Import small logos
import wordpress from '../assests/wordpress.svg';
import reactLogo from '../assests/react-icon.svg';

import js from '../assests/js-icon.svg';
import java from '../assests/java.svg';
import python from '../assests/python.svg';
import aws from '../assests/Amazon-Web-Services-AWS-Logo.png';

const logos = [wordpress, reactLogo, js, java, python, aws];

const Hero = () => {
  const floatingLogos = Array.from({ length: 20 }).map((_, i) => {
    const logo = logos[Math.floor(Math.random() * logos.length)];
    return (
      <img
        key={i}
        src={logo}
        alt="logo"
        className="floating-logo"
        style={{
          left: `${Math.random() * 90}%`,
          top: `${Math.random() * 90}%`,
          width: `${20 + Math.random() * 30}px`,
          animationDuration: `${5 + Math.random() * 10}s`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    );
  });

  return (
    <section className="hero">
      {/* Floating logos */}
      {floatingLogos}

      {/* Wavy background using SVG */}
      <div className="waves">
        <svg viewBox="0 0 120 28" preserveAspectRatio="none">
          <path d="M0 20 Q 30 0 60 20 T 120 20 V30 H0 Z" className="wave wave1"></path>
          <path d="M0 20 Q 30 0 60 20 T 120 20 V30 H0 Z" className="wave wave2"></path>
          <path d="M0 20 Q 30 0 60 20 T 120 20 V30 H0 Z" className="wave wave3"></path>
        </svg>
      </div>

      {/* Hero content */}
      <div className="hero-container">
        <div className="hero-content">
          <div className="text-content">
            <h1 className="hero-title">
              Hello, I'm <span className="highlight">Mohamad Saman</span>
            </h1>
            <h2 className="hero-subtitle">Software Engineer</h2>
            <p className="hero-description">
              I specialize in full-stack development, React Native mobile apps, and digital marketing. 
              I build scalable websites and cross-platform apps, integrating AI, blockchain, and automation tools. 
              Skilled in Laravel, WordPress, PHP, and JavaScript, I help businesses grow with tailored tech solutions and 
              performance driven marketing strategies.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View Projects
                <span className="btn-hover-effect"></span>
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
                <span className="btn-hover-effect"></span>
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-wrapper">
              <img src={heroImage} alt="Hero" className="hero-img" />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
