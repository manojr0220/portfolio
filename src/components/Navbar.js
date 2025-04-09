"use client"

import { useState, useEffect } from "react"
import "./Navbar.css"

function Navbar({ sections, onNavClick }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (id) => {
    onNavClick(id)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            {sections.map((section) => (
              <li key={section.id} className="nav-item">
                <a
                  href={`#${section.id}`}
                  className="nav-link"
                  data-section={section.id}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(section.id)
                  }}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
