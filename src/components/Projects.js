const projects = [
  {
    title: "QuickConnect: A Dynamic Contact Manager",
    technologies:
      "React.js, JavaScript, CSS, Node.js (optional), MongoDB (optional), HTML5.",
    points: [
      "Developed a full-stack CRUD application using React.js.",
      "Allows users to Create, Read, Update, and Delete data seamlessly.",
      "Utilized React hooks for state management.",
      "Integrated with REST APIs for dynamic data handling.",
    ],
  },
  {
    title: "BrewMasters: A Next.js Coffee Shop Experience",
    points: [
      "Built a sleek, responsive coffee shop website with Next.js.",
      "Offers fast, SEO-optimized browsing of menus and orders.",
      "Features include a dynamic menu and interactive contact form.",
      "Designed for a cozy, mobile-friendly experience.",
    ],
    technologies: "Next.js, React.js, HTML5, CSS3.",
  },
  {
    title: "Career Document Design Website",
    points: [
      "Developed a web application to assist job seekers.",
      "Creates professional and visually appealing resumes.",
      "Ensured cross-browser compatibility and responsiveness.",
    ],
    technologies: "PHP, JavaScript, HTML5, CSS3, Bootstrap, MySQL.",
  },
  {
    title: "Graphic Designer for Yugantar College Events",
    points: [
      "Designed promotional posters for Yugantar.",
      "Contributed to visual branding and outreach for college events.",
      "Created engaging visuals to attract student participation.",
    ],
    technologies: "Figma, Canva, Photoshop.",
  },
  {
    title: "Food Delivery Website Design",
    points: [
      "Designed a food delivery website prototype using Figma.",
      "Focused on easy navigation and smooth order placement.",
      "Improved user experience with attractive visuals.",
    ],
    technologies: "Figma.",
  },
  {
    title: "E-commerce App",
    points: [
      "Developed a scalable e-commerce platform.",
      "Implemented secure authentication and payment integration.",
      "Optimized for performance and SEO.",
    ],
    technologies: "Next.js, MongoDB.",
  },
  {
    title: "Portfolio Website",
    points: [
      "Created a personal portfolio showcasing projects and skills.",
      "Fully responsive and mobile-friendly design.",
      "Optimized for SEO and fast performance.",
    ],
    technologies: "Next.js, CSS3.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container mt-5">
      <h1 className="text-primary fw-bold text-center mb-4">
        Projects
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
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title text-primary">{project.title}</h5>
                <p className="text-muted">
                  <strong>Technologies:</strong> {project.technologies}
                </p>
                <ul className="card-text">
                  {project.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
