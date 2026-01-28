import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'NKU Find It - Campus Lost & Found Web App',
      description: 'Built a full-stack web app to report, search, and claim lost items across campus. Developed a React + TypeScript frontend with search and filter functionality. Implemented a Django backend with SQL database for item management and claims.',
      technologies: ['React', 'TypeScript', 'Django', 'SQL'],
      githubLink: '#'
    },
    {
      title: 'Seattle Airbnb Pricing & Revenue Dashboard',
      description: 'Uncovered seasonal revenue trends and property performance metrics to identify high-growth investment opportunities. Cleaned and joined datasets using Python; managed cloud storage and SQL querying via Amazon S3 and Athena.',
      technologies: ['Tableau', 'Python', 'AWS', 'SQL'],
      githubLink: '#',
      tableauLink: 'https://public.tableau.com/app/profile/arbin.budhathoki/viz/AirBnBFullProject_17667062010280/Dashboard1?publish=yes'
    },
    {
      title: 'Global Layoffs Data Cleaning Pipeline',
      description: 'Automated the removal of duplicates and standardized null values, resulting in a 100% analysis-ready dataset. Applied advanced SQL techniques, including CTEs and Window Functions, to transform raw data.',
      technologies: ['MySQL', 'Excel', 'AWS', 'SQL'],
      githubLink: '#'
    },
    {
      title: 'NKU Housing Finder - Android Application',
      description: 'Built mobile app using MVVM architecture, LiveData, and ViewModel for efficient data handling and UI updates. Integrated housing filters, roommate matching criteria, and interactive UI components for 15,000+ potential students.',
      technologies: ['Kotlin', 'Android', 'MVVM', 'LiveData'],
      githubLink: '#'
    },
    {
      title: 'Network Topology - Network Topology Mapper',
      description: 'Led team in designing optimized network topology for multi-branch data flow, ensuring adherence to best practices and standards. Provided technical guidance and fostered collaboration to overcome challenges and complete project on time.',
      technologies: ['Network Design', 'TCP/IP', 'System Architecture'],
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
              <div className="project-links">
                {project.tableauLink && (
                  <a 
                    href={project.tableauLink} 
                    className="project-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Dashboard →
                  </a>
                )}
                {project.githubLink && project.githubLink !== '#' && (
                  <a 
                    href={project.githubLink} 
                    className="project-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
