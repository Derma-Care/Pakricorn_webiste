import React from "react";
import "./Careers.css";
import {
  FaUsers,
  FaChartLine,
  FaSmile,
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
} from "react-icons/fa";

const Careers = () => {
  return (
    <section className="careers-section" id="careers">
      <h2 className="careers-title" style={{ color: "#A93D01" }}>
        Join Our <span>Team</span>
      </h2>
      <p className="careers-subtitle">
        We believe in creating an inspiring workspace where innovation thrives,
        ideas are valued, and people grow together.
      </p>

      {/* --- Culture and Growth Highlights --- */}
      <div className="careers-culture">
        <div className="culture-card">
          <FaUsers className="culture-icon" />
          <h3>Collaborative Culture</h3>
          <p>
            We believe great things happen when talented people collaborate.
            Every voice matters, and every idea is valued.
          </p>
        </div>

        <div className="culture-card">
          <FaChartLine className="culture-icon" />
          <h3>Career Growth</h3>
          <p>
            Learn, build, and grow with us. We empower every team member to take
            ownership, upskill, and reach their full potential.
          </p>
        </div>

        <div className="culture-card">
          <FaSmile className="culture-icon" />
          <h3>Work-Life Balance</h3>
          <p>
            We understand the importance of balance — flexibility and wellness
            are at the core of our company values.
          </p>
        </div>
      </div>

      {/* --- Current Openings Section --- */}
      <div className="careers-openings">
        <h2 className="careers-title" style={{ color: "#A93D01" }}>Current <span>Openings</span> </h2><br/>

        <div className="openings-grid">
          {/* Opening 1 */}
          <div className="opening-card">
            <div className="opening-header">
              <FaLaptopCode className="opening-icon" />
              <div>
                <h4>Frontend Developer (React & Ionic)</h4>
                <span className="opening-type">Full-Time · Remote / Hyderabad</span>
              </div>
            </div>

            <p className="opening-description">
              We’re seeking a passionate Frontend Developer skilled in React and
              Ionic to build beautiful, scalable, and high-performance web apps.
            </p>

            <div className="opening-details">
              <div><strong>Experience:</strong> 1–3 years</div>
              <div><strong>Skills:</strong> React, Ionic, TypeScript, REST APIs</div>
            </div>

            <a
              href="mailto:support@pakricorn.com?subject=Application for Frontend Developer"
              className="apply-btn"
            >
              Apply Now
            </a>
          </div>

          {/* Opening 2 */}
          <div className="opening-card">
            <div className="opening-header">
              <FaServer className="opening-icon" />
              <div>
                <h4>Backend Developer (Node.js)</h4>
                <span className="opening-type">Full-Time · Remote / Hyderabad</span>
              </div>
            </div>

            <p className="opening-description">
              Looking for an experienced Backend Developer to design APIs,
              integrate databases, and ensure high-performance systems.
            </p>

            <div className="opening-details">
              <div><strong>Experience:</strong> 2–4 years</div>
              <div><strong>Skills:</strong> Node.js, MongoDB, Express, REST APIs</div>
            </div>

            <a
              href="mailto:support@pakricorn.com?subject=Application for Backend Developer"
              className="apply-btn"
            >
              Apply Now
            </a>
          </div>

          {/* Opening 3 */}
          <div className="opening-card">
            <div className="opening-header">
              <FaMobileAlt className="opening-icon" />
              <div>
                <h4>Mobile App Developer (Flutter)</h4>
                <span className="opening-type">Full-Time · Remote / Hyderabad</span>
              </div>
            </div>

            <p className="opening-description">
              We’re hiring a Mobile Developer to create seamless cross-platform
              apps using Flutter and ensure top-notch performance and UX.
            </p>

            <div className="opening-details">
              <div><strong>Experience:</strong> 1–3 years</div>
              <div><strong>Skills:</strong> Flutter, Dart, Firebase, REST APIs</div>
            </div>

            <a
              href="mailto:support@pakricorn.com?subject=Application for Mobile App Developer"
              className="apply-btn"
            >
              Apply Now
            </a>
          </div>
        </div>

        <p className="update-note">
          Stay tuned! More opportunities coming soon.
        </p>
      </div>
    </section>
  );
};

export default Careers;
