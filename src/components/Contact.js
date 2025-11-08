import React, { useState, useEffect } from "react";
import "./Contact.css";

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
          {/* 🏢 Left Side – Address Section */}
          <div className="contact-address-container">
            <h2 className="about-title">
              Visit <span>Us</span>
            </h2>
            <div className="contact-address-card">
              <h3>📍 Pakricorn Techno Solutions Pvt. Ltd.</h3>
             
              <p>Plot No. 413, 2nd Floor, Road No. 22, Jubilee Hills, Hyderabad<br />
                Pincode: 500033</p>

              <p>📞 +91 86887 67603</p>
              <p>✉️ support@pakricorn.com</p>
            </div>

            <p className="address-note">
              We’d love to meet you! Drop by our office or reach us on WhatsApp for quick queries.
            </p>

            {/* 🗺️ Embedded Google Map */}
            <div className="map-container">
              <iframe
                title="Pakricorn Techno Solutions Location"
                src="https://www.google.com/maps?q=17.4330,78.4078&z=15&output=embed"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* 💬 Right Side – Contact Form */}
          <div className="contact-form-container">
            <h2 className="about-title">
              Let’s <span>Connect</span>
            </h2>
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
