import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Instagram } from 'lucide-react';

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Fullstack Developer", "Problem Solver", "Pharmacist", "Ambitious"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); 
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

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
          <p className="description" style={{ minHeight: '30px' }}>
            {text}<span className="cursor">|</span>
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
            <a href="https://www.linkedin.com/in/srishti-rohatgi-a821b066" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={24} />
            </a>
            <a href="https://https://www.instagram.com/srishtir_98/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram size={24} />
            </a>
            <a href="mailto:srishti.rohatgi26@gmail.com" className="social-icon">
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
