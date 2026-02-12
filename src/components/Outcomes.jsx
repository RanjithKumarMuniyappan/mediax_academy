import React from 'react';
import { motion } from 'framer-motion';

const outcomes = [
    {
        title: "Screenplay Drafts",
        desc: "From initial concept to final screenplay submission.",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800" // Script/Writing
    },
    {
        title: "Mentor-Reviewed Outputs",
        desc: "Professional feedback on every major deliverable.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" // Discussion/Feedback
    },
    {
        title: "Capstone Deliverable",
        desc: "A major final project showcasing your skills.",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" // Film Set/Project
    },
    {
        title: "Structured Milestones",
        desc: "Clear learning path with achievable goals.",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800" // Planning/Timeline
    },
    {
        title: "Completion Credential",
        desc: "Official recognition of your program completion.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800" // Graduation/Diploma
    }
];

export default function Outcomes() {
    return (
        <section className="app-cinema-outcomes section">
            <div className="app-cinema-container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span className="app-cinema-section-subtitle">Tangible Results</span>
                    <h2 className="app-cinema-section-title">
                        What you will <span className="app-cinema-text-gradient">Produce</span>
                    </h2>
                </div>

                <div className="app-cinema-outcomes__grid">
                    {outcomes.map((o, i) => (
                        <div key={i} className="app-cinema-outcomes__card">
                            {/* Animated Background Image */}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="app-cinema-outcomes__card-bg"
                                style={{
                                    backgroundImage: `url(${o.image})`
                                }}
                            />

                            {/* Gradient Overlay */}
                            <div className="app-cinema-outcomes__card-overlay" />

                            {/* Content */}
                            <div className="app-cinema-outcomes__card-content">
                                <h3 className="app-cinema-outcomes__card-title">
                                    {o.title}
                                </h3>
                                <p className="app-cinema-outcomes__card-desc">
                                    {o.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
