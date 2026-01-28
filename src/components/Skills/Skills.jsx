import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python (Pandas/NumPy)', 'Java', 'SQL (MySQL, SQL Server)', 'JavaScript', 'TypeScript', 'Kotlin', 'C++', 'Bash', 'PowerShell', 'HTML/CSS']
    },
    {
      title: 'IT & Systems',
      skills: ['Windows', 'Linux (Ubuntu)', 'Active Directory', 'DNS', 'DHCP', 'TCP/IP', 'VPN', 'R-Desktop', 'GoTo Resolve', 'Team Dynamix']
    },
    {
      title: 'Networking & Support',
      skills: ['Tier 1 Troubleshooting', 'Hardware/Software Support', 'AV Systems', 'IP Devices', 'Ticketing Systems', 'Network Topology']
    },
    {
      title: 'Data & Visualization Tools',
      skills: ['Tableau', 'Power BI', 'Excel (XLOOKUP, VLOOKUP, Pivot Tables, Power Query)', 'AWS (S3, Athena)']
    },
    {
      title: 'Development Tools',
      skills: ['VS Code', 'Visual Studio', 'Android Studio', 'Git', 'Django', 'React', 'TypeScript']
    },
    {
      title: 'Concepts & Architecture',
      skills: ['Database Design & Queries', 'Data Analytics', 'Data Structures & Algorithms', 'MVVM Architecture', 'Cybersecurity Fundamentals', 'Software Testing']
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
