import React from 'react'
import './Contact.css'

const Contact = () => {
  const contactLinks = [
    {
      icon: '📧',
      text: 'arbin.budhathoki@email.com',
      href: 'mailto:arbin.budhathoki@email.com'
    },
    {
      icon: '🔗',
      text: 'LinkedIn',
      href: 'https://linkedin.com/in/arbinbudhathoki',
      external: true
    },
    {
      icon: '💻',
      text: 'GitHub',
      href: 'https://github.com/arbinbudhathoki',
      external: true
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <p className="contact-intro">Let's connect.</p>
          <p className="contact-description">
            I'm open to full-time, entry-level opportunities in software engineering, IT support, or systems engineering.
          </p>
          <div className="contact-links">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="contact-link"
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                <span className="contact-icon">{link.icon}</span>
                <span>{link.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
