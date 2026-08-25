import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Code, ExternalLink } from 'lucide-react';
import breachVR from '../assets/BreachVR.jpg';
import portfolio from '../assets/Portfolio-img.png';
import lasermatrix from '../assets/laser-matrix.png';
import under_construction from '../assets/cooming-soon.png';
import HKS_website from '../assets/HKS_webpage.png';
import KnowledgeBase from '../assets/KnowledgeBase.png';
import SHevents from '../assets/SHEvents.png';


const Projects = () => {
    const projects = [
        {
            title: "Knowledgebased RAG Chatbot",
            status: "completed",
            image: KnowledgeBase,
            technologies: ["Docker, PostgreSQL + pgvector, Streamlit, Redis, SentenceTransformer, Python, anthropic, Claude Sonnet 4.6"],
            description:
                "This is my private RAG (Retrieval-Augmented Generation) chatbot built with Streamlit, designed as an academic knowledge base. I upload a pdf-file, and the system splits it into overlapping text chunks, then it generates vector embeddings for each chunk, and stores them in PostgreSQL with pgvector extension. When I ask a question, it embeds my query, finds the 3 most semantically similar chunks, and sends them as context to Claude. Claude answers using ONLY that retrieved context.",
        },

        {
            title: "HKS Investment AS, Company Website",
            status: "completed",
            image: HKS_website,
            technologies: ["Astro, Tailwind CSS"],
            description:
                "A website for an investment company. The website will focus on the companies core principles, showcasing their projects and their CEO",
            link: "https://www.hksinvest.no"
        },

        {
            title: "Events Website",
            status: "Completed",
            image: SHevents , // Placeholder
            technologies: ["Firestore, OAuth, OOP"],
            description:
                "All of our events will be hosted on this website. Invite will be sent, RSVP, and all the information about the events will be available on this website. It is also possible to upload photos from the events and view them from a public or personal gallary"
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
            title: "Laser Matrix - echoes of the motion",
            status: "Proof of concept",
            image: lasermatrix,
            technologies: ["Unity", "C#", "Spatial Audio"],
            description:
                "A VR experience using spatial audio and haptic feedback to enable navigation without sight. This VR game was developed during the course Customer Driven Project. The game is based on Laser Matrix developed by Breach VR. Breach was our customer and wanted to test if their game could be played by visually impaired individuals.",
            learned:
                "Scrum, team collaboration, Unity 6, spatial audio integration, adjusting to customer demand, VR-game, Meta Ocular Quest 2."
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

                            {project.link && (
                                <a 
                                  href={project.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    marginBottom: '1rem',
                                    color: 'var(--accent)',
                                    fontWeight: '600',
                                    textDecoration: 'none'
                                  }}
                                  className="project-link"
                                >
                                  Visit Website <ExternalLink size={16} />
                                </a>
                            )}
                            
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
