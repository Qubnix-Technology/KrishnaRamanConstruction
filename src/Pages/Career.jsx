import React, { useState } from 'react';
import '../CSS/Career.css';
import { 
  ArrowRight, 
  MapPin, 
  Briefcase, 
  Clock, 
  Check, 
  Users, 
  ShieldCheck, 
  GraduationCap, 
  HardHat, 
  Building2, 
  ClipboardCheck, 
  Compass, 
  Wrench, 
  TrendingUp, 
  ChevronDown, 
  ChevronUp, 
  X, 
  Upload, 
  CheckCircle2, 
  Award, 
  Shield 
} from 'lucide-react';

import heroBannerImg from '../assets/Image/hero_slide_2.jpg';
import teamWorkImg from '../assets/Image/about_who_we_are.jpg';

export default function Career({ onNavigate }) {
  const [expandedJob, setExpandedJob] = useState('job-1');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState('General Application');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    fileName: '',
    message: ''
  });

  const cultureCards = [
    {
      title: 'TEAMWORK',
      desc: 'We work together, share knowledge and support one another to achieve better results.',
      icon: <Users size={28} className="culture-icon" />
    },
    {
      title: 'INTEGRITY',
      desc: 'We value honesty, accountability and responsible decisions in everything we do.',
      icon: <ShieldCheck size={28} className="culture-icon" />
    },
    {
      title: 'LEARNING',
      desc: 'We encourage continuous learning, mentorship and practical skill development.',
      icon: <GraduationCap size={28} className="culture-icon" />
    },
    {
      title: 'SAFETY',
      desc: 'We believe everyone deserves a safe, well-managed and responsible working environment.',
      icon: <HardHat size={28} className="culture-icon" />
    }
  ];

  const careerCategories = [
    {
      title: 'CONSTRUCTION & SITE',
      desc: 'Site execution, supervision, quality control and construction operations.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="cat-svg-icon">
          <path d="M12 20c0-5.5 4.5-10 10-10s10 4.5 10 10" />
          <path d="M8 20h28v4H8z" />
          <line x1="22" y1="10" x2="22" y2="20" />
          <path d="M15 24v4h14v-4" />
        </svg>
      )
    },
    {
      title: 'PROJECT MANAGEMENT',
      desc: 'Planning, coordination, scheduling and project execution milestones.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="cat-svg-icon">
          <rect x="10" y="8" width="24" height="28" rx="2" />
          <line x1="16" y1="14" x2="28" y2="14" />
          <polyline points="16,22 20,26 28,18" />
          <line x1="16" y1="28" x2="28" y2="28" />
        </svg>
      )
    },
    {
      title: 'ARCHITECTURE & DESIGN',
      desc: 'Architectural planning, design development and 3D technical drawings.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="cat-svg-icon">
          <rect x="10" y="10" width="24" height="24" rx="1" />
          <line x1="14" y1="16" x2="30" y2="16" />
          <line x1="14" y1="22" x2="24" y2="22" />
          <line x1="14" y1="28" x2="28" y2="28" />
          <polyline points="28,26 34,32 28,38" />
        </svg>
      )
    },
    {
      title: 'ENGINEERING & TECHNICAL',
      desc: 'Technical expertise supporting safe, efficient and high-quality construction.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="cat-svg-icon">
          <circle cx="22" cy="22" r="7" />
          <path d="M22 6v4M22 34v4M6 22h4M34 22h4M10.7 10.7l2.8 2.8M30.5 30.5l2.8 2.8M10.7 33.3l2.8-2.8M30.5 13.5l2.8-2.8" />
        </svg>
      )
    },
    {
      title: 'ADMIN & FINANCE',
      desc: 'Supporting business operations, documentation, HR and financial coordination.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="cat-svg-icon">
          <rect x="8" y="14" width="28" height="20" rx="2" />
          <path d="M16 14V10a2 2 0 012-2h8a2 2 0 012 2v4" />
          <line x1="8" y1="22" x2="36" y2="22" />
        </svg>
      )
    },
    {
      title: 'BUSINESS DEVELOPMENT',
      desc: 'Client relationships, institutional marketing and strategic project opportunities.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="cat-svg-icon">
          <polyline points="8,32 18,20 26,26 36,12" />
          <polyline points="26,12 36,12 36,22" />
        </svg>
      )
    }
  ];

  const jobListings = [
    {
      id: 'job-1',
      title: 'SITE ENGINEER',
      location: 'Gurugram, Haryana',
      type: 'Full Time',
      department: 'Construction & Site',
      summary: 'Responsible for coordinating site activities, monitoring construction progress and maintaining rigorous quality and safety standards.',
      responsibilities: [
        'Monitor and supervise daily on-site civil construction activities',
        'Coordinate with subcontractors, labor foremen and structural consultants',
        'Check construction materials quality and perform slump/cube tests',
        'Maintain detailed daily site progress documentation and logs',
        'Strictly implement and enforce all workplace safety protocols'
      ],
      requirements: [
        'B.Tech / Diploma in Civil Engineering',
        '2–5 years of on-site residential or commercial execution experience',
        'Strong blueprint interpretation and AutoCAD knowledge',
        'Effective team communication and leadership skills'
      ]
    },
    {
      id: 'job-2',
      title: 'PROJECT COORDINATOR',
      location: 'Gurugram, Haryana',
      type: 'Full Time',
      department: 'Project Management',
      summary: 'Support project planning, resource scheduling, client communications and overall milestone tracking across multiple project sites.',
      responsibilities: [
        'Assist Project Managers in preparing work schedules and Gantt charts',
        'Track material procurement and ensure timely site dispatches',
        'Coordinate project milestone reports and client review meetings',
        'Manage vendor invoices, measurement sheets and billing documentation'
      ],
      requirements: [
        'Degree in Civil Engineering or Construction Management',
        '1–3 years experience in project coordination / planning',
        'Proficiency in MS Excel, MS Project or Primavera',
        'Strong organizational and cross-team coordination abilities'
      ]
    },
    {
      id: 'job-3',
      title: 'ARCHITECTURAL DESIGNER',
      location: 'Gurugram, Haryana',
      type: 'Full Time',
      department: 'Architecture & Design',
      summary: 'Develop architectural concepts, 2D working drawings, 3D visualizations and coordinate design details with structural engineering teams.',
      responsibilities: [
        'Prepare detailed architectural floor plans, elevations and sections',
        'Create photorealistic 3D exterior and interior model renders',
        'Coordinate with structural and MEP engineers for drawing clashes',
        'Conduct periodic site visits to ensure design compliance during execution'
      ],
      requirements: [
        'B.Arch or Diploma in Architectural Assistantship',
        '2–4 years of architectural drafting & visualization experience',
        'Mastery in AutoCAD, SketchUp, Lumion / V-Ray and Revit',
        'Creative design sensibility with solid construction understanding'
      ]
    },
    {
      id: 'job-4',
      title: 'CIVIL ENGINEER',
      location: 'Gurugram, Haryana',
      type: 'Full Time',
      department: 'Engineering & Technical',
      summary: 'Assist with technical site execution, quantity surveying, bar-bending schedules, structural verification and QA/QC compliance.',
      responsibilities: [
        'Calculate quantity takeoffs and prepare Bar Bending Schedules (BBS)',
        'Verify reinforcement placement and formwork alignment before pouring',
        'Liaise with testing laboratories for soil, concrete and steel reports',
        'Ensure execution matches technical engineering specifications'
      ],
      requirements: [
        'B.E. / B.Tech in Civil Engineering',
        '1–4 years of structural civil engineering experience',
        'Knowledge of IS Codes and QA/QC standard procedures',
        'Analytical problem-solving and precision mindset'
      ]
    }
  ];

  const whatWeLookFor = [
    {
      num: '01',
      title: 'PROFESSIONALISM',
      desc: 'We value people who take genuine pride in their work, communicate clearly and maintain high standards.',
      icon: <Briefcase size={26} className="look-icon" />
    },
    {
      num: '02',
      title: 'RESPONSIBILITY',
      desc: 'We trust professionals who take active ownership of their duties, timelines and safety commitments.',
      icon: <Shield size={26} className="look-icon" />
    },
    {
      num: '03',
      title: 'TEAMWORK',
      desc: 'Construction is a collective craft. We value collaborative spirit, mutual respect and shared problem-solving.',
      icon: <Users size={26} className="look-icon" />
    },
    {
      num: '04',
      title: 'WILLINGNESS TO LEARN',
      desc: 'We encourage people who are curious, adaptable and eager to master modern construction methodologies.',
      icon: <GraduationCap size={26} className="look-icon" />
    }
  ];

  const journeySteps = [
    {
      step: '01',
      title: 'JOIN',
      desc: 'Start your journey with our experienced team and get inducted into our values and standard operating protocols.'
    },
    {
      step: '02',
      title: 'LEARN',
      desc: 'Work on active luxury, commercial and industrial projects under direct mentorship of seasoned civil leaders.'
    },
    {
      step: '03',
      title: 'GROW',
      desc: 'Take on greater project ownership, manage site operations and lead critical technical deliverables.'
    },
    {
      step: '04',
      title: 'LEAD',
      desc: 'Build a rewarding long-term leadership career, steering major construction projects and mentoring new talent.'
    }
  ];

  const handleOpenModal = (jobTitle) => {
    setSelectedJobTitle(jobTitle || 'General Application');
    setFormData({
      ...formData,
      position: jobTitle || 'General Application'
    });
    setFormSubmitted(false);
    setModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  return (
    <main className="career-page-root">
      {/* =========================================================================
          1. CAREERS HERO / PAGE BANNER
          ========================================================================= */}
      <section className="career-hero-banner">
        <div 
          className="career-hero-bg"
          style={{ backgroundImage: `url(${heroBannerImg})` }}
        />
        <div className="career-hero-overlay"></div>

        <div className="career-hero-container">
          <div className="career-hero-content">
            <span className="career-gold-eyebrow">CAREERS</span>
            <h1 className="career-hero-heading">
              BUILD YOUR FUTURE<br />
              WITH US.
            </h1>
            <p className="career-hero-subtext">
              Join a team that believes in quality, integrity, safety and building a better future together.
            </p>
            <div className="career-hero-cta">
              <a 
                href="#positions" 
                className="btn-career-positions"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('positions');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>VIEW OPEN POSITIONS</span>
                <ArrowRight size={15} className="btn-arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. WHY BUILD YOUR CAREER WITH US (Image Left + Content Right)
          ========================================================================= */}
      <section className="career-why-section">
        <div className="career-section-container">
          <div className="career-why-grid">
            {/* Left Image */}
            <div className="career-why-image-col">
              <div className="career-why-frame">
                <img 
                  src={teamWorkImg} 
                  alt="Krisha Raman Construction Team Reviewing Project Plans" 
                  className="career-why-photo"
                  loading="lazy" 
                />
                <div className="career-why-gold-border"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className="career-why-text-col">
              <span className="career-gold-eyebrow">WHY JOIN US</span>
              <h2 className="section-dark-title">GROW WITH A TEAM THAT BUILDS WITH PURPOSE.</h2>
              <div className="section-gold-line left-aligned"></div>

              <div className="career-why-paragraphs">
                <p>
                  At <strong>Krisha Raman Construction &amp; Contractors</strong>, we believe our people are at the heart of every successful project.
                </p>
                <p>
                  We create an environment where skilled professionals can learn, contribute, take responsibility and grow alongside the company.
                </p>
                <p>
                  Whether you are an experienced construction professional or beginning your career, we value dedication, teamwork, integrity and a willingness to learn.
                </p>
              </div>

              {/* 4 Career Highlights Strip */}
              <div className="career-highlights-grid">
                <div className="career-hl-item">
                  <div className="hl-check-bullet">
                    <Check size={13} />
                  </div>
                  <span>Professional Growth</span>
                </div>
                <div className="career-hl-item">
                  <div className="hl-check-bullet">
                    <Check size={13} />
                  </div>
                  <span>Collaborative Team</span>
                </div>
                <div className="career-hl-item">
                  <div className="hl-check-bullet">
                    <Check size={13} />
                  </div>
                  <span>Learning Opportunities</span>
                </div>
                <div className="career-hl-item">
                  <div className="hl-check-bullet">
                    <Check size={13} />
                  </div>
                  <span>Meaningful Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. OUR WORK CULTURE (Dark Navy #071522 4 Cards)
          ========================================================================= */}
      <section className="career-culture-section">
        <div className="career-section-container">
          <div className="section-header-block light">
            <span className="career-gold-eyebrow">OUR CULTURE</span>
            <h2 className="section-white-title">A TEAM BUILT ON TRUST AND RESPECT.</h2>
            <div className="section-gold-line"></div>
          </div>

          <div className="culture-cards-grid">
            {cultureCards.map((item, idx) => (
              <div key={idx} className="culture-card">
                <div className="culture-icon-holder">
                  {item.icon}
                </div>
                <h3 className="culture-card-title">{item.title}</h3>
                <p className="culture-card-desc">{item.desc}</p>
                <div className="culture-card-gold-bar"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CAREER OPPORTUNITIES (White Background 6 Category Cards)
          ========================================================================= */}
      <section className="career-categories-section">
        <div className="career-section-container">
          <div className="section-header-block">
            <span className="career-gold-eyebrow">CAREER OPPORTUNITIES</span>
            <h2 className="section-dark-title">FIND YOUR PLACE IN OUR TEAM.</h2>
            <div className="section-gold-line"></div>
            <p className="career-categories-intro">
              Explore opportunities across construction, project management, design and business operations.
            </p>
          </div>

          <div className="career-categories-grid">
            {careerCategories.map((cat, idx) => (
              <div key={idx} className="category-opportunity-card">
                <div className="category-icon-box">
                  {cat.icon}
                </div>
                <h3 className="category-card-title">{cat.title}</h3>
                <p className="category-card-desc">{cat.desc}</p>
                <div className="category-card-gold-bar"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. OPEN POSITIONS (Light Gray Background with Accordion Details)
          ========================================================================= */}
      <section className="open-positions-section" id="positions">
        <div className="career-section-container">
          <div className="section-header-block">
            <span className="career-gold-eyebrow">OPEN POSITIONS</span>
            <h2 className="section-dark-title">OPPORTUNITIES TO GROW WITH US.</h2>
            <div className="section-gold-line"></div>
          </div>

          <div className="positions-list-wrapper">
            {jobListings.map((job) => {
              const isExpanded = expandedJob === job.id;
              return (
                <div key={job.id} className={`job-listing-card ${isExpanded ? 'expanded' : ''}`}>
                  {/* Job Card Header Row */}
                  <div 
                    className="job-card-header"
                    onClick={() => setExpandedJob(isExpanded ? null : job.id)}
                  >
                    <div className="job-header-left">
                      <div className="job-tag-row">
                        <span className="job-dept-tag">{job.department}</span>
                        <span className="job-type-tag">
                          <Clock size={11} className="tag-clock" /> {job.type}
                        </span>
                      </div>
                      <h3 className="job-title-text">{job.title}</h3>
                      <div className="job-loc-row">
                        <MapPin size={13} className="loc-icon" />
                        <span>{job.location}</span>
                      </div>
                    </div>

                    <div className="job-header-right">
                      <div className="job-toggle-arrow">
                        {isExpanded ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                      </div>
                    </div>
                  </div>

                  {/* Accordion Expanded Details */}
                  {isExpanded && (
                    <div className="job-card-body-accordion">
                      <p className="job-summary-text">{job.summary}</p>

                      <div className="job-details-split">
                        <div className="job-details-col">
                          <h4 className="job-section-subtitle">KEY RESPONSIBILITIES</h4>
                          <ul className="job-bullet-list">
                            {job.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="job-bullet-item">
                                <span className="gold-dot">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="job-details-col">
                          <h4 className="job-section-subtitle">REQUIREMENTS &amp; SKILLS</h4>
                          <ul className="job-bullet-list">
                            {job.requirements.map((req, qIdx) => (
                              <li key={qIdx} className="job-bullet-item">
                                <span className="gold-dot">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="job-card-gold-bar"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. WHAT WE LOOK FOR (Dark Navy #071522 4 Core Pillars)
          ========================================================================= */}
      <section className="what-we-look-section">
        <div className="career-section-container">
          <div className="section-header-block light">
            <span className="career-gold-eyebrow">WHAT WE LOOK FOR</span>
            <h2 className="section-white-title">SKILLS MATTER. CHARACTER MATTERS MORE.</h2>
            <div className="section-gold-line"></div>
          </div>

          <div className="what-we-look-grid">
            {whatWeLookFor.map((item, idx) => (
              <div key={idx} className="look-pillar-card">
                <div className="pillar-header">
                  <span className="pillar-num">{item.num}</span>
                  <div className="pillar-icon-holder">
                    {item.icon}
                  </div>
                </div>
                <h3 className="pillar-title">{item.title}</h3>
                <p className="pillar-desc">{item.desc}</p>
                {idx < whatWeLookFor.length - 1 && (
                  <div className="pillar-separator" aria-hidden="true"></div>
                )}
                <div className="pillar-gold-bar"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. EMPLOYEE JOURNEY (White Background Horizontal Timeline)
          ========================================================================= */}
      <section className="career-journey-section">
        <div className="career-section-container">
          <div className="section-header-block">
            <span className="career-gold-eyebrow">YOUR JOURNEY</span>
            <h2 className="section-dark-title">GROW WITH US. BUILD SOMETHING MEANINGFUL.</h2>
            <div className="section-gold-line"></div>
          </div>

          <div className="journey-timeline-track">
            {journeySteps.map((step, idx) => (
              <div key={idx} className="journey-step-card">
                <div className="journey-step-badge">
                  <span>{step.step}</span>
                </div>
                <h3 className="journey-step-title">{step.title}</h3>
                <p className="journey-step-desc">{step.desc}</p>
                {idx < journeySteps.length - 1 && (
                  <div className="journey-arrow-indicator" aria-hidden="true">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* =========================================================================
          9. APPLICATION MODAL
          ========================================================================= */}
      {modalOpen && (
        <div 
          className="career-modal-backdrop"
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="career-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              type="button" 
              className="modal-close-btn"
              onClick={() => setModalOpen(false)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="career-modal-header">
              <span className="modal-eyebrow">APPLY FOR POSITION</span>
              <h3 className="modal-job-heading">{selectedJobTitle}</h3>
              <div className="modal-gold-bar"></div>
            </div>

            {formSubmitted ? (
              <div className="modal-success-state">
                <div className="success-icon-circle">
                  <CheckCircle2 size={42} className="success-icon" />
                </div>
                <h4 className="success-title">Application Submitted!</h4>
                <p className="success-desc">
                  Thank you for your interest in joining <strong>Krisha Raman Construction &amp; Contractors</strong>. Our talent team will review your application and contact you shortly.
                </p>
                <button 
                  type="button" 
                  className="btn-modal-close"
                  onClick={() => setModalOpen(false)}
                >
                  CLOSE
                </button>
              </div>
            ) : (
              <form className="career-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="applicant-name">FULL NAME *</label>
                  <input 
                    type="text" 
                    id="applicant-name"
                    required 
                    className="form-input" 
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="applicant-email">EMAIL ADDRESS *</label>
                    <input 
                      type="email" 
                      id="applicant-email"
                      required 
                      className="form-input" 
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="applicant-phone">PHONE NUMBER *</label>
                    <input 
                      type="tel" 
                      id="applicant-phone"
                      required 
                      className="form-input" 
                      placeholder="e.g. +91 99112 73705"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="applicant-role">POSITION APPLYING FOR</label>
                  <input 
                    type="text" 
                    id="applicant-role"
                    className="form-input read-only-input" 
                    value={formData.position}
                    readOnly
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">UPLOAD RESUME / CV (PDF, DOCX) *</label>
                  <label className="file-upload-dropzone">
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx" 
                      required 
                      className="file-hidden-input"
                      onChange={handleFileChange}
                    />
                    <Upload size={22} className="upload-icon" />
                    <span className="upload-text">
                      {formData.fileName || 'Click or drag resume file here (Max 10MB)'}
                    </span>
                  </label>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="applicant-msg">COVER MESSAGE / BRIEF INTRODUCTION</label>
                  <textarea 
                    id="applicant-msg"
                    rows="3" 
                    className="form-textarea" 
                    placeholder="Tell us about your experience, achievements and why you want to build with Krisha Raman..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-submit-application">
                  <span>SUBMIT APPLICATION</span>
                  <ArrowRight size={16} className="btn-arrow" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
