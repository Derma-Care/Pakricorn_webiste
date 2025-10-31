import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Powering Digital Success with <span>Elite IT Talent</span>
          </h1>

          <p className="hero-subtitle">
            At <strong>Pakricorn Technologies</strong>, we help businesses scale
            smarter, faster, and stronger. From startups to enterprises, we
            connect you with <strong>expert engineers</strong> who make ideas a
            reality.
          </p>

          <p className="hero-subtitle">
            Our expertise spans Software Development, Cloud Solutions, DevOps &
            Automation, IT Staffing, Database Management, and Technical Support.
            We deliver <strong>reliable, scalable solutions</strong> that
            empower innovation and accelerate success.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="hero-btn primary">
              Partner With Us
            </a>
            <a href="#services" className="hero-btn secondary">
              Explore Services
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <span>10+</span> Years of Experience
            </div>
            <div>
              <span>50+</span> Skilled IT Professionals
            </div>
            <div>
              <span>100+</span> Successful Projects
            </div>
          </div>
        </div>

        {/* Glowing Pulse Animation */}
        <div className="pulser"></div>
      </div>
    </section>
  );
};

export default Hero;
