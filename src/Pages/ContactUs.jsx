import React, { useState } from 'react';
import '../CSS/CantactUs.css';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  ClipboardCheck, 
  Calculator, 
  Handshake, 
  ChevronDown, 
  ChevronUp, 
  Navigation, 
  AlertCircle 
} from 'lucide-react';

import heroBannerImg from '../assets/Image/hero_slide_1.jpg';

export default function ContactUs({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(0);

  const whyContactPoints = [
    {
      title: 'CONSULTATION',
      desc: 'Discuss your ideas, requirements and project goals directly with our seasoned civil leaders.',
      icon: <MessageCircle size={26} className="why-contact-icon" />
    },
    {
      title: 'PROJECT GUIDANCE',
      desc: 'Get immediate clarity on zoning, design, execution planning and the realistic next steps.',
      icon: <ClipboardCheck size={26} className="why-contact-icon" />
    },
    {
      title: 'PROJECT ESTIMATE',
      desc: 'Share your requirements and get a transparent understanding of the scope and project timeline.',
      icon: <Calculator size={26} className="why-contact-icon" />
    },
    {
      title: 'TRUSTED PARTNERSHIP',
      desc: 'Work with a dedicated team committed to quality craftsmanship, transparency and safety.',
      icon: <Handshake size={26} className="why-contact-icon" />
    }
  ];

  const faqs = [
    {
      q: 'How can I request a quotation?',
      a: 'You can contact us through the form on this page, call our team directly at +91 98765 43210, or email us with your project details. Our engineering team will review the information and arrange a detailed site evaluation.'
    },
    {
      q: 'What types of projects do you handle?',
      a: 'We provide end-to-end residential luxury villas, commercial office towers, industrial factories, high-end interior remodeling, architectural design drafting, and turnkey project management.'
    },
    {
      q: 'Do you handle complete construction projects?',
      a: 'Yes. Depending on your project requirements, our comprehensive turnkey services cover architectural planning, structural engineering, government approvals, material procurement, on-site execution, and final handover.'
    },
    {
      q: 'Where do you provide your services?',
      a: 'We primarily serve clients across Gurugram, Delhi NCR, and surrounding metropolitan regions. Contact our team to discuss your specific project location and logistical feasibility.'
    },
    {
      q: 'How quickly will someone respond?',
      a: 'Once we receive your enquiry through our form or email, our engineering desk will review the details and contact you within 24 business hours.'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (formStatus === 'error') setFormStatus('idle');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.service || !formData.message.trim()) {
      setFormStatus('error');
      setErrorMessage('Please fill in all required fields marked with *');
      return;
    }

    setFormStatus('submitting');

    // Simulate reliable submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        location: '',
        message: ''
      });
    }, 900);
  };

  const scrollToForm = () => {
    const el = document.getElementById('contact-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="contactus-page-root">
      {/* =========================================================================
          1. CONTACT HERO / PAGE BANNER
          ========================================================================= */}
      <section className="contact-hero-banner">
        <div 
          className="contact-hero-bg"
          style={{ backgroundImage: `url(${heroBannerImg})` }}
        />
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-container">
          <div className="contact-hero-content">
            <span className="contact-gold-eyebrow">CONTACT US</span>
            <h1 className="contact-hero-heading">
              LET'S BUILD SOMETHING<br />
              GREAT TOGETHER.
            </h1>
            <p className="contact-hero-subtext">
              Have a project in mind? Talk to our team about your construction requirements, architectural ideas and project goals.
            </p>
            <div className="contact-hero-cta">
              <button 
                type="button" 
                className="btn-contact-quote"
                onClick={scrollToForm}
              >
                <span>GET A QUOTE</span>
                <ArrowRight size={15} className="btn-arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. CONTACT INTRO
          ========================================================================= */}
      <section className="contact-intro-section">
        <div className="contact-section-container">
          <div className="section-header-block centered">
            <span className="contact-gold-eyebrow">GET IN TOUCH</span>
            <h2 className="section-dark-title">WE'D LOVE TO HEAR ABOUT YOUR PROJECT.</h2>
            <div className="section-gold-line"></div>
            <p className="contact-intro-desc">
              Whether you're planning a new luxury home, commercial space, industrial facility or architectural renovation, our team is ready to understand your requirements and help you take the next step.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. MAIN CONTACT SECTION (Contact Information + Form)
          ========================================================================= */}
      <section className="main-contact-section" id="contact-form-section">
        <div className="contact-section-container">
          <div className="contact-split-grid">
            
            {/* Left Column: Contact Information */}
            <div className="contact-info-col">
              <div className="contact-info-card">
                <span className="contact-gold-eyebrow">CONTACT INFORMATION</span>
                <h3 className="info-main-title">LET'S START A CONVERSATION.</h3>
                <div className="info-gold-line"></div>
                <p className="info-desc">
                  Our team is available to discuss your project requirements, answer your engineering queries and provide guidance on the next steps.
                </p>

                <div className="contact-details-list">
                  {/* Address */}
                  <div className="contact-detail-item">
                    <div className="contact-icon-box">
                      <MapPin size={20} />
                    </div>
                    <div className="detail-text-wrap">
                      <span className="detail-label">OFFICE LOCATION</span>
                      <p className="detail-value">
                        Suncity, Sector 54,<br />
                        Gurugram, Haryana – 122011
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="contact-detail-item">
                    <div className="contact-icon-box">
                      <Phone size={20} />
                    </div>
                    <div className="detail-text-wrap">
                      <span className="detail-label">PHONE NUMBER</span>
                      <a href="tel:+919876543210" className="detail-value link-value">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="contact-detail-item">
                    <div className="contact-icon-box">
                      <Mail size={20} />
                    </div>
                    <div className="detail-text-wrap">
                      <span className="detail-label">EMAIL ADDRESS</span>
                      <a href="mailto:info@krisharamanconstruction.com" className="detail-value link-value">
                        info@krisharamanconstruction.com
                      </a>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="contact-detail-item">
                    <div className="contact-icon-box">
                      <Globe size={20} />
                    </div>
                    <div className="detail-text-wrap">
                      <span className="detail-label">WEBSITE</span>
                      <a href="https://www.krisharamanconstruction.com" target="_blank" rel="noopener noreferrer" className="detail-value link-value">
                        www.krisharamanconstruction.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="office-hours-block">
                  <div className="hours-header">
                    <Clock size={16} className="hours-clock-icon" />
                    <span className="hours-title">OFFICE HOURS</span>
                  </div>
                  <div className="hours-row">
                    <span className="day-name">Monday – Saturday:</span>
                    <span className="time-val">09:00 AM – 06:00 PM</span>
                  </div>
                  <div className="hours-row">
                    <span className="day-name">Sunday:</span>
                    <span className="time-val closed">Closed</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="contact-social-block">
                  <span className="social-label">FOLLOW US</span>
                  <div className="social-icons-row">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="Facebook">
                      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                      </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="Instagram">
                      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="LinkedIn">
                      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="Twitter">
                      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="contact-info-gold-bar"></div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                <div className="form-card-header">
                  <span className="contact-gold-eyebrow">SEND US A MESSAGE</span>
                  <h3 className="form-main-heading">TELL US ABOUT YOUR PROJECT.</h3>
                  <p className="form-subheading">
                    Fill out the form below and our construction specialists will get back to you with guidance and estimation.
                  </p>
                </div>

                {formStatus === 'success' ? (
                  <div className="form-success-banner">
                    <div className="success-icon-badge">
                      <CheckCircle2 size={36} />
                    </div>
                    <h4 className="success-heading">Message Sent Successfully!</h4>
                    <p className="success-paragraph">
                      Thank you for contacting <strong>Krisha Raman Construction &amp; Contractors</strong>. Our team will review your project details and reach out within 24 hours.
                    </p>
                    <button 
                      type="button" 
                      className="btn-send-another"
                      onClick={() => setFormStatus('idle')}
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </div>
                ) : (
                  <form className="interactive-contact-form" onSubmit={handleSubmit} noValidate>
                    {formStatus === 'error' && (
                      <div className="form-error-alert">
                        <AlertCircle size={16} />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="form-row-2">
                      <div className="form-field-group">
                        <label className="form-field-label" htmlFor="contact-name">FULL NAME *</label>
                        <input 
                          type="text" 
                          id="contact-name"
                          name="name"
                          required 
                          className="form-text-input" 
                          placeholder="e.g. Vikram Malhotra"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-field-group">
                        <label className="form-field-label" htmlFor="contact-email">EMAIL ADDRESS *</label>
                        <input 
                          type="email" 
                          id="contact-email"
                          name="email"
                          required 
                          className="form-text-input" 
                          placeholder="e.g. vikram@example.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="form-field-group">
                        <label className="form-field-label" htmlFor="contact-phone">PHONE NUMBER *</label>
                        <input 
                          type="tel" 
                          id="contact-phone"
                          name="phone"
                          required 
                          className="form-text-input" 
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-field-group">
                        <label className="form-field-label" htmlFor="contact-service">SERVICE REQUIRED *</label>
                        <select 
                          id="contact-service"
                          name="service"
                          required 
                          className="form-select-input"
                          value={formData.service}
                          onChange={handleChange}
                        >
                          <option value="">Select a service ▼</option>
                          <option value="Residential Construction">Residential Construction</option>
                          <option value="Commercial Construction">Commercial Construction</option>
                          <option value="Industrial Construction">Industrial Construction</option>
                          <option value="Renovation & Remodeling">Renovation &amp; Remodeling</option>
                          <option value="Architectural Design">Architectural Design</option>
                          <option value="Project Management">Project Management</option>
                          <option value="Other">Other Construction Service</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-field-group">
                      <label className="form-field-label" htmlFor="contact-location">PROJECT LOCATION</label>
                      <input 
                        type="text" 
                        id="contact-location"
                        name="location"
                        className="form-text-input" 
                        placeholder="e.g. Sector 54, Gurugram or Delhi NCR"
                        value={formData.location}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-field-group">
                      <label className="form-field-label" htmlFor="contact-message">TELL US ABOUT YOUR PROJECT *</label>
                      <textarea 
                        id="contact-message"
                        name="message"
                        required 
                        rows="4" 
                        className="form-textarea-input" 
                        placeholder="Describe your project, plot dimensions, expected timeline, specifications or any questions you have..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <button 
                      type="submit" 
                      className={`btn-submit-contact ${formStatus === 'submitting' ? 'loading' : ''}`}
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'submitting' ? (
                        <span>SENDING...</span>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <ArrowRight size={16} className="btn-arrow" />
                        </>
                      )}
                    </button>
                  </form>
                )}
                
                <div className="form-card-gold-bar"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHY CONTACT US (Dark Navy #071522 4 Benefits)
          ========================================================================= */}
      <section className="why-contact-section">
        <div className="contact-section-container">
          <div className="section-header-block light centered">
            <span className="contact-gold-eyebrow">WHY CONTACT US</span>
            <h2 className="section-white-title">YOUR PROJECT STARTS WITH A CONVERSATION.</h2>
            <div className="section-gold-line"></div>
          </div>

          <div className="why-contact-grid">
            {whyContactPoints.map((item, idx) => (
              <div key={idx} className="why-contact-card">
                <div className="why-contact-icon-circle">
                  {item.icon}
                </div>
                <h3 className="why-contact-title">{item.title}</h3>
                <p className="why-contact-desc">{item.desc}</p>
                <div className="why-contact-gold-bar"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. FIND US / MAP LOCATION (White Background)
          ========================================================================= */}
      <section className="find-us-section">
        <div className="contact-section-container">
          <div className="section-header-block">
            <span className="contact-gold-eyebrow">FIND US</span>
            <h2 className="section-dark-title">VISIT OUR OFFICE</h2>
            <div className="section-gold-line left-aligned"></div>
          </div>

          <div className="map-location-grid">
            {/* Interactive Embedded Map */}
            <div className="map-frame-wrapper">
              <iframe 
                title="Krisha Raman Construction Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14035.793838183208!2d77.1054366!3d28.4359489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f409581335b%3A0xe5a14d59a7fbb97f!2sSector%2054%2C%20Gurugram%2C%20Haryana%20122011!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="map-iframe"
              />
              <div className="map-gold-bar"></div>
            </div>

            {/* Address Details Card */}
            <div className="map-address-panel">
              <span className="contact-gold-eyebrow">HEADQUARTERS</span>
              <h3 className="map-panel-title">
                KRISHA RAMAN<br />
                <span>CONSTRUCTION &amp; CONTRACTORS</span>
              </h3>
              <div className="map-panel-divider"></div>

              <div className="map-panel-info">
                <div className="panel-info-row">
                  <MapPin size={20} className="panel-icon" />
                  <div>
                    <span className="panel-info-label">Address</span>
                    <p className="panel-info-val">Suncity, Sector 54, Gurugram, Haryana – 122011</p>
                  </div>
                </div>

                <div className="panel-info-row">
                  <Phone size={20} className="panel-icon" />
                  <div>
                    <span className="panel-info-label">Direct Line</span>
                    <a href="tel:+919876543210" className="panel-info-val link-val">+91 98765 43210</a>
                  </div>
                </div>

                <div className="panel-info-row">
                  <Mail size={20} className="panel-icon" />
                  <div>
                    <span className="panel-info-label">General Enquiries</span>
                    <a href="mailto:info@krisharamanconstruction.com" className="panel-info-val link-val">info@krisharamanconstruction.com</a>
                  </div>
                </div>
              </div>

              <a 
                href="https://maps.google.com/?q=Sector+54+Gurugram+Haryana+122011" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-get-directions"
              >
                <Navigation size={15} />
                <span>GET DIRECTIONS</span>
                <ArrowRight size={14} className="btn-arrow" />
              </a>

              <div className="map-panel-gold-bar"></div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. FAQ ACCORDION (Light Gray Background)
          ========================================================================= */}
      <section className="contact-faq-section">
        <div className="contact-section-container">
          <div className="section-header-block centered">
            <span className="contact-gold-eyebrow">FAQ</span>
            <h2 className="section-dark-title">HAVE QUESTIONS? WE'RE HERE TO HELP.</h2>
            <div className="section-gold-line"></div>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div key={idx} className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    type="button" 
                    className="faq-question-btn"
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.q}</span>
                    <div className="faq-toggle-icon">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                  <div className="faq-gold-bar"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. FINAL READY TO GET STARTED STATEMENT (White Background)
          ========================================================================= */}
      <section className="contact-ready-section">
        <div className="contact-section-container">
          <div className="ready-box-inner">
            <span className="contact-gold-eyebrow">READY TO GET STARTED?</span>
            <h2 className="section-dark-title">LET'S TURN YOUR IDEA INTO A REALITY.</h2>
            <div className="section-gold-line"></div>
            <p className="ready-subtext">
              Tell us about your project and let's discuss how we can help bring it to life with quality, safety and precision.
            </p>
            <button 
              type="button" 
              className="btn-talk-team"
              onClick={scrollToForm}
            >
              <span>TALK TO OUR TEAM</span>
              <ArrowRight size={15} className="btn-arrow" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. MOBILE STICKY QUICK CONTACT BAR
          ========================================================================= */}
      <div className="mobile-sticky-contact-bar" aria-label="Quick contact actions">
        <a href="tel:+919876543210" className="mobile-sticky-btn call-btn">
          <Phone size={15} />
          <span>CALL US</span>
        </a>
        <button 
          type="button" 
          className="mobile-sticky-btn quote-btn"
          onClick={scrollToForm}
        >
          <span>GET A QUOTE</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </main>
  );
}
