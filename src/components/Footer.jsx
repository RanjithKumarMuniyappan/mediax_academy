import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="app-cinema-footer">
            <div className="app-cinema-container">
                <div className="app-cinema-footer__grid">
                    <div>
                        <div className="app-cinema-footer__brand">
                            <span>MediaX</span>Academy
                        </div>
                        <p>Empowering the next generation of visual storytellers in the heart of Paris.</p>
                    </div>

                    <div>
                        <h4 className="app-cinema-footer__heading">Explore</h4>
                        <ul className="app-cinema-footer__list">
                            <li><Link to="/programs" className="app-cinema-footer__link">Programs</Link></li>
                            <li><Link to="/why-dbima" className="app-cinema-footer__link">Why DBIMA</Link></li>
                            <li><Link to="/admissions" className="app-cinema-footer__link">Admissions</Link></li>
                            <li><Link to="/faqs" className="app-cinema-footer__link">FAQs</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="app-cinema-footer__heading">Legal</h4>
                        <ul className="app-cinema-footer__list">
                            <li><Link to="/terms" className="app-cinema-footer__link">Terms of Service</Link></li>
                            <li><Link to="/privacy" className="app-cinema-footer__link">Privacy Policy</Link></li>
                            <li><Link to="/refund-policy" className="app-cinema-footer__link">Refund Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="app-cinema-footer__heading">Contact</h4>
                        <p>123 Avenue de Saint-Mandé<br />75012 Paris, France</p>
                        <p style={{ marginTop: '0.5rem' }}><a href="mailto:admissions@dbima.eu" className="app-cinema-footer__link" style={{ color: 'var(--primary-orange)' }}>admissions@dbima.eu</a></p>
                        <p>+33 1 23 45 67 89</p>
                    </div>
                </div>

                <div className="app-cinema-footer__bottom">
                    <div>&copy; {new Date().getFullYear()} MediaX Academy / DBIMA. All rights reserved.</div>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        {/* Social links could go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
