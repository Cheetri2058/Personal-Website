import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            Computer Science graduate (Cum Laude) with hands-on IT support experience in live production environments and full-stack development projects. Proficient in troubleshooting networking issues, database management, and mobile/web app development using Kotlin, React, Django, and SQL.
          </p>
          <p>
            Specialized training in data analytics with proven ability to build data pipelines and interactive dashboards that drive decision-making. Experienced in providing Tier 1 IT support for live events, managing AV systems, and resolving hardware/software issues in high-pressure production environments.
          </p>
          <p>
            I bridge the gap between complex IT infrastructure and actionable data insights, specializing in building robust data pipelines, interactive dashboards, and full-stack applications that transform raw information into strategic decisions.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
