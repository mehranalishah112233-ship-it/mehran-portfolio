import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo">
          <span>M</span>
          <div>
            <strong>Mehran Ali Shah</strong>
            <small>Software Engineer</small>
          </div>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="mailto:mehranalishah112233@gmail.com"
          className="nav-button"
        >
          Let's Talk
        </a>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-bg-circle circle-one"></div>
        <div className="hero-bg-circle circle-two"></div>

        <div className="hero-left">
          <div className="availability">
            <span></span>
            Available for opportunities
          </div>

          <p className="hero-small">HELLO, I'M</p>

          <h1>
            Mehran <span>Ali Shah</span>
          </h1>

          <h2>
            Software Engineer <b>&</b> Web Developer
          </h2>

          <p className="hero-text">
            I build modern, responsive and user-focused web applications
            using modern software engineering technologies and clean,
            maintainable code.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View My Work <span>↗</span>
            </a>

            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/mehran-ali-shah-b53172293"
              target="_blank"
              rel="noreferrer"
            >
              in
            </a>

            <a href="mailto:mehranalishah112233@gmail.com">
              @
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="code-window">
            <div className="window-top">
              <div className="window-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <span>developer.js</span>
            </div>

            <div className="code-content">
              <p>
                <span className="purple">const</span>{" "}
                <span className="blue">developer</span> = {"{"}
              </p>

              <p className="indent">
                <span className="green">name:</span>{" "}
                <span className="orange">'Mehran Ali Shah'</span>,
              </p>

              <p className="indent">
                <span className="green">role:</span>{" "}
                <span className="orange">'Software Engineer'</span>,
              </p>

              <p className="indent">
                <span className="green">frontend:</span>{" "}
                <span className="orange">'React.js'</span>,
              </p>

              <p className="indent">
                <span className="green">backend:</span>{" "}
                <span className="orange">'Node.js'</span>,
              </p>

              <p className="indent">
                <span className="green">database:</span>{" "}
                <span className="orange">'MongoDB'</span>,
              </p>

              <p className="indent">
                <span className="green">passion:</span>{" "}
                <span className="orange">'Building'</span>
              </p>

              <p>{"};"}</p>

              <p className="code-cursor">
                <span>_</span>
              </p>
            </div>
          </div>

          <div className="floating-card card-one">
            <strong>2+</strong>
            <span>Projects</span>
          </div>

          <div className="floating-card card-two">
            <strong>∞</strong>
            <span>Learning</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>
            Turning Ideas Into <span>Digital Solutions</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-number">
            <span>01</span>
            <div></div>
          </div>

          <div className="about-content">
            <h3>
              A passionate Software Engineering student focused on building
              useful technology.
            </h3>

            <p>
              I am Mehran Ali Shah, a Software Engineering student with a
              strong interest in web development, software engineering,
              databases and modern application development.
            </p>

            <p>
              I enjoy transforming ideas into practical digital solutions.
              My approach combines clean design, structured development and
              continuous learning to create applications that are useful,
              responsive and easy to maintain.
            </p>

            <div className="about-stats">
              <div>
                <strong>01</strong>
                <span>FYP Project</span>
              </div>

              <div>
                <strong>06+</strong>
                <span>Core Technologies</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Learning Mindset</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <div className="section-heading center">
          <p>MY SKILLS</p>
          <h2>
            Technologies I <span>Work With</span>
          </h2>
          <span className="heading-line"></span>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-icon">⚛</div>
            <h3>React.js</h3>
            <p>Building modern component-based user interfaces.</p>
            <div className="skill-bar">
              <span style={{ width: "88%" }}></span>
            </div>
            <small>Frontend Development</small>
          </div>

          <div className="skill-card">
            <div className="skill-icon">JS</div>
            <h3>JavaScript</h3>
            <p>Creating interactive and dynamic web applications.</p>
            <div className="skill-bar">
              <span style={{ width: "85%" }}></span>
            </div>
            <small>Programming</small>
          </div>

          <div className="skill-card">
            <div className="skill-icon">&lt;/&gt;</div>
            <h3>HTML & CSS</h3>
            <p>Designing responsive and attractive web interfaces.</p>
            <div className="skill-bar">
              <span style={{ width: "92%" }}></span>
            </div>
            <small>Web Design</small>
          </div>

          <div className="skill-card">
            <div className="skill-icon">N</div>
            <h3>Node.js</h3>
            <p>Developing backend services and REST APIs.</p>
            <div className="skill-bar">
              <span style={{ width: "80%" }}></span>
            </div>
            <small>Backend Development</small>
          </div>

          <div className="skill-card">
            <div className="skill-icon">DB</div>
            <h3>MongoDB</h3>
            <p>Working with modern NoSQL database systems.</p>
            <div className="skill-bar">
              <span style={{ width: "78%" }}></span>
            </div>
            <small>Database</small>
          </div>

          <div className="skill-card">
            <div className="skill-icon">Py</div>
            <h3>Python</h3>
            <p>Using Python for programming and data processing.</p>
            <div className="skill-bar">
              <span style={{ width: "75%" }}></span>
            </div>
            <small>Programming</small>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section experience-section">
        <div className="section-heading">
          <p>EXPERIENCE & LEARNING</p>
          <h2>
            My <span>Journey</span>
          </h2>
        </div>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-date">CURRENT</div>

            <div className="timeline-card">
              <span>Software Engineering</span>
              <h3>Academic & Practical Development</h3>

              <p>
                Developing software engineering skills through academic
                projects, practical assignments and real-world application
                development.
              </p>

              <div className="timeline-tags">
                <span>Software Engineering</span>
                <span>Web Development</span>
                <span>Databases</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-date">2026</div>

            <div className="timeline-card">
              <span>Final Year Project</span>
              <h3>Smart Government Contract Bidding System</h3>

              <p>
                Working on a web-based government procurement platform with
                automated contractor evaluation, bid scoring, ranking and
                contract management.
              </p>

              <div className="timeline-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">

        <div className="section-heading center">
          <p>FEATURED PROJECTS</p>
          <h2>
            Things I've <span>Built</span>
          </h2>
          <span className="heading-line"></span>
        </div>

        <div className="projects-grid">

          <div className="project-card featured">

            <div className="project-top">
              <span className="project-number">01</span>
              <span className="project-type">
                FINAL YEAR PROJECT
              </span>
            </div>

            <div className="project-visual government">

              <div className="visual-building">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>

              <span>SMART PROCUREMENT</span>

            </div>

            <div className="project-info">

              <h3>
                Smart Government Contract Bidding System
              </h3>

              <p>
                A web-based e-procurement platform designed to manage
                government tenders, contractor bids and automated
                contractor evaluation.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Python</span>
              </div>

              <a href="#contact" className="project-link">
                Discuss Project <span>↗</span>
              </a>

            </div>

          </div>

          <div className="project-card">

            <div className="project-top">
              <span className="project-number">02</span>
              <span className="project-type">
                WEB DEVELOPMENT
              </span>
            </div>

            <div className="project-visual portfolio-visual">

              <div className="mini-browser">
                <div></div>
                <div></div>
                <div></div>
              </div>

              <span>PERSONAL PORTFOLIO</span>

            </div>

            <div className="project-info">

              <h3>Personal Portfolio Website</h3>

              <p>
                A modern responsive portfolio website created to
                showcase skills, projects, education and professional
                information.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

              <a href="#home" className="project-link">
                View Project <span>↗</span>
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="section services-section">

        <div className="section-heading center">
          <p>WHAT I DO</p>
          <h2>
            How I Can <span>Help</span>
          </h2>
          <span className="heading-line"></span>
        </div>

        <div className="services-grid">

          <div className="service-card">
            <span>01</span>
            <div className="service-icon">◈</div>
            <h3>Web Development</h3>
            <p>
              Building responsive and modern websites with clean,
              maintainable code.
            </p>
          </div>

          <div className="service-card">
            <span>02</span>
            <div className="service-icon">⌘</div>
            <h3>Frontend Development</h3>
            <p>
              Creating interactive interfaces and smooth user
              experiences with React.
            </p>
          </div>

          <div className="service-card">
            <span>03</span>
            <div className="service-icon">▣</div>
            <h3>Backend Development</h3>
            <p>
              Developing APIs and backend systems using Node.js
              and databases.
            </p>
          </div>

          <div className="service-card">
            <span>04</span>
            <div className="service-icon">◎</div>
            <h3>Problem Solving</h3>
            <p>
              Turning technical problems and ideas into practical
              software solutions.
            </p>
          </div>

        </div>
      </section>

      {/* CV */}
      <section className="cv-section">

        <div className="cv-content">

          <div>
            <p>MY RESUME</p>
            <h2>Want to know more about my journey?</h2>
            <span>
              Download my CV to explore my education, skills and
              experience.
            </span>
          </div>

          <a href="/cv.pdf" download className="cv-button">
            Download CV <span>↓</span>
          </a>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">

        <div className="contact-wrapper">

          <div className="contact-left">

            <p className="section-label">GET IN TOUCH</p>

            <h2>
              Let's build something
              <span> great together.</span>
            </h2>

            <p>
              Have a project idea, internship opportunity, or just want
              to connect? Send me a message and let's talk.
            </p>

            <div className="contact-details">

              <a href="mailto:mehranalishah112233@gmail.com">

                <div className="contact-icon">@</div>

                <div>
                  <small>Email</small>
                  <strong>
                    mehranalishah112233@gmail.com
                  </strong>
                </div>

              </a>

              <a
                href="https://www.linkedin.com/in/mehran-ali-shah-b53172293"
                target="_blank"
                rel="noreferrer"
              >

                <div className="contact-icon">in</div>

                <div>
                  <small>LinkedIn</small>
                  <strong>Mehran Ali Shah</strong>
                </div>

              </a>

            </div>

          </div>

          <div className="contact-card">

            <div className="contact-card-top">
              <span>START A PROJECT</span>
              <div></div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href =
                  "mailto:mehranalishah112233@gmail.com";
              }}
            >

              <label>Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
              />

              <label>Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />

              <label>Your Message</label>
              <textarea
                placeholder="Tell me about your project..."
                rows="5"
                required
              ></textarea>

              <button type="submit">
                Send Message <span>↗</span>
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="footer-logo">
          <span>M</span>
          <strong>Mehran Ali Shah</strong>
        </div>

        <p>
          Designed & built with passion by Mehran Ali Shah
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <small>
          © 2026 Mehran Ali Shah. All Rights Reserved.
        </small>

      </footer>

    </div>
  );
}

export default App;