import React, { useState } from "react";
import "./Products.css";
import prcBanner from "../assets/product_prc_header.jpg";
import reachBanner from "../assets/product_physioreach_header.jpg";
import logo from "../assets/pakricorn_new_logo.png";
import { FaCheck, FaStethoscope, FaHome, FaArrowRight } from "react-icons/fa";
import ProductModal from "./ProductModal";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenSpec = (productType) => {
    setSelectedProduct(productType);
  };

  const handleCloseSpec = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section className="products-section" id="products">
        <div className="products-container">
          <h2 className="products-title" style={{ color: "#A93D01" }}>
            Our <span>Products</span>
          </h2>
          <p className="products-subtitle">
            Cutting-edge healthcare technology solutions designed for physiotherapy clinics, doctors, and patient care.
          </p>

          <div className="products-grid">
            {/* Card 1: PRC - PhysioBridge */}
            <div className="product-card">
              <div className="product-card-banner">
                <img
                  src={prcBanner}
                  alt="PRC - PhysioBridge Doctors & Specialist Referrals"
                  className="product-banner-img"
                />
                <div className="banner-badge banner-badge-left">
                  <span className="brand-tag">PAKRiCORN</span>
                  <span className="module-tag">Module 01</span>
                </div>
                <div className="banner-badge banner-badge-right">
                  More Referrals &rarr; More Patients
                </div>
              </div>

              <div className="product-card-body">
                <div className="product-brand-header">
                  <img src={logo} alt="Pakricorn Logo" className="product-logo-icon" />
                  <h3 className="product-name">PRC – PhysioBridge</h3>
                </div>
                <p className="product-developed">
                  Developed by <span>PAKRiCORN Techno Solutions</span>
                </p>
                <h4 className="product-highlight-headline green-headline">
                  Get more patients through verified doctor referrals &amp; closed-loop feedback
                </h4>
                <p className="product-description">
                  PRC bridges referring specialist physicians with your physiotherapy practice. Receive verified patient referrals from Orthopaedicians, Neurologists, and General Physicians, with complete bi-directional feedback loops.
                </p>

                <div className="product-feature-box">
                  <div className="feature-box-title">
                    <FaStethoscope className="feature-icon" />
                    <strong>Verified Doctor Referral Network (Core of PRC)</strong>
                  </div>
                  <p className="feature-box-desc">
                    Direct integration with Orthopaedics, Neurology, Sports Medicine, and Physicians with closed-loop recovery updates.
                  </p>
                </div>

                <div className="product-checklist">
                  <div className="checklist-item">
                    <FaCheck className="check-icon" />
                    <span>Connect with Orthopaedicians, Neurologists &amp; Physicians</span>
                  </div>
                  <div className="checklist-item">
                    <FaCheck className="check-icon" />
                    <span>Verified Doctors &amp; Clinics Network Directory</span>
                  </div>
                  <div className="checklist-item">
                    <FaCheck className="check-icon" />
                    <span>Automated Treatment Feedback to Referring Doctor</span>
                  </div>
                  <div className="checklist-item">
                    <FaCheck className="check-icon" />
                    <span>Live Patient Progress &amp; ROM Mobility Updates</span>
                  </div>
                </div>

                <div className="product-footer">
                  <span className="footer-tag">More Referrals &rarr; More Patients</span>
                  <button
                    className="spec-btn"
                    onClick={() => handleOpenSpec("prc")}
                  >
                    Full Specifications <FaArrowRight className="spec-arrow" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: PhysioReach */}
            <div className="product-card">
              <div className="product-card-banner">
                <img
                  src={reachBanner}
                  alt="PhysioReach Talent Staffing and Home Visits"
                  className="product-banner-img"
                />
                <div className="banner-badge banner-badge-left">
                  <span className="brand-tag">PAKRiCORN</span>
                  <span className="module-tag">Module 02</span>
                </div>
                <div className="banner-badge banner-badge-right">
                  Talent Staffing &amp; Home Visits
                </div>
              </div>

              <div className="product-card-body">
                <div className="product-brand-header">
                  <img src={logo} alt="Pakricorn Logo" className="product-logo-icon" />
                  <h3 className="product-name">PhysioReach</h3>
                </div>
                <p className="product-developed">
                  Developed by <span>PAKRiCORN Techno Solutions</span>
                </p>
                <h4 className="product-highlight-headline orange-headline">
                  Hire physiotherapy talent &amp; manage on-demand home visits
                </h4>
                <p className="product-description">
                  PhysioReach handles both staffing and mobile clinical care. Find certified therapists within 10km, and efficiently dispatch therapists to home-care patients with live GPS tracking and WhatsApp status alerts.
                </p>

                <div className="product-feature-box">
                  <div className="feature-box-title">
                    <FaHome className="feature-icon" />
                    <strong>Home Visits &amp; Field Care Dispatch (Integrated into PhysioReach)</strong>
                  </div>
                  <p className="feature-box-desc">
                    Dispatch therapists beyond clinic walls with live GPS route status, automated WhatsApp updates, and digital timestamps.
                  </p>
                </div>

                <div className="product-checklist">
                  <div className="checklist-item">
                    <FaCheck className="check-icon" />
                    <span>10 km Location-Based Staff Matching</span>
                  </div>
                  <div className="checklist-item">
                    <FaCheck className="check-icon" />
                    <span>Hire Full-Time &amp; Locum Relief Therapists</span>
                  </div>
                  <div className="checklist-item">
                    <FaCheck className="check-icon" />
                    <span>Assign Home Visits to Nearby Therapists</span>
                  </div>
                  <div className="checklist-item">
                    <FaCheck className="check-icon" />
                    <span>Live GPS &amp; Route Monitoring Status</span>
                  </div>
                </div>

                <div className="product-footer">
                  <span className="footer-tag">Talent Staffing &amp; Home Visits</span>
                  <button
                    className="spec-btn orange-spec-btn"
                    onClick={() => handleOpenSpec("reach")}
                  >
                    Full Specifications <FaArrowRight className="spec-arrow" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Modal */}
      <ProductModal
        isOpen={Boolean(selectedProduct)}
        onClose={handleCloseSpec}
        productType={selectedProduct}
      />
    </>
  );
};

export default Products;
