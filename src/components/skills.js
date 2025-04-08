import {
  FaCode,
  FaDatabase,
  FaTools,
  FaPalette,
  FaLightbulb,
  FaLanguage,
} from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="container py-5">
      <h1 className="text-primary fw-bold text-center mb-4">
        Skills
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
        {/* Web Technology */}
        <div className="col-md-6 col-lg-4">
          <div className="card skill-card mb-4">
            <div className="card-body d-flex flex-column align-items-center">
              <FaCode size={40} className="text-primary mb-2" />
              <h5 className="card-title fw-bold text-primary text-center">
                Web Technology
              </h5>
              <p className="card-text text-center">
                Next.js, React.js, Node.js, Python, JavaScript, PHP, HTML5,
                CSS3, C, C++
              </p>
            </div>
          </div>
        </div>

        {/* Databases */}
        <div className="col-md-6 col-lg-4">
          <div className="card skill-card mb-4">
            <div className="card-body d-flex flex-column align-items-center">
              <FaDatabase size={40} className="text-primary mb-2" />
              <h5 className="card-title fw-bold text-primary text-center">
                Databases
              </h5>
              <p className="card-text text-center">MySQL, MongoDB</p>
            </div>
          </div>
        </div>

        {/* Frameworks */}
        <div className="col-md-6 col-lg-4">
          <div className="card skill-card mb-4">
            <div className="card-body d-flex flex-column align-items-center">
              <FaTools size={40} className="text-primary mb-2" />
              <h5 className="card-title fw-bold text-primary text-center">
                Frameworks
              </h5>
              <p className="card-text text-center">Bootstrap</p>
            </div>
          </div>
        </div>

        {/* Design Tools */}
        <div className="col-md-6 col-lg-4">
          <div className="card skill-card mb-4">
            <div className="card-body d-flex flex-column align-items-center">
              <FaPalette size={40} className="text-primary mb-2" />
              <h5 className="card-title fw-bold text-primary text-center">
                Design Tools
              </h5>
              <p className="card-text text-center">Figma, Canva, Photoshop</p>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="col-md-6 col-lg-4">
          <div className="card skill-card mb-4">
            <div className="card-body d-flex flex-column align-items-center">
              <FaLightbulb size={40} className="text-primary mb-2" />
              <h5 className="card-title fw-bold text-primary text-center">
                Soft Skills
              </h5>
              <p className="card-text text-center">
                Problem Solving, Teamwork, Adaptability, Communication,
                Leadership, Time Management, Attention to Detail, Analytical
                Thinking.
              </p>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="col-md-6 col-lg-4">
          <div className="card skill-card">
            <div className="card-body d-flex flex-column align-items-center">
              <FaLanguage size={40} className="text-primary mb-2" />
              <h5 className="card-title fw-bold text-primary text-center">
                Languages
              </h5>
              <p className="card-text text-center">English, Hindi, Marathi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
