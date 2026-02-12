import React from 'react';
import { Check } from 'lucide-react';

export default function Fees() {
    return (
        <section className="app-cinema-fees section">
            <div className="app-cinema-container">
                <div className="app-cinema-fees__title-wrapper" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span className="app-cinema-section-subtitle">Tuition & Financial Aid</span>
                    <h2 className="app-cinema-section-title">Transparent <span className="app-cinema-text-gradient">Tuition</span></h2>
                </div>

                <div className="app-cinema-fees__grid">
                    <div className="app-cinema-fees__main-card">
                        <h3 className="app-cinema-fees__card-title">Annual Tuition</h3>
                        <div className="app-cinema-fees__price">
                            €13,500 <span className="app-cinema-fees__period">/ year</span>
                        </div>
                        <p className="app-cinema-fees__desc">All-inclusive fee giving you access to professional equipment, studios, and expert mentorship.</p>

                        <ul className="app-cinema-fees__list">
                            {['Access to RED & Arri Cameras', 'Sound Stages & Editing Suites', 'Software Licenses (Adobe, Avid, DaVinci)', 'Production Insurance'].map(item => (
                                <li key={item} className="app-cinema-fees__item">
                                    <div className="app-cinema-fees__check"><Check size={12} color="white" /></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="app-cinema-fees__sidebar">
                        <div className="app-cinema-fees__small-card">
                            <h4 className="app-cinema-fees__small-title app-cinema-fees__small-title--highlight">Scholarships Available</h4>
                            <p className="app-cinema-fees__small-text">Merit-based scholarships covering up to 30% of tuition fees for exceptional candidates.</p>
                        </div>

                        <div className="app-cinema-fees__small-card">
                            <h4 className="app-cinema-fees__small-title">Payment Plans</h4>
                            <p className="app-cinema-fees__small-text">Flexible installment options spread over 3, 6, or 10 months.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
