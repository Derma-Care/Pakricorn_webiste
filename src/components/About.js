import React, { useState } from "react";
import "./About.css";
import aboutImage from "../assets/about-us-illustration.png";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleLearnMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title" style={{color:"#A93D01"}}>
            About <span>Pakricorn</span>
          </h2>
          <p className="about-text">
            We are a specialized <strong>IT Staffing Company</strong> dedicated to connecting
            top-tier technology professionals with leading organizations. At
            <strong> Pakricorn</strong>, we understand that finding the right talent is
            critical to your success.
          </p>

          <p className="about-text">
            Our expertise lies in sourcing and placing highly skilled IT professionals — including
            <em> software developers, network administrators, systems engineers, and project managers</em> —
            on both temporary and permanent bases.
          </p>

          {/* Show/Hide extra content */}
          {showMore && (
            <div className="about-more">
              <p className="about-text">
                Our goal is simple: to ensure every placement is the perfect match,
                allowing businesses to achieve their objectives efficiently while
                professionals thrive in roles that align with their skills and ambitions.
              </p>

              <p className="about-text">
                At <strong>Pakricorn</strong>, we take pride in our transparent approach,
                efficient recruitment process, and our commitment to quality service.
                We believe success is built through strong relationships and trust
                between our clients and our talent.
              </p>

              <p className="about-text">
                Whether you are a company looking for your next great hire or a
                professional seeking your next big opportunity — we are here to
                connect you to success.
              </p>
            </div>
          )}

          <button className="about-btn" onClick={handleLearnMore}>
            {showMore ? "Show Less" : "Learn More"}
          </button>
        </div>

        <div className="about-image">
          <img src={aboutImage} alt="About Pakricorn" />
        </div>
      </div>
    </section>
  );
};

export default About;
