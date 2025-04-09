import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sections = [
    { id: "home", ref: heroRef, label: "Home" },
    { id: "about", ref: aboutRef, label: "About" },
    { id: "skills", ref: skillsRef, label: "Skills" },
    { id: "education", ref: educationRef, label: "Education" },
    { id: "experience", ref: experienceRef, label: "Experience" },
    { id: "projects", ref: projectsRef, label: "Projects" },
    { id: "contact", ref: contactRef, label: "Contact" }
  ];

  const scrollToSection = (id) => {
    const section = sections.find(section => section.id === id);
    if (section && section.ref.current) {
      section.ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      sections.forEach(section => {
        if (section.ref.current) {
          const element = section.ref.current;
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + height - 100) {
            document.querySelectorAll('.nav-link').forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('data-section') === section.id) {
                link.classList.add('active');
              }
            });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar sections={sections.map(s => ({ id: s.id, label: s.label }))} onNavClick={scrollToSection} />
      <Hero ref={heroRef} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Education ref={educationRef} />
      <Experience ref={experienceRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
