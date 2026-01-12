import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Student Management System',
      description: 'Developed a console-based application to manage student records, including adding, updating, and retrieving data efficiently. Focused on clean code structure and data validation.',
      technologies: ['Java', 'OOP'],
      githubLink: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Designed and built a responsive personal portfolio website to showcase projects, skills, and experience. Focused on clean UI, accessibility, and performance.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      githubLink: '#'
    },
    {
      title: 'Data Analysis Mini Project',
      description: 'Worked with structured datasets to extract insights, clean data, and present results in a clear and readable format.',
      technologies: ['Python', 'SQL'],
      githubLink: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a 
                href={project.githubLink} 
                className="project-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
