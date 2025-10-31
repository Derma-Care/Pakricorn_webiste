import React, { useRef, useState, useEffect } from "react";
import "./Portfolio.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Portfolio = () => {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const projects = [
    {
      title: "Kemper Auto",
      description:
        "A digital insurance platform that simplifies policy management and customer experience.",
      image: `${process.env.PUBLIC_URL}/portfolio-kemper.png`,
    },
    {
      title: "UWM (United Wholesale Mortgage)",
      description:
        "An enterprise mortgage system for easy loan origination and document management.",
      image: `${process.env.PUBLIC_URL}/portfolio-uwm.png`,
    },
    {
      title: "Payroll System",
      description:
        "Automated payroll solution with tax compliance and secure self-service.",
      image: `${process.env.PUBLIC_URL}/portfolio-payroll.png`,
    },
    {
      title: "Medtory",
      description:
        "Healthcare platform connecting doctors, patients, and clinics with online consultations.",
      image: `${process.env.PUBLIC_URL}/portfolio-medtory.png`,
    },
    {
      title: "MyEmp",
      description:
        "Employee management app for HR — attendance, task tracking, and communication.",
      image: `${process.env.PUBLIC_URL}/portfolio-myemp.png`,
    },
    {
      title: "SmartHR",
      description:
        "End-to-end HR management system with onboarding and performance analytics.",
      image: `${process.env.PUBLIC_URL}/portfolio-smarthr.png`,
    },
    {
      title: "FleetPro",
      description:
        "Fleet tracking system with GPS and route optimization for logistics efficiency.",
      image: `${process.env.PUBLIC_URL}/portfolio-fleetpro.png`,
    },
  ];

  // Scroll by certain pixels
  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = window.innerWidth < 768 ? 280 : 400;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Detect scroll position to toggle button visibility
  useEffect(() => {
    const container = scrollRef.current;
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth - 10);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="about-title" style={{color:"#A93D01"}}>
        Our <span>Projects</span>
      </h2>
      <p className="portfolio-subtitle">
        Transforming ideas into impactful digital experiences across industries.
      </p>

      <div className="portfolio-wrapper">
        {showLeft && (
          <button className="scroll-btn left" onClick={() => scroll("left")}>
            <FaChevronLeft />
          </button>
        )}

        <div className="portfolio-scroll" ref={scrollRef}>
          {projects.map((project, index) => (
            <div className="portfolio-card" key={index}>
              <div className="portfolio-image-wrapper">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {showRight && (
          <button className="scroll-btn right" onClick={() => scroll("right")}>
            <FaChevronRight />
          </button>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
