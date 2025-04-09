import { forwardRef } from "react"
import "./Experience.css"

const Experience = forwardRef((props, ref) => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Sense7ai | Coimbatore",
      period: "Mar 2023 - Present",
      responsibilities: [
        "Designed and developed responsive web applications using React, JavaScript, and TypeScript",
        "Built and maintained reusable component libraries to ensure consistent UI across applications",
        "Implemented modern CSS techniques and animations to enhance user experience",
        "Integrated RESTful APIs and managed application state using Redux",
        "Collaborated with UX/UI designers to implement pixel-perfect interfaces",
        "Optimized application performance through code splitting, lazy loading, and other frontend optimization techniques",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "Sense7ai | Coimbatore",
      period: "Jan 2023 - April 2023",
      responsibilities: [
        "Assisted in the development of web applications using React.js",
        "Created responsive layouts and implemented UI components based on design specifications",
        "Collaborated with senior developers to implement frontend features and fix UI bugs",
        "Gained hands-on experience with modern frontend development workflows and best practices",
        "Participated in code reviews to improve code quality and learn industry standards",
      ],
    },
  ]

  return (
    <section id="experience" ref={ref} className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item" style={{ animationDelay: `${index * 0.3}s` }}>
              <div className="experience-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>

              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-period">
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
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h4 className="experience-company">{exp.company}</h4>

                <div className="experience-description">
                  <ul>
                    {exp.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Experience
