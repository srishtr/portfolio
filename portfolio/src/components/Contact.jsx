import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MessageSquare, MapPin } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const data = {
            ...formData,
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'e6449125-2af1-4066-b067-9cb884609505'
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            } else {
                console.log("Error", result);
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            }
        } catch (error) {
            console.log("Error", error);
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
        }
    };

    return (
        <div className='section-content contact-container'>
            <motion.div 
                className="section-header"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2>Let's Connect</h2>
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

                        <button type="submit" className="send-btn" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={18} />
                        </button>
                        
                        {status === 'success' && (
                            <p style={{ color: '#4ade80', marginTop: '1rem', fontSize: '0.9rem' }}>
                                Message sent successfully! I'll get back to you soon.
                            </p>
                        )}
                        
                        {status === 'error' && (
                            <p style={{ color: '#ef4444', marginTop: '1rem', fontSize: '0.9rem' }}>
                                Something went wrong. Please try again or email me directly at srishti.rohatgi26@gmail.com.
                            </p>
                        )}
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
