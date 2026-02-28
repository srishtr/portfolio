import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, MapPin } from 'lucide-react';
import verdiLogo from '../assets/Verdi-logo.png';
import isatLogo from '../assets/Isat-logo.png';
import ntnuLogo from '../assets/AbaInvest.png'; 

const Verv = () => {
  const vervData = [
    {
      organization: "Verdi NTNU",
      role: "Board Member", 
      year: "2023 - 2025", 
      location: "Trondheim, Norway",
      logo: verdiLogo,
      description: "NTNU's largest finance association. With a fund of more than 700 000 NOK. We do stock analysis and manage a portfolio to gain practical experience in finance and investment strategies.."
    },
    {
      organization: "ISAT NTNU",
      role: "Member",
      year: "2023 - 2025",
      location: "Trondheim, Norway",
      logo: isatLogo,
      description: "Co-Founder, former CFO, former CEO. ISAT is a student association for students with indian background or interesst in indian culture. It is a social platform. We started with 3 members and now they have more than 100 members ."
    },
    {
      organization: "AbaInvest",
      role: "Analyst",
      year: "2025 - Present",
      location: "Trondheim, Norway",
      logo: ntnuLogo, 
      description: "Student-run investment fund for Abakus at NTNU. We do stock analysis and manage a portfolio to gain practical experience in finance and investment strategies.",
      link: "https://abakus.no/pages/grupper/128-abainvest"
    }
  ];

  return (
    <div className='section-content verv-container'>
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2>Student Associations</h2>
      </motion.div>

      <div className="verv-grid">
        {vervData.map((verv, index) => (
          <motion.div 
            key={index}
            className="verv-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={verv.logo} alt={`${verv.organization} logo`} className="verv-logo" />
            
            <div className="verv-details">
              <h3>{verv.organization}</h3>
              <h4 className="verv-role">{verv.role}</h4>
              
              <div className="verv-meta">
                <span className="meta-item">
                  <Calendar size={16} /> {verv.year}
                </span>
                <span className="meta-item">
                  <MapPin size={16} /> {verv.location}
                </span>
              </div>
              
              <p className="verv-description">{verv.description}</p>
              {verv.link && (
                <a 
                  href={verv.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ 
                    color: 'var(--accent)', 
                    fontWeight: 500, 
                    marginTop: '0.5rem', 
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--accent)'
                  }}
                >
                  Visit Website
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Verv;

