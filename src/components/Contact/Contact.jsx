import React from 'react'
import './Contact.css'

const Contact = () => {
  const contactLinks = [
    {
      icon: '📧',
      text: 'arbinbudhathoki18096@gmail.com',
      href: 'mailto:arbinbudhathoki18096@gmail.com'
    },
    {
      icon: '📱',
      text: '(210)-895-9066',
      href: 'tel:+12108959066'
    },
    {
      icon: '🔗',
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/budhathokiarbin/',
      external: true
    },
    {
      icon: '🌐',
      text: 'Website',
      href: 'https://www.arbinbudhathoki.com.np/',
      external: true
    },
    {
      icon: '💻',
      text: 'GitHub',
      href: 'https://github.com/Cheetri2058',
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
            I'm open to full-time opportunities in data analytics, software engineering, and IT infrastructure. Let's connect and discuss how I can contribute to your team.
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
