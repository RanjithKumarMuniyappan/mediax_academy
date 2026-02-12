import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Award, Calendar, Heart, BookOpen, Star, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const programsData = [
    {
        id: 'bachelor',
        slug: 'bachelor-cinema-audiovisual',
        title: "European Bachelor of Arts",
        subtitle: "Cinema & Audiovisual",
        duration: "3 Years",
        level: "Undergraduate",
        intake: "Sept 2025",
        track: "Cinema",
        outcomes: ["Direct Short Films", "Screenwriting Portfolio", "Production Basics"],
        fee: "€13,500",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
        rating: "4.9",
        reviews: "120 Reviews",
        lessons: "6 Semesters",
        instructor: { name: "Joan de Camaret", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" }
    },
    {
        id: 'master',
        slug: 'master-cinema-audiovisual',
        title: "European Master of Arts",
        subtitle: "Advanced Cinema",
        duration: "2 Years",
        level: "Postgraduate",
        intake: "Sept 2025",
        track: "Cinema",
        outcomes: ["Feature Film Project", "Advanced Cinematography", "Industry Networking"],
        fee: "€13,500",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
        rating: "4.8",
        reviews: "85 Reviews",
        lessons: "4 Semesters",
        instructor: { name: "Dr. Sarah L.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }
    },
    {
        id: 'elite',
        slug: 'elite-diploma-cinema',
        title: "Elite Diploma",
        subtitle: "Cinema & Television",
        duration: "1 Year",
        level: "Intensive",
        intake: "Jan 2026",
        track: "Technician",
        outcomes: ["Showreel Development", "Technical Mastery", "Film Festival Strategy"],
        fee: "€15,000",
        image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800",
        rating: "5.0",
        reviews: "42 Reviews",
        lessons: "2 Semesters",
        instructor: { name: "Marc D.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" }
    },
    {
        id: 'bts',
        slug: 'bts-audiovisual-editing',
        title: "BTS Audiovisual",
        subtitle: "Editing Specialization",
        duration: "2 Years",
        level: "Technical State Degree",
        intake: "Sept 2025",
        track: "Technician",
        outcomes: ["Avid accreditation", "Post-production Workflow", "Sound Design"],
        fee: "€12,000",
        image: "https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?auto=format&fit=crop&q=80&w=800",
        rating: "4.7",
        reviews: "95 Reviews",
        lessons: "4 Semesters",
        instructor: { name: "Elena R.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100" }
    }
];

export default function ProgramsPage() {
    const [filter, setFilter] = useState('All');

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <PageHeader
                title={<>Find Popular <span className="app-cinema-text-gradient">Programs</span></>}
                subtitle="Architecting your creative future through DBIMA mastery tracks."
                backgroundImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000" // Students/Classroom
            />

            <section className="app-cinema-programs-page section">
                <div className="app-cinema-container">
                    {/* Filter Sort Bar */}
                    <div className="app-cinema-programs-page__filter-bar">
                        <div className="app-cinema-programs-page__filter-group">
                            <div className="app-cinema-programs-page__filter-btn">
                                <Filter size={16} /> Filter
                            </div>
                            <div className="app-cinema-programs-page__filter-btn">
                                Sort by: <span style={{ fontWeight: 600, color: 'var(--text-white)' }}>Popularity</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Grid Layout */}
                    <div className="app-cinema-programs-page__grid">

                        {/* Sidebar Filters */}
                        <div className="app-cinema-programs-page__sidebar">
                            {/* Search */}
                            <div className="app-cinema-programs-page__sidebar-box">
                                <h4 className="app-cinema-programs-page__sidebar-title">Search Now</h4>
                                <div className="app-cinema-programs-page__search">
                                    <input type="text" placeholder="Find by Categories" className="app-cinema-programs-page__search-input" />
                                    <button className="app-cinema-programs-page__search-btn">
                                        <Search size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="app-cinema-programs-page__sidebar-box">
                                <h4 className="app-cinema-programs-page__sidebar-title">Categories</h4>
                                <ul className="app-cinema-programs-page__cat-list">
                                    {['Undergraduate (12)', 'Postgraduate (25)', 'Intensive (59)', 'Technical State Degree (24)'].map((cat, i) => (
                                        <li key={i} className="app-cinema-programs-page__cat-item">
                                            <input
                                                type="checkbox"
                                                className="app-cinema-programs-page__checkbox"
                                                onChange={() => setFilter(cat.split(' ')[0])}
                                                checked={filter === cat.split(' ')[0]}
                                            /> {cat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Program Cards Grid */}
                        <div className="app-cinema-programs-page__cards-grid">
                            {programsData.filter(p => filter === 'All' || p.level.includes(filter) || filter === p.level).map(prog => (
                                <motion.div
                                    key={prog.id}
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2 }}
                                    className="app-cinema-programs-page__card"
                                >
                                    {/* Image Header */}
                                    <div className="app-cinema-programs-page__card-image-wrapper">
                                        <img src={prog.image} alt={prog.title} className="app-cinema-programs-page__card-image" />
                                        <button className="app-cinema-programs-page__card-heart">
                                            <Heart size={18} />
                                        </button>
                                    </div>

                                    {/* Content Body */}
                                    <div>
                                        <div className="app-cinema-programs-page__card-header">
                                            <div className="app-cinema-programs-page__card-price">{prog.fee}</div>
                                            <div className="app-cinema-programs-page__card-rating">
                                                <Star size={14} fill="#f59e0b" /> {prog.rating} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>({prog.reviews})</span>
                                            </div>
                                        </div>

                                        <h3 className="app-cinema-programs-page__card-title">{prog.title}</h3>
                                        <p className="app-cinema-programs-page__card-subtitle">{prog.subtitle}</p>

                                        <div className="app-cinema-programs-page__card-header" style={{ marginBottom: '1.5rem' }}>
                                            <div className="app-cinema-programs-page__card-instructor">
                                                <img src={prog.instructor.image} alt={prog.instructor.name} className="app-cinema-programs-page__instructor-img" />
                                                <div className="app-cinema-programs-page__instructor-name">{prog.instructor.name}</div>
                                            </div>
                                            <Link to={`/programs/${prog.slug}`} className="app-cinema-programs-page__enroll-btn">
                                                Enroll Now <ArrowRight size={16} />
                                            </Link>
                                        </div>

                                        {/* Footer Stats */}
                                        <div className="app-cinema-programs-page__card-footer">
                                            <div className="app-cinema-programs-page__footer-item">
                                                <Award size={14} color="var(--primary-orange)" /> {prog.level}
                                            </div>
                                            <div className="app-cinema-programs-page__footer-item">
                                                <BookOpen size={14} color="var(--primary-orange)" /> {prog.lessons}
                                            </div>
                                            <div className="app-cinema-programs-page__footer-item">
                                                <Clock size={14} color="var(--primary-orange)" /> {prog.duration}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="app-cinema-programs-page__cta-banner">
                        <h3 className="app-cinema-programs-page__cta-title">Not sure which program fits you?</h3>
                        <p className="app-cinema-programs-page__cta-text">Talk to our academic advisors to find your perfect match.</p>
                        <Link to="/contact" className="app-cinema-programs-page__cta-btn">
                            Talk to Advisor
                        </Link>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
