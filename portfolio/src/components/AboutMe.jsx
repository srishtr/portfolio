import React from 'react';
import { motion } from 'framer-motion';
import { Pill, Code, TrendingUp, Brain, Sparkles } from 'lucide-react';

const AboutMe = () => {
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

        <motion.div className="about-conclusion" variants={itemVariants}>
          <div className="conclusion-content">
            <Brain className="brain-icon" size={40} />
            <p>
              What ties everything together is a strong curiosity for how systems work and how good decisions are made. 
              Whether it’s improving a treatment plan, solving a technical problem, or evaluating an investment, 
              I like breaking things down, understanding the details, and finding better solutions. 
              I don’t focus much on titles or hype—I prefer learning, doing solid work, and letting the results speak for themselves.
            </p>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default AboutMe;

