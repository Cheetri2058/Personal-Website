import React from 'react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'ESPN Production Crew - IT Infrastructure and Operations',
      organization: 'NKU',
      period: 'Aug 2024 – Dec 2025',
      items: [
        'Provided Tier 1 IT support for live events, including workstation setup, IP camera configuration, and rapid diagnosis of networking issues to minimize downtime',
        'Managed AV signal flow, cable organization, and system testing in high-pressure production environments',
        'Collaborated with technical and production teams to resolve hardware/software issues quickly, ensuring seamless event operations'
      ]
    },
    {
      title: 'Teaching Assistant, Introduction to Web Development',
      organization: 'Northern Kentucky University | Professor: Dr. Hongmei Wang',
      period: 'Aug 2024 – May 2025',
      items: [
        'Led weekly lab sessions for 20+ students, teaching HTML, CSS, and JavaScript through hands-on coding exercises',
        'Delivered personalized feedback and coding support, improving student performance and comprehension',
        'Assisted in developing course materials and grading assignments'
      ]
    },
    {
      title: 'Student Union Operations Assistant',
      organization: 'Northern Kentucky University',
      period: 'Jun 2023 – Dec 2025',
      items: [
        'Managed logistical coordination for high-volume campus events, ensuring 100% accuracy in facility records and equipment tracking',
        'Resolved 20+ daily technical and operational inquiries, utilizing troubleshooting skills to maintain efficient daily operations in a fast-paced environment'
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
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                {exp.organization && <p className="experience-organization">{exp.organization}</p>}
                <p className="experience-period">{exp.period}</p>
              </div>
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
