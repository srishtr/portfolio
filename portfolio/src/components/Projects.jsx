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
            title: "Investment Company Website",
            status: "Under construction",
            image: under_construction,
            technologies: ["React", "Tailwind CSS", "Vite"],
            description:
                "A corporate website for an investment company focused on clarity, trust, and performance.",
            learned:
                "Designing for credibility, structuring content for investors, and building reusable UI components."
        },
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
            title: "VR Game for Blind People",
            status: "Proof of concept",
            image: lasermatrix,
            technologies: ["Unity", "C#", "Spatial Audio"],
            description:
                "A VR experience using spatial audio and haptic feedback to enable navigation without sight.",
            learned:
                "Accessibility-first design, non-visual UX, and rapid prototyping."
        },
        {
            title: "Wedding Website",
            status: "Under construction",
            image: under_construction, // Placeholder
            technologies: ["React", "Tailwind CSS"],
            description:
                "A personalized wedding website with event details, RSVP, and gallery.",
            learned:
                "Client-oriented design, emotional storytelling, and responsive layouts."
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
                <h2>Projects <Layout className="header-icon" size={28} /></h2>
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
                            
                            <div className="learnings">
                                <span className="learnings-label">Key Learnings:</span>
                                <p>{project.learned}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
