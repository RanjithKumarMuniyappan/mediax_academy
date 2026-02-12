import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader'; // Import Loader
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop
import Home from './pages/Home';
import ProgramsPage from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import WhyPage from './pages/WhyPage';
import AdmissionsPage from './pages/AdmissionsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/Login';
import { TermsPage, PrivacyPage, RefundPage } from './pages/LegalPages';

function AnimatedRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Trigger loader on route change
    setLoading(true);

    // Smooth scroll to top
    window.scrollTo(0, 0);

    // Simulate cinematic transition delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second loader

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/programs/:slug" element={<ProgramDetail />} />
          <Route path="/why-dbima" element={<WhyPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/refund-policy" element={<RefundPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
