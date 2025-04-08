import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certificates = [
  {
    title: "Python Certificate (HackerRank)",
    description:
      "Earned a Python certification on HackerRank, demonstrating strong programming skills and problem-solving ability.",
    link: "#", // Replace with actual certificate link
  },
  {
    title: "SQL Certificate (HackerRank)",
    description:
      "Earned SQL certification from HackerRank, demonstrating proficiency in database management and query optimization.",
    link: "#",
  },
  {
    title: "Web Development",
    description:
      "A web development certificate validates proficiency in designing, building, and maintaining websites and web applications using various programming languages and technologies.",
    link: "#",
  },
  {
    title: "Git & GitHub",
    description:
      "A Git & GitHub certificate demonstrates proficiency in version control using Git and collaborative software development on GitHub.",
    link: "#",
  },
  {
    title: "Software Testing",
    description:
      "A software testing certificate validates foundational knowledge of software testing principles, methodologies, and tools.",
    link: "#",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="container py-5">
      <h1 className="text-primary fw-bold text-center mb-4">
        Certificates
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
        {certificates.map((cert, index) => (
          <div key={index} className="col-md-6">
            <div className="card certificate-card border-0 shadow-lg p-3 mb-4">
              <div className="card-body">
                <h5 className="card-title fw-bold text-primary d-flex align-items-center">
                  <FaCertificate className="me-2" /> {cert.title}
                  {cert.link !== "#" && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-2 text-dark"
                    >
                      <FaExternalLinkAlt size={14} />
                    </a>
                  )}
                </h5>
                <p className="card-text">{cert.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
