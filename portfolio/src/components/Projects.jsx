import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Code, ExternalLink } from 'lucide-react';
import breachVR from '../assets/BreachVR.jpg';
import portfolio from '../assets/Portfolio-img.png';
import lasermatrix from '../assets/laser-matrix.png';
import under_construction from '../assets/cooming-soon.png';

const Projects = () => {
    const projects = [
        {
            title: "Web Portfolio",
            status: "Completed",
            image: portfolio,
            technologies: ["React", "Tailwind CSS"],
            description:
                "A personal portfolio showcasing projects, skills, and experience.",
            learned:
                "Component-based design, layout consistency, and visual hierarchy."
        },
        {
            title: "Laser Matrix - echoes of the motion",
            status: "Proof of concept",
            image: lasermatrix,
            technologies: ["Unity", "C#", "Spatial Audio"],
            description:
                "A VR experience using spatial audio and haptic feedback to enable navigation without sight. This VR game was developed during the course Customer Driven Project. The game is based on Laser Matrix developed by Breach VR. Breach was our customer and wanted to test if their game could be played by visually impaired individuals.",
            learned:
                "Scrum, team collaboration, Unity 6, spatial audio integration, adjusting to customer demand, VR-game, Meta Ocular Quest 2."
        },
         {
            title: "Investment Company Website",
            status: "Under construction",
            image: under_construction,
            technologies: ["not decided yet as this is a very new project"],
            description:
                "A website for an investment company. The website will focus on the companies core principles, showcasing their projects and their CEO",
        
        },
        {
            title: "Wedding Website",
            status: "Under construction",
            image: under_construction, // Placeholder
            technologies: ["not decided yet"],
            description:
                "This is a personal project for my own wedding. It's under development and is expected to be ready by summer 2026.",
        }
    ];

    return (
        <div className='section-content projects-container'>
            <motion.div
                className="section-header"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2>Projects</h2>
            </motion.div>

            <div className="projects-list">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-row"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="project-image-container">
                             {project.image && <img src={project.image} alt={project.title} className="project-image" />}
                        </div>

                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <span className={`status-badge ${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                                {project.status}
                            </span>
                            
                            <p className="project-description">{project.description}</p>
                            
                            <div className="tech-stack">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            
                            {project.learned && (
                                <div className="learnings">
                                    <span className="learnings-label">Key Learnings:</span>
                                    <p>{project.learned}</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
