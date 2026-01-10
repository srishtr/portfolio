import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Instagram } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-section">
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-text"
        >
          <span className="greeting">Hello, I'm</span>
          <h1 className="name">Srishti Rohatgi</h1>
          <h2 className="title">Frontend Developer & <span className="highlight">UI/UX Enthusiast</span></h2>
          <p className="description">
            I craft responsive, user-friendly web experiences with modern technologies.
            Passionate about building clean code and beautiful interfaces.
          </p>
          
          <div className="cta-container">
            <a href="#projects" className="primary-btn">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/srishtr" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={24} />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="social-icon">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-image"
        >
          {/* Placeholder for profile image or an abstract graphic */}
          <div className="profile-placeholder">
            <div className="blob"></div>
            <img src="https://ui-avatars.com/api/?name=Srishti+Rohatgi&background=646cff&color=fff&size=256" alt="Profile" className="profile-img" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
