import React from "react";
import "./Careers.css";
import { FaUsers, FaChartLine, FaSmile } from "react-icons/fa";

const Careers = () => {
  return (
    <section className="careers-section" id="careers">
      <h2 className="careers-title" style={{color:"#A93D01"}}>
        Join Our <span>Team</span>
      </h2>
      <p className="careers-subtitle">
       We believe in creating an inspiring workspace where
        innovation thrives, ideas are valued, and people grow together.
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
        <h3 className="openings-title">Current Openings</h3>
        <p className="no-openings">There are no current openings.</p>
        <p className="update-note">
          Stay tuned! We’ll post exciting opportunities here soon.
        </p>
      </div>
    </section>
  );
};

export default Careers;
