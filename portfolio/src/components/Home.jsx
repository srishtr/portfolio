import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Instagram } from 'lucide-react';
import BreachVR from '../assets/BreachVR.jpg';
import VerdiNyheter from '../assets/Verdi_Nyheter.jpeg';
import MeGreece from '../assets/Me_Greece.jpeg';
import ISAT from '../assets/ISAT.JPG';

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Fullstack Developer", "Problem Solver", "Pharmacist", "Ambitious", "Forever Student", "Foodie", "Travel Enthusiast"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 25 : 30);

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
          transition={{ duration: 0.9 }}
          className="hero-text"
        >
          <span className="greeting">Hello, I'm</span>
          <h1 className="name">Srishti Rohatgi</h1>
          <p className="description" style={{ minHeight: '30px' }}>
            {text}<span className="cursor">|</span>
          </p>
          

          <div className="social-links">
            <a href="https://github.com/srishtr" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/srishti-rohatgi-a821b066" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/srishtir_98" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram size={24} />
            </a>
            <a href="mailto:srishti.rohatgi26@gmail.com" className="social-icon">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 20 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="hero-visuals"
        >
          <div className="visual-card card-1">
            <img src={BreachVR} alt="BreachVR Project" />
          </div>
          <div className="visual-card card-2">
            <img src={MeGreece} alt="Srishti in Greece" />
          </div>
          <div className="visual-card card-3">
            <img src={VerdiNyheter} alt="Verdi Nyheter" />
          </div>
          <div className="visual-card card-4">
            <img src={ISAT} alt="ISAT" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};


export default Home;
