import React, { useState } from 'react';
import './Footer.css';
import logoImg from '../assets/Image/logo.jpeg';
import { 
  PhoneCall, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Plus, 
  Minus 
} from 'lucide-react';

export default function Footer({ onNavigate }) {
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleLinkClick = (e, pageName, href) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate(pageName, href);
    }
  };

  return (
    <footer className="footer-root">
      {/* =========================================================================
          1. GOLD CTA STRIP
          ========================================================================= */}
      <section className="footer-cta-strip">
        <div className="cta-strip-container">
          <div className="cta-strip-left">
            <div className="cta-phone-icon-circle">
              <PhoneCall size={22} className="cta-phone-icon" />
            </div>
            <div className="cta-text-wrap">
              <h3 className="cta-heading">LET'S BUILD SOMETHING GREAT TOGETHER!</h3>
              <p className="cta-subtext">Contact us today for a free consultation and estimate.</p>
            </div>
          </div>
          <div className="cta-strip-right">
            <a 
              href="#contact" 
              className="btn-cta-touch" 
              onClick={(e) => handleLinkClick(e, 'CONTACT US', '#contact')}
            >
              <span className="btn-cta-text">GET IN TOUCH</span>
              <ArrowRight size={16} className="btn-cta-arrow" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. MAIN DARK FOOTER
          ========================================================================= */}
      <div className="main-dark-footer">
        <div className="footer-main-container">
          {/* ----------------- COLUMN 1: BRAND ----------------- */}
          <div className="footer-col-brand">
            <a 
              href="#home" 
              className="footer-brand-lockup" 
              onClick={(e) => handleLinkClick(e, 'HOME', '#home')}
            >
              <div className="footer-logo-box">
                <img src={logoImg} alt="Krisha Raman Construction" className="footer-logo-img" />
              </div>
              <div className="footer-brand-names">
                <span className="brand-main-title">KRISHA RAMAN</span>
                <span className="brand-sub-title">CONSTRUCTION &amp; CONTRACTORS</span>
              </div>
            </a>

            <p className="footer-brand-desc">
              We are committed to delivering high-quality construction solutions with integrity, innovation and excellence.
            </p>

            <div className="footer-social-row">
              {/* Instagram */}
              <a href="https://www.instagram.com/krisharamancompany?igsi=Nzk2Ymtnb2Rzc2xn&utm_source=qr" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
            
            {/* Desktop Vertical Divider */}
            <div className="brand-vertical-divider" aria-hidden="true"></div>
          </div>

          {/* ----------------- COLUMN 2: QUICK LINKS ----------------- */}
          <div className="footer-col-nav">
            <div 
              className="footer-accordion-header"
              onClick={() => setQuickLinksOpen(!quickLinksOpen)}
            >
              <h4 className="footer-col-title">QUICK LINKS</h4>
              <span className="accordion-toggle-icon">
                {quickLinksOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </div>

            <ul className={`footer-link-list ${quickLinksOpen ? 'open' : ''}`}>
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, 'HOME', '#home')}>
                  <span className="bullet-dot">•</span>
                  <span className="link-text">Home</span>
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, 'ABOUT US', '#about')}>
                  <span className="bullet-dot">•</span>
                  <span className="link-text">About Us</span>
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'SERVICES', '#services')}>
                  <span className="bullet-dot">•</span>
                  <span className="link-text">Services</span>
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleLinkClick(e, 'PROJECTS', '#projects')}>
                  <span className="bullet-dot">•</span>
                  <span className="link-text">Projects</span>
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => handleLinkClick(e, 'WHY US', '#why-us')}>
                  <span className="bullet-dot">•</span>
                  <span className="link-text">Why Us</span>
                </a>
              </li>
              <li>
                <a href="#careers" onClick={(e) => handleLinkClick(e, 'CAREERS', '#careers')}>
                  <span className="bullet-dot">•</span>
                  <span className="link-text">Careers</span>
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, 'CONTACT US', '#contact')}>
                  <span className="bullet-dot">•</span>
                  <span className="link-text">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* ----------------- COLUMN 3: SERVICES ----------------- */}
          <div className="footer-col-services">
            <div 
              className="footer-accordion-header"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              <h4 className="footer-col-title">SERVICES</h4>
              <span className="accordion-toggle-icon">
                {servicesOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </div>

            <ul className={`footer-link-list ${servicesOpen ? 'open' : ''}`}>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'SERVICES', '#services')}>
                  <span className="bullet-dot">•</span>
                  <span className="link-text">Residential Construction</span>
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'SERVICES', '#services')}>
                  <span className="bullet-dot">•</span>
                  <span className="link-text">Commercial Renovation</span>
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'SERVICES', '#services')}>
                  <span className="bullet-dot">•</span>
                  <span className="link-text">Renovation &amp; Remodeling</span>
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'SERVICES', '#services')}>
                  <span className="bullet-dot">•</span>
                  <span className="link-text">Architectural Design</span>
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'SERVICES', '#services')}>
                  <span className="bullet-dot">•</span>
                  <span className="link-text">Project Management</span>
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'SERVICES', '#services')}>
                  <span className="bullet-dot">•</span>
                  <span className="link-text">Interior Designing</span>
                </a>
              </li>
            </ul>
          </div>

          {/* ----------------- COLUMN 4: CONTACT US ----------------- */}
          <div className="footer-col-contact" id="footer-contact-block">
            <h4 className="footer-col-title non-accordion">CONTACT US</h4>
            <ul className="footer-contact-rows">
              <li className="contact-row">
                <MapPin size={18} className="contact-icon" />
                <span className="contact-text">Suncity, Sector 54, Gurugram, Haryana – 122011</span>
              </li>
              <li className="contact-row">
                <Phone size={18} className="contact-icon" />
                <span className="contact-text">
                  <a href="tel:+919990895089" className="contact-link">+91 99908 95089</a>,{' '}
                  <a href="tel:+919911273705" className="contact-link">+91 99112 73705</a>
                </span>
              </li>
              <li className="contact-row">
                <Mail size={18} className="contact-icon" />
                <a href="mailto:Info@kkrc.in" className="contact-link">
                  Info@kkrc.in
                </a>
              </li>
              <li className="contact-row">
                <Globe size={18} className="contact-icon" />
                <a href="https://www.krisharamanconstruction.in" target="_blank" rel="noreferrer" className="contact-link">
                  www.krisharamanconstruction.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ----------------- COPYRIGHT SECTION ----------------- */}
        <div className="footer-copyright-bar">
          <div className="footer-copyright-container">
            <p className="copyright-text">
              &copy; 2026 Krisha Raman Construction &amp; Contractors. All Rights Reserved.
            </p>
            <p className="developed-by-text">
              Developed by{' '}
              <a 
                href="https://qubnixtechnology.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="qubnix-link"
              >
                Qubnix Technology
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
