import React from "react";
import { FaTimes, FaCheck, FaArrowRight, FaStethoscope, FaBrain, FaRunning, FaSyncAlt, FaMapMarkerAlt, FaUserCheck, FaHome, FaMobileAlt } from "react-icons/fa";
import logo from "../assets/pakricorn_new_logo.png";
import prcHeroImg from "../assets/product_prc_header.jpg";
import reachHeroImg from "../assets/product_physioreach_header.jpg";
import "./ProductModal.css";

const ProductModal = ({ isOpen, onClose, productType }) => {
  if (!isOpen) return null;

  const isPRC = productType === "prc";

  const handleScrollToContact = () => {
    onClose();
    setTimeout(() => {
      const contactElem = document.getElementById("contact");
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </button>

        {isPRC ? (
          /* =========================================
             PRC – PhysioBridge Full Specifications
             ========================================= */
          <div className="modal-content-wrapper prc-theme">
            {/* --- SECTION 1: HERO OVERVIEW --- */}
            <div className="spec-section spec-hero-section">
              <div className="spec-badges-row">
                <span className="spec-pill green-pill">MODULE 01 · MORE REFERRALS &rarr; MORE PATIENTS</span>
                <span className="spec-status-pill">&#9679; Verified Architecture</span>
              </div>

              <div className="spec-hero-grid">
                <div className="spec-hero-info">
                  <div className="spec-brand-row">
                    <img src={logo} alt="Pakricorn Logo" className="spec-logo" />
                  </div>
                  <h1 className="spec-title">PRC – PhysioBridge</h1>
                  <p className="spec-developed">
                    Developed by <strong>PAKRiCORN Techno Solutions</strong>
                  </p>
                  <h3 className="spec-tagline green-text">
                    Get more patients through verified doctor referrals &amp; closed-loop feedback
                  </h3>
                  <p className="spec-desc">
                    PRC bridges referring specialist physicians with your physiotherapy practice. Receive verified patient referrals from Orthopaedicians, Neurologists, and General Physicians, with complete bi-directional feedback loops.
                  </p>
                  <div className="spec-hero-actions">
                    <button className="spec-cta-btn green-btn" onClick={handleScrollToContact}>
                      Request PRC – PhysioBridge Demo
                    </button>
                    <a href="#prc-capabilities" className="spec-secondary-btn">
                      Explore Capabilities
                    </a>
                  </div>
                </div>

                <div className="spec-hero-media">
                  <div className="spec-media-frame">
                    <img src={prcHeroImg} alt="PRC PhysioBridge in action" className="spec-media-img" />
                    <div className="spec-media-overlay-badge">
                      <img src={logo} alt="Pakricorn" className="overlay-logo" />
                      <div>
                        <strong>PRC – PhysioBridge</strong>
                        <small>More Referrals &rarr; More Patients</small>
                      </div>
                      <span className="verified-tag">&#10003; Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- SECTION 2: SPECIALIST REFERRAL SPECIALTIES & CLOSED-LOOP FEEDBACK --- */}
            <div className="spec-section spec-cards-section" id="prc-capabilities">
              <div className="spec-center-header">
                <span className="spec-category-badge green-badge">DOCTOR REFERRAL NETWORK</span>
                <h2 className="spec-section-title">
                  Specialist Referral Specialties &amp; Closed-Loop Feedback
                </h2>
                <p className="spec-section-subtitle">
                  Bridge referring doctors directly with your physiotherapy clinic, closing the communication loop after treatment.
                </p>
              </div>

              <div className="spec-feature-cards-grid">
                {/* Feature 1 */}
                <div className="spec-feature-card">
                  <div className="card-header-icon green-icon-bg">
                    <FaStethoscope />
                  </div>
                  <h3>Orthopaedics &amp; Joint Specialists</h3>
                  <p className="card-sub-header">Post-Op TKR, THR &amp; Arthroscopy Pipelines</p>
                  <p className="card-body-text">
                    Receive pre- and post-surgical referrals directly from joint replacement and spine surgeons, with automated rehabilitation compliance updates.
                  </p>
                  <ul className="spec-check-list">
                    <li><FaCheck className="icon-check green-check" /> Dedicated post-op protocol alignment with referring surgeons</li>
                    <li><FaCheck className="icon-check green-check" /> Bi-directional sharing of surgical precautions and milestones</li>
                    <li><FaCheck className="icon-check green-check" /> Automated Range-of-Motion (ROM) angle progress summaries</li>
                    <li><FaCheck className="icon-check green-check" /> Post-discharge surgeon sign-off and follow-up alerts</li>
                  </ul>
                </div>

                {/* Feature 2 */}
                <div className="spec-feature-card">
                  <div className="card-header-icon blue-icon-bg">
                    <FaBrain />
                  </div>
                  <h3>Neurology &amp; Spine Specialists</h3>
                  <p className="card-sub-header">Stroke, Parkinson's &amp; Neuro Rehabilitation</p>
                  <p className="card-body-text">
                    Standardized clinical handovers for complex neurological cases, tracking functional independence and motor recovery scores over time.
                  </p>
                  <ul className="spec-check-list">
                    <li><FaCheck className="icon-check green-check" /> Functional Independence Measure (FIM) progress tracking</li>
                    <li><FaCheck className="icon-check green-check" /> Gait analysis, spasticity index &amp; balance score updates</li>
                    <li><FaCheck className="icon-check green-check" /> Direct communication channel with treating neurologists</li>
                    <li><FaCheck className="icon-check green-check" /> Structured long-term chronic rehabilitation timelines</li>
                  </ul>
                </div>

                {/* Feature 3 */}
                <div className="spec-feature-card">
                  <div className="card-header-icon orange-icon-bg">
                    <FaRunning />
                  </div>
                  <h3>Sports Medicine &amp; Physiatrists</h3>
                  <p className="card-sub-header">Athletic Injury &amp; Return-To-Play Protocols</p>
                  <p className="card-body-text">
                    Bridge athletic trainers, sports physicians, and team doctors with phase-by-phase return-to-sport testing and functional metrics.
                  </p>
                  <ul className="spec-check-list">
                    <li><FaCheck className="icon-check green-check" /> Phase-wise ACL, rotator cuff &amp; hamstring recovery criteria</li>
                    <li><FaCheck className="icon-check green-check" /> Isokinetic and functional force return-to-play benchmarks</li>
                    <li><FaCheck className="icon-check green-check" /> Immediate sports injury referral dispatch workflow</li>
                    <li><FaCheck className="icon-check green-check" /> Automated progress dashboards for coaches and sports doctors</li>
                  </ul>
                </div>

                {/* Feature 4 */}
                <div className="spec-feature-card highlighted-card green-highlight">
                  <div className="card-header-icon teal-icon-bg">
                    <FaSyncAlt />
                  </div>
                  <h3>Closed-Loop Feedback System</h3>
                  <p className="card-sub-header">Automated Doctor Progress Summaries</p>
                  <p className="card-body-text">
                    Send automated, beautifully formatted recovery summaries back to the referring physician after every 5th or 10th session, building lasting referral trust.
                  </p>
                  <ul className="spec-check-list">
                    <li><FaCheck className="icon-check green-check" /> Automated WhatsApp &amp; PDF recovery progress notifications</li>
                    <li><FaCheck className="icon-check green-check" /> Visual mobility curves &amp; pain reduction comparisons</li>
                    <li><FaCheck className="icon-check green-check" /> Referral source ROI and conversion velocity analytics</li>
                    <li><FaCheck className="icon-check green-check" /> Strengthen professional credibility with senior consultants</li>
                  </ul>
                </div>
              </div>

              {/* Specialist Directory Tags */}
              <div className="spec-directory-box">
                <span className="directory-label">&#128104;&#8205;&#9877;&#65039; Referring Specialist Medical Directory &amp; Care Protocols:</span>
                <div className="directory-pills-row">
                  <span className="dir-pill">Orthopedic Surgery &amp; Arthroplasty</span>
                  <span className="dir-pill">Spine Specialists &amp; Neurosurgeons</span>
                  <span className="dir-pill">Neurology &amp; Stroke Rehabilitation</span>
                  <span className="dir-pill">Sports Medicine &amp; Team Physicians</span>
                  <span className="dir-pill">Pediatric Physical Therapy</span>
                  <span className="dir-pill">Rheumatology &amp; Chronic Arthritis</span>
                  <span className="dir-pill">Cardio-Pulmonary Rehabilitation</span>
                  <span className="dir-pill">General Physicians &amp; Geriatric Care</span>
                </div>
              </div>
            </div>

            {/* --- SECTION 3: DETAILED BREAKDOWN & TECHNICAL SPECS --- */}
            <div className="spec-section spec-breakdown-section">
              <div className="spec-breakdown-grid">
                <div className="spec-breakdown-left">
                  <span className="spec-category-badge green-badge">DETAILED BREAKDOWN</span>
                  <h2 className="spec-breakdown-title">Key Clinical &amp; Management Capabilities</h2>
                  <p className="spec-breakdown-subtitle">
                    Engineered to save time, prevent documentation errors, and streamline patient outcomes.
                  </p>

                  <div className="spec-core-feature-box">
                    <div className="core-box-header">
                      <FaStethoscope className="core-icon" />
                      <strong>Verified Doctor Referral Network (Core of PRC)</strong>
                    </div>
                    <p className="core-box-text">
                      Direct integration with Orthopaedics, Neurology, Sports Medicine, and Physicians with closed-loop recovery updates.
                    </p>
                  </div>

                  <div className="spec-grid-checkmarks">
                    <div className="grid-check-item">
                      <FaCheck className="icon-check green-check" />
                      <div>
                        <strong>Connect with Orthopaedicians, Neurologists &amp; Physicians</strong>
                      </div>
                    </div>
                    <div className="grid-check-item">
                      <FaCheck className="icon-check green-check" />
                      <div>
                        <strong>Verified Doctors &amp; Clinics Network Directory</strong>
                      </div>
                    </div>
                    <div className="grid-check-item">
                      <FaCheck className="icon-check green-check" />
                      <div>
                        <strong>Automated Treatment Feedback to Referring Doctor</strong>
                      </div>
                    </div>
                    <div className="grid-check-item">
                      <FaCheck className="icon-check green-check" />
                      <div>
                        <strong>Live Patient Progress &amp; ROM Mobility Updates</strong>
                      </div>
                    </div>
                    <div className="grid-check-item">
                      <FaCheck className="icon-check green-check" />
                      <div>
                        <strong>Referral Analytics &amp; Conversion Metrics</strong>
                      </div>
                    </div>
                    <div className="grid-check-item">
                      <FaCheck className="icon-check green-check" />
                      <div>
                        <strong>Build Trusting Long-Term Doctor Partnerships</strong>
                      </div>
                    </div>
                    <div className="grid-check-item">
                      <FaCheck className="icon-check green-check" />
                      <div>
                        <strong>HIPAA &amp; Healthcare Compliant Data Exchange</strong>
                      </div>
                    </div>
                    <div className="grid-check-item">
                      <FaCheck className="icon-check green-check" />
                      <div>
                        <strong>Seamless WhatsApp Referral Summaries</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spec-breakdown-right">
                  <div className="target-audience-card">
                    <h3>Who is this built for?</h3>
                    <p>
                      Physiotherapy clinics looking to build sustainable referral pipelines with surgeons, hospital specialists, and sports academies.
                    </p>

                    <h4>Technology Specs:</h4>
                    <p className="tech-specs-line">
                      Cloud Based (24/7 Access) · Doctor &amp; Admin Web Portal · Therapist &amp; Patient PWAs · WhatsApp Business API · Role-Based Access Control · Encrypted Data Backups
                    </p>

                    <div className="platform-card green-border">
                      <div className="platform-logo-row">
                        <img src={logo} alt="Pakricorn Logo" className="platform-logo" />
                      </div>
                      <span className="platform-badge-title">PLATFORM ENGINEERING</span>
                      <h4 className="platform-company">Developed by PAKRiCORN Techno Solutions</h4>
                      <p className="platform-lab">Medical Referral &amp; Interoperability Engineering Lab</p>
                      <p className="platform-desc">
                        Architected to establish closed-loop clinical referral networks between orthopedic surgeons, neurologists, physicians, and certified physical therapy practices.
                      </p>
                    </div>

                    <button className="spec-cta-btn green-btn full-width-btn" onClick={handleScrollToContact}>
                      Talk to an Implementation Specialist <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* =========================================
             PhysioReach Full Specifications
             ========================================= */
          <div className="modal-content-wrapper reach-theme">
            {/* --- SECTION 1: HERO OVERVIEW --- */}
            <div className="spec-section spec-hero-section">
              <div className="spec-badges-row">
                <span className="spec-pill orange-pill">MODULE 02 · TALENT STAFFING &amp; HOME VISITS</span>
                <span className="spec-status-pill">&#9679; Verified Architecture</span>
              </div>

              <div className="spec-hero-grid">
                <div className="spec-hero-info">
                  <div className="spec-brand-row">
                    <img src={logo} alt="Pakricorn Logo" className="spec-logo" />
                  </div>
                  <h1 className="spec-title">PhysioReach</h1>
                  <p className="spec-developed">
                    Developed by <strong>PAKRiCORN Techno Solutions</strong>
                  </p>
                  <h3 className="spec-tagline orange-text">
                    Hire physiotherapy talent &amp; manage on-demand home visits
                  </h3>
                  <p className="spec-desc">
                    PhysioReach handles both staffing and mobile clinical care. Find certified therapists within 10km, and efficiently dispatch therapists to home-care patients with live GPS tracking and WhatsApp status alerts.
                  </p>
                  <div className="spec-hero-actions">
                    <button className="spec-cta-btn orange-btn" onClick={handleScrollToContact}>
                      Request PhysioReach Demo
                    </button>
                    <a href="#reach-capabilities" className="spec-secondary-btn">
                      Explore Capabilities
                    </a>
                  </div>
                </div>

                <div className="spec-hero-media">
                  <div className="spec-media-frame">
                    <img src={reachHeroImg} alt="PhysioReach team in clinic" className="spec-media-img" />
                    <div className="spec-media-overlay-badge">
                      <img src={logo} alt="Pakricorn" className="overlay-logo" />
                      <div>
                        <strong>PhysioReach</strong>
                        <small>Talent Staffing &amp; Home Visits</small>
                      </div>
                      <span className="verified-tag">&#10003; Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- SECTION 2: TALENT STAFFING & HOME VISITS DISPATCH --- */}
            <div className="spec-section spec-cards-section" id="reach-capabilities">
              <div className="spec-center-header">
                <span className="spec-category-badge orange-badge">STAFFING &amp; FIELD CARE HUB</span>
                <h2 className="spec-section-title">
                  Physiotherapy Talent Staffing &amp; Home Visits Dispatch
                </h2>
                <p className="spec-section-subtitle">
                  Connecting clinics with qualified therapists and empowering on-demand mobile rehabilitation beyond clinic walls.
                </p>
              </div>

              <div className="spec-feature-cards-grid">
                {/* Feature 1 */}
                <div className="spec-feature-card">
                  <div className="card-header-icon orange-icon-bg">
                    <FaMapMarkerAlt />
                  </div>
                  <h3>10 km Location-Based Staff Matching</h3>
                  <p className="card-sub-header">Hire Full-Time, Part-Time &amp; Locum Relief</p>
                  <p className="card-body-text">
                    Instantly discover certified physiotherapists located within a 10 km radius of your clinic branch, cutting hiring turnaround from weeks to hours.
                  </p>
                  <ul className="spec-check-list">
                    <li><FaCheck className="icon-check orange-check" /> Smart geographical proximity filtering (10 km radius)</li>
                    <li><FaCheck className="icon-check orange-check" /> Full-time, part-time, weekend &amp; emergency locum shifts</li>
                    <li><FaCheck className="icon-check orange-check" /> Categorized by specialty: Ortho, Neuro, Pediatrics &amp; Cardio</li>
                    <li><FaCheck className="icon-check orange-check" /> Direct in-app interview scheduling and document review</li>
                  </ul>
                </div>

                {/* Feature 2 */}
                <div className="spec-feature-card">
                  <div className="card-header-icon blue-icon-bg">
                    <FaUserCheck />
                  </div>
                  <h3>Verified Clinical Credentials</h3>
                  <p className="card-sub-header">Authenticated Degrees, Council &amp; Skills</p>
                  <p className="card-body-text">
                    Every applicant's state council registration, degree certificates, and clinical case experience are pre-verified before profile approval.
                  </p>
                  <ul className="spec-check-list">
                    <li><FaCheck className="icon-check orange-check" /> State Physiotherapy Council license verification</li>
                    <li><FaCheck className="icon-check orange-check" /> BPT / MPT university degree and internship validation</li>
                    <li><FaCheck className="icon-check orange-check" /> Peer-rated clinical competency scores &amp; patient feedback</li>
                    <li><FaCheck className="icon-check orange-check" /> Standardized background and identity credentialing</li>
                  </ul>
                </div>

                {/* Feature 3 */}
                <div className="spec-feature-card">
                  <div className="card-header-icon teal-icon-bg">
                    <FaHome />
                  </div>
                  <h3>Home Visits Field Care Dispatch</h3>
                  <p className="card-sub-header">Live GPS Tracking &amp; Mobile Rehab Dispatch</p>
                  <p className="card-body-text">
                    Expand your practice beyond clinic walls. Assign home care requests to nearby certified therapists with real-time GPS tracking.
                  </p>
                  <ul className="spec-check-list">
                    <li><FaCheck className="icon-check orange-check" /> Instant home visit booking allocation based on therapist proximity</li>
                    <li><FaCheck className="icon-check orange-check" /> Real-time GPS route monitoring and live arrival estimates</li>
                    <li><FaCheck className="icon-check orange-check" /> Automated WhatsApp booking alerts with therapist photo to patient</li>
                    <li><FaCheck className="icon-check orange-check" /> Home care clinical emergency protocol and SOS alerts</li>
                  </ul>
                </div>

                {/* Feature 4 */}
                <div className="spec-feature-card highlighted-card orange-highlight">
                  <div className="card-header-icon purple-icon-bg">
                    <FaMobileAlt />
                  </div>
                  <h3>Digital Check-In &amp; Instant Settlement</h3>
                  <p className="card-sub-header">Geo-Fenced Timestamps &amp; Automated Payouts</p>
                  <p className="card-body-text">
                    Ensure transparent home care execution with geo-fenced check-in/out timestamps and automatic travel allowance calculation.
                  </p>
                  <ul className="spec-check-list">
                    <li><FaCheck className="icon-check orange-check" /> Geo-fenced start and end session verification timestamps</li>
                    <li><FaCheck className="icon-check orange-check" /> Mobile session exercise logs synced directly to patient record</li>
                    <li><FaCheck className="icon-check orange-check" /> Instant digital patient payment via UPI QR code or cash ledger</li>
                    <li><FaCheck className="icon-check orange-check" /> Automated per-visit compensation &amp; travel allowance payout</li>
                  </ul>
                </div>
              </div>

              {/* Mobile Home Visits Protocol Banner */}
              <div className="spec-directory-box">
                <span className="directory-label">&#128658; Mobile Home Visits Dispatch &amp; Field Rehabilitation Protocols:</span>
                <div className="directory-pills-row">
                  <span className="dir-pill"><FaCheck className="icon-check orange-check" /> Live GPS Route Navigation</span>
                  <span className="dir-pill"><FaCheck className="icon-check orange-check" /> 10 km Geo-Fenced Radius</span>
                  <span className="dir-pill"><FaCheck className="icon-check orange-check" /> Automated WhatsApp Arrival Alerts</span>
                  <span className="dir-pill"><FaCheck className="icon-check orange-check" /> Bedside Digital Check-In / Check-Out</span>
                  <span className="dir-pill"><FaCheck className="icon-check orange-check" /> Per-Visit Allowance &amp; Travel Settlement</span>
                  <span className="dir-pill"><FaCheck className="icon-check orange-check" /> Instant SOS Clinical Safety Protocol</span>
                </div>
              </div>
            </div>

            {/* --- SECTION 3: DETAILED BREAKDOWN & TECHNICAL SPECS --- */}
            <div className="spec-section spec-breakdown-section">
              <div className="spec-breakdown-grid">
                <div className="spec-breakdown-left">
                  <span className="spec-category-badge orange-badge">DETAILED BREAKDOWN</span>
                  <h2 className="spec-breakdown-title">Key Clinical &amp; Management Capabilities</h2>
                  <p className="spec-breakdown-subtitle">
                    Engineered to save time, prevent documentation errors, and streamline patient outcomes.
                  </p>

                  <div className="spec-core-feature-box">
                    <div className="core-box-header">
                      <FaHome className="core-icon" />
                      <strong>Home Visits &amp; Field Care Dispatch (Integrated into PhysioReach)</strong>
                    </div>
                    <p className="core-box-text">
                      Dispatch therapists beyond clinic walls with live GPS route status, automated WhatsApp updates, and digital timestamps.
                    </p>
                  </div>

                  <div className="spec-grid-checkmarks">
                    <div className="grid-check-item">
                      <FaCheck className="icon-check orange-check" />
                      <div>
                        <strong>10 km Location-Based Staff Matching</strong>
                      </div>
                    </div>
                    <div className="grid-check-item">
                      <FaCheck className="icon-check orange-check" />
                      <div>
                        <strong>Hire Full-Time &amp; Locum Relief Therapists</strong>
                      </div>
                    </div>
                    <div className="grid-check-item">
                      <FaCheck className="icon-check orange-check" />
                      <div>
                        <strong>Assign Home Visits to Nearby Therapists</strong>
                      </div>
                    </div>
                    <div className="grid-check-item">
                      <FaCheck className="icon-check orange-check" />
                      <div>
                        <strong>Live GPS &amp; Route Monitoring Status</strong>
                      </div>
                    </div>
                    <div className="grid-check-item">
                      <FaCheck className="icon-check orange-check" />
                      <div>
                        <strong>Post Jobs &amp; Intern Recruitment</strong>
                      </div>
                    </div>
                    <div className="grid-check-item">
                      <FaCheck className="icon-check orange-check" />
                      <div>
                        <strong>Share Booking Details via Automated WhatsApp</strong>
                      </div>
                    </div>
                    <div className="grid-check-item">
                      <FaCheck className="icon-check orange-check" />
                      <div>
                        <strong>Digital Check-In / Check-Out Timestamps</strong>
                      </div>
                    </div>
                    <div className="grid-check-item">
                      <FaCheck className="icon-check orange-check" />
                      <div>
                        <strong>Timely Home Visit Closure &amp; UPI/Cash Settlement</strong>
                      </div>
                    </div>
                    <div className="grid-check-item">
                      <FaCheck className="icon-check orange-check" />
                      <div>
                        <strong>Verified Degrees, Licenses &amp; Skills Portfolio</strong>
                      </div>
                    </div>
                    <div className="grid-check-item">
                      <FaCheck className="icon-check orange-check" />
                      <div>
                        <strong>Instant Mobile Shift Scheduling &amp; Review Ratings</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spec-breakdown-right">
                  <div className="target-audience-card">
                    <h3>Who is this built for?</h3>
                    <p>
                      Clinics needing reliable locum or full-time therapists, and practices providing mobile rehabilitation, geriatric home care, or stroke recovery.
                    </p>

                    <h4>Technology Specs:</h4>
                    <p className="tech-specs-line">
                      Cloud Based (24/7 Access) · Doctor &amp; Admin Web Portal · Therapist &amp; Patient PWAs · WhatsApp Business API · Role-Based Access Control · Encrypted Data Backups
                    </p>

                    <div className="platform-card orange-border">
                      <div className="platform-logo-row">
                        <img src={logo} alt="Pakricorn Logo" className="platform-logo" />
                      </div>
                      <span className="platform-badge-title orange-text">PLATFORM ENGINEERING</span>
                      <h4 className="platform-company">Developed by PAKRiCORN Techno Solutions</h4>
                      <p className="platform-lab">GeoSpatial Dispatch &amp; Workforce Mobility Division</p>
                      <p className="platform-desc">
                        Developed to automate 10 km proximity therapist staffing and deliver precision-timed home rehabilitation dispatch with geofenced proof-of-care.
                      </p>
                    </div>

                    <button className="spec-cta-btn orange-btn full-width-btn" onClick={handleScrollToContact}>
                      Talk to an Implementation Specialist <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
