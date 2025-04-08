"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        background: "white",
        color: "#222",
        padding: "0px 0",
        textAlign: "center",
        transition: "box-shadow 0.3s ease-in-out",
        boxShadow: isScrolled ? "0 4px 10px rgba(0, 0, 0, 0.1)" : "none",
        zIndex: "1000",
      }}
    >
      <nav style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {[
          "Home",
          "About",
          "Experience",
          "Skills",
          "Projects",
          "Certificates",
          "Extracurricular",
          "Contact",
        ].map((section, index) => (
          <Link
            key={index}
            href={section === "Home" ? "/" : `#${section.toLowerCase()}`}
            style={{
              color: "#222",
              textDecoration: "none",
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "10px",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#007BFF")}
            onMouseLeave={(e) => (e.target.style.color = "#222")}
          >
            {section}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
