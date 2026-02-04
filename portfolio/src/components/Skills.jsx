import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Database, Layout, PenTool, Terminal } from 'lucide-react';

const skills = [
  {
    category: "Programming Languages",
    items: ["Java","Python", "TypeScript", "JavaScript", "SQL", "C#"],
  },
  {
    category: "Frontend Development",
    items: ["React", "Tailwind CSS", "Vite", "Responsive UI Design", "Astro"],
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "GitHub", "VS Code", "Android Studio", "Unity 6"],
  },
  {
    category: "Design",
    items: ["UI Design", "Design-to-Code", "Figma"],
  },
  {
    category: "Analysis & Business",
    items: ["Financial Analysis", "DCF Analysis", "Requirements Analysis", "Multiple Case Analysis", "SWOT Analysis", "Market Research"],
  },
  {
    category: "Enterprise Systems",
    items: ["DIPS", "Aposys", "Farmapro", "Nissy"],
  },
  {
    category: "Platforms",
    items: ["Vercel", "One.com", "Namecheap"],
  },
  {
    category: "Productivity",
    items: ["Microsoft Office Suite", "Scrum", "Agile Methodologies"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <div className='section-content skills-container'>
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2>My Skills</h2>
      </motion.div>

      <motion.div 
        className="skills-layout"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((group, index) => (
          <motion.div 
            key={group.category} 
            className="skill-group"
            variants={itemVariants}
          >
            <h3 className="skill-category-title">
              {group.category}
            </h3>

            <div className="skill-items">
              {group.items.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="skill-line"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
