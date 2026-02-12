import React from 'react';

export default function Cohorts() {
    return (
        <section className="app-cinema-cohorts section">
            <div className="app-cinema-container app-cinema-cohorts__container" style={{ textAlign: 'center' }}>
                <span className="app-cinema-section-subtitle">2025/26 Enrolment</span>
                <h2 className="app-cinema-section-title">Upcoming <span className="app-cinema-text-gradient">Intakes</span></h2>

                <div className="app-cinema-cohorts__table">
                    <div className="app-cinema-cohorts__header">
                        <div className="app-cinema-cohorts__header-item">Program</div>
                        <div className="app-cinema-cohorts__header-item">Start Date</div>
                        <div className="app-cinema-cohorts__header-item">Status</div>
                    </div>

                    {[
                        { p: "Bachelor of Arts", d: "September 15, 2025", s: "Open" },
                        { p: "Master of Arts", d: "September 15, 2025", s: "Open" },
                        { p: "Elite Diploma", d: "January 12, 2026", s: "Waitlist" }
                    ].map((row, i) => (
                        <div key={i} className="app-cinema-cohorts__row">
                            <div className="app-cinema-cohorts__program">{row.p}</div>
                            <div className="app-cinema-cohorts__date">{row.d}</div>
                            <div className={`app-cinema-cohorts__status ${row.s === 'Open' ? 'app-cinema-cohorts__status--open' : 'app-cinema-cohorts__status--waitlist'}`}>
                                <span className="app-cinema-cohorts__status-dot"></span>
                                {row.s}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
