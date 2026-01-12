import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pill, Code, TrendingUp, Brain, Sparkles } from 'lucide-react';

const AboutMe = () => {
  const [guessMessage, setGuessMessage] = useState(null);
  const [guessStatus, setGuessStatus] = useState(''); // 'correct' or 'wrong'

  const handleAgeGuess = (age) => {
    if (age === 27) {
      setGuessMessage("You are a genius! 👍");
      setGuessStatus('correct');
    } else {
      setGuessMessage("Guess again");
      setGuessStatus('wrong');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className='section-content about-container'>
      <motion.div 
        className="about-header"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2>About Me <Sparkles className="sparkle-icon" size={24} /></h2>
      </motion.div>
      
      <motion.div 
        className="about-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="about-intro" variants={itemVariants}>
          <p className="intro-text">
            Age is just a number—so go ahead and guess mine 😉
          </p>
        </motion.div>

        <motion.div className="about-card pharmacy-card" variants={itemVariants}>
          <div className="card-icon"><Pill size={32} /></div>
          <h3>The Pharmacist</h3>
          <p>
            Here’s a small hint: I have a bachelor’s degree in pharmacy, I’ve worked in several pharmacies, 
            and at one point I even ended up as <strong>Chief Pharmacist</strong>.
            I guess I don’t get bored very easily, because somewhere along the way I decided that 
            one complex field was not quite enough.
          </p>
        </motion.div>

        <motion.div className="about-card cs-card" variants={itemVariants}>
          <div className="card-icon"><Code size={32} /></div>
          <h3>The Developer</h3>
          <p>
            I’m currently in my fourth year of <strong>Computer Science</strong>, where I enjoy building software 
            with the same attention to detail I use when working with medications.
          </p>
        </motion.div>

        <motion.div className="about-card finance-card" variants={itemVariants}>
          <div className="card-icon"><TrendingUp size={32} /></div>
          <h3>The Investor</h3>
          <p>
            When I’m not thinking about molecules or code, I spend time analysing the stock market. 
            That interest has turned into a personal portfolio with a return of more than <strong>100%</strong>.
          </p>
        </motion.div>

      
         <div className="age-game-container">
            <div className="age-buttons-row">
              <button onClick={() => handleAgeGuess(40)} className="age-option-btn">40</button>
              <button onClick={() => handleAgeGuess(27)} className="age-option-btn">27</button>
              <button onClick={() => handleAgeGuess(32)} className="age-option-btn">32</button>
            </div>
            
            {guessMessage && (
              <motion.div 
                key={guessMessage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`guess-feedback ${guessStatus}`}
              >
                {guessMessage}
              </motion.div>
            )}
          </div>

      </motion.div>
    </div>
  );
}

export default AboutMe;

