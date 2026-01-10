import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Verv from './components/Verv'
import ExtraCurricular from './components/ExtraCurricular'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="verv">
          <Verv />
        </section>
        <section id="extracurricular">
          <ExtraCurricular />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default App
