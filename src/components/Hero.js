"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFileDownload,
  FaUserTie,
} from "react-icons/fa";

const Hero = () => {
  const words = ["Frontend Developer"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(words[wordIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === words[wordIndex].length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(words[wordIndex].slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Profile Picture */}
      <Image
        src="/rash.jpeg"
        alt="Profile Picture"
        width={150}
        height={150}
        style={{
          borderRadius: "50%",
          border: "5px solid #1e3c72",
          marginBottom: "15px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
        }}
      />

      <h1
        style={{
          fontSize: "3.5rem",
          fontWeight: "bold",
          color: "#1e3c72",
          marginBottom: "10px",
        }}
      >
        Rashmi Phegade
      </h1>

      {/* Typing Animation */}
      <p
        style={{
          fontSize: "1.8rem",
          fontWeight: "500",
          color: "#2a5298",
          minHeight: "40px",
        }}
      >
        {text}
      </p>

      {/* Call to Action (CTA) Buttons */}
      <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
        <a
          href="/resume.pdf"
          download
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 24px",
            fontSize: "1.1rem",
            color: "#fff",
            background: "linear-gradient(90deg, #1e3c72, #2a5298)",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.target.style.opacity = "1")}
        >
          <FaFileDownload /> Download Resume
        </a>

        <a
          href="#contact"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 24px",
            fontSize: "1.1rem",
            color: "#fff",
            background: "linear-gradient(90deg, #2a5298, #1e3c72)",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.target.style.opacity = "1")}
        >
          <FaUserTie /> Hire Me
        </a>
      </div>

      {/* Contact Info Section */}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FaEnvelope size={20} color="#1e3c72" />
          <Link
            href="mailto:rashmiphegade05@gmail.com"
            passHref
            style={{
              textDecoration: "none",
              color: "#000",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#1e3c72")}
            onMouseLeave={(e) => (e.target.style.color = "#000")}
          >
            rashmiphegade05@gmail.com
          </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FaPhone size={20} color="#1e3c72" />
          <span>+91 8153818569</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FaMapMarkerAlt size={20} color="#1e3c72" />
          <span>Mumbai, Maharashtra</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FaLinkedin size={20} color="#2a5298" />
          <Link
            href="https://www.linkedin.com/in/phegade-rashmi-309950229/"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#000", // Force black color

              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#2a5298")}
            onMouseLeave={(e) => (e.target.style.color = "#000")} // Change back to black
          >
            Phegade Rashmi
          </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FaGithub size={20} color="#1e3c72" />
          <Link
            href="https://github.com/phegaderashmi"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#000",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#1e3c72")}
            onMouseLeave={(e) => (e.target.style.color = "#000")}
          >
            phegaderashmi
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
