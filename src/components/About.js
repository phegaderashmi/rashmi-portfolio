const About = () => {
  return (
    <section id="about" className="container py-5">
      {/* About Me Heading - Centered Above the Card */}
      <h1 className="text-primary fw-bold text-center mb-4 position-relative">
        About Me
        <span
          style={{
            display: "block",
            width: "60px",
            height: "4px",
            background: "linear-gradient(90deg, #007bff, #00d4ff)",
            margin: "8px auto 0",
            borderRadius: "2px",
          }}
        ></span>
      </h1>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-lg border-0 p-4">
            <div className="card-body">
              {/* Frontend Developer Title */}
              <h2
                className="fw-bold text-center text-dark"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: "1px",
                  fontSize: "2rem",
                  marginBottom: "15px",
                }}
              >
                Frontend Developer
              </h2>

              {/* Introduction */}
              <p
                className="text-muted text-center"
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.6",
                  maxWidth: "800px",
                  margin: "0 auto 30px",
                }}
              >
                Hi! I'm{" "}
                <strong style={{ color: "#007bff" }}>Rashmi Phegade</strong>, a
                dedicated <strong>Frontend Developer</strong> skilled in{" "}
                <strong>JavaScript, Next.js, React.js, and UI/UX design</strong>
                . I specialize in building{" "}
                <strong>high-performance, scalable, and user-centric</strong>{" "}
                web applications that deliver seamless digital experiences. My
                focus is on crafting{" "}
                <strong>modern, responsive, and visually stunning</strong> user
                interfaces.
              </p>

              {/* What I Do Section */}
              <h4 className="text-primary fw-bold mb-3"> What I Do</h4>
              <div className="row">
                <div className="col-md-6">
                  <ul className="text-muted">
                    <li>
                      <strong>Frontend Development</strong> – Crafting dynamic,
                      responsive, and interactive UIs using{" "}
                      <strong>React.js & Next.js</strong>.
                    </li>
                    <li>
                      <strong>UI/UX Implementation</strong> – Transforming Figma
                      and Photoshop designs into pixel-perfect, accessible web
                      experiences.
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="text-muted">
                    <li>
                      <strong>Component-Based Development</strong> – Creating
                      reusable and maintainable components with modern
                      JavaScript (ES6/ES7).
                    </li>
                    <li>
                      <strong>Performance Optimization</strong> – Improving
                      website speed, SEO, and accessibility for a seamless user
                      experience.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Why Work With Me Section */}
              <h4 className="text-primary fw-bold mt-4 mb-3">
                Why Work With Me?
              </h4>
              <div className="row">
                <div className="col-md-6">
                  <ul className="text-muted">
                    <li> Strong problem-solving and debugging skills</li>
                    <li>
                      Passionate about{" "}
                      <strong>writing clean, scalable code</strong>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="text-muted">
                    <li> Dedicated to continuous learning and tech trends</li>
                    <li>
                      <strong>Team player</strong> with excellent collaboration
                      skills
                    </li>
                  </ul>
                </div>
              </div>

              {/* Call to Action */}
              <p className="text-muted text-center mt-4">
                <strong>I am open to new opportunities</strong> and excited to
                collaborate on innovative projects. Let's build something
                amazing together!
              </p>

              {/* Buttons */}
              <div className="text-center mt-4">
                <a href="#projects" className="btn btn-primary me-2">
                  View My Work
                </a>
                <a href="#contact" className="btn btn-outline-primary">
                  Let's Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
