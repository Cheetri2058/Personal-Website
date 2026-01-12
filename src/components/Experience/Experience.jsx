import React from 'react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      category: 'Academic & Project Experience',
      items: [
        'Built multiple software projects individually and in teams',
        'Debugged and improved existing codebases',
        'Applied object-oriented programming principles',
        'Collaborated using Git and version control workflows'
      ]
    },
    {
      category: 'IT & Technical Exposure',
      items: [
        'Assisted with basic system troubleshooting and technical support tasks',
        'Gained experience working with operating systems and software environments',
        'Developed strong documentation and communication habits'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-content">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3 className="experience-category">{exp.category}</h3>
              <ul className="experience-list">
                {exp.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
