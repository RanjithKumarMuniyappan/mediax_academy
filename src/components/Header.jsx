import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide/Show Logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling Down AND not at the very top
        setIsVisible(false);
      } else {
        // Scrolling Up OR at top
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Programs', path: '/programs' },
    { label: 'Why DBIMA', path: '/why-dbima' },
    { label: 'Admissions', path: '/admissions' },
    { label: 'Contact', path: '/contact' },
    { label: 'Login', path: '/login' },
  ];

  return (
    <motion.header
      className={`app-cinema-header ${isScrolled ? 'app-cinema-header--scrolled' : ''}`}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="app-cinema-header__content">

        {/* Logo */}
        <Link to="/" className="app-cinema-header__logo">
          <div className="app-cinema-header__logo-icon">
            <span style={{ fontSize: '0.9rem', color: isScrolled ? 'white' : 'white' }}>M</span>
          </div>
          <span>MediaX <span style={{ fontWeight: 400, fontSize: '0.9rem', opacity: 0.8 }}>ACADEMY</span></span>
        </Link>

        {/* Desktop Nav - Hidden on Tablet/Mobile */}
        <nav className="app-cinema-header__nav">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`app-cinema-header__link ${location.pathname === item.path ? 'app-cinema-header__link--active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons - Hidden on Tablet/Mobile */}
        <div className="app-cinema-header__actions">
          <Link to="/contact" className="app-cinema-btn app-cinema-btn--outline">
            Talk to Advisor
          </Link>
          <Link to="/admissions" className="app-cinema-btn app-cinema-btn--primary">
            Apply Now
          </Link>
        </div>

        {/* Hamburger Menu Icon - Visible on Tablet/Mobile */}
        <div className="app-cinema-mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} color="var(--text-white)" /> : <Menu size={28} color="var(--text-white)" />}
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="app-cinema-mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--text-white)',
                    textDecoration: 'none'
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem', width: '100%', maxWidth: '300px' }}>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="app-cinema-btn app-cinema-btn--outline" style={{ width: '100%' }}>Talk to Advisor</Link>
                <Link to="/admissions" onClick={() => setIsMenuOpen(false)} className="app-cinema-btn app-cinema-btn--primary" style={{ width: '100%' }}>Apply Now</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
}
