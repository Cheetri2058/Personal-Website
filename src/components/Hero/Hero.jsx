import React from 'react'
import './Hero.css'
// Import your profile photo - uncomment and update the path to your actual image
// import profilePhoto from '../../assets/images/profile.jpg'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const target = document.querySelector(sectionId)
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  // Update this path to your actual profile photo
  // Option 1: If image is in public folder, use: '/profile.jpg'
  // Option 2: If image is in src/assets/images, import it at the top and use the imported variable
  // Option 3: Use an external URL
  const profilePhoto = '/profile.jpg' // Place your image in the public folder, or update this path

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-image-container">
            <img 
              src={profilePhoto} 
              alt="Arbin Budhathoki - Software Engineer" 
              className="hero-image"
              loading="lazy"
              onError={(e) => {
                // Fallback if image doesn't exist
                e.target.style.display = 'none'
              }}
            />
          </div>
          <div className="hero-content">
            <h1 className="hero-headline">
              Greetings, my name is <span className="highlight">Arbin Budhathoki</span>. I am a Computer Science graduate (Cum Laude) dedicated to bridging the gap between complex IT infrastructure and actionable data insights. With a technical toolkit featuring SQL, Python, and Java, I specialize in building robust data pipelines and interactive dashboards that transform raw information into strategic decisions.
            </h1>
            <p className="hero-subheadline">
              I'm actively seeking opportunities where I can leverage my technical expertise and problem-solving skills to drive impactful solutions.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('#projects') }}>
                View Projects
              </a>
              <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('#contact') }}>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
