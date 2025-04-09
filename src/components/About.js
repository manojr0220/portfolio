import { forwardRef } from "react"
import "./About.css"

const About = forwardRef((props, ref) => {
  return (
    <section id="about" ref={ref} className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="section-content">
          <div className="about-summary">
            <h3>Profile Summary</h3>
            <p>
              Detail-oriented and results-driven Frontend Developer with hands-on experience in modern web development.
              Proficient in front-end technologies (HTML, CSS, JavaScript, React.js, TypeScript). Adept at building
              dynamic and responsive websites with a focus on user experience. Passionate about creating efficient,
              user-centric solutions and continuously enhancing application performance.
            </p>
          </div>

          <div className="about-contact">
            <h3>Contact Information</h3>
            <ul className="contact-list">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+919944025367</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>manojr9944@gmail.com</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Coimbatore, Tamil Nadu</span>
              </li>
            </ul>
          </div>

          <div className="about-soft-skills">
            <h3>Soft Skills</h3>
            <ul className="soft-skills-list">
              <li>Leadership</li>
              <li>Problem Solving</li>
              <li>Adaptive Thinking</li>
              <li>Communication</li>
              <li>Team Collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
})

export default About
