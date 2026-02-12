import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Twitter, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const mentors = [
    {
        id: 1,
        name: 'Joan de Camaret',
        role: 'Pedagogical Coordinator',
        location: 'Paris, France',
        bio: 'With over 20 years of experience as an Assistant Director in the French film industry, Joan brings unparalleled organizational expertise and set etiquette knowledge to DBIMA students.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 2,
        name: 'Father John-Paul',
        role: 'Director & Filmmaker',
        location: 'Rome, Italy',
        bio: 'A Salesian of Don Bosco, Father John-Paul combines deep theological insight with modern cinematic storytelling, guiding students to create meaningful and impactful narratives.',
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 3,
        name: 'Joseph Felix',
        role: 'Cinematographer',
        location: 'Los Angeles, USA',
        bio: 'Expert in Color Grading & Lighting, Joseph has worked on numerous independent features and commercials, teaching students the art of visual language and mood creation.',
        image: 'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 4,
        name: 'Abner M. Fernando',
        role: 'Scriptwriter & Producer',
        location: 'Mumbai, India',
        bio: 'An Award-winning Director who champions original storytelling. Abner mentors students through the rigorous process of script development and production planning.',
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 5,
        name: 'Sarah Jenkins',
        role: 'Sound Engineer',
        location: 'London, UK',
        bio: 'Dolby Atmos Certified engineer with a passion for immersive audio. Sarah teaches the critical role of soundscapes in elevating cinematic experiences.',
        image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 6,
        name: 'Michael Chen',
        role: 'VFX Supervisor',
        location: 'Vancouver, Canada',
        bio: 'Visual Effects Specialist bridging practical and digital effects. Michael prepares students for the modern VFX pipeline used in major studio productions.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
    }
];

export default function Mentors() {
    const [activeId, setActiveId] = useState(mentors[0].id);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll logic
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveId(prevId => {
                const currentIndex = mentors.findIndex(m => m.id === prevId);
                const nextIndex = (currentIndex + 1) % mentors.length;
                return mentors[nextIndex].id;
            });
        }, 4000); // Change mentor every 4 seconds

        return () => clearInterval(interval);
    }, [isPaused]);

    const activeMentor = mentors.find(m => m.id === activeId) || mentors[0];

    return (
        <section
            className="app-cinema-mentors section"
            id="mentors"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="app-cinema-container">
                <div className="app-cinema-mentors__header">
                    <span className="app-cinema-section-subtitle">
                        Industry Experts
                    </span>
                    <h2 className="app-cinema-section-title">
                        Mentors & Faculty <span className="app-cinema-text-gradient">Preview</span>
                    </h2>
                </div>

                <div className="app-cinema-mentors__layout">
                    {/* Left Column: Active Mentor Card */}
                    <div className="app-cinema-mentors__main-card-wrapper">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeMentor.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="app-cinema-mentors__main-card"
                            >
                                {/* Image Side */}
                                <div className="app-cinema-mentors__image-col">
                                    <img
                                        src={activeMentor.image}
                                        alt={activeMentor.name}
                                        className="app-cinema-mentors__image"
                                    />
                                    {/* Progress Bar (Visual indicator for auto-scroll) */}
                                    {!isPaused && (
                                        <motion.div
                                            initial={{ width: '0%' }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: 4, ease: "linear" }}
                                            className="app-cinema-mentors__progress-bar"
                                        />
                                    )}
                                </div>

                                {/* Content Side */}
                                <div className="app-cinema-mentors__content-col">
                                    <h3 className="app-cinema-mentors__name">
                                        {activeMentor.name}
                                    </h3>
                                    <p className="app-cinema-mentors__role">
                                        {activeMentor.role}
                                    </p>
                                    <div className="app-cinema-mentors__meta">
                                        <MapPin size={16} />
                                        {activeMentor.location}
                                    </div>

                                    <p className="app-cinema-mentors__bio">
                                        {activeMentor.bio}
                                    </p>

                                    {/* Socials / Contact Placeholder */}
                                    <div className="app-cinema-mentors__socials">
                                        {[Facebook, Twitter, Instagram].map((Icon, i) => (
                                            <button key={i} className="app-cinema-mentors__social-btn">
                                                <Icon size={18} />
                                            </button>
                                        ))}
                                    </div>

                                    <div className="app-cinema-mentors__contact">
                                        <div className="app-cinema-mentors__contact-item">
                                            <Phone size={16} color="var(--accent-cyan)" />
                                            <span>+1-202-555-0174</span>
                                        </div>
                                        <div className="app-cinema-mentors__contact-item">
                                            <Mail size={16} color="var(--accent-cyan)" />
                                            <span>{activeMentor.name.split(' ')[0].toLowerCase()}@dbima.edu</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Column: Grid */}
                    <div className="app-cinema-mentors__grid">
                        {mentors.map((m) => (
                            <div
                                key={m.id}
                                onClick={() => setActiveId(m.id)}
                                className={`app-cinema-mentors__grid-item ${activeId === m.id ? 'app-cinema-mentors__grid-item--active' : ''}`}
                            >
                                <img
                                    src={m.image}
                                    alt={m.name}
                                    className="app-cinema-mentors__grid-img"
                                />
                                {activeId === m.id && (
                                    <div className="app-cinema-mentors__grid-overlay">
                                        <div className="app-cinema-mentors__grid-indicator">
                                            <div className="app-cinema-mentors__grid-dot" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
