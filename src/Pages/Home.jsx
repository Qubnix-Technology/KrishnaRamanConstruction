import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../CSS/Home.css';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

import heroSlide1 from '../assets/Image/hero_slide_1.jpg';
import heroSlide2 from '../assets/Image/hero_slide_2.jpg';
import heroSlide3 from '../assets/Image/hero_slide_3.jpg';

const heroSlides = [
  {
    id: 1,
    image: heroSlide1,
    titleLines: ['WE BUILD', 'DREAMS INTO', 'REALITY'],
    subtitle: 'Delivering quality construction solutions with honesty, safety and professionalism.',
    primaryBtn: 'OUR SERVICES',
    secondaryBtn: 'OUR PROJECTS',
    primaryLink: '#services',
    secondaryLink: '#projects'
  },
  {
    id: 2,
    image: heroSlide2,
    titleLines: ['ENGINEERING', 'EXCELLENCE IN', 'EVERY INCH'],
    subtitle: 'From commercial landmarks to industrial infra, building spaces that inspire.',
    primaryBtn: 'OUR SERVICES',
    secondaryBtn: 'OUR PROJECTS',
    primaryLink: '#services',
    secondaryLink: '#projects'
  },
  {
    id: 3,
    image: heroSlide3,
    titleLines: ['INNOVATION &', 'INTEGRITY IN', 'CONSTRUCTION'],
    subtitle: 'Setting the benchmark for modern contracting with safety, speed and trust.',
    primaryBtn: 'OUR SERVICES',
    secondaryBtn: 'OUR PROJECTS',
    primaryLink: '#services',
    secondaryLink: '#projects'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slide rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const services = [
    {
      id: '01',
      title: 'RESIDENTIAL\nCONSTRUCTION',
      desc: 'Building dream homes with quality, comfort and style.',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg">
          <path d="M12 28L28 14l16 14" />
          <path d="M16 25v27h24V25" />
          <path d="M40 18v-6h6v12" />
          <rect x="22" y="36" width="12" height="16" />
          <path d="M28 36v16" />
          <rect x="22" y="24" width="6" height="6" />
          <rect x="34" y="24" width="6" height="6" />
          <line x1="8" y1="52" x2="56" y2="52" strokeWidth="2.8" />
        </svg>
      )
    },
    {
      id: '02',
      title: 'COMMERCIAL\nRENOVATION',
      desc: 'Modern and functional renovation for growing businesses.',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg">
          <rect x="10" y="20" width="18" height="32" />
          <rect x="28" y="10" width="26" height="42" />
          <line x1="15" y1="26" x2="19" y2="26" />
          <line x1="15" y1="32" x2="19" y2="32" />
          <line x1="15" y1="38" x2="19" y2="38" />
          <line x1="15" y1="44" x2="19" y2="44" />
          <line x1="35" y1="16" x2="39" y2="16" />
          <line x1="43" y1="16" x2="47" y2="16" />
          <line x1="35" y1="22" x2="39" y2="22" />
          <line x1="43" y1="22" x2="47" y2="22" />
          <line x1="35" y1="28" x2="39" y2="28" />
          <line x1="43" y1="28" x2="47" y2="28" />
          <line x1="35" y1="34" x2="39" y2="34" />
          <line x1="43" y1="34" x2="47" y2="34" />
          <line x1="35" y1="40" x2="39" y2="40" />
          <line x1="43" y1="40" x2="47" y2="40" />
          <line x1="6" y1="52" x2="58" y2="52" strokeWidth="2.8" />
        </svg>
      )
    },
    {
      id: '03',
      title: 'RENOVATION &\nREMODELING',
      desc: 'Transforming existing spaces with innovation and expertise.',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg">
          <path d="M10 28L32 10l22 18" />
          <path d="M16 24v28h32V24" />
          <line x1="22" y1="42" x2="42" y2="22" strokeWidth="3" />
          <rect x="36" y="16" width="12" height="8" rx="1" transform="rotate(-45 36 16)" fill="none" strokeWidth="2.4" />
          <circle cx="20" cy="44" r="3" />
          <line x1="6" y1="52" x2="58" y2="52" strokeWidth="2.8" />
        </svg>
      )
    },
    {
      id: '04',
      title: 'ARCHITECTURAL\nDESIGN',
      desc: 'Creative designs that combine aesthetics and functionality.',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="service-card-icon-svg">
          <rect x="10" y="12" width="34" height="40" rx="1" />
          <line x1="16" y1="20" x2="38" y2="20" />
          <line x1="16" y1="26" x2="30" y2="26" />
          <line x1="16" y1="32" x2="38" y2="32" />
          <line x1="16" y1="38" x2="28" y2="38" />
          <rect x="22" y="24" width="10" height="10" />
          <path d="M42 26l12 12-14 14-12-12z" strokeWidth="2.2" />
          <polygon points="40,52 38,54 44,54" />
        </svg>
      )
    },
    {
      id: '05',
      title: 'PROJECT\nMANAGEMENT',
      desc: 'End-to-end execution with timely delivery and quality control.',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg">
          <path d="M18 28c0-7.7 6.3-14 14-14s14 6.3 14 14" />
          <path d="M12 28h40v4H12z" />
          <circle cx="32" cy="20" r="2" fill="currentColor" />
          <path d="M22 32v6c0 5.5 4.5 10 10 10s10-4.5 10-10v-6" />
          <path d="M14 54c0-7 6-11 18-11s18 4 18 11" />
          <path d="M30 43l2 5 2-5" />
          <line x1="8" y1="54" x2="56" y2="54" strokeWidth="2.8" />
        </svg>
      )
    },
    {
      id: '06',
      title: 'INTERIOR\nDESIGNING',
      desc: 'Elegant and functional interiors crafted to reflect your style.',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg">
          <rect x="8" y="36" width="48" height="12" rx="2" />
          <path d="M14 36v-6a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v6" />
          <rect x="6" y="48" width="52" height="4" rx="1" />
          <line x1="14" y1="48" x2="14" y2="54" />
          <line x1="50" y1="48" x2="50" y2="54" />
          <circle cx="48" cy="18" r="6" />
          <line x1="48" y1="12" x2="48" y2="8" />
          <line x1="48" y1="24" x2="48" y2="28" />
          <line x1="42" y1="18" x2="38" y2="18" />
          <line x1="54" y1="18" x2="58" y2="18" />
        </svg>
      )
    }
  ];

  const whyUsFeatures = [
    {
      title: 'QUALITY\nASSURANCE',
      desc: 'We use superior materials and advanced technology.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="why-gold-icon">
          <path d="M22 4L8 10v12c0 10 14 18 14 18s14-8 14-18V10L22 4z" />
          <polyline points="15,22 20,27 29,17" strokeWidth="2.8" />
        </svg>
      )
    },
    {
      title: 'EXPERIENCED\nTEAM',
      desc: 'Skilled professionals with years of industry experience.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="why-gold-icon">
          <circle cx="22" cy="12" r="4.5" />
          <path d="M13 32c0-5 4-9 9-9s9 4 9 9" />
          <circle cx="33" cy="15" r="3.5" />
          <path d="M33 32c0-3.5 2-6 5-6.8" />
          <circle cx="11" cy="15" r="3.5" />
          <path d="M11 32c0-3.5-2-6-5-6.8" />
        </svg>
      )
    },
    {
      title: 'SAFETY\nFIRST',
      desc: 'We follow strict safety standards to protect people and projects.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="why-gold-icon">
          <path d="M12 22c0-5.5 4.5-10 10-10s10 4.5 10 10" />
          <path d="M8 22h28v4H8z" />
          <line x1="22" y1="12" x2="22" y2="22" />
          <path d="M15 26v4h14v-4" />
        </svg>
      )
    },
    {
      title: 'ON TIME\nDELIVERY',
      desc: 'We value time and ensure timely project completion.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="why-gold-icon">
          <circle cx="22" cy="22" r="15" />
          <polyline points="22,12 22,22 30,22" strokeWidth="2.6" />
          <line x1="22" y1="3" x2="22" y2="6" />
        </svg>
      )
    },
    {
      title: 'TRANSPARENT\nDEALING',
      desc: 'Honest communication and clear pricing from start to finish.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="why-gold-icon">
          <path d="M10 18l7-7 8 7-8 7z" />
          <path d="M34 18l-7-7-8 7 8 7z" />
          <path d="M17 25l6 6 6-6" />
          <line x1="4" y1="24" x2="10" y2="18" strokeWidth="2.4" />
          <line x1="40" y1="24" x2="34" y2="18" strokeWidth="2.4" />
        </svg>
      )
    }
  ];

  const featuredProjects = [
    {
      title: 'Luxury Villa',
      location: 'Gurugram, Haryana',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Corporate Office',
      location: 'Gurugram, Haryana',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Industrial Warehouse',
      location: 'Manesar, Haryana',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Interior Project',
      location: 'Gurugram, Haryana',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const slide = heroSlides[currentSlide];

  return (
    <main className="homepage-root" id="home">
      {/* =========================================================================
          1. HERO / BANNER SECTION WITH MOTION.DIV SLIDER & CHANGING CONTENT
          ========================================================================= */}
      <section className="hero-banner-section">
        {/* Background Image Carousel with motion.div crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className="hero-motion-bg"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        </AnimatePresence>

        {/* Gradient Overlay for Text Legibility (left dark, right transparent) */}
        <div className="hero-gradient-overlay"></div>

        {/* Content Area with motion.div text transitions */}
        <div className="hero-banner-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className="hero-text-content"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h1 className="hero-main-heading">
                {slide.titleLines.map((line, idx) => (
                  <span key={idx} className="hero-heading-line">
                    {line}
                    <br />
                  </span>
                ))}
              </h1>

              <p className="hero-subtext">
                {slide.subtitle}
              </p>

              <div className="hero-action-buttons">
                <a href={slide.primaryLink} className="btn-hero-services">
                  <span>{slide.primaryBtn}</span>
                  <ArrowRight size={15} className="hero-btn-arrow" />
                </a>
                <a href={slide.secondaryLink} className="btn-hero-projects">
                  <span>{slide.secondaryBtn}</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Indicators & Navigation Arrows */}
        <div className="hero-controls-bar">
          <div className="hero-dots-group">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`hero-dot-btn ${currentSlide === idx ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="hero-nav-arrows">
            <button
              type="button"
              className="hero-arrow-btn"
              onClick={goToPrev}
              aria-label="Previous Slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className="hero-arrow-btn"
              onClick={goToNext}
              aria-label="Next Slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. OUR SERVICES (Complete Construction Solutions - 6 White Cards)
          ========================================================================= */}
      <section className="services-showcase-section" id="services">
        <div className="section-container">
          <div className="section-header-block">
            <span className="section-gold-eyebrow">OUR SERVICES</span>
            <h2 className="section-dark-title">COMPLETE CONSTRUCTION SOLUTIONS</h2>
            <div className="section-gold-line"></div>
          </div>

          <div className="services-cards-grid">
            {services.map((service) => (
              <div key={service.id} className="service-mini-card">
                <div className="service-icon-holder">
                  {service.icon}
                </div>
                <h3 className="service-card-heading">
                  {service.title.split('\n').map((line, i) => (
                    <span key={i} className="heading-line">{line}</span>
                  ))}
                </h3>
                <p className="service-card-paragraph">{service.desc}</p>
                <div className="service-bottom-orange-bar"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHY CHOOSE US (Full-width Dark Navy with Luxury House Background on Left)
          ========================================================================= */}
      <section className="why-choose-us-section" id="why-us">
        <div className="why-us-backdrop-overlay"></div>
        
        <div className="why-us-inner-container">
          <div className="why-us-panel-wrapper">
            {/* Top Section Heading (shifted left aligned with the 5 features) */}
            <div className="section-header-block light why-us-header-aligned">
              <span className="section-gold-eyebrow">WHY CHOOSE US</span>
              <h2 className="section-white-title">BUILT ON TRUST. DELIVERED WITH EXCELLENCE.</h2>
              <div className="section-gold-line"></div>
            </div>

            {/* 5 Features Row spanning across */}
            <div className="why-us-horizontal-row">
              {whyUsFeatures.map((feat, idx) => (
                <div key={idx} className="why-strip-card">
                  <div className="why-icon-box">
                    {feat.icon}
                  </div>
                  <h3 className="why-strip-title">
                    {feat.title.split('\n').map((line, i) => (
                      <span key={i} className="title-line">{line}</span>
                    ))}
                  </h3>
                  <p className="why-strip-desc">{feat.desc}</p>
                  {idx < whyUsFeatures.length - 1 && (
                    <div className="why-card-separator" aria-hidden="true"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. OUR PROJECTS (Featured Projects - 4 Cards + View All Button)
          ========================================================================= */}
      <section className="featured-projects-section" id="projects">
        <div className="section-container">
          <div className="section-header-block">
            <span className="section-gold-eyebrow">OUR PROJECTS</span>
            <h2 className="section-dark-title">FEATURED PROJECTS</h2>
            <div className="section-gold-line"></div>
          </div>

          <div className="projects-quad-grid">
            {featuredProjects.map((project, idx) => (
              <div key={idx} className="project-preview-card">
                <div className="project-thumbnail-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-photo"
                    loading="lazy" 
                  />
                  <div className="project-photo-overlay"></div>
                </div>
                <div className="project-bottom-caption">
                  <h3 className="project-name">{project.title}</h3>
                  <p className="project-city-state">{project.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="projects-cta-wrapper">
            <a href="#projects" className="btn-view-all-projects">
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight size={15} className="btn-view-arrow" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
