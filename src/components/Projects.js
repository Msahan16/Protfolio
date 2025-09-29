import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

// Import images
import project1Image from '../assests/Screenshot 2025-09-23 150741.png';
import project2Image from '../assests/Screenshot 2025-09-18 162539.png';
import project3Image from '../assests/Screenshot 2025-09-18 160758.png';
import project4Image from '../assests/Dynamic Ace.png';
import project6Image from '../assests/Screenshot 2025-09-18 162155.png';
import project7Image from '../assests/Screenshot 2025-09-24 095922.png';
import project8Image from '../assests/Screenshot 2025-09-24 101058.png';
import project9Image from '../assests/Screenshot 2025-09-24 101426.png';
import project10Image from '../assests/Screenshot 2025-09-24 101839.png';
import project11Image from '../assests/Screenshot 2025-09-24 102307.png';
import project12Image from '../assests/Screenshot 2025-09-24 102616.png';
import project13Image from '../assests/Sahara1.jpeg';
import project14Image from '../assests/sevena1.jpeg';
import project15Image from '../assests/webxkeystore1.jpeg';
import project16Image from '../assests/world1.jpeg';
import project5Image from '../assests/burgershop.jpg';
import project17Image from '../assests/Indoor.jpg';
import project20Image from '../assests/Webxkeyy.png';


// SaharaLanka slider images
import sahara1 from '../assests/Sahara1.jpeg';
import sahara2 from '../assests/Sahara2.jpeg';
import sahara3 from '../assests/Sahara3.jpeg';
import sahara4 from '../assests/sahara4.jpeg';

// Sevena slider images
import sevena1 from '../assests/sevena1.jpeg';
import sevena2 from '../assests/sevena2.jpeg';
import sevena3 from '../assests/sevena3.jpeg';
import sevena4 from '../assests/sevena4.png';

// Webxkey slider images
import webxkey1 from '../assests/webxkeystore1.jpeg';
import webxkey2 from '../assests/webxkeystore2.jpeg';
import webxkey3 from '../assests/webxkeystore3.jpeg';

// WorldenLanka slider images
import world1 from '../assests/world1.jpeg';
import world2 from '../assests/world2.jpeg';
import world3 from '../assests/world3.jpeg';
import world4 from '../assests/world4.jpeg';

import burgershop from '../assests/burgershop.jpg';

import indoor from '../assests/Indoor.jpg';


const Projects = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsRef = useRef([]);

  const projects = [
    { id: 1, 
      title: 'NextGen Solution Logistics Website', 
      description: 'NextGen Solution Logistics is a comprehensive logistics management platform designed to streamline operations and enhance efficiency.', 
      technologies: ['Wordpress', 'CSS'], 
      category: 'Websites',
       liveUrl: 'https://nextgensolutionspng.com/', 
      image: project1Image },
    { id: 2,
       title: 'Business management system for a watch company',
        description: 'Developed a fully customized business management system for a watch company.', 
        technologies: ['Wordpress', 'CSS'], 
        category: 'Websites', 
        liveUrl: 'https://onlinewatchuk.com/', 
        image: project2Image },
        { id: 20,
      title: 'WebxKey TechhSolutions',
      description: 'Enterprise-grade AI agents that solve your hardest support challenges.', 
      technologies: ['Next.js', 'CSS'], 
      category: 'Websites',
       liveUrl: 'https://webxkey.com/', 
       image: project20Image },
    
    
    { id: 4, 
      title: 'Dynamic Ace Lanka – Corporate Website E-Commerce',
       description: 'DynamicAceLanka.com is a clean, professional corporate website developed for a Sri Lankan company.', 
       technologies: ['Wordpress', 'CSS'], 
       category: 'Websites', 
       liveUrl: 'https://dynamicacelanka.com/', 
       image: project4Image },
    { id: 7, 
      title: 'Miracle Vision', 
      description: 'A web application that generates images from text prompts using advanced AI algorithms.', 
      technologies: ['Wordpress', 'CSS'], 
      category: 'Websites', 
      liveUrl: 'https://mvmiracle.com/', 
      image: project7Image },
    { id: 8, 
      title: 'Jaffna Gold', 
      description: 'A comprehensive e-commerce platform for traditional Sri Lankan jewelry.', 
      technologies: ['Wordpress', 'CSS'], 
      category: 'Websites',  
      liveUrl: 'https://jaffnagold.com/', 
      image: project8Image },
    { id: 9, 
      title: 'UnitedPortraits', 
      description: 'A professional photography service website offering portrait sessions and photo packages.', 
      technologies: ['Wordpress', 'CSS'], 
      category: 'Websites', 
      liveUrl: 'https://unitedportraits.com/', 
      image: project9Image },
    { id: 10, 
      title: 'Arah Global', 
      description: 'Arah Global is a leading provider of innovative solutions and services in various industries.', 
      technologies: ['Wordpress', 'CSS'], 
      category: 'Websites', 
      liveUrl: 'https://arahglobal.com/', 
      image: project10Image },
    { id: 11, 
      title: 'Twiport', 
      description: 'A comprehensive logistics management platform designed to streamline operations and enhance efficiency.', 
      technologies: ['Wordpress', 'CSS'], 
      category: 'Websites', 
      liveUrl: 'https://twiport.com/homepage', 
      image: project11Image },
    { id: 12, 
      title: 'MICE Asia', 
      description: 'A leading platform for meetings, incentives, conferences, and exhibitions in Asia.', 
      technologies: ['Wordpress', 'CSS'], 
      category: 'Websites',
      liveUrl: 'https://miceasia.asia/homepage', 
      image: project12Image },
      { id: 3, 
      title: 'Artificial Intelligence for customer support', 
      description: 'Enterprise-grade AI agents that solve your hardest support challenges.', 
      technologies: ['Wordpress', 'CSS'], 
      category: 'Websites',
       liveUrl: 'https://www.markprompt.com/', 
       image: project3Image },
    { id: 13, 
      title: 'SaharaLanka CRM System', 
      description: 'A comprehensive CRM system tailored for SaharaLanka.', 
      technologies: ['Laravel', 'Php', 'MySQL'], 
      category: 'Systems', 
      images: [sahara1, sahara2, sahara3, sahara4], 
      image: project13Image },
    { id: 14, 
      title: 'Sevena CRM System', 
      description: 'A comprehensive CRM system tailored for Sevena.', 
      technologies: ['Laravel', 'Php', 'MySQL'], 
      category: 'Systems', 
      images: [sevena1, sevena2, sevena3,sevena4], 
      image: project14Image },
    { id: 15, 
      title: 'Webxkey CRM System', 
      description: 'A comprehensive CRM system tailored for Webxkey.', 
      technologies: ['Laravel', 'Php', 'MySQL'], 
      category: 'Systems', 
      images: [webxkey1, webxkey2, webxkey3], 
      image: project15Image },
    { id: 16, 
      title: 'WorldenLanka CRM System', 
      description: 'A comprehensive CRM system tailored for WorldenLanka.', 
      technologies: ['Laravel', 'Php', 'MySQL'], 
      category: 'Systems', 
      images: [world1, world2, world3, world4], 
      image: project16Image },
    { id: 5, 
      title: 'Burger shop Mobile App', 
      description: 'A robust mobile application for a burger shop, allowing users to browse the menu, place orders, and make payments seamlessly.', 
      technologies: ['React Native', 'Node.js', 'Express', 'MongoDB'], 
      category: 'Mobile App', 
      images: [burgershop], 
      image: project5Image },
    { id: 17, 
      title: 'Indoor Booking Mobile App', 
      description: 'A robust mobile application for indoor booking, allowing users to browse available spaces, make reservations, and manage bookings seamlessly.', 
      technologies: ['React Native', 'Node.js', 'Express', 'MongoDB'], 
      category: 'Mobile App', 
      images: [indoor], 
      image: project17Image },
    { id: 18, 
      title: 'Abby - Your AI Therapist App', 
      description: 'Abby is an AI-powered therapy assistant providing 24/7 mental health support.', 
      technologies: ['React', 'API', 'CSS'], 
      category: 'Mobile App', 
      liveUrl: 'https://abby.gg/', 
      image: project6Image },
  ];

  const filteredProjects = projects.filter(project => selectedCategory === 'All' || project.category === selectedCategory);
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('show');
          else entry.target.classList.remove('show');
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach(card => card && observer.observe(card));
    return () => observer.disconnect();
  }, [visibleProjects]);

  const handleNext = (images) => setCurrentSlide((prev) => (prev + 1) % images.length);
  const handlePrev = (images) => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>

      {/* Category Tabs */}
      <div className="project-categories">
        {['All','Websites', 'Systems', 'Mobile App'].map(cat => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => { setSelectedCategory(cat); setShowAll(false); }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {visibleProjects.map((project, index) => (
          <div
            key={project.id}
            className="project-card"
            ref={el => (cardsRef.current[index] = el)}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} className="project-img" />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <button
                  className="live-demo-btn"
                  onClick={() => { setActivePopup(project.id); setCurrentSlide(0); }}
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && filteredProjects.length > 6 && (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button className="load-more-btn" onClick={() => setShowAll(true)}>Load More Projects</button>
        </div>
      )}

      {/* Popups */}
      {projects.map(project => (
        <div
          key={`popup-${project.id}`}
          className={`live-demo-popup ${activePopup === project.id ? 'open' : ''}`}
        >
          <button className="close" onClick={() => setActivePopup(null)}>&times;</button>

          {project.images ? (
            <div className="slider-container">
              <button className="prev" onClick={() => handlePrev(project.images)}>&lt;</button>
              <img src={project.images[currentSlide]} alt={`${project.title} Slide`} />
              <button className="next" onClick={() => handleNext(project.images)}>&gt;</button>
            </div>
          ) : (
            <iframe src={project.liveUrl} title={project.title}></iframe>
          )}
        </div>
      ))}
    </section>
  );
};

export default Projects;
