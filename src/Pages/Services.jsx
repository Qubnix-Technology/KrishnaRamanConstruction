import React from 'react';
import '../CSS/Services.css';
import { 
  ArrowRight, 
  Check, 
  MessageSquare, 
  ClipboardList, 
  HardHat, 
  CheckCircle2, 
  Building2, 
  Home as HomeIcon, 
  Factory, 
  Wrench, 
  Compass 
} from 'lucide-react';

import heroBannerImg from '../assets/Image/hero_slide_1.jpg';
import resImg from '../assets/Image/service_residential.jpg';
import commImg from '../assets/Image/service_commercial.jpg';
import indImg from '../assets/Image/service_industrial.jpg';
import renoImg from '../assets/Image/service_renovation.jpg';
import archImg from '../assets/Image/service_architectural.jpg';
import mgmtImg from '../assets/Image/service_management.jpg';

export default function Services({ onNavigate }) {
  const serviceCards = [
    {
      id: 'residential',
      number: '01',
      title: 'RESIDENTIAL\nCONSTRUCTION',
      desc: 'Building dream homes with quality, comfort and style.',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="service-card-icon-svg">
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
      id: 'commercial',
      number: '02',
      title: 'COMMERCIAL\nCONSTRUCTION',
      desc: 'Modern and functional spaces for growing businesses.',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="service-card-icon-svg">
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
      id: 'industrial',
      number: '03',
      title: 'INDUSTRIAL\nCONSTRUCTION',
      desc: 'Strong and efficient structures for industrial needs.',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="service-card-icon-svg">
          <line x1="16" y1="52" x2="16" y2="14" strokeWidth="2.8" />
          <line x1="8" y1="14" x2="54" y2="14" strokeWidth="2.8" />
          <polyline points="8,14 16,6 24,14" />
          <line x1="16" y1="6" x2="44" y2="14" />
          <line x1="48" y1="14" x2="48" y2="26" />
          <rect x="42" y="26" width="12" height="8" fill="none" />
          <line x1="10" y1="52" x2="22" y2="52" strokeWidth="2.8" />
          <line x1="16" y1="22" x2="24" y2="28" />
          <line x1="16" y1="34" x2="24" y2="40" />
          <path d="M28 34v18h26V38l-8-4v4l-8-4v4h-10z" />
        </svg>
      )
    },
    {
      id: 'renovation',
      number: '04',
      title: 'RENOVATION &\nREMODELING',
      desc: 'Transforming existing spaces with innovation and expertise.',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="service-card-icon-svg">
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
      id: 'architectural',
      number: '05',
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
      id: 'project-mgmt',
      number: '06',
      title: 'PROJECT\nMANAGEMENT',
      desc: 'End-to-end execution with timely delivery and quality control.',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="service-card-icon-svg">
          <path d="M18 28c0-7.7 6.3-14 14-14s14 6.3 14 14" />
          <path d="M12 28h40v4H12z" />
          <circle cx="32" cy="20" r="2" fill="currentColor" />
          <path d="M22 32v6c0 5.5 4.5 10 10 10s10-4.5 10-10v-6" />
          <path d="M14 54c0-7 6-11 18-11s18 4 18 11" />
          <path d="M30 43l2 5 2-5" />
          <line x1="8" y1="54" x2="56" y2="54" strokeWidth="2.8" />
        </svg>
      )
    }
  ];

  const detailedServices = [
    {
      id: 'residential',
      number: '01',
      label: 'RESIDENTIAL CONSTRUCTION',
      heading: 'BUILDING HOMES THAT FEEL LIKE HOME.',
      desc: 'We create thoughtfully planned residential spaces that combine functionality, comfort and lasting quality. From individual luxury homes to larger residential housing communities, our team manages every stage with meticulous attention to detail.',
      features: [
        'Quality construction & premium materials',
        'Durable materials & structural warranties',
        'Skilled workmanship & civil expertise',
        'Professional project management & supervision'
      ],
      image: resImg,
      alt: 'Luxury modern residential villa construction',
      imageLeft: true
    },
    {
      id: 'commercial',
      number: '02',
      label: 'COMMERCIAL CONSTRUCTION',
      heading: 'SPACES DESIGNED FOR BUSINESS.',
      desc: 'We deliver modern commercial spaces designed around functionality, efficiency and business growth. Our approach focuses on quality execution, practical architectural planning, and professional project coordination that delivers on time and within budget.',
      features: [
        'Functional architectural planning',
        'Quality execution with Grade-A materials',
        'Efficient project coordination & safety',
        'Professional finishing & handover'
      ],
      image: commImg,
      alt: 'Modern corporate headquarters and commercial building',
      imageLeft: false
    },
    {
      id: 'industrial',
      number: '03',
      label: 'INDUSTRIAL CONSTRUCTION',
      heading: 'STRONG STRUCTURES. BUILT TO PERFORM.',
      desc: 'Our industrial construction solutions are designed for demanding environments where structural strength, spatial efficiency, and heavy-duty reliability are essential. We construct warehouses, manufacturing plants, and logistics hubs.',
      features: [
        'Structural strength & heavy-duty engineering',
        'Industrial-grade materials & steel framing',
        'Safety-focused execution & compliance',
        'Efficient planning for logistic workflows'
      ],
      image: indImg,
      alt: 'Industrial manufacturing plant and warehouse structure',
      imageLeft: true
    },
    {
      id: 'renovation',
      number: '04',
      label: 'RENOVATION & REMODELING',
      heading: 'TRANSFORMING EXISTING SPACES.',
      desc: 'We transform existing residential and commercial properties into modern, functional, and visually appealing environments while maintaining strict attention to structural integrity, safety regulations, and bespoke finishing quality.',
      features: [
        'Complete space transformation & modern layouts',
        'Premium modern finishes & lighting integration',
        'Structural improvements & reinforcement',
        'Detail-focused execution & clean handovers'
      ],
      image: renoImg,
      alt: 'Luxury modern home interior renovation',
      imageLeft: false
    },
    {
      id: 'architectural',
      number: '05',
      label: 'ARCHITECTURAL DESIGN',
      heading: 'DESIGNING SPACES WITH PURPOSE.',
      desc: 'Our architectural design approach combines aesthetics, functionality, and practical construction considerations to create spaces that are both inspiring and purposeful. We deliver conceptual plans, 3D visualizations, and construction-ready drawings.',
      features: [
        'Concept development & creative schematics',
        'Functional spatial planning & zoning',
        'Architectural detailing & 3D visualizations',
        'Construction-ready working blueprints'
      ],
      image: archImg,
      alt: 'Architect workspace with blueprint drafting and scale model',
      imageLeft: true
    },
    {
      id: 'project-mgmt',
      number: '06',
      label: 'PROJECT MANAGEMENT',
      heading: 'FROM PLANNING TO COMPLETION.',
      desc: 'We coordinate every single stage of construction to keep projects highly organized, efficient, and strictly aligned with agreed timelines, cost estimates, and quality standards, eliminating delays and uncertainty.',
      features: [
        'Comprehensive project scheduling & milestones',
        'Resource & contractor coordination',
        'Rigorous quality monitoring & QA testing',
        'Budget tracking & transparent reporting'
      ],
      image: mgmtImg,
      alt: 'Civil engineer and project manager supervising site progress',
      imageLeft: false
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'CONSULTATION',
      desc: 'Understanding requirements, initial site assessment, and establishing project vision.',
      icon: <MessageSquare size={26} className="process-icon" />
    },
    {
      step: '02',
      title: 'PLANNING',
      desc: 'Developing comprehensive project roadmap, architectural blueprints, and transparent estimates.',
      icon: <ClipboardList size={26} className="process-icon" />
    },
    {
      step: '03',
      title: 'EXECUTION',
      desc: 'Building with disciplined project supervision, premium materials, and continuous quality control.',
      icon: <HardHat size={26} className="process-icon" />
    },
    {
      step: '04',
      title: 'DELIVERY',
      desc: 'Completing project handover with thorough final walkthrough inspection and client satisfaction.',
      icon: <CheckCircle2 size={26} className="process-icon" />
    }
  ];

  const whyUsFeatures = [
    {
      title: 'QUALITY\nASSURANCE',
      desc: 'We use superior materials and advanced technology.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="services-why-icon">
          <path d="M22 4L8 10v12c0 10 14 18 14 18s14-8 14-18V10L22 4z" />
          <polyline points="15,22 20,27 29,17" strokeWidth="2.8" />
        </svg>
      )
    },
    {
      title: 'EXPERIENCED\nTEAM',
      desc: 'Skilled professionals with years of industry experience.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="services-why-icon">
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
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="services-why-icon">
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
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="services-why-icon">
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
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="services-why-icon">
          <path d="M10 18l7-7 8 7-8 7z" />
          <path d="M34 18l-7-7-8 7 8 7z" />
          <path d="M17 25l6 6 6-6" />
          <line x1="4" y1="24" x2="10" y2="18" strokeWidth="2.4" />
          <line x1="40" y1="24" x2="34" y2="18" strokeWidth="2.4" />
        </svg>
      )
    }
  ];

  return (
    <main className="services-page-root">
      {/* =========================================================================
          1. SERVICES HERO / PAGE BANNER
          ========================================================================= */}
      <section className="services-hero-banner">
        <div 
          className="services-hero-bg"
          style={{ backgroundImage: `url(${heroBannerImg})` }}
        />
        <div className="services-hero-overlay"></div>

        <div className="services-hero-container">
          <div className="services-hero-content">
            <span className="services-gold-eyebrow">OUR SERVICES</span>
            <h1 className="services-hero-heading">
              CONSTRUCTION<br />
              SERVICES
            </h1>
            <p className="services-hero-subtext">
              Comprehensive construction solutions delivered with quality, safety and professionalism.
            </p>
            <div className="services-hero-cta">
              <a href="#contact" className="btn-services-quote">
                <span>GET A QUOTE</span>
                <ArrowRight size={15} className="btn-arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SERVICES INTRODUCTION & 6 OVERVIEW CARDS
          ========================================================================= */}
      <section className="services-overview-section">
        <div className="services-section-container">
          <div className="section-header-block">
            <span className="section-gold-eyebrow">OUR SERVICES</span>
            <h2 className="section-dark-title">COMPLETE CONSTRUCTION SOLUTIONS</h2>
            <div className="section-gold-line"></div>
            <p className="services-intro-paragraph">
              From new construction to renovation and project management, we provide reliable solutions designed to meet the unique requirements of residential, commercial and industrial projects.
            </p>
          </div>

          <div className="services-overview-grid">
            {serviceCards.map((service) => (
              <a 
                key={service.id} 
                href={`#${service.id}`}
                className="service-overview-card"
              >
                <div className="service-card-icon-holder">
                  {service.icon}
                </div>
                <h3 className="service-overview-heading">
                  {service.title.split('\n').map((line, i) => (
                    <span key={i} className="heading-line">{line}</span>
                  ))}
                </h3>
                <p className="service-overview-paragraph">{service.desc}</p>
                <div className="service-card-gold-bar"></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SIX DETAILED SERVICE SECTIONS (Alternating Layout)
          ========================================================================= */}
      <div className="detailed-services-wrapper">
        {detailedServices.map((service, index) => (
          <section 
            key={service.id} 
            id={service.id} 
            className={`detailed-service-row ${index % 2 === 0 ? 'bg-white' : 'bg-light'} ${service.imageLeft ? 'layout-img-left' : 'layout-img-right'}`}
          >
            <div className="services-section-container">
              <div className="detail-split-layout">
                {/* Media Image Column */}
                <div className="detail-image-column">
                  <div className="detail-image-frame">
                    <img 
                      src={service.image} 
                      alt={service.alt} 
                      className="detail-photo"
                      loading="lazy" 
                    />
                    <div className="detail-image-gold-border"></div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="detail-content-column">
                  <div className="detail-number-badge">
                    <span className="gold-num">{service.number}</span>
                    <span className="num-slash">/</span>
                    <span className="gold-label">{service.label}</span>
                  </div>

                  <h2 className="detail-heading">{service.heading}</h2>
                  <div className="section-gold-line left-aligned"></div>

                  <p className="detail-description">{service.desc}</p>

                  <ul className="detail-features-checklist">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="checklist-item">
                        <div className="check-bullet">
                          <Check size={14} className="check-svg" />
                        </div>
                        <span className="feat-text">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="detail-action-bar">
                    <a href="#contact" className="btn-detail-quote">
                      <span>GET A QUOTE</span>
                      <ArrowRight size={15} className="btn-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* =========================================================================
          4. OUR CONSTRUCTION PROCESS (4 Process Steps in Dark Navy)
          ========================================================================= */}
      <section className="construction-process-section">
        <div className="services-section-container">
          <div className="section-header-block light">
            <span className="section-gold-eyebrow">OUR PROCESS</span>
            <h2 className="section-white-title">A CLEAR PROCESS. A BETTER RESULT.</h2>
            <div className="section-gold-line"></div>
            <p className="process-intro-text">
              We follow a structured approach to ensure every project moves smoothly from initial consultation to final delivery.
            </p>
          </div>

          <div className="process-steps-grid">
            {processSteps.map((stepItem, idx) => (
              <div key={idx} className="process-step-card">
                <div className="process-badge-header">
                  <span className="process-number">{stepItem.step}</span>
                  <div className="process-icon-box">
                    {stepItem.icon}
                  </div>
                </div>
                <h3 className="process-step-title">{stepItem.title}</h3>
                <p className="process-step-desc">{stepItem.desc}</p>
                {idx < processSteps.length - 1 && (
                  <div className="process-arrow-indicator" aria-hidden="true">→</div>
                )}
                <div className="process-card-gold-bar"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. WHY CHOOSE US (Dark Navy 5-Features Row with Separators)
          ========================================================================= */}
      <section className="services-why-us-section">
        <div className="services-section-container">
          <div className="section-header-block light">
            <span className="section-gold-eyebrow">WHY CHOOSE US</span>
            <h2 className="section-white-title">BUILT ON TRUST, DELIVERED WITH EXCELLENCE.</h2>
            <div className="section-gold-line"></div>
          </div>

          <div className="services-why-grid">
            {whyUsFeatures.map((feat, idx) => (
              <div key={idx} className="services-why-card">
                <div className="services-why-icon-box">
                  {feat.icon}
                </div>
                <h3 className="services-why-title">
                  {feat.title.split('\n').map((line, i) => (
                    <span key={i} className="title-line">{line}</span>
                  ))}
                </h3>
                <p className="services-why-desc">{feat.desc}</p>
                {idx < whyUsFeatures.length - 1 && (
                  <div className="services-why-separator" aria-hidden="true"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
