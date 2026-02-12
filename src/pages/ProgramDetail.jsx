import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';
import PageHeader from '../components/PageHeader';

const programDetails = {
    'bachelor-cinema-audiovisual': {
        title: "European Bachelor of Arts",
        subtitle: "Cinema & Audiovisual",
        overview: "A comprehensive 3-year program designed to turn creative passion into professional skill. Students rotate through all major filmmaking disciplines before specializing.",
        curriculum: [
            { title: "Year 1: Foundation", content: "Screenwriting basics, Camera operation, Sound recording, Editing 101." },
            { title: "Year 2: Specialization", content: "Directing, Cinematography, or Post-production tracks. Advanced workshops." },
            { title: "Year 3: Graduation Project", content: "Thesis film production, Portfolio development, Industry internship." }
        ],
        outcomes: ["Direct 3 Short Films", "Full Technical Proficiency", "Production Portfolio"],
        fees: "€13,500 / year",
        intake: "September 15, 2025"
    },
    'master-cinema-audiovisual': {
        title: "European Master of Arts",
        subtitle: "Advanced Cinema",
        overview: "Two years of intensive specialization for students with prior film education. Focus on developing a unique directorial voice and advanced technical mastery.",
        curriculum: [
            { title: "Year 1: Advanced Theory & Practice", content: "Film History, Visual Aesthetics, Advanced Directing Workshops." },
            { title: "Year 2: Thesis Feature", content: "Development and production of a graduation feature or series pilot." }
        ],
        outcomes: ["Feature Film Project", "Festival Strategy Plan", "Advanced Certification"],
        fees: "€13,500 / year",
        intake: "September 15, 2025"
    },
    'elite-diploma-cinema': {
        title: "Elite Diploma",
        subtitle: "Cinema & Television",
        overview: "An accelerated 1-year intensive for career switchers or those seeking rapid upskilling. Learn by doing on constant production sets.",
        curriculum: [
            { title: "Semester 1: Bootcamp", content: "Immersion in all technical roles. 3 practical projects." },
            { title: "Semester 2: Professional Production", content: "Crew roles on major student productions. Final showcase reel." }
        ],
        outcomes: ["Professional Showreel", "On-set Experience", "Technical Certification"],
        fees: "€15,000",
        intake: "January 12, 2026"
    }
};

export default function ProgramDetail() {
    const { slug } = useParams();
    const program = programDetails[slug] || programDetails['bachelor-cinema-audiovisual']; // Fallback
    const [openModule, setOpenModule] = useState(0);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <PageHeader
                title={program.title}
                subtitle={program.subtitle}
                backgroundImage="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000" // Cinema details
            />

            {/* Program Info & Overview */}
            <section className="app-cinema-program-detail__overview-section">
                <div className="container">
                    <Link to="/programs" className="app-cinema-program-detail__back-link">
                        <ArrowLeft size={16} /> Back to Programs
                    </Link>

                    <div className="app-cinema-program-detail__grid">
                        <div>
                            <h2 className="app-cinema-program-detail__title">Program Overview</h2>
                            <p className="app-cinema-program-detail__description">{program.overview}</p>

                            <div className="app-cinema-program-detail__actions">
                                <Link to="/admissions" className="app-cinema-btn app-cinema-btn--primary">Apply Now</Link>
                                <Link to="/contact" className="app-cinema-btn app-cinema-btn--outline" style={{ color: 'var(--bg-dark-charcoal)', borderColor: 'var(--bg-dark-charcoal)' }}>Talk to Advisor</Link>
                            </div>
                        </div>

                        <div className="app-cinema-program-detail__sidebar-card">
                            <h3 className="app-cinema-program-detail__sidebar-title">Program At A Glance</h3>
                            <div className="app-cinema-program-detail__sidebar-list">
                                <div className="app-cinema-program-detail__sidebar-item">
                                    <div className="app-cinema-program-detail__sidebar-icon"><Clock color="var(--accent-primary)" size={20} /></div>
                                    <div><div className="app-cinema-program-detail__sidebar-label">Duration</div><div className="app-cinema-program-detail__sidebar-value">{program.curriculum.length} Years/Semesters</div></div>
                                </div>
                                <div className="app-cinema-program-detail__sidebar-item">
                                    <div className="app-cinema-program-detail__sidebar-icon"><Calendar color="var(--accent-primary)" size={20} /></div>
                                    <div><div className="app-cinema-program-detail__sidebar-label">Next Intake</div><div className="app-cinema-program-detail__sidebar-value">{program.intake}</div></div>
                                </div>
                                <div className="app-cinema-program-detail__sidebar-item">
                                    <div className="app-cinema-program-detail__sidebar-icon"><CheckCircle color="var(--accent-primary)" size={20} /></div>
                                    <div><div className="app-cinema-program-detail__sidebar-label">Certification</div><div className="app-cinema-program-detail__sidebar-value">State Recognized</div></div>
                                </div>
                            </div>

                            <div className="app-cinema-program-detail__sidebar-divider">
                                <div className="app-cinema-program-detail__sidebar-label" style={{ marginBottom: '0.5rem' }}>Tuition Fees</div>
                                <div className="app-cinema-program-detail__fees-value">{program.fees}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="app-cinema-program-detail__curriculum-section">
                <div className="app-cinema-program-detail__curriculum-container">
                    <h2 style={{ marginBottom: '2rem' }}>Curriculum <span className="app-cinema-text-gradient">Structure</span></h2>
                    <div className="app-cinema-program-detail__module-list">
                        {program.curriculum.map((mod, i) => (
                            <div key={i} className="app-cinema-program-detail__module">
                                <button
                                    onClick={() => setOpenModule(openModule === i ? null : i)}
                                    className="app-cinema-program-detail__module-btn"
                                >
                                    {mod.title}
                                    {openModule === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                {openModule === i && (
                                    <div className="app-cinema-program-detail__module-content">
                                        {mod.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="app-cinema-program-detail__outcomes-section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Outcomes & <span className="app-cinema-text-gradient">Portfolio</span></h2>
                    <div className="app-cinema-program-detail__outcomes-grid">
                        {program.outcomes.map((o, i) => (
                            <div key={i} className="app-cinema-program-detail__outcome-card">
                                <CheckCircle size={40} color="var(--accent-primary)" className="app-cinema-program-detail__outcome-icon" />
                                <h3 className="app-cinema-program-detail__outcome-title">{o}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTA />
        </motion.div>
    );
}
