import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleLinkClick = (e, targetId) => {
    e.preventDefault()
    closeMenu()
    const target = document.querySelector(targetId)
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-brand">Arbin Budhathoki</div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About</a></li>
          <li><a href="#skills" onClick={(e) => handleLinkClick(e, '#skills')}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>Projects</a></li>
          <li><a href="#experience" onClick={(e) => handleLinkClick(e, '#experience')}>Experience</a></li>
          <li><a href="#education" onClick={(e) => handleLinkClick(e, '#education')}>Education</a></li>
          <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a></li>
        </ul>
        <button 
          className="nav-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
