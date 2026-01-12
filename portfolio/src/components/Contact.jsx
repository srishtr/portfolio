import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MessageSquare, MapPin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Construct mailto link
        const mailtoLink = `mailto:srishti.rohatgi26@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        
        window.location.href = mailtoLink;
    };

    return (
        <div className='section-content contact-container'>
            <motion.div 
                className="section-header"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2>Let's Connect <MessageSquare className="header-icon" size={28} /></h2>
            </motion.div>

            <div className="contact-grid">
                {/* Contact Info Card */}
                <motion.div 
                    className="contact-info-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h3>Get in touch</h3>
                    <p className="contact-text">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="info-items">
                        <div className="info-item">
                            <div className="info-icon-box">
                                <Mail size={20} />
                            </div>
                            <div>
                                <span className="info-label">Email me at</span>
                                <a href="mailto:srishti.rohatgi26@gmail.com" className="info-link">srishti.rohatgi26@gmail.com</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon-box">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <span className="info-label">Location</span>
                                <p className="info-text">Trondheim, Norway</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-socials">
                        <h4>Follow me</h4>
                        <div className="social-row">
                            <a href="https://www.linkedin.com/in/srishti-rohatgi-a821b066" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                                <Linkedin size={20} /> LinkedIn
                            </a>
                            <a href="https://github.com/srishtr" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                                <Github size={20} /> GitHub
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Message Form */}
                <motion.div 
                    className="contact-form-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                placeholder="What's your name?"
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                placeholder="Where can I reply?" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                value={formData.subject} 
                                onChange={handleChange} 
                                placeholder="What is this about?" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange} 
                                placeholder="Write your message here..." 
                                rows="5"
                                required 
                            ></textarea>
                        </div>

                        <button type="submit" className="send-btn">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
