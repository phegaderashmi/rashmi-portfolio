"use client";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaUser, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(" Failed to send message.");
      }
    } catch (error) {
      console.error(" Error:", error);
      setStatus("⚠️ Something went wrong. Try again.");
    }
  };

  return (
    <section id="contact" className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0 p-4">
            <div className="card-body text-center">
              {/* Contact Heading */}
              <h2 className="text-primary fw-bold mb-3">Get in Touch</h2>
              <p className="text-muted mb-4">
                Feel free to reach out via email or phone. I'm happy to connect!
              </p>

              {/* Contact Details */}
              <div className="d-flex justify-content-center gap-4 mb-4">
                <div className="text-center">
                  <FaEnvelope size={28} className="text-primary mb-2" />
                  <p>
                    <a
                      href="mailto:rashmiphegade05@gmail.com"
                      className="text-decoration-none text-dark"
                    >
                      rashmiphegade05@gmail.com
                    </a>
                  </p>
                </div>
                <div className="text-center">
                  <FaPhone size={28} className="text-primary mb-2" />
                  <p>
                    <a
                      href="tel:+918153818569"
                      className="text-decoration-none text-dark"
                    >
                      +91 8153818569
                    </a>
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="text-start">
                <div className="mb-3 input-group">
                  <span className="input-group-text">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3 input-group">
                  <span className="input-group-text">
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-lg">
                    <FaPaperPlane className="me-2" /> Send Message
                  </button>
                </div>
              </form>

              {/* Status Message */}
              {status && <p className="mt-3 text-muted">{status}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
