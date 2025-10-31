import React, { useState, useEffect } from "react";
import contactImg from "../assets/contact-image.png";
import './Contact.css'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setFormData({ name: "", email: "", message: "" });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const phoneNumber = "918688767603";

    const text = encodeURIComponent(
      `🌟 New Contact Message from Website 🌟

👤 Name: ${name}
📧 Email: ${email}

💬 Message:
${message}

---------------------------
Sent from Pakricorn Website 🌐`
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-image">
            <img src={contactImg} alt="Contact Us" />
          </div>

          <div className="contact-form-container">
            <h2 className="about-title">Let’s <span>Connect</span> </h2>
            <p>
              Have a project in mind or need help finding the right talent? We’d
              love to hear from you. Reach us directly on WhatsApp!
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="btn-submit">
                💬 Send Message on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Pakricorn Techno Solutions PVT Ltd. All
          Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Contact;
