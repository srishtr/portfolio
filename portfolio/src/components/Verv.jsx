import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, MapPin } from 'lucide-react';
import verdiLogo from '../assets/verdi-logo.png';
import isatLogo from '../assets/isat-logo.png';
import ntnuLogo from '../assets/ntnu-logo-png.png'; // Placeholder for AbaInvest

const Verv = () => {
  const vervData = [
    {
      organization: "Verdi NTNU",
      role: "Board Member", // Add specific role if known, or generic
      year: "2023 - Present", 
      location: "Trondheim, Norway",
      logo: verdiLogo,
      description: "Student association for digitization and innovation at NTNU."
    },
    {
      organization: "ISAT NTNU",
      role: "Member",
      year: "2022 - 2023",
      location: "Trondheim, Norway",
      logo: isatLogo,
      description: "International Student Association of Trondheim."
    },
    {
      organization: "AbaInvest",
      role: "Analyst",
      year: "2023 - Present",
      location: "Trondheim, Norway",
      logo: ntnuLogo, // Placeholder
      description: "Student-run investment fund at NTNU."
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
        <h2>Student Associations <Users className="header-icon" size={28} /></h2>
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
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Verv;

