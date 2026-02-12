import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Clock, Calendar, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Admissions() {
    return (
        <section className="app-cinema-admissions section" id="admissions">
            <div className="app-cinema-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="app-cinema-admissions__card"
                >
                    <h2 className="app-cinema-section-title" style={{ color: 'white' }}>
                        Admissions <span className="app-cinema-text-gradient">Snapshot</span>
                    </h2>

                    <div className="app-cinema-admissions__grid">
                        {/* Eligibility Card */}
                        <div className="app-cinema-admissions__info-card">
                            <div className="app-cinema-admissions__info-header">
                                <GraduationCap size={24} color="rgba(255,255,255,0.9)" />
                                <h3 className="app-cinema-admissions__info-title">Eligibility</h3>
                            </div>
                            <p className="app-cinema-admissions__info-value">High School Diploma</p>
                            <p className="app-cinema-admissions__info-sub">Or Equivalent Qualification</p>
                        </div>

                        {/* Effort Card */}
                        <div className="app-cinema-admissions__info-card">
                            <div className="app-cinema-admissions__info-header">
                                <Clock size={24} color="rgba(255,255,255,0.9)" />
                                <h3 className="app-cinema-admissions__info-title">Effort / Week</h3>
                            </div>
                            <p className="app-cinema-admissions__info-value">25-30 Hours</p>
                            <p className="app-cinema-admissions__info-sub">Intensive Practice & Lab</p>
                        </div>

                        {/* Next Cohort Card */}
                        <div className="app-cinema-admissions__info-card">
                            <div className="app-cinema-admissions__info-header">
                                <Calendar size={24} color="rgba(255,255,255,0.9)" />
                                <h3 className="app-cinema-admissions__info-title">Next Cohort</h3>
                            </div>
                            <p className="app-cinema-admissions__info-value">September 2025</p>
                            <p className="app-cinema-admissions__info-sub">Applications Now Open</p>
                        </div>
                    </div>

                    <div className="app-cinema-admissions__actions">
                        <Link to="/apply" className="app-cinema-admissions__btn-primary">
                            Apply Now <ArrowRight size={20} />
                        </Link>
                        <Link to="/talk-to-advisor" className="app-cinema-admissions__btn-secondary">
                            <MessageCircle size={20} /> Talk to Advisor
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
