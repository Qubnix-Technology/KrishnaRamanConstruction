import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logoImg from '../assets/Image/logo.jpeg';
import { 
  Home, 
  Building2, 
  Factory, 
  Wrench, 
  Compass, 
  HardHat, 
  Palette,
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X,
  PhoneCall
} from 'lucide-react';

const servicesList = [
  {
    id: 'residential',
    title: 'Residential Construction',
    desc: 'Building dream homes with quality, comfort and style.',
    icon: Home,
    path: '#residential'
  },
  {
    id: 'commercial',
    title: 'Commercial Renovation',
    desc: 'Modern and functional renovation for growing businesses.',
    icon: Building2,
    path: '#commercial'
  },
  {
    id: 'renovation',
    title: 'Renovation & Remodeling',
    desc: 'Transforming existing spaces with innovation and expertise.',
    icon: Wrench,
    path: '#renovation'
  },
  {
    id: 'architectural',
    title: 'Architectural Design',
    desc: 'Creative designs that combine aesthetics and functionality.',
    icon: Compass,
    path: '#architectural'
  },
  {
    id: 'project-mgmt',
    title: 'Project Management',
    desc: 'End-to-end execution with timely delivery and quality control.',
    icon: HardHat,
    path: '#project-mgmt'
  },
  {
    id: 'interior-designing',
    title: 'Interior Designing',
    desc: 'Elegant and functional interiors crafted to reflect your style.',
    icon: Palette,
    path: '#interior-designing'
  }
];

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT US', href: '#about' },
  { name: 'SERVICES', href: '#services', hasDropdown: true },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'WHY US', href: '#why-us' },
  { name: 'CAREERS', href: '#careers' },
  { name: 'CONTACT US', href: '#contact' }
];

export default function Navbar({ currentPage = 'HOME', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, name, href) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate(name, href);
    }
    setIsMobileMenuOpen(false);
    setIsServicesOpenMobile(false);
  };

  const isQuoteActive = currentPage === 'GET A QUOTE';

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Mobile Hamburger Button */}
          <button 
            type="button" 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="hamburger-box">
              <span className="hamburger-bar bar-top"></span>
              <span className="hamburger-bar bar-mid"></span>
              <span className="hamburger-bar bar-bot"></span>
            </span>
          </button>

          {/* Brand Logo */}
          <a 
            href="#home" 
            className="navbar-brand"
            onClick={(e) => handleNavClick(e, 'HOME', '#home')}
          >
            <div className="logo-img-wrapper">
              <img 
                src={logoImg} 
                alt="Krisha Raman Construction & Contractors" 
                className="navbar-logo"
              />
            </div>
            <div className="brand-text-block">
              <span className="brand-name">KRISHA RAMAN</span>
              <span className="brand-tag">CONSTRUCTION &amp; CONTRACTORS</span>
              <span className="brand-motto">BUILDING TRUST, CREATING FUTURES</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-navigation" aria-label="Main Navigation">
            <ul className="nav-menu">
              {navLinks.map((link) => {
                const isActive = currentPage === link.name;
                if (link.hasDropdown) {
                  return (
                    <li 
                      key={link.name} 
                      className={`nav-item dropdown-parent ${isActive ? 'active' : ''}`}
                    >
                      <a 
                        href={link.href}
                        className={`nav-link ${isActive ? 'active' : ''}`}
                        onClick={(e) => handleNavClick(e, link.name, link.href)}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className="dropdown-chevron" size={14} />
                      </a>

                      {/* Dropdown Menu - 2 Column Architecture */}
                      <div className="dropdown-panel">
                        <div className="dropdown-inner">
                          <div className="dropdown-header-bar">
                            <span className="dropdown-subtitle">CONSTRUCTION SERVICES</span>
                          </div>
                          <div className="dropdown-grid">
                            {servicesList.map((service) => {
                              const IconComponent = service.icon;
                              return (
                                <a 
                                  key={service.id} 
                                  href={service.path}
                                  className="dropdown-card"
                                  onClick={(e) => handleNavClick(e, 'SERVICES', service.path)}
                                >
                                  <div className="dropdown-icon-wrapper">
                                    <IconComponent size={18} className="service-icon" />
                                  </div>
                                  <div className="dropdown-card-text">
                                    <span className="service-title">{service.title}</span>
                                    <span className="service-desc">{service.desc}</span>
                                  </div>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={link.name} className={`nav-item ${isActive ? 'active' : ''}`}>
                    <a 
                      href={link.href}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      onClick={(e) => handleNavClick(e, link.name, link.href)}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop & Header Action CTA */}
          <div className="navbar-actions">
            <a 
              href="#quote" 
              className={`btn-get-quote ${isQuoteActive ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'GET A QUOTE', '#quote')}
            >
              <span className="btn-text">GET A QUOTE</span>
              <ArrowRight className="btn-arrow" size={16} />
            </a>
          </div>

          {/* Compact Mobile CTA */}
          <a 
            href="#quote" 
            className={`mobile-quote-btn ${isQuoteActive ? 'active' : ''}`}
            aria-label="Get a quote" 
            onClick={(e) => handleNavClick(e, 'GET A QUOTE', '#quote')}
          >
            <span className="mobile-btn-text">GET QUOTE</span>
            <ArrowRight size={14} className="mobile-btn-icon" />
          </a>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`mobile-backdrop ${isMobileMenuOpen ? 'visible' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-in Drawer */}
      <aside className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        <div className="drawer-header">
          <div className="drawer-brand">
            <div className="drawer-logo-img">
              <img src={logoImg} alt="KR Logo" />
            </div>
            <div className="drawer-brand-text">
              <span className="drawer-brand-title">KRISHA RAMAN</span>
              <span className="drawer-brand-sub">CONSTRUCTION &amp; CONTRACTORS</span>
            </div>
          </div>
          <button 
            type="button" 
            className="drawer-close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="drawer-body">
          <ul className="drawer-nav-list">
            {navLinks.map((link) => {
              const isActive = currentPage === link.name;
              if (link.hasDropdown) {
                return (
                  <li key={link.name} className="drawer-nav-item has-sub">
                    <div className="drawer-item-row">
                      <a 
                        href={link.href}
                        className={`drawer-nav-link ${isActive ? 'active' : ''}`}
                        onClick={(e) => handleNavClick(e, link.name, link.href)}
                      >
                        {link.name}
                      </a>
                      <button 
                        type="button" 
                        className={`drawer-sub-toggle ${isServicesOpenMobile ? 'expanded' : ''}`}
                        onClick={() => setIsServicesOpenMobile(!isServicesOpenMobile)}
                        aria-label="Toggle services submenu"
                      >
                        <ChevronDown size={18} />
                      </button>
                    </div>

                    {/* Collapsible Mobile Submenu */}
                    <div className={`drawer-submenu ${isServicesOpenMobile ? 'expanded' : ''}`}>
                      {servicesList.map((service) => {
                        const IconComponent = service.icon;
                        return (
                          <a 
                            key={service.id} 
                            href={service.path}
                            className="drawer-sub-link"
                            onClick={(e) => handleNavClick(e, 'SERVICES', service.path)}
                          >
                            <IconComponent size={16} className="sub-icon" />
                            <span>{service.title}</span>
                          </a>
                        );
                      })}
                    </div>
                  </li>
                );
              }

              return (
                <li key={link.name} className="drawer-nav-item">
                  <a 
                    href={link.href}
                    className={`drawer-nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.name, link.href)}
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={14} className="drawer-arrow" />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="drawer-cta-section">
            <a 
              href="#quote" 
              className={`drawer-quote-btn ${isQuoteActive ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'GET A QUOTE', '#quote')}
            >
              <span>GET A QUOTE</span>
              <ArrowRight size={16} />
            </a>

            <div className="drawer-contact-snippet">
              <PhoneCall size={14} className="contact-icon" />
              <span>+91 99908 95089, +91 99112 73705</span>
            </div>

            <div className="drawer-footer-divider"></div>

            <div className="drawer-footer-tagline">
              <span className="tagline-primary">BUILDING TRUST,</span>
              <span className="tagline-secondary">CREATING FUTURES</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
