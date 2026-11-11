import React, { useRef, useState, useEffect } from "react";
import "./Portfolio.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Portfolio = () => {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const projects = [
    {
      title: "PhysioReach",
      description:
        "PhysioReach connects clinics, therapists, and patients through home physiotherapy services, therapist management, home visit scheduling, live tracking, and patient feedback.",
      image: `${process.env.PUBLIC_URL}/portfolio-physioreach.png`,
    },
    {
      title: "PhysioBridge",
      description:
        "Connecting healthcare professionals through seamless referrals, trusted collaborations, and better patient care.",
      image: `${process.env.PUBLIC_URL}/portfolio-physiobridge.png`,
    },
    {
      title: "Kemper Auto",
      description:
        "A digital insurance platform that simplifies policy management and customer experience.",
      image: `${process.env.PUBLIC_URL}/portfolio-kemper1.png`,
    },
    {
      title: "UWM (United Wholesale Mortgage)",
      description:
        "An enterprise mortgage system for easy loan origination and document management.",
      image: `${process.env.PUBLIC_URL}/portfolio-uwm.jpg`,
    },
    {
      title: "Payroll System",
      description:
        "Automated payroll solution with tax compliance and secure self-service.",
      image: `${process.env.PUBLIC_URL}/portfolio-payroll1.png`,
    },
    {
      title: "Medtory",
      description:
        "Healthcare platform connecting doctors, patients, and clinics with online consultations.",
      image: `${process.env.PUBLIC_URL}/portfolio-medtory1.png`,
    },
    {
      title: "MyEmp",
      description:
        "Employee management app for HR — attendance, task tracking, and communication.",
      image: `${process.env.PUBLIC_URL}/portfolio-myemp1.png`,
    },
    {
      title: "SmartHR",
      description:
        "End-to-end HR management system with onboarding and performance analytics.",
      image: `${process.env.PUBLIC_URL}/portfolio-smarthr1.png`,
    },
    {
      title: "FleetPro",
      description:
        "Fleet tracking system with GPS and route optimization for logistics efficiency.",
      image: `${process.env.PUBLIC_URL}/portfolio-fleetpro1.png`,
    },
  ];

  const [isPaused, setIsPaused] = useState(false);

  // Scroll by certain pixels
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = window.innerWidth < 768 ? 280 : 360;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Detect scroll position to toggle button visibility
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth - 10);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatic scrolling loop (pauses when hovered or touched)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;

      const { scrollLeft, scrollWidth, clientWidth } = container;
      // If reached near the end, loop back smoothly to start
      if (scrollLeft + clientWidth >= scrollWidth - 20) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const step = window.innerWidth < 768 ? 280 : 350;
        container.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="about-title" style={{ color: "#A93D01" }}>
        Our <span>Projects</span>
      </h2>
      <p className="portfolio-subtitle">
        Transforming ideas into impactful digital experiences across industries.
      </p>

      <div
        className="portfolio-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {showLeft && (
          <button className="scroll-btn left" onClick={() => scroll("left")}>
            <FaChevronLeft />
          </button>
        )}

        <div className="portfolio-marquee-container" ref={scrollRef}>
          <div className="portfolio-track">
            {/* Render 2 sets to make the infinite continuous ticker completely seamless */}
            {[...projects, ...projects].map((project, index) => (
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
