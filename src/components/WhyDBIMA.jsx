import React, { useState } from 'react';
import { Star, MapPin, Users, Award, ArrowRight, Play, X, Layers, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const benefits = [
    {
        Icon: Award,
        title: "Co-created Curriculum",
        desc: "Mindlogicx + DBIMA Paris collaboration."
    },
    {
        Icon: Star,
        title: "Portfolio-first Outcomes",
        desc: "Focus on production and tangible outputs."
    },
    {
        Icon: Users,
        title: "Mentor Feedback",
        desc: "Regular checkpoints with industry professionals."
    },
    {
        Icon: Layers,
        title: "Cohort-based Structure",
        desc: "Learn together in a structured environment."
    },
    {
        Icon: CheckCircle,
        title: "Transparent Support",
        desc: "Clear admissions and advisor guidance."
    }
];

export default function WhyDBIMA() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    return (
        <section className="app-cinema-why section" id="why-dbima">
            <div className="app-cinema-container">
                <div className="app-cinema-why__grid">

                    {/* Left Column: Title & Image */}
                    <div className="app-cinema-why__content">
                        <span className="app-cinema-section-subtitle">
                            The DBIMA Difference
                        </span>
                        <h2 className="app-cinema-section-title">
                            Why DBIMA on <br />
                            <span className="app-cinema-text-gradient">MediaX Academy</span>
                        </h2>
                        <p className="app-cinema-why__desc">
                            DBIMA learning is designed for output, structure, and credibility — not random tutorials.
                        </p>

                        <Link to="/admissions" className="app-cinema-why__cta">
                            Register Now <ArrowRight size={20} />
                        </Link>

                        {/* Camera Image */}
                        <div className="app-cinema-why__image-container">
                            <img
                                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600"
                                alt="Vintage Camera"
                                className="app-cinema-why__image"
                            />
                        </div>
                    </div>

                    <div className="app-cinema-why__benefits">
                        {benefits.map((b, i) => (
                            <BenefitCard key={i} item={b} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Full Width Video Card */}
            <div className="app-cinema-why__video-wrapper">
                <VideoCard onClick={() => setIsVideoOpen(true)} />
            </div>

            {/* Video Modal */}
            {isVideoOpen && (
                <div className="app-cinema-why__modal-overlay" onClick={() => setIsVideoOpen(false)}>
                    <button
                        onClick={() => setIsVideoOpen(false)}
                        className="app-cinema-why__modal-close"
                    >
                        <X size={28} color="black" />
                    </button>

                    <div className="app-cinema-why__modal-iframe-container" onClick={e => e.stopPropagation()}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                            title="DBIMA Showreel"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
}

function VideoCard({ onClick }) {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="app-cinema-why__video-card"
            onClick={onClick}
        >
            {/* Background Image Thumbnail */}
            <img
                src="./shooting_spot.jpg" // Cinema set/Clapperboard
                alt="Cinema Masterclass"
                className="app-cinema-why__video-thumb"
            />

            {/* Corner Markers (Frame) */}
            <div className="app-cinema-why__video-corner app-cinema-why__video-corner--tl"></div>
            <div className="app-cinema-why__video-corner app-cinema-why__video-corner--tr"></div>
            <div className="app-cinema-why__video-corner app-cinema-why__video-corner--bl"></div>
            <div className="app-cinema-why__video-corner app-cinema-why__video-corner--br"></div>

            {/* Logo Watermark Top Right */}
            <div className="app-cinema-why__watermark">
                <span className="app-cinema-why__watermark-text">DBIMA</span>
                <div className="app-cinema-why__watermark-stars">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={8} fill="#fbbf24" color="#fbbf24" />)}
                </div>
            </div>

            {/* Center Play Button */}
            <div className="app-cinema-why__play-btn">
                <div className="app-cinema-why__play-circle">
                    <Play size={40} fill="white" color="white" className="app-cinema-why__play-icon" />
                </div>
            </div>
        </motion.div>
    );
}

function BenefitCard({ item }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="app-cinema-why__benefit-card"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            {/* The Expanding Red Circle Background */}
            <motion.div
                initial={false}
                animate={{
                    scale: isHovered ? 40 : 1,
                    x: '50%'
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="app-cinema-why__benefit-circle"
            />

            {/* Content - Z-Index 1 to stay on top */}
            <div className="app-cinema-why__benefit-content">
                <div className="app-cinema-why__benefit-icon">
                    <item.Icon size={32} strokeWidth={1.5} />
                </div>

                <h3 className="app-cinema-why__benefit-title">
                    {item.title}
                </h3>

                <p className="app-cinema-why__benefit-desc">
                    {item.desc}
                </p>
            </div>
        </motion.div>
    );
}
