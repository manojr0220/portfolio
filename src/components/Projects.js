import { forwardRef } from "react"
import "./Projects.css"

const Projects = forwardRef((props, ref) => {
  const projects = [
    {
      title: "Zita Applicant Tracking System (ATS)",
      company: "Sense7ai",
      period: "Jan 2023 - Present",
      technologies: ["React", "TypeScript", "Redux", "Styled Components"],
      description: [
        "Developed a comprehensive frontend for an advanced applicant tracking system",
        "Built interactive candidate comparison tools with data visualization",
        "Implemented calendar integration for scheduling interviews and meetings",
        "Created responsive candidate profile pages with intuitive navigation",
        "Designed and implemented automated email notification templates",
      ],
    },
    {
      title: "Infrastride Website",
      company: "Sense7ai",
      period: "Aug 2024 - Present",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      description: [
        "Developed a modern, responsive website using React and TypeScript",
        "Implemented smooth animations and transitions using Framer Motion",
        "Optimized performance with lazy loading and code splitting techniques",
        "Ensured cross-browser compatibility and responsive design across all devices",
        "Implemented SEO best practices for improved search engine visibility",
      ],
    },
    {
      title: "Sense7AI Website",
      company: "Sense7ai",
      period: "Jan 2023 - Present",
      technologies: ["WordPress", "Custom CSS", "JavaScript", "PHP"],
      description: [
        "Designed and developed the corporate website using WordPress with custom themes",
        "Created custom interactive elements using JavaScript for enhanced user engagement",
        "Implemented responsive design principles for optimal viewing on all devices",
        "Optimized site performance through caching and image optimization",
        "Maintained and updated the website with new content and features",
      ],
    },
    {
      title: "Innovespace Website",
      company: "Sense7ai",
      period: "Jan 2023 - Present",
      technologies: ["React.js", "CSS Modules", "React Router", "Axios"],
      description: [
        "Built a dynamic website from scratch using React.js with modular components",
        "Implemented custom animations and transitions for an engaging user experience",
        "Created reusable component library for consistent UI across the application",
        "Integrated with backend APIs for dynamic content management",
        "Optimized for performance and accessibility",
      ],
    },
    {
      title: "Zita Website",
      company: "Sense7ai",
      period: "Jan 2023 - Present",
      technologies: ["React", "TypeScript", "SASS", "REST API"],
      description: [
        "Developed a modern marketing website for the Zita product using React",
        "Implemented responsive design with mobile-first approach",
        "Created interactive UI elements and animations to showcase product features",
        "Optimized for performance with image optimization and code splitting",
        "Implemented analytics tracking for user behavior analysis",
      ],
    },
  ]

  return (
    <section id="projects" ref={ref} className="projects">
      <div className="container">
        <h2 className="section-title">Project Experience</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-period">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>{project.period}</span>
                </div>
              </div>

              <h4 className="project-company">{project.company}</h4>

              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-description">
                <ul>
                  {project.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="project-link">
                <a href="#" className="view-project">
                  <span>View Project</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Projects
