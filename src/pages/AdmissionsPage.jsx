import React from 'react';
import { motion } from 'framer-motion';
import HowItWorks from '../components/HowItWorks';
import FAQ from '../components/FAQ';
import Fees from '../components/Fees';
import FinalCTA from '../components/FinalCTA';
import PageHeader from '../components/PageHeader';

export default function AdmissionsPage() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <PageHeader
                title={<>Admissions <span className="app-cinema-text-gradient">Overview</span></>}
                subtitle="Your journey to becoming a professional filmmaker starts here. We look for passion, creativity, and a drive to tell stories."
                backgroundImage="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=2000" // Students/Writing
            />

            {/* Eligibility */}
            <section className="app-cinema-eligibility section">
                <div className="app-cinema-container">
                    <div className="app-cinema-eligibility__grid">
                        <div>
                            <h2 className="app-cinema-eligibility__title">Eligibility Criteria</h2>
                            <div className="app-cinema-eligibility__card">
                                <h3 className="app-cinema-eligibility__card-title">Bachelor Programs</h3>
                                <ul className="app-cinema-eligibility__list">
                                    <li>High School Diploma or equivalent (Baccalaureate, A-Levels, IB).</li>
                                    <li>Minimum age: 18 years.</li>
                                    <li>English proficiency (IELTS 6.0 or equivalent).</li>
                                </ul>
                            </div>
                            <div className="app-cinema-eligibility__card">
                                <h3 className="app-cinema-eligibility__card-title">Master Programs</h3>
                                <ul className="app-cinema-eligibility__list">
                                    <li>Bachelor's degree in a relevant field (Cinema, Arts, Humanities).</li>
                                    <li>Portfolio review required.</li>
                                    <li>Interview with the Pedagogical Director.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="app-cinema-eligibility__deadline-box">
                            <h3 className="app-cinema-eligibility__deadline-title">Application Deadline</h3>
                            <p className="app-cinema-eligibility__deadline-text">
                                Applications for the September 2025 intake are currently open. Spaces are limited for each cohort.
                            </p>
                            <div className="app-cinema-eligibility__round">
                                <span>Round 1:</span> <span className="app-cinema-eligibility__date">March 15th</span>
                            </div>
                            <div className="app-cinema-eligibility__round">
                                <span>Round 2:</span> <span className="app-cinema-eligibility__date">June 15th</span>
                            </div>
                            <button className="app-cinema-eligibility__btn">
                                Start Application
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <HowItWorks />
            <Fees />
            <FAQ />
            <FinalCTA />
        </motion.div>
    );
}
