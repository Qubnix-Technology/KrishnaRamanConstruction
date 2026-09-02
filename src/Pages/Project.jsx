import React, { useState } from 'react';
import '../CSS/Project.css';
import { 
  ArrowRight, 
  MapPin, 
  Building, 
  X, 
  CheckCircle2, 
  Hammer, 
  Compass, 
  Layers, 
  HardHat, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';

import heroBannerImg from '../assets/Image/hero_slide_3.jpg';
import resImg from '../assets/Image/service_residential.jpg';
import commImg from '../assets/Image/service_commercial.jpg';
import indImg from '../assets/Image/service_industrial.jpg';
import renoImg from '../assets/Image/service_renovation.jpg';
import modernResImg from '../assets/Image/proj_modern_residence.jpg';
import commComplexImg from '../assets/Image/about_approach.jpg';
import indFacilityImg from '../assets/Image/hero_slide_1.jpg';
import luxuryIntImg from '../assets/Image/service_architectural.jpg';

export default function Project({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'ALL', label: 'ALL PROJECTS' },
    { id: 'RESIDENTIAL', label: 'RESIDENTIAL' },
    { id: 'COMMERCIAL', label: 'COMMERCIAL' },
    { id: 'INDUSTRIAL', label: 'INDUSTRIAL' },
    { id: 'INTERIOR', label: 'RENOVATION & INTERIOR' }
  ];

  const projectsList = [
    {
      id: 'luxury-villa',
      name: 'Luxury Villa',
      categoryKey: 'RESIDENTIAL',
      category: 'Residential Construction',
      location: 'Gurugram, Haryana',
      image: resImg,
      desc: 'A modern luxury residence combining contemporary architecture, open spaces, and premium stone & wood craftsmanship.',
      status: 'Completed',
      serviceType: 'Full Construction & Turnkey',
      area: '8,500 Sq. Ft.',
      year: '2025',
      overview: 'A contemporary luxury residence designed with a focus on modern architecture, comfortable living spaces, and high-quality construction. The project blends floor-to-ceiling glass facades with natural stone masonry.',
      scope: [
        { title: 'STRUCTURAL WORK', desc: 'Reinforced concrete framing, cantilever balconies, and foundational engineering.' },
        { title: 'ARCHITECTURAL WORK', desc: 'Bespoke modern elevation, spatial zoning, and facade wood-slat integration.' },
        { title: 'MATERIAL & FINISHING', desc: 'Imported marble, thermal-insulated glazing, and ambient architectural illumination.' },
        { title: 'PROJECT MANAGEMENT', desc: 'Turnkey site supervision, timeline management, and structural safety audits.' }
      ],
      challenge: 'Integrating expansive glass cantilever structures while maintaining superior thermal insulation and structural rigidity across multi-tier layouts.',
      solution: 'Engineered high-tensile steel cross-beams with double-glazed low-E acoustic glass, completing the project 3 weeks ahead of schedule.',
      result: 'An iconic, energy-efficient luxury villa exceeding client expectations in aesthetics, durability, and functional elegance.'
    },
    {
      id: 'corporate-office',
      name: 'Corporate Office',
      categoryKey: 'COMMERCIAL',
      category: 'Commercial Construction',
      location: 'Gurugram, Haryana',
      image: commImg,
      desc: 'A contemporary corporate workspace designed for functionality, energy efficiency, and a prestigious corporate environment.',
      status: 'Completed',
      serviceType: 'Commercial Turnkey Execution',
      area: '45,000 Sq. Ft.',
      year: '2025',
      overview: 'Modern multi-story commercial headquarters featuring a grand glass atrium, structural steel canopy, landscaped entrance plaza, and state-of-the-art office infrastructure.',
      scope: [
        { title: 'STRUCTURAL WORK', desc: 'Heavy-grade commercial column grids and post-tensioned floor slabs.' },
        { title: 'ARCHITECTURAL WORK', desc: 'Unitized structural glass curtain walling and modern entrance canopies.' },
        { title: 'MATERIAL & FINISHING', desc: 'Acoustic ceilings, granite flooring, and smart building management systems.' },
        { title: 'PROJECT MANAGEMENT', desc: 'Fast-track execution adhering strictly to corporate compliance and safety.' }
      ],
      challenge: 'Executing high-rise structural glazing and complex MEP infrastructure in a dense commercial zone with minimal operational disruptions.',
      solution: 'Implemented 3D BIM coordination and prefabricated facade modules, optimizing crane lifting hours and ensuring zero safety incidents.',
      result: 'A landmark Grade-A office building delivered with superior acoustic comfort and modern commercial prestige.'
    },
    {
      id: 'industrial-warehouse',
      name: 'Industrial Warehouse',
      categoryKey: 'INDUSTRIAL',
      category: 'Industrial Construction',
      location: 'Manesar, Haryana',
      image: indImg,
      desc: 'A durable and efficient industrial facility designed to support high-volume logistics, heavy loads, and long-term operational performance.',
      status: 'Completed',
      serviceType: 'Pre-Engineered Building (PEB)',
      area: '1,20,000 Sq. Ft.',
      year: '2024',
      overview: 'Heavy industrial manufacturing and warehousing complex equipped with overhead Demag cranes, laser-screed flat concrete floors, and multi-bay loading docks.',
      scope: [
        { title: 'STRUCTURAL WORK', desc: 'Heavy structural steel truss frames and high-load reinforced concrete sub-bases.' },
        { title: 'ARCHITECTURAL WORK', desc: 'Insulated sandwich roofing panels, skylight daylighting, and ventilation louvers.' },
        { title: 'MATERIAL & FINISHING', desc: 'FM2 laser-screed flooring, heavy-duty industrial coatings, and fire suppression.' },
        { title: 'PROJECT MANAGEMENT', desc: 'Multi-contractor coordination with strict adherence to industrial safety codes.' }
      ],
      challenge: 'Achieving super-flat industrial flooring capable of supporting automated high-bay forklifts without millimeter-level deviation.',
      solution: 'Employed specialized laser-guided concrete screeding and continuous wet-curing protocols for flawless floor flatness and strength.',
      result: 'An ultra-efficient industrial facility delivered on schedule, now operating at full logistics capacity.'
    },
    {
      id: 'interior-project',
      name: 'Interior Project',
      categoryKey: 'INTERIOR',
      category: 'Renovation & Interior',
      location: 'Gurugram, Haryana',
      image: renoImg,
      desc: 'A refined interior transformation combining modern aesthetics, bespoke wooden elements, and meticulous architectural detailing.',
      status: 'Completed',
      serviceType: 'Interior Fitout & Renovation',
      area: '4,200 Sq. Ft.',
      year: '2025',
      overview: 'Complete structural renovation of an existing double-height residence into an open-concept luxury sanctuary with reclaimed timber beams and custom marble kitchen islands.',
      scope: [
        { title: 'STRUCTURAL WORK', desc: 'Selective demolition, mezzanine reinforcement, and steel beam insertions.' },
        { title: 'ARCHITECTURAL WORK', desc: 'Double-height spatial reorganization and concealed architectural lighting.' },
        { title: 'MATERIAL & FINISHING', desc: 'Natural oak woodwork, micro-cement finishes, and brass hardware accents.' },
        { title: 'PROJECT MANAGEMENT', desc: 'Dust-controlled execution, bespoke craftsmanship oversight, and handoff.' }
      ],
      challenge: 'Removing load-bearing interior partition walls in an existing structure to create an expansive double-height open living space.',
      solution: 'Installed concealed structural steel portal frames to carry upper floor loads without intrusive support columns.',
      result: 'A breathtaking modern living space featuring seamless indoor-outdoor sightlines and bespoke interior craftsmanship.'
    },
    {
      id: 'modern-residence',
      name: 'Modern Residence',
      categoryKey: 'RESIDENTIAL',
      category: 'Residential Construction',
      location: 'Gurugram, Haryana',
      image: modernResImg,
      desc: 'An architecturally striking residential masterpiece with geometric concrete volumes, timber screens, and private landscaped courtyard.',
      status: 'Completed',
      serviceType: 'Turnkey Residential Construction',
      area: '6,800 Sq. Ft.',
      year: '2025',
      overview: 'Bespoke 2-story residence featuring architectural board-formed concrete, automated timber louvers for sun-shading, and an open layout integrating indoor-outdoor living.',
      scope: [
        { title: 'STRUCTURAL WORK', desc: 'Exposed architectural concrete walls and deep foundation engineering.' },
        { title: 'ARCHITECTURAL WORK', desc: 'Custom wood-louver sun screens and floating glass balcony railings.' },
        { title: 'MATERIAL & FINISHING', desc: 'Polished concrete floors, hardwood wall paneling, and smart automation.' },
        { title: 'PROJECT MANAGEMENT', desc: 'Comprehensive site management, craftsmanship inspection, and client handoff.' }
      ],
      challenge: 'Executing flawless fair-faced architectural concrete walls with zero surface blemishes or visible tie-rod defects.',
      solution: 'Custom smooth timber formwork with specialized self-compacting concrete mix and meticulous vibration monitoring.',
      result: 'A timeless architectural residence celebrated for raw material honesty and sophisticated modern luxury.'
    },
    {
      id: 'commercial-complex',
      name: 'Commercial Complex',
      categoryKey: 'COMMERCIAL',
      category: 'Commercial Construction',
      location: 'Gurugram, Haryana',
      image: commComplexImg,
      desc: 'A premium mixed-use commercial complex combining retail frontage, glass-fronted offices, and outdoor pedestrian plazas.',
      status: 'Completed',
      serviceType: 'Civil Construction & Façade',
      area: '62,000 Sq. Ft.',
      year: '2024',
      overview: 'Multi-level commercial destination featuring stepped terrace balconies, panoramic structural glazing, and integrated high-efficiency building utilities.',
      scope: [
        { title: 'STRUCTURAL WORK', desc: 'Heavy civil foundation, stepped structural terraces, and reinforced columns.' },
        { title: 'ARCHITECTURAL WORK', desc: 'Floor-to-ceiling glass shopfronts and cantilevered promenade decks.' },
        { title: 'MATERIAL & FINISHING', desc: 'Flame-finished granite outdoor paving and architectural exterior LED lighting.' },
        { title: 'PROJECT MANAGEMENT', desc: 'Rigorous safety enforcement, multi-stage inspections, and vendor management.' }
      ],
      challenge: 'Managing phased handover for early retail occupants while active civil construction continued on upper levels.',
      solution: 'Created isolated safety buffer zones and dedicated access corridors, allowing early fit-outs without safety compromises.',
      result: 'A bustling commercial center that achieved 100% retail occupancy upon formal project inauguration.'
    },
    {
      id: 'industrial-facility',
      name: 'Industrial Facility',
      categoryKey: 'INDUSTRIAL',
      category: 'Industrial Construction',
      location: 'Manesar, Haryana',
      image: indFacilityImg,
      desc: 'High-specification manufacturing infrastructure engineered with heavy structural steel, gantry systems, and expansive operational floor space.',
      status: 'Ongoing / Handover',
      serviceType: 'Industrial Civil & MEP',
      area: '95,000 Sq. Ft.',
      year: '2025',
      overview: 'Large-scale industrial production facility engineered for continuous 24/7 manufacturing operations with dedicated power substations and effluent drainage.',
      scope: [
        { title: 'STRUCTURAL WORK', desc: 'High-clearance steel framing, heavy crane girders, and reinforced foundation pits.' },
        { title: 'ARCHITECTURAL WORK', desc: 'Weather-resistant acoustic cladding, continuous ridge ventilators, and dock bays.' },
        { title: 'MATERIAL & FINISHING', desc: 'Epoxy chemical-resistant floor finishes and industrial fire barrier walls.' },
        { title: 'PROJECT MANAGEMENT', desc: 'Timeline acceleration, statutory approvals, and precision heavy-equipment rigging.' }
      ],
      challenge: 'Precision alignment of heavy 30-ton overhead crane girders across a 150-meter clear building span.',
      solution: 'Utilized laser-theodolite optical alignment systems, ensuring girder tolerances within ±2mm along the entire travel track.',
      result: 'A robust industrial production asset built to serve demanding manufacturing cycles for decades.'
    },
    {
      id: 'luxury-interior',
      name: 'Luxury Interior',
      categoryKey: 'INTERIOR',
      category: 'Renovation & Interior',
      location: 'Gurugram, Haryana',
      image: luxuryIntImg,
      desc: 'An exquisite high-end architectural interior transformation combining custom joinery, ambient lighting, and bespoke executive styling.',
      status: 'Completed',
      serviceType: 'Luxury Interior Turnkey',
      area: '3,800 Sq. Ft.',
      year: '2025',
      overview: 'Comprehensive architectural remodeling featuring custom acoustic wood slatted walls, hidden doors, Italian marble surfaces, and integrated lighting scenes.',
      scope: [
        { title: 'STRUCTURAL WORK', desc: 'Lightweight steel framing, acoustic ceiling drops, and subfloor leveling.' },
        { title: 'ARCHITECTURAL WORK', desc: 'Custom architectural drafting, millwork detailing, and bespoke furniture integration.' },
        { title: 'MATERIAL & FINISHING', desc: 'Smoked oak veneers, Statuario marble cladding, and architectural downlighting.' },
        { title: 'PROJECT MANAGEMENT', desc: 'White-glove craftsmanship supervision, material sourcing, and handover.' }
      ],
      challenge: 'Seamless integration of concealed air conditioning, linear diffusers, and smart automation within minimal ceiling drop clearances.',
      solution: 'Custom 3D CAD ceiling layouts and low-profile ducting, preserving maximum ceiling height and clean architectural lines.',
      result: 'A flawless, magazine-worthy luxury interior praised for its warmth, sophistication, and refined execution.'
    }
  ];

  const featuredProject = projectsList[0];

  const filteredProjects = activeFilter === 'ALL' 
    ? projectsList 
    : projectsList.filter(p => p.categoryKey === activeFilter);

  const whyUsFeatures = [
    {
      title: 'QUALITY\nASSURANCE',
      desc: 'We use superior materials and advanced technology.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="projects-why-icon">
          <path d="M22 4L8 10v12c0 10 14 18 14 18s14-8 14-18V10L22 4z" />
          <polyline points="15,22 20,27 29,17" strokeWidth="2.8" />
        </svg>
      )
    },
    {
      title: 'EXPERIENCED\nTEAM',
      desc: 'Skilled professionals with years of industry experience.',
      icon: (
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="projects-why-icon">
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
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="projects-why-icon">
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
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="projects-why-icon">
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
        <svg viewBox="0 0 44 44" fill="none" stroke="#E9A91A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="projects-why-icon">
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
    <main className="projects-page-root">
      {/* =========================================================================
          1. PROJECTS HERO / PAGE BANNER
          ========================================================================= */}
      <section className="projects-hero-banner">
        <div 
          className="projects-hero-bg"
          style={{ backgroundImage: `url(${heroBannerImg})` }}
        />
        <div className="projects-hero-overlay"></div>

        <div className="projects-hero-container">
          <div className="projects-hero-content">
            <span className="projects-gold-eyebrow">OUR PROJECTS</span>
            <h1 className="projects-hero-heading">
              BUILDING SPACES THAT<br />
              MAKE AN IMPACT.
            </h1>
            <p className="projects-hero-subtext">
              Explore our completed and ongoing projects, built with quality, precision and a commitment to excellence.
            </p>
            <div className="projects-hero-cta">
              <a href="#contact" className="btn-projects-start">
                <span>START YOUR PROJECT</span>
                <ArrowRight size={15} className="btn-arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. PROJECT PORTFOLIO INTRO & CATEGORY FILTERS
          ========================================================================= */}
      <section className="portfolio-intro-section">
        <div className="projects-section-container">
          <div className="section-header-block">
            <span className="section-gold-eyebrow">OUR PORTFOLIO</span>
            <h2 className="section-dark-title">PROJECTS BUILT WITH PURPOSE</h2>
            <div className="section-gold-line"></div>
            <p className="portfolio-intro-paragraph">
              Every project reflects our commitment to quality construction, thoughtful planning and reliable execution. From homes and commercial spaces to industrial facilities, we create structures designed to perform and last.
            </p>
          </div>

          {/* Filter Bar (Horizontal scroll on mobile) */}
          <div className="portfolio-filter-bar" role="tablist">
            <div className="filter-buttons-scroller">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === cat.id}
                  className={`filter-tab-btn ${activeFilter === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. ALL PROJECTS GRID (OUR WORK / FEATURED PROJECTS)
          ========================================================================= */}
      <section className="all-projects-gallery-section" id="gallery">
        <div className="projects-section-container">
          <div className="section-header-block">
            <span className="section-gold-eyebrow">OUR WORK</span>
            <h2 className="section-dark-title">FEATURED PROJECTS</h2>
            <div className="section-gold-line"></div>
          </div>

          <div className="projects-triple-grid">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="project-portfolio-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-card-image-wrap">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="portfolio-photo"
                    loading="lazy" 
                  />
                  {/* Hover Overlay with View Project */}
                  <div className="card-hover-overlay">
                    <span className="overlay-btn-text">
                      VIEW PROJECT <ArrowRight size={14} className="hover-arrow" />
                    </span>
                  </div>
                </div>

                <div className="project-card-details">
                  <span className="project-cat-badge">{project.category}</span>
                  <h3 className="project-card-title">{project.name}</h3>
                  <div className="project-card-location">
                    <MapPin size={13} className="loc-pin" />
                    <span>{project.location}</span>
                  </div>
                  <p className="project-card-summary">{project.desc}</p>
                </div>

                <div className="project-card-gold-bar"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. FEATURED PROJECT (Dark Navy Section with Wide Split Layout)
          ========================================================================= */}
      <section className="featured-project-spotlight">
        <div className="projects-section-container">
          <div className="featured-spotlight-grid">
            {/* Left Large Project Image */}
            <div className="featured-image-box">
              <img 
                src={featuredProject.image} 
                alt={featuredProject.name} 
                className="featured-image"
                loading="lazy" 
              />
              <div className="featured-image-gold-border"></div>
            </div>

            {/* Right Featured Information */}
            <div className="featured-info-box">
              <div className="featured-eyebrow-row">
                <span className="featured-gold-label">FEATURED PROJECT</span>
                <span className="featured-cat-tag">{featuredProject.category}</span>
              </div>

              <h2 className="featured-project-name">{featuredProject.name}</h2>
              <div className="featured-location-row">
                <MapPin size={15} className="pin-icon" />
                <span>{featuredProject.location}</span>
              </div>

              <p className="featured-desc-text">
                {featuredProject.overview}
              </p>

              {/* Quick Metrics Bar */}
              <div className="featured-metrics-grid">
                <div className="metric-cell">
                  <span className="metric-label">PROJECT TYPE</span>
                  <span className="metric-value">Residential</span>
                </div>
                <div className="metric-cell">
                  <span className="metric-label">LOCATION</span>
                  <span className="metric-value">Gurugram, Haryana</span>
                </div>
                <div className="metric-cell">
                  <span className="metric-label">STATUS</span>
                  <span className="metric-value status-done">Completed</span>
                </div>
              </div>

              <div className="featured-action-row">
                <button 
                  type="button" 
                  className="btn-view-featured"
                  onClick={() => setSelectedProject(featuredProject)}
                >
                  <span>VIEW PROJECT</span>
                  <ArrowRight size={15} className="btn-arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. WHY CHOOSE US (Dark Navy #071522 5 Features)
          ========================================================================= */}
      <section className="projects-why-us-section">
        <div className="projects-section-container">
          <div className="section-header-block light">
            <span className="section-gold-eyebrow">WHY CHOOSE US</span>
            <h2 className="section-white-title">BUILT ON TRUST, DELIVERED WITH EXCELLENCE.</h2>
            <div className="section-gold-line"></div>
          </div>

          <div className="projects-why-grid">
            {whyUsFeatures.map((feat, idx) => (
              <div key={idx} className="projects-why-card">
                <div className="projects-why-icon-box">
                  {feat.icon}
                </div>
                <h3 className="projects-why-title">
                  {feat.title.split('\n').map((line, i) => (
                    <span key={i} className="title-line">{line}</span>
                  ))}
                </h3>
                <p className="projects-why-desc">{feat.desc}</p>
                {idx < whyUsFeatures.length - 1 && (
                  <div className="projects-why-separator" aria-hidden="true"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. PROJECT DETAIL MODAL / DEDICATED LIGHTBOX SHEET
          ========================================================================= */}
      {selectedProject && (
        <div 
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div 
            className="project-modal-sheet"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button 
              type="button" 
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project detail"
            >
              <X size={22} />
            </button>

            {/* Modal Hero Banner */}
            <div className="modal-hero-wrapper">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.name} 
                className="modal-hero-photo" 
              />
              <div className="modal-hero-gradient"></div>
              <div className="modal-hero-caption">
                <span className="modal-cat-tag">{selectedProject.category}</span>
                <h2 id="modal-project-title" className="modal-title">{selectedProject.name}</h2>
                <div className="modal-loc-row">
                  <MapPin size={15} className="modal-pin" />
                  <span>{selectedProject.location}</span>
                </div>
              </div>
            </div>

            <div className="modal-body-container">
              {/* Information Panel */}
              <div className="modal-info-bar">
                <div className="info-cell">
                  <span className="info-lbl">PROJECT TYPE</span>
                  <span className="info-val">{selectedProject.category}</span>
                </div>
                <div className="info-cell">
                  <span className="info-lbl">LOCATION</span>
                  <span className="info-val">{selectedProject.location}</span>
                </div>
                <div className="info-cell">
                  <span className="info-lbl">STATUS</span>
                  <span className="info-val highlight-gold">{selectedProject.status}</span>
                </div>
                <div className="info-cell">
                  <span className="info-lbl">SERVICE</span>
                  <span className="info-val">{selectedProject.serviceType}</span>
                </div>
              </div>

              {/* Project Overview */}
              <div className="modal-section-block">
                <h3 className="modal-section-heading">PROJECT OVERVIEW</h3>
                <p className="modal-section-paragraph">{selectedProject.overview}</p>
              </div>

              {/* Scope of Work */}
              <div className="modal-section-block">
                <h3 className="modal-section-heading">SCOPE OF WORK</h3>
                <div className="modal-scope-grid">
                  {selectedProject.scope.map((item, idx) => (
                    <div key={idx} className="scope-item-card">
                      <div className="scope-icon-bullet">
                        {idx === 0 && <Building size={18} />}
                        {idx === 1 && <Compass size={18} />}
                        {idx === 2 && <Layers size={18} />}
                        {idx === 3 && <HardHat size={18} />}
                      </div>
                      <div className="scope-text-wrap">
                        <h4 className="scope-title">{item.title}</h4>
                        <p className="scope-desc">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution (Dark Navy Section) */}
              <div className="modal-challenge-navy-box">
                <div className="challenge-col">
                  <h4 className="navy-box-title gold-text">CHALLENGE</h4>
                  <p className="navy-box-desc">{selectedProject.challenge}</p>
                </div>
                <div className="navy-box-divider"></div>
                <div className="solution-col">
                  <h4 className="navy-box-title gold-text">OUR SOLUTION</h4>
                  <p className="navy-box-desc">{selectedProject.solution}</p>
                </div>
              </div>

              {/* Project Result */}
              <div className="modal-section-block">
                <h3 className="modal-section-heading">THE RESULT</h3>
                <p className="modal-section-paragraph">{selectedProject.result}</p>
                
                <div className="result-badges-row">
                  <div className="result-badge">
                    <CheckCircle2 size={16} className="badge-check" />
                    <span>100% Quality Assured</span>
                  </div>
                  <div className="result-badge">
                    <CheckCircle2 size={16} className="badge-check" />
                    <span>Structural Warranty</span>
                  </div>
                  <div className="result-badge">
                    <CheckCircle2 size={16} className="badge-check" />
                    <span>Timely Handover</span>
                  </div>
                </div>
              </div>

              {/* CTA Row */}
              <div className="modal-footer-cta">
                <a 
                  href="#contact" 
                  className="btn-modal-quote"
                  onClick={() => {
                    setSelectedProject(null);
                    if (onNavigate) onNavigate('CONTACT US', '#contact');
                  }}
                >
                  <span>GET A QUOTE FOR A SIMILAR PROJECT</span>
                  <ArrowRight size={15} className="btn-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
