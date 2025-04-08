import { FaUserTie, FaExternalLinkAlt } from "react-icons/fa";

const activities = [
  {
    title: "Class President & Placement Coordinator",
    description:
      "As class president, I represent students, organize events, and bridge communication with faculty. As placement coordinator, I connect students with job opportunities which come in our college. I collect information from students & relay it to the TPO.",
    link: "", // Leave empty if no link
  },
  {
    title: "Data & Analyst Workshop",
    organization: "Cloud Counselage Pvt. Ltd.",
    description:
      "Successfully completed a comprehensive workshop on Data & Analytics with Cloud Counselage Pvt. Ltd., gaining hands-on experience in data analysis techniques, data visualization, and the application of analytical tools to derive actionable insights from data.",
    link: "#", // Replace with actual certificate/workshop link
  },
];

const Activities = () => {
  return (
    <section id="extracurricular" className="container py-5">
      <h1 className="text-primary fw-bold text-center mb-4">
        Extra Curriculum Activities
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
        {activities.map((activity, index) => (
          <div key={index} className="col-md-10">
            <div className="card activity-card border-0 shadow-sm mb-4 p-3">
              <div className="card-body">
                <h5 className="card-title fw-bold d-flex align-items-center">
                  <FaUserTie className="me-2 text-primary" /> {activity.title}
                  {activity.link && (
                    <a
                      href={activity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-2 text-dark"
                    >
                      <FaExternalLinkAlt size={14} />
                    </a>
                  )}
                </h5>
                {activity.organization && (
                  <h6 className="text-muted fw-bold">
                    {activity.organization}
                  </h6>
                )}
                <p className="card-text">{activity.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
