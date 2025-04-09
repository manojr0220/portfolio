import { forwardRef } from "react"
import "./Education.css"

const Education = forwardRef((props, ref) => {
  return (
    <section id="education" ref={ref} className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-card">
          <div className="education-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>

          <div className="education-content">
            <h3 className="education-degree">B.E. / B.Tech</h3>
            <h4 className="education-institution">KONGU ENGINEERING COLLEGE</h4>

            <div className="education-details">
              <div className="education-period">
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
                <span>2019 - 2023</span>
              </div>
              <div className="education-grade">
                <span>CUMULATIVE PERCENTAGE: 80.4%</span>
              </div>
            </div>

            <div className="education-description">
              <ul>
                <li>
                  Trained extensively in web development technologies and frameworks, focusing on frontend design and
                  implementation under expert guidance.
                </li>
                <li>
                  Gained practical experience by building small-scale e-commerce applications and other web projects as
                  part of learning exercises.
                </li>
                <li>
                  Improved understanding of API integration and debugging by working on simulated tasks and hands-on
                  assignments.
                </li>
                <li>
                  Developed responsive and interactive web pages, applying theoretical knowledge to practical scenarios
                  to enhance skills in real-world application development.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Education
