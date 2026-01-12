import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Development',
      skills: ['Python', 'Java', 'JavaScript', 'SQL', 'HTML & CSS']
    },
    {
      title: 'Systems & IT',
      skills: ['Windows & Linux fundamentals', 'Networking basics', 'System troubleshooting', 'Hardware & software support']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git & GitHub', 'VS Code', 'Command Line', 'Basic cloud concepts']
    },
    {
      title: 'Strengths',
      skills: ['Problem-solving', 'Clear communication', 'Fast learner', 'Attention to detail']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
