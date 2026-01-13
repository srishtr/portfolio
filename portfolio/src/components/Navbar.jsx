import React, { useState } from 'react';
import { Menu, X, User, GraduationCap, Code, Briefcase, Mail, Home, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import '../App.css'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = [
        { path: '#home', name: 'Home', icon: <Home size={20} /> },
        { path: '#about', name: 'About', icon: <User size={20} /> },
        { path: '#education', name: 'Education', icon: <GraduationCap size={20} /> },
        { path: '#projects', name: 'Projects', icon: <Briefcase size={20} /> },
        { path: '#verv', name: 'Associations', icon: <Users size={20} /> },
        { path: '#skills', name: 'Skills', icon: <Code size={20} /> },
        { path: '#contact', name: 'Contact', icon: <Mail size={20} /> },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <X color="#4A4A4A" /> : <Menu color="#4A4A4A" />}
                </div>

                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    {navItems.map((item, index) => (
                        <li key={index} className="nav-item">
                            <a 
                                href={item.path} 
                                className="nav-links"
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="nav-icon">{item.icon}</span>
                                <span className="nav-text">{item.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
