"use client"

import { forwardRef } from "react"
import "./Hero.css"

const Hero = forwardRef((props, ref) => {
  return (
    <section id="home" ref={ref} className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-name">MANOJ R</h1>
          <h2 className="hero-title">FRONTEND DEVELOPER</h2>
          <p className="hero-description">
            Detail-oriented and results-driven Frontend Developer with hands-on experience in modern web technologies.
            Proficient in React, JavaScript, TypeScript and responsive design. Passionate about creating engaging user
            experiences.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="cta-button">
              Contact Me
            </a>
            <a href="/resume.pdf" className="cta-button secondary" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src="/placeholder.jpg" alt="Manoj R" />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
          <span className="sr-only">Scroll Down</span>
        </a>
      </div>
    </section>
  )
})

export default Hero
