import React, { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import "./Navbar.css";
import logo from "../assets/pakricorn1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll to section smoothly
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  // Update active link while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services","careers", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo" onClick={() => scrollToSection("home")}>
         <img src={logo} alt="Logo" className="logo-img" />

        </div>

        {/* Navbar */}
        <nav className={`navBar ${isOpen ? "activeNavbar" : ""}`} style={{fontWeight:"bold"}}>
          <ul className="navLists">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className={`navLink ${activeSection === "home" ? "active" : ""}`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className={`navLink ${activeSection === "about" ? "active" : ""}`}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className={`navLink ${activeSection === "services" ? "active" : ""}`}
              >
                Services
              </button>
            </li>
              <li>
              <button
                onClick={() => scrollToSection("careers")}
                className={`navLink ${activeSection === "careers" ? "active" : ""}`}
              >
                Careers
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("portfolio")}
                className={`navLink ${activeSection === "portfolio" ? "active" : ""}`}
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className={`navLink ${activeSection === "contact" ? "active" : ""}`}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <div className="mobileMenu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
