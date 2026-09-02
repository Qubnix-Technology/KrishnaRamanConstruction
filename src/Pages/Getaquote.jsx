import React, { useState } from 'react';
import '../CSS/Getaquote.css';
import { 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  FileText, 
  PhoneCall, 
  ClipboardCheck, 
  FileCheck, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle,
  ShieldCheck,
  Sparkles,
  HardHat,
  Lock
} from 'lucide-react';

import heroBannerImg from '../assets/Image/hero_slide_2.jpg';

export default function Getaquote({ onNavigate }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    service: 'Residential Construction',
    projectDetails: ''
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'
  const [errorMessage, setErrorMessage] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(0);

  const servicesList = [
    'Residential Construction',
    'Commercial Construction',
    'Industrial Construction',
    'Renovation & Remodeling',
    'Architectural Design',
    'Project Management',
    'Other'
  ];

  // What happens next steps
  const processSteps = [
    {
      num: '01',
      title: 'REQUEST',
      desc: 'Submit your project requirements through our quick quote form.',
      icon: <FileText size={24} />
    },
    {
      num: '02',
      title: 'DISCUSSION',
      desc: 'Our engineering team contacts you to understand your exact goals and requirements.',
      icon: <PhoneCall size={24} />
    },
    {
      num: '03',
      title: 'ASSESSMENT',
      desc: 'Where appropriate, we evaluate the site conditions, drawings and structural needs.',
      icon: <ClipboardCheck size={24} />
    },
    {
      num: '04',
      title: 'PROPOSAL',
      desc: 'We present a transparent scope breakdown, approach timeline and next steps.',
      icon: <FileCheck size={24} />
    }
  ];

  // FAQs
  const quoteFaqs = [
    {
      q: 'Is the quotation request free?',
      a: 'Yes, submitting your project requirements and initial discussion with our civil specialists is completely free with no obligation.'
    },
    {
      q: 'Do I need architectural drawings before requesting a quote?',
      a: 'No. If you already have drawings or plans you can share them, but you can also contact us during the initial concept or planning stage.'
    },
    {
      q: 'Can I request a quote for renovation & remodeling?',
      a: 'Yes. Select Renovation & Remodeling in the service requirements and describe the existing property, structural scope and materials required.'
    },
    {
      q: 'Can commercial and industrial clients request a quote?',
      a: 'Yes. Our specialized quotation workflow fully supports commercial office spaces, institutional buildings, and industrial warehouse infrastructures.'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMessage('Please enter a valid phone number.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.location.trim()) {
      setErrorMessage('Please enter the project location.');
      return;
    }

    setFormStatus('submitting');

    setTimeout(() => {
      setFormStatus('success');
      window.scrollTo({ top: 350, behavior: 'smooth' });
    }, 900);
  };

  const handleReset = () => {
    setFormStatus('idle');
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      location: '',
      service: 'Residential Construction',
      projectDetails: ''
    });
  };

  return (
    <main className="getaquote-page-root">
      {/* =========================================================================
          1. GET A QUOTE HERO
          ========================================================================= */}
      <section className="quote-hero-banner">
        <div 
          className="quote-hero-bg"
          style={{ backgroundImage: `url(${heroBannerImg})` }}
        />
        <div className="quote-hero-overlay"></div>

        <div className="quote-hero-container">
          <div className="quote-hero-content">
            <span className="quote-gold-eyebrow">GET A QUOTE</span>
            <h1 className="quote-hero-heading">
              LET'S BUILD YOUR<br />
              PROJECT.
            </h1>
            <p className="quote-hero-subtext">
              Tell us about your project and requirements. Our team will review the details and get in touch to discuss the next steps.
            </p>
            <div className="quote-hero-trust-bar">
              <span className="trust-item">Quality</span>
              <span className="trust-dot">•</span>
              <span className="trust-item">Transparency</span>
              <span className="trust-dot">•</span>
              <span className="trust-item">Professional Execution</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. COMPACT QUOTE FORM SECTION
          ========================================================================= */}
      <section className="quote-compact-section">
        <div className="quote-section-container">
          <div className="quote-compact-card">
            
            {formStatus === 'success' ? (
              <div className="quote-success-compact">
                <div className="success-icon-badge">
                  <CheckCircle2 size={42} className="success-check-icon" />
                </div>
                <span className="success-eyebrow">REQUEST RECEIVED</span>
                <h3 className="success-compact-title">THANK YOU FOR CONTACTING KRISHA RAMAN.</h3>
                <div className="success-gold-bar"></div>
                <p className="success-compact-desc">
                  We've received your project details. Our civil engineering team will review your requirements and reach out to you shortly.
                </p>
                <div className="success-actions-compact">
                  <button 
                    type="button" 
                    className="btn-success-home"
                    onClick={() => {
                      if (onNavigate) onNavigate('HOME', '#home');
                    }}
                  >
                    <span>BACK TO HOME</span>
                    <ArrowRight size={15} />
                  </button>
                  <button 
                    type="button" 
                    className="btn-success-reset"
                    onClick={handleReset}
                  >
                    SUBMIT ANOTHER REQUEST
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="compact-header-block">
                  <span className="quote-gold-eyebrow">GET A QUOTE</span>
                  <h2 className="compact-main-heading">LET'S BUILD YOUR PROJECT.</h2>
                  <div className="compact-gold-line"></div>
                  <p className="compact-subtext">
                    Tell us briefly about your project. Our team will contact you to discuss the requirements and provide the next steps.
                  </p>
                </div>

                {errorMessage && (
                  <div className="quote-error-banner">
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form className="compact-quote-form" onSubmit={handleSubmit} noValidate>
                  {/* Row 1: Full Name & Phone Number */}
                  <div className="form-row-2">
                    <div className="form-group-block">
                      <label className="compact-field-label" htmlFor="quote-fullName">
                        FULL NAME *
                      </label>
                      <input 
                        type="text" 
                        id="quote-fullName"
                        name="fullName"
                        required 
                        className="compact-text-input"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group-block">
                      <label className="compact-field-label" htmlFor="quote-phone">
                        PHONE NUMBER *
                      </label>
                      <input 
                        type="tel" 
                        id="quote-phone"
                        name="phone"
                        required 
                        className="compact-text-input"
                        placeholder="+91 Enter phone number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Row 2: Email Address & Project Location */}
                  <div className="form-row-2">
                    <div className="form-group-block">
                      <label className="compact-field-label" htmlFor="quote-email">
                        EMAIL ADDRESS *
                      </label>
                      <input 
                        type="email" 
                        id="quote-email"
                        name="email"
                        required 
                        className="compact-text-input"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group-block">
                      <label className="compact-field-label" htmlFor="quote-location">
                        PROJECT LOCATION *
                      </label>
                      <input 
                        type="text" 
                        id="quote-location"
                        name="location"
                        required 
                        className="compact-text-input"
                        placeholder="City / Location (e.g. Gurugram, Haryana)"
                        value={formData.location}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Required */}
                  <div className="form-group-block">
                    <label className="compact-field-label" htmlFor="quote-service">
                      SERVICE REQUIRED *
                    </label>
                    <div className="select-wrapper">
                      <select 
                        id="quote-service"
                        name="service"
                        required 
                        className="compact-select-input"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc}>{svc}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Project Description */}
                  <div className="form-group-block">
                    <label className="compact-field-label" htmlFor="quote-details">
                      TELL US ABOUT YOUR PROJECT
                    </label>
                    <textarea 
                      id="quote-details"
                      name="projectDetails"
                      rows="3" 
                      className="compact-textarea-input"
                      placeholder="Briefly describe your project requirements, estimated size or timeline..."
                      value={formData.projectDetails}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="form-submit-row">
                    <button 
                      type="submit" 
                      className={`btn-request-quote ${formStatus === 'submitting' ? 'loading' : ''}`}
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'submitting' ? (
                        <span>SUBMITTING REQUEST...</span>
                      ) : (
                        <>
                          <span>REQUEST A QUOTE</span>
                          <ArrowRight size={16} className="btn-arrow" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Security Note */}
                  <div className="security-guarantee-note">
                    <Lock size={14} className="lock-icon" />
                    <span>Your information is safe and will only be used to contact you regarding your project.</span>
                  </div>
                </form>
              </>
            )}

            <div className="quote-compact-gold-bar"></div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHAT HAPPENS NEXT (Navy Background 4 Steps)
          ========================================================================= */}
      <section className="quote-process-section">
        <div className="quote-section-container">
          <div className="section-header-block light centered">
            <span className="quote-gold-eyebrow">WHAT HAPPENS NEXT</span>
            <h2 className="section-white-title">FROM ENQUIRY TO PROJECT.</h2>
            <div className="section-gold-line"></div>
          </div>

          <div className="process-steps-track">
            {processSteps.map((step, idx) => (
              <div key={idx} className="process-step-card">
                <div className="step-num-badge">
                  <span>{step.num}</span>
                </div>
                <div className="step-icon-circle">
                  {step.icon}
                </div>
                <h3 className="step-card-title">{step.title}</h3>
                <p className="step-card-desc">{step.desc}</p>
                <div className="step-card-gold-bar"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. TRUST REINFORCEMENT STRIP
          ========================================================================= */}
      <section className="quote-trust-strip">
        <div className="quote-section-container">
          <div className="trust-strip-inner">
            <span className="trust-pillar"><ShieldCheck size={18} className="pillar-icon" /> QUALITY</span>
            <span className="trust-sep">•</span>
            <span className="trust-pillar"><Sparkles size={18} className="pillar-icon" /> TRANSPARENCY</span>
            <span className="trust-sep">•</span>
            <span className="trust-pillar"><HardHat size={18} className="pillar-icon" /> SAFETY</span>
            <span className="trust-sep">•</span>
            <span className="trust-pillar"><CheckCircle2 size={18} className="pillar-icon" /> RELIABILITY</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. QUOTE FAQ (Light Gray Background)
          ========================================================================= */}
      <section className="quote-faq-section">
        <div className="quote-section-container">
          <div className="section-header-block centered">
            <span className="quote-gold-eyebrow">FAQ</span>
            <h2 className="section-dark-title">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="section-gold-line"></div>
          </div>

          <div className="faq-accordion-list">
            {quoteFaqs.map((faq, idx) => {
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
    </main>
  );
}
