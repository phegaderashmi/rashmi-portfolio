const Experience = () => {
  return (
    <section id="experience" className="container py-5">
      <h1 className="text-primary fw-bold text-center mb-4">
        Professional Experience
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
          <div className="card experience-card border-0 shadow-lg p-4">
            <div className="card-body">
              <h4 className="fw-bold">Kanalytics Pvt Ltd</h4>
              <p>
                <strong>Project:</strong>{" "}
                <span className="text-primary">KAutonomous</span>
              </p>
              <p>
                <strong>Role:</strong> Full Stack Developer
              </p>
              <ul className="text-muted">
                <li>
                  Engineered an{" "}
                  <strong>AI-powered autonomous media analytics system</strong>{" "}
                  that enables clients to upload and analyze media content
                  without manual intervention.
                </li>
                <li>
                  Developed an <strong>AI-driven upload module</strong>{" "}
                  supporting images, videos, URLs, and YouTube links, with
                  automated{" "}
                  <strong>
                    text extraction, transcription, translation, and metadata
                    analysis
                  </strong>
                  .
                </li>
                <li>
                  Implemented a <strong>secure authentication system</strong>{" "}
                  with{" "}
                  <strong>
                    OTP login, API key validation, and device security checks
                  </strong>{" "}
                  using Node.js and Next.js.
                </li>
                <li>
                  Designed a <strong>subscription-based access model</strong>{" "}
                  (Free, Basic, Pro, Enterprise) with{" "}
                  <strong>payment gateway integrations</strong> (Stripe,
                  Razorpay, PayPal).
                </li>
                <li>
                  Built a{" "}
                  <strong>self-service report generation feature</strong>,
                  allowing clients to upload articles and generate detailed
                  reports independently.
                </li>
                <li>
                  Provided <strong>admin-side controls</strong> for{" "}
                  <strong>
                    user management, billing, subscription tracking, and
                    analytics
                  </strong>
                  , ensuring seamless system operations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
