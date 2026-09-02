import React from 'react';
import '../CSS/Whyus.css';
import { 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  HardHat, 
  Clock, 
  Handshake, 
  Award, 
  CheckCircle2, 
  HeartHandshake, 
  Check, 
  Shield, 
  Activity, 
  Compass, 
  Layers 
} from 'lucide-react';

import heroBannerImg from '../assets/Image/hero_slide_1.jpg';
import whyIntroImg from '../assets/Image/about_who_we_are.jpg';
import qualityCraftImg from '../assets/Image/about_approach.jpg';
import safetyImg from '../assets/Image/service_management.jpg';

export default function Whyus({ onNavigate }) {
  const coreStrengths = [
    {
      title: 'QUALITY\nASSURANCE',
      desc: 'We use reliable materials, careful workmanship and consistent quality checks throughout every stage of the project.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="whyus-strength-icon">
          <path d="M22 4L8 10v12c0 10 14 18 14 18s14-8 14-18V10L22 4z" />
          <polyline points="15,22 20,27 29,17" strokeWidth="2.8" />
        </svg>
      )
    },
    {
      title: 'EXPERIENCED\nTEAM',
      desc: 'Our skilled professionals bring practical knowledge and dedicated expertise to every project we undertake.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="whyus-strength-icon">
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
      desc: 'We follow responsible safety practices to protect our workers, clients, visitors and projects.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="whyus-strength-icon">
          <path d="M12 22c0-5.5 4.5-10 10-10s10 4.5 10 10" />
          <path d="M8 22h28v4H8z" />
          <line x1="22" y1="12" x2="22" y2="22" />
          <path d="M15 26v4h14v-4" />
        </svg>
      )
    },
    {
      title: 'ON-TIME\nDELIVERY',
      desc: 'Careful planning and project coordination help us maintain schedules and deliver projects efficiently.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="whyus-strength-icon">
          <circle cx="22" cy="22" r="15" />
          <polyline points="22,12 22,22 30,22" strokeWidth="2.6" />
          <line x1="22" y1="3" x2="22" y2="6" />
        </svg>
      )
    },
    {
      title: 'TRANSPARENT\nDEALING',
      desc: 'Clear communication, honest coordination and straightforward project discussions from beginning to completion.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="whyus-strength-icon">
          <path d="M10 18l7-7 8 7-8 7z" />
          <path d="M34 18l-7-7-8 7 8 7z" />
          <path d="M17 25l6 6 6-6" />
          <line x1="4" y1="24" x2="10" y2="18" strokeWidth="2.4" />
          <line x1="40" y1="24" x2="34" y2="18" strokeWidth="2.4" />
        </svg>
      )
    }
  ];

  const commitments = [
    {
      num: '01',
      title: 'QUALITY',
      desc: 'We never compromise on the standards that define our work.',
      icon: <Award size={26} className="commit-icon" />
    },
    {
      num: '02',
      title: 'SAFETY',
      desc: 'We make responsible safety practices part of every project.',
      icon: <Shield size={26} className="commit-icon" />
    },
    {
      num: '03',
      title: 'INTEGRITY',
      desc: 'We communicate honestly and take responsibility for our work.',
      icon: <Handshake size={26} className="commit-icon" />
    },
    {
      num: '04',
      title: 'CLIENT SATISFACTION',
      desc: "We listen, communicate and work toward results that meet our clients' expectations.",
      icon: <HeartHandshake size={26} className="commit-icon" />
    }
  ];

  const principles = [
    {
      step: '01',
      title: 'UNDERSTAND',
      desc: "We begin by understanding the client's goals, requirements and expectations."
    },
    {
      step: '02',
      title: 'PLAN',
      desc: 'We develop a clear approach to manage resources, timelines and execution.'
    },
    {
      step: '03',
      title: 'EXECUTE',
      desc: 'Our team works with discipline, quality and attention to detail.'
    },
    {
      step: '04',
      title: 'MONITOR',
      desc: 'We continuously monitor progress, quality and safety throughout the project.'
    },
    {
      step: '05',
      title: 'DELIVER',
      desc: 'We complete the project with a focus on quality, reliability and client satisfaction.'
    }
  ];

  const highlightCards = [
    {
      title: 'TRUST',
      desc: 'Clear communication, transparent cost estimates, and dependable project execution from day one.',
      icon: <Handshake size={28} className="hl-icon" />
    },
    {
      title: 'QUALITY',
      desc: 'Strong workmanship, premium Grade-A materials, and meticulous architectural finishing.',
      icon: <ShieldCheck size={28} className="hl-icon" />
    },
    {
      title: 'RELIABILITY',
      desc: 'Responsible timeline planning, proactive supervision, and professional turnkey delivery.',
      icon: <CheckCircle2 size={28} className="hl-icon" />
    }
  ];

  return (
    <main className="whyus-page-root">
      {/* =========================================================================
          1. WHY US HERO / PAGE BANNER
          ========================================================================= */}
      <section className="whyus-hero-banner">
        <div 
          className="whyus-hero-bg"
          style={{ backgroundImage: `url(${heroBannerImg})` }}
        />
        <div className="whyus-hero-overlay"></div>

        <div className="whyus-hero-container">
          <div className="whyus-hero-content">
            <span className="whyus-gold-eyebrow">WHY CHOOSE US</span>
            <h1 className="whyus-hero-heading">
              BUILT ON TRUST.<br />
              DELIVERED WITH EXCELLENCE.
            </h1>
            <p className="whyus-hero-subtext">
              We combine quality workmanship, experienced professionals and responsible project management to deliver construction solutions our clients can depend on.
            </p>
            <div className="whyus-hero-cta">
              <a href="#contact" className="btn-whyus-quote">
                <span>GET A QUOTE</span>
                <ArrowRight size={15} className="btn-arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. WHY KRISHA RAMAN (Image Left + Text Right)
          ========================================================================= */}
      <section className="why-krisha-section">
        <div className="whyus-section-container">
          <div className="why-krisha-grid">
            {/* Left Image */}
            <div className="why-krisha-image-col">
              <div className="why-krisha-frame">
                <img 
                  src={whyIntroImg} 
                  alt="Architect and Civil Engineers Reviewing Site Blueprints" 
                  className="why-krisha-img"
                  loading="lazy"
                />
                <div className="why-krisha-gold-border"></div>
              </div>
            </div>

            {/* Right Text */}
            <div className="why-krisha-text-col">
              <span className="whyus-gold-eyebrow">WHY KRISHA RAMAN</span>
              <h2 className="section-dark-title">MORE THAN CONSTRUCTION. WE BUILD TRUST.</h2>
              <div className="section-gold-line left-aligned"></div>

              <div className="why-krisha-paragraphs">
                <p>
                  At <strong>Krisha Raman Construction &amp; Contractors</strong>, we believe successful construction is built on more than materials and structures. It is built on trust, communication, expertise and responsibility.
                </p>
                <p>
                  We work closely with our clients to understand their requirements, plan every stage carefully and deliver quality results with professionalism.
                </p>
                <p>
                  From residential homes to commercial and industrial projects, our focus remains the same: quality construction, dependable execution and long-term value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. FIVE CORE STRENGTHS (Dark Navy #071522 Strip)
          ========================================================================= */}
      <section className="whyus-strengths-section">
        <div className="whyus-section-container">
          <div className="section-header-block light">
            <span className="whyus-gold-eyebrow">OUR STRENGTHS</span>
            <h2 className="section-white-title">WHAT SETS US APART</h2>
            <div className="section-gold-line"></div>
          </div>

          <div className="whyus-strengths-grid">
            {coreStrengths.map((feat, idx) => (
              <div key={idx} className="whyus-strength-card">
                <div className="whyus-strength-icon-box">
                  {feat.icon}
                </div>
                <h3 className="whyus-strength-title">
                  {feat.title.split('\n').map((line, i) => (
                    <span key={i} className="title-line">{line}</span>
                  ))}
                </h3>
                <p className="whyus-strength-desc">{feat.desc}</p>
                {idx < coreStrengths.length - 1 && (
                  <div className="whyus-strength-separator" aria-hidden="true"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. QUALITY & CRAFTSMANSHIP (Content Left | Image Right)
          ========================================================================= */}
      <section className="quality-craft-section">
        <div className="whyus-section-container">
          <div className="quality-split-grid">
            {/* Left Content */}
            <div className="quality-content-col">
              <span className="whyus-gold-eyebrow">QUALITY &amp; CRAFTSMANSHIP</span>
              <h2 className="section-dark-title">BUILT WITH ATTENTION TO DETAIL.</h2>
              <div className="section-gold-line left-aligned"></div>

              <p className="quality-intro-text">
                Quality is at the heart of every project we undertake. From structural work to finishing details, we focus on precision, durability and workmanship that stands the test of time.
              </p>

              <ul className="whyus-checklist">
                <li className="whyus-check-item">
                  <div className="check-bullet">
                    <Check size={14} className="check-svg" />
                  </div>
                  <span className="check-label">Reliable construction materials</span>
                </li>
                <li className="whyus-check-item">
                  <div className="check-bullet">
                    <Check size={14} className="check-svg" />
                  </div>
                  <span className="check-label">Skilled workmanship</span>
                </li>
                <li className="whyus-check-item">
                  <div className="check-bullet">
                    <Check size={14} className="check-svg" />
                  </div>
                  <span className="check-label">Detailed execution</span>
                </li>
                <li className="whyus-check-item">
                  <div className="check-bullet">
                    <Check size={14} className="check-svg" />
                  </div>
                  <span className="check-label">Continuous quality monitoring</span>
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="quality-image-col">
              <div className="quality-image-frame">
                <img 
                  src={qualityCraftImg} 
                  alt="Quality Construction Execution and Structural Finishing" 
                  className="quality-photo"
                  loading="lazy" 
                />
                <div className="quality-gold-border"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SAFETY FIRST (Image Left | Content Right)
          ========================================================================= */}
      <section className="safety-first-section">
        <div className="whyus-section-container">
          <div className="safety-split-grid">
            {/* Left Image */}
            <div className="safety-image-col">
              <div className="safety-image-frame">
                <img 
                  src={safetyImg} 
                  alt="Site Engineers and Safety Standards Supervision" 
                  className="safety-photo"
                  loading="lazy" 
                />
                <div className="safety-gold-border"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className="safety-content-col">
              <span className="whyus-gold-eyebrow">SAFETY FIRST</span>
              <h2 className="section-dark-title">PEOPLE FIRST. ALWAYS.</h2>
              <div className="section-gold-line left-aligned"></div>

              <p className="safety-intro-text">
                Construction requires responsibility at every level. We prioritize safe working practices and responsible site management to create a secure environment for everyone involved.
              </p>

              <ul className="whyus-checklist">
                <li className="whyus-check-item">
                  <div className="check-bullet">
                    <Check size={14} className="check-svg" />
                  </div>
                  <span className="check-label">Site safety procedures</span>
                </li>
                <li className="whyus-check-item">
                  <div className="check-bullet">
                    <Check size={14} className="check-svg" />
                  </div>
                  <span className="check-label">Protective equipment</span>
                </li>
                <li className="whyus-check-item">
                  <div className="check-bullet">
                    <Check size={14} className="check-svg" />
                  </div>
                  <span className="check-label">Responsible supervision</span>
                </li>
                <li className="whyus-check-item">
                  <div className="check-bullet">
                    <Check size={14} className="check-svg" />
                  </div>
                  <span className="check-label">Risk-conscious planning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. OUR COMMITMENT (Dark Navy #071522 4 Columns)
          ========================================================================= */}
      <section className="whyus-commitment-section">
        <div className="whyus-section-container">
          <div className="section-header-block light">
            <span className="whyus-gold-eyebrow">OUR COMMITMENT</span>
            <h2 className="section-white-title">EVERY PROJECT. EVERY DETAIL. EVERY PROMISE.</h2>
            <div className="section-gold-line"></div>
          </div>

          <div className="commitment-grid">
            {commitments.map((item, idx) => (
              <div key={idx} className="commitment-card">
                <div className="commitment-header">
                  <span className="commit-num">{item.num}</span>
                  <div className="commit-icon-holder">
                    {item.icon}
                  </div>
                </div>
                <h3 className="commit-title">{item.title}</h3>
                <p className="commit-desc">{item.desc}</p>
                {idx < commitments.length - 1 && (
                  <div className="commitment-separator" aria-hidden="true"></div>
                )}
                <div className="commitment-gold-bar"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. WORKING PRINCIPLES (5 Steps Horizontal / Vertical Mobile)
          ========================================================================= */}
      <section className="working-principles-section">
        <div className="whyus-section-container">
          <div className="section-header-block">
            <span className="whyus-gold-eyebrow">OUR PRINCIPLES</span>
            <h2 className="section-dark-title">THE WAY WE WORK</h2>
            <div className="section-gold-line"></div>
          </div>

          <div className="principles-track">
            {principles.map((pr, idx) => (
              <div key={idx} className="principle-node">
                <div className="principle-step-badge">
                  <span>{pr.step}</span>
                </div>
                <h3 className="principle-title">{pr.title}</h3>
                <p className="principle-desc">{pr.desc}</p>
                {idx < principles.length - 1 && (
                  <div className="principle-connector" aria-hidden="true">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. WHY CLIENTS CHOOSE US (3 Highlight Cards in Dark Navy)
          ========================================================================= */}
      <section className="clients-choose-section">
        <div className="whyus-section-container">
          <div className="section-header-block light">
            <span className="whyus-gold-eyebrow">WHY CLIENTS CHOOSE US</span>
            <h2 className="section-white-title">A PARTNER YOU CAN BUILD WITH.</h2>
            <div className="section-gold-line"></div>
            <p className="clients-choose-intro">
              We aim to be more than a contractor. We work as a dependable project partner, maintaining communication and accountability throughout the construction journey.
            </p>
          </div>

          <div className="choose-cards-grid">
            {highlightCards.map((card, idx) => (
              <div key={idx} className="choose-highlight-card">
                <div className="choose-icon-circle">
                  {card.icon}
                </div>
                <h3 className="choose-card-title">{card.title}</h3>
                <p className="choose-card-desc">{card.desc}</p>
                <div className="choose-card-gold-bar"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. OUR PROMISE (Centered Closing Statement)
          ========================================================================= */}
      <section className="our-promise-section">
        <div className="whyus-section-container">
          <div className="promise-box">
            <span className="whyus-gold-eyebrow">OUR PROMISE</span>
            <h2 className="section-dark-title">YOUR PROJECT DESERVES OUR BEST.</h2>
            <div className="section-gold-line"></div>
            <p className="promise-paragraph">
              Whatever the size or complexity of your project, our commitment remains the same—quality construction, honest communication and dependable execution.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
