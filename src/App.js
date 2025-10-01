import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FaWhatsapp } from "react-icons/fa";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />

      {/* WhatsApp Contact Button */}
      <a
        href="https://wa.me/+94761265772"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-contact"
      >
        <FaWhatsapp className="whatsapp-icon" />
        <span>Need Help? Contact Me</span>
      </a>
    </div>
  );
}

export default App;
