import React, { useState, useEffect } from 'react';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Project from './Pages/Project';
import Whyus from './Pages/Whyus';
import Career from './Pages/Career';
import ContactUs from './Pages/ContactUs';
import Getaquote from './Pages/Getaquote';
import Footer from './Component/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('HOME');

  const normalizePage = (pageName) => {
    if (!pageName) return 'HOME';
    const clean = pageName.toString().toUpperCase().trim().replace(/^[#/]+/, '');
    
    if (clean === 'ABOUT' || clean === 'ABOUT US' || clean === 'ABOUTUS') {
      return 'ABOUT US';
    }
    if (clean === 'SERVICE' || clean === 'SERVICES') {
      return 'SERVICES';
    }
    if (clean === 'PROJECT' || clean === 'PROJECTS' || clean === 'GALLERY') {
      return 'PROJECTS';
    }
    if (clean === 'WHY US' || clean === 'WHY-US' || clean === 'WHYUS' || clean === 'WHY') {
      return 'WHY US';
    }
    if (clean === 'CAREER' || clean === 'CAREERS' || clean === 'POSITIONS' || clean === 'OPEN-POSITIONS') {
      return 'CAREERS';
    }
    if (clean === 'CONTACT' || clean === 'CONTACT US' || clean === 'CONTACTUS') {
      return 'CONTACT US';
    }
    if (clean === 'QUOTE' || clean === 'GET A QUOTE' || clean === 'GET-A-QUOTE' || clean === 'GETAQUOTE' || clean === 'QUOTATION') {
      return 'GET A QUOTE';
    }
    return 'HOME';
  };

  const handleNavigate = (pageName, anchor) => {
    const targetPage = normalizePage(pageName);
    setCurrentPage(targetPage);

    // Update URL hash without reload
    const hashMap = {
      'HOME': '#home',
      'ABOUT US': '#about',
      'SERVICES': '#services',
      'PROJECTS': '#projects',
      'WHY US': '#why-us',
      'CAREERS': '#careers',
      'CONTACT US': '#contact',
      'GET A QUOTE': '#quote'
    };

    if (window.location.hash !== hashMap[targetPage]) {
      window.history.pushState(null, '', hashMap[targetPage] || '#home');
    }

    if (anchor) {
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Listen to hash changes for deep linking and direct URL access
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase().trim();
      
      if (hash === '#about') {
        setCurrentPage('ABOUT US');
      } else if (hash === '#why-us' || hash === '#whyus' || hash === '#why') {
        setCurrentPage('WHY US');
      } else if (hash === '#careers' || hash === '#career' || hash === '#positions' || hash === '#open-positions') {
        setCurrentPage('CAREERS');
        if (hash === '#positions' || hash === '#open-positions') {
          setTimeout(() => {
            const el = document.getElementById('positions');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 120);
        }
      } else if (hash === '#quote' || hash === '#get-a-quote' || hash === '#getaquote' || hash === '#quotation') {
        setCurrentPage('GET A QUOTE');
      } else if (hash === '#contact' || hash === '#contact-us' || hash === '#contactus') {
        setCurrentPage('CONTACT US');
      } else if (hash === '#projects' || hash === '#gallery' || hash === '#project') {
        setCurrentPage('PROJECTS');
        if (hash === '#gallery') {
          setTimeout(() => {
            const el = document.getElementById('gallery');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 120);
        }
      } else if (
        hash === '#services' || 
        hash === '#residential' || 
        hash === '#commercial' || 
        hash === '#industrial' || 
        hash === '#renovation' || 
        hash === '#architectural' || 
        hash === '#project-mgmt'
      ) {
        setCurrentPage('SERVICES');
        if (hash !== '#services') {
          setTimeout(() => {
            const el = document.querySelector(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 120);
        }
      } else if (hash === '#home' || hash === '') {
        setCurrentPage('HOME');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    window.addEventListener('popstate', handleHash);
    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('popstate', handleHash);
    };
  }, []);

  return (
    <div className="app-layout">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      {currentPage === 'ABOUT US' && (
        <About onNavigate={handleNavigate} />
      )}
      {currentPage === 'SERVICES' && (
        <Services onNavigate={handleNavigate} />
      )}
      {currentPage === 'PROJECTS' && (
        <Project onNavigate={handleNavigate} />
      )}
      {currentPage === 'WHY US' && (
        <Whyus onNavigate={handleNavigate} />
      )}
      {currentPage === 'CAREERS' && (
        <Career onNavigate={handleNavigate} />
      )}
      {currentPage === 'CONTACT US' && (
        <ContactUs onNavigate={handleNavigate} />
      )}
      {currentPage === 'GET A QUOTE' && (
        <Getaquote onNavigate={handleNavigate} />
      )}
      {currentPage === 'HOME' && (
        <Home onNavigate={handleNavigate} />
      )}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
