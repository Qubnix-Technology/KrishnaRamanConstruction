import React from 'react';
import '../CSS/About.css';
import { ArrowRight, Target, Eye } from 'lucide-react';
import heroBannerImg from '../assets/Image/hero_slide_2.jpg';
import aboutWhoWeAreImg from '../assets/Image/about_who_we_are.jpg';
import aboutApproachImg from '../assets/Image/about_approach.jpg';

export default function About({ onNavigate }) {
  const whyUsFeatures = [
    {
      title: 'QUALITY\nASSURANCE',
      desc: 'We maintain high standards throughout planning, construction and completion.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="about-why-icon">
          <path d="M22 4L8 10v12c0 10 14 18 14 18s14-8 14-18V10L22 4z" />
          <polyline points="15,22 20,27 29,17" strokeWidth="2.8" />
        </svg>
      )
    },
    {
      title: 'EXPERIENCED\nTEAM',
      desc: 'Our professionals bring practical knowledge and dedicated project expertise.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="about-why-icon">
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
      desc: 'Safety remains a fundamental part of every project and worksite.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="about-why-icon">
          <path d="M12 22c0-5.5 4.5-10 10-10s10 4.5 10 10" />
          <path d="M8 22h28v4H8z" />
          <line x1="22" y1="12" x2="22" y2="22" />
          <path d="M15 26v4h14v-4" />
        </svg>
      )
    },
    {
      title: 'ON-TIME\nDELIVERY',
      desc: 'We plan carefully and manage projects efficiently to meet agreed timelines.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="about-why-icon">
          <circle cx="22" cy="22" r="15" />
          <polyline points="22,12 22,22 30,22" strokeWidth="2.6" />
          <line x1="22" y1="3" x2="22" y2="6" />
        </svg>
      )
    },
    {
      title: 'TRANSPARENT\nDEALING',
      desc: 'Clear communication and honest project coordination from start to finish.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="about-why-icon">
          <path d="M10 18l7-7 8 7-8 7z" />
          <path d="M34 18l-7-7-8 7 8 7z" />
          <path d="M17 25l6 6 6-6" />
          <line x1="4" y1="24" x2="10" y2="18" strokeWidth="2.4" />
          <line x1="40" y1="24" x2="34" y2="18" strokeWidth="2.4" />
        </svg>
      )
    }
  ];

  const values = [
    {
      title: 'INTEGRITY',
      desc: 'We believe in honest communication, responsible decisions and doing what is right.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="value-icon-svg">
          <path d="M24 4L10 10v12c0 10 14 18 14 18s14-8 14-18V10L24 4z" />
          <line x1="24" y1="14" x2="24" y2="28" />
          <line x1="18" y1="20" x2="30" y2="20" />
        </svg>
      )
    },
    {
      title: 'QUALITY',
      desc: 'Every project receives careful attention to workmanship, materials and finishing.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="value-icon-svg">
          <circle cx="24" cy="18" r="10" />
          <polyline points="19,18 23,22 29,14" />
          <polyline points="16,26 12,42 24,36 36,42 32,26" />
        </svg>
      )
    },
    {
      title: 'SAFETY',
      desc: 'We prioritize safe working practices to protect our people, clients and projects.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="value-icon-svg">
          <path d="M14 24c0-5.5 4.5-10 10-10s10 4.5 10 10" />
          <path d="M10 24h28v4H10z" />
          <circle cx="24" cy="34" r="5" />
          <path d="M14 42c0-5 4.5-8 10-8s10 3 10 8" />
        </svg>
      )
    },
    {
      title: 'INNOVATION',
      desc: 'We embrace modern methods, technology and practical design solutions.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="value-icon-svg">
          <path d="M18 20c0-3.3 2.7-6 6-6s6 2.7 6 6c0 2.4-1.4 4.5-3.5 5.5V30h-5v-4.5C19.4 24.5 18 22.4 18 20z" />
          <line x1="21" y1="34" x2="27" y2="34" />
          <line x1="24" y1="8" x2="24" y2="4" />
          <line x1="12" y1="12" x2="9" y2="9" />
          <line x1="36" y1="12" x2="39" y2="9" />
        </svg>
      )
    },
    {
      title: 'TRUST',
      desc: 'We build long-term relationships through transparency and dependable service.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="value-icon-svg">
          <path d="M12 20l7-7 8 7-8 7z" />
          <path d="M36 20l-7-7-8 7 8 7z" />
          <path d="M19 27l6 6 6-6" />
          <line x1="6" y1="26" x2="12" y2="20" strokeWidth="2.6" />
          <line x1="42" y1="26" x2="36" y2="20" strokeWidth="2.6" />
        </svg>
      )
    },
    {
      title: 'EXCELLENCE',
      desc: 'We continuously strive to exceed expectations and deliver lasting results.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="value-icon-svg">
          <polygon points="24,6 29,18 42,19 32,28 35,41 24,34 13,41 16,28 6,19 19,18" />
        </svg>
      )
    }
  ];

  const timelineSteps = [
    {
      step: '01',
      title: 'PLANNING',
      desc: 'Understanding client requirements, site assessment, and creating an actionable project roadmap with detailed cost estimations.'
    },
    {
      step: '02',
      title: 'EXECUTION',
      desc: 'Deploying skilled workforce, sourcing premium materials, and managing structural milestones with precision engineering.'
    },
    {
      step: '03',
      title: 'QUALITY CONTROL',
      desc: 'Continuous inspections, material strength testing, and compliance with the highest safety standards at every stage.'
    },
    {
      step: '04',
      title: 'DELIVERY',
      desc: 'Thorough walkthroughs, final finishing touches, and timely project handover backed by client satisfaction.'
    }
  ];

  return (
    <main className="about-page-root">
      {/* =========================================================================
          1. ABOUT US HERO / PAGE BANNER
          ========================================================================= */}
      <section className="about-hero-banner">
        <div 
          className="about-hero-bg"
          style={{ backgroundImage: `url(${heroBannerImg})` }}
        />
        <div className="about-hero-overlay"></div>

        <div className="about-hero-container">
          <div className="about-hero-content">
            <span className="about-gold-eyebrow">ABOUT US</span>
            <h1 className="about-hero-heading">
              BUILDING TRUST.<br />
              CREATING FUTURES.
            </h1>
            <p className="about-hero-subtext">
              We are committed to delivering quality construction solutions through integrity, innovation and excellence.
            </p>
            <div className="about-hero-cta">
              <a href="#contact" className="btn-about-quote">
                <span>GET A QUOTE</span>
                <ArrowRight size={15} className="btn-arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. WHO WE ARE (Company Introduction + Image)
          ========================================================================= */}
      <section className="who-we-are-section">
        <div className="about-section-container">
          <div className="who-we-are-grid">
            {/* Left Image */}
            <div className="who-image-col">
              <div className="who-image-frame">
                <img 
                  src={aboutWhoWeAreImg} 
                  alt="Architect and Civil Engineers Reviewing Site Blueprints" 
                  className="who-image"
                  loading="lazy"
                />
                <div className="who-image-gold-border"></div>
              </div>
            </div>

            {/* Right Text */}
            <div className="who-text-col">
              <span className="section-gold-eyebrow">WHO WE ARE</span>
              <h2 className="section-dark-title">BUILDING WITH PURPOSE, DELIVERING WITH PRIDE.</h2>
              <div className="section-gold-line left-aligned"></div>

              <div className="who-paragraphs">
                <p>
                  <strong>Krisha Raman Construction &amp; Contractors</strong> is committed to delivering reliable, high-quality construction solutions designed around the needs of every client.
                </p>
                <p>
                  From residential and commercial projects to industrial construction, renovation and architectural design, we focus on combining quality workmanship, modern techniques and responsible project management.
                </p>
                <p>
                  Our approach is built on trust, transparency and attention to detail. We believe every structure is more than a project—it is a space where people build their future.
                </p>
              </div>

              {/* Horizontal Highlight Strip */}
              <div className="who-highlights-bar">
                <div className="highlight-item">
                  <span className="hl-title">QUALITY CONSTRUCTION</span>
                </div>
                <div className="hl-divider"></div>
                <div className="highlight-item">
                  <span className="hl-title">TRUSTED EXECUTION</span>
                </div>
                <div className="hl-divider"></div>
                <div className="highlight-item">
                  <span className="hl-title">CLIENT-FOCUSED SERVICE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. OUR PURPOSE (Mission & Vision - 2 Premium Cards in Dark Navy)
          ========================================================================= */}
      <section className="mission-vision-section">
        <div className="about-section-container">
          <div className="section-header-block light">
            <span className="section-gold-eyebrow">OUR PURPOSE</span>
            <h2 className="section-white-title">BUILDING TODAY FOR A BETTER TOMORROW.</h2>
            <div className="section-gold-line"></div>
          </div>

          <div className="mission-vision-grid">
            {/* Card 1: Mission */}
            <div className="purpose-card">
              <div className="purpose-icon-circle">
                <Target size={28} className="purpose-icon" />
              </div>
              <h3 className="purpose-card-title">OUR MISSION</h3>
              <p className="purpose-card-desc">
                To deliver high-quality construction solutions with integrity, safety and professionalism while creating lasting value for our clients.
              </p>
              <div className="purpose-card-gold-bar"></div>
            </div>

            {/* Card 2: Vision */}
            <div className="purpose-card">
              <div className="purpose-icon-circle">
                <Eye size={28} className="purpose-icon" />
              </div>
              <h3 className="purpose-card-title">OUR VISION</h3>
              <p className="purpose-card-desc">
                To build a trusted construction company recognized for quality, innovation, transparency and excellence in every project we undertake.
              </p>
              <div className="purpose-card-gold-bar"></div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHY KRISHA RAMAN (5 Core Value Features with Separators)
          ========================================================================= */}
      <section className="about-why-us-section">
        <div className="about-section-container">
          <div className="section-header-block">
            <span className="section-gold-eyebrow">WHY KRISHA RAMAN</span>
            <h2 className="section-dark-title">BUILT ON VALUES. DELIVERED WITH EXCELLENCE.</h2>
            <div className="section-gold-line"></div>
          </div>

          <div className="about-why-grid">
            {whyUsFeatures.map((feat, idx) => (
              <div key={idx} className="about-why-card">
                <div className="about-why-icon-box">
                  {feat.icon}
                </div>
                <h3 className="about-why-title">
                  {feat.title.split('\n').map((line, i) => (
                    <span key={i} className="title-line">{line}</span>
                  ))}
                </h3>
                <p className="about-why-desc">{feat.desc}</p>
                {idx < whyUsFeatures.length - 1 && (
                  <div className="about-why-separator" aria-hidden="true"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. OUR VALUES (6 Cards in 3x2 Grid)
          ========================================================================= */}
      <section className="our-values-section">
        <div className="about-section-container">
          <div className="section-header-block">
            <span className="section-gold-eyebrow">OUR VALUES</span>
            <h2 className="section-dark-title">WHAT WE STAND FOR</h2>
            <div className="section-gold-line"></div>
          </div>

          <div className="values-grid">
            {values.map((val, idx) => (
              <div key={idx} className="value-card">
                <div className="value-icon-holder">
                  {val.icon}
                </div>
                <h3 className="value-card-title">{val.title}</h3>
                <p className="value-card-desc">{val.desc}</p>
                <div className="value-card-gold-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. OUR APPROACH (4-Step Timeline in Dark Navy + Right Image)
          ========================================================================= */}
      <section className="our-approach-section">
        <div className="about-section-container">
          <div className="approach-layout-grid">
            {/* Left Content & Steps */}
            <div className="approach-content-col">
              <span className="section-gold-eyebrow">OUR APPROACH</span>
              <h2 className="section-white-title">FROM PLANNING TO COMPLETION</h2>
              <div className="section-gold-line left-aligned"></div>
              
              <p className="approach-intro-text">
                We believe successful construction begins with clear planning and continues through disciplined execution, quality control and transparent communication.
              </p>

              {/* 4-Step Vertical Timeline */}
              <div className="approach-timeline">
                {timelineSteps.map((item, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-marker">
                      <span className="timeline-number">{item.step}</span>
                      {idx < timelineSteps.length - 1 && <div className="timeline-line"></div>}
                    </div>
                    <div className="timeline-body">
                      <h4 className="timeline-title">{item.title}</h4>
                      <p className="timeline-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Architectural Image */}
            <div className="approach-image-col">
              <div className="approach-image-wrapper">
                <img 
                  src={aboutApproachImg} 
                  alt="Modern Construction Project Execution" 
                  className="approach-image"
                  loading="lazy"
                />
                <div className="approach-gold-accent-border"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
