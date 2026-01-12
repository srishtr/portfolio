import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import ntnuLogo from '../assets/ntnu-logo-png.png';
import oslometLogo from '../assets/oslomet_logo.png';

const Education = () => {
  const educationData = [
    {
      school: "NTNU",
      degree: "Master i Datateknologi",
      year: "2022 - Present", 
      location: "Trondheim, Norway",
      logo: ntnuLogo,
      description: "Specializing in Software Development and have had subjects related to training AI and ML-models."
    },
    {
      school: "OsloMet",
      degree: "Bachelor's Degree in Pharmacy",
      year: "2017 - 2020",
      location: "Oslo, Norway",
      logo: oslometLogo,
      description: "Focus on pharmacology, medicinal chemistry, and patient care."
    }
  ];

  return (
    <div className='section-content education-container'>
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2>Education <GraduationCap className="header-icon" size={28} /></h2>
      </motion.div>

      <div className="education-grid">
        {educationData.map((edu, index) => (
          <motion.div 
            key={index}
            className="education-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="edu-logo-container">
              <img src={edu.logo} alt={`${edu.school} logo`} className="edu-logo" />
            </div>
            
            <div className="edu-details">
              <h3>{edu.degree}</h3>
              <h4 className="school-name">{edu.school}</h4>
              
              <div className="edu-meta">
                <span className="meta-item">
                  <Calendar size={16} /> {edu.year}
                </span>
                <span className="meta-item">
                  <MapPin size={16} /> {edu.location}
                </span>
              </div>
              
              <p className="edu-description">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Education;

