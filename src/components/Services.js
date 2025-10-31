import React from "react";
import "./Services.css";
import {
  FaCode,
  FaMobileAlt,
  FaPencilRuler,
  FaCloud,
  FaUsersCog,
  FaCogs,
  FaLightbulb,
  FaDatabase,
  FaProjectDiagram,
  FaRobot,
  FaHeadset,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "We create fast, scalable, and secure web solutions using React, Node.js, and modern frameworks that deliver seamless user experiences.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description:
        "Our cross-platform apps built with Ionic and React Native offer smooth performance and engaging UI on both iOS and Android.",
    },
    {
      icon: <FaPencilRuler />,
      title: "UI / UX Design",
      description:
        "We design clean, intuitive, and visually appealing interfaces to ensure an exceptional user experience that aligns with your brand.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description:
        "Our cloud experts provide deployment, migration, and optimization on AWS, Azure, and Google Cloud for enhanced scalability.",
    },
    {
      icon: <FaCogs />,
      title: "DevOps & Cloud Automation",
      description:
        "Streamline your development and operations with CI/CD pipelines, containerization, and automated cloud deployment for faster, more reliable delivery.",
    },
    // {
    //   icon: <FaLightbulb />,
    //   title: "Digital Transformation Consulting",
    //   description:
    //     "We help organizations embrace modern technologies, improve workflows, and achieve business agility through digital innovation and strategy.",
    // },
    {
      icon: <FaUsersCog />,
      title: "IT Staffing & Consulting",
      description:
        "We bridge the gap between top-tier IT talent and companies by offering specialized staffing and end-to-end recruitment support.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      description:
        "We manage, optimize, and secure your data systems to ensure performance, reliability, and seamless business continuity.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Project Management",
      description:
        "Our experts deliver projects on time and within budget through agile methodologies and efficient resource allocation.",
    },
    {
      icon: <FaRobot />,
      title: "AI & Automation",
      description:
        "Empower your business with intelligent automation and AI-driven solutions to streamline operations and increase productivity.",
    },
    {
      icon: <FaHeadset />,
      title: "Technical Support",
      description:
        "Round-the-clock IT support services to ensure your systems run smoothly and your business remains connected and secure.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="about-title" style={{color:"#A93D01"}}>
          Our <span>Services</span>
        </h2>
        <p className="services-subtitle">
          Delivering innovative IT and staffing solutions designed to help your
          business grow, adapt, and succeed in the digital era.
        </p>

        <div className="service-cards">
          {services.map((service, index) => (
            <div className="card" key={index}>
              <div className="icon-wrapper">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
