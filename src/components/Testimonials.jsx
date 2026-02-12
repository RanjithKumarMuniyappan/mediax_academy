import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ArrowUp, ArrowDown, GraduationCap, Linkedin, Twitter } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        text: "The hands-on experience at DBIMA was incredible. I directed 3 short films in my first year and built a real portfolio.",
        author: "Sarah L.",
        role: "Bachelor Student, Class of 2024",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        id: 2,
        text: "Being mentored by Joan de Camaret changed my perspective on filmmaking. The personalized feedback is unmatched.",
        author: "Marc D.",
        role: "Master Student, Class of 2023",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        id: 3,
        text: "The equipment and studios are professional grade. It felt like working on a real set every day.",
        author: "Elena R.",
        role: "Elite Diploma Graduate",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    // Auto-play for testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="app-cinema-testimonials section" id="stories">
            <div className="app-cinema-container">
                {/* Header from Design */}
                <div className="app-cinema-testimonials__header">
                    <span className="app-cinema-section-subtitle">
                        Student Testimonials
                    </span>
                    <h2 className="app-cinema-section-title">
                        Real Stories, <span className="app-cinema-text-gradient">Real Success</span>
                    </h2>
                </div>

                <div className="app-cinema-testimonials__grid">

                    {/* Left: Image with Decorative Circle */}
                    <div className="app-cinema-testimonials__image-col">
                        <AnimatePresence mode='wait' custom={direction}>
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="app-cinema-testimonials__image-motion-wrapper"
                            >
                                <div className="app-cinema-testimonials__image-wrapper">
                                    <img
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].author}
                                        className="app-cinema-testimonials__image"
                                    />
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="app-cinema-testimonials__badge"
                                >
                                    <GraduationCap size={24} />
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Decorative Dashed Circle behind */}
                        <svg className="app-cinema-testimonials__decorative-svg" width="450" height="450" viewBox="0 0 450 450">
                            <circle cx="225" cy="225" r="220" fill="none" stroke="var(--primary-orange)" strokeWidth="2" strokeDasharray="10 10" opacity="0.2" />
                            <circle cx="45" cy="225" r="8" fill="#f59e0b" />
                            <circle cx="400" cy="100" r="12" fill="var(--primary-orange)" fillOpacity="0.2" />
                        </svg>
                    </div>

                    {/* Middle: Content */}
                    <div className="app-cinema-testimonials__content-col">
                        <AnimatePresence mode='wait' custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h3 className="app-cinema-testimonials__author-name">{testimonials[currentIndex].author}</h3>
                                <p className="app-cinema-testimonials__author-role">{testimonials[currentIndex].role}</p>

                                <p className="app-cinema-testimonials__quote">
                                    "{testimonials[currentIndex].text}"
                                </p>

                                <div className="app-cinema-testimonials__stars">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="#f59e0b" color="#f59e0b" />)}
                                </div>

                                <div className="app-cinema-testimonials__socials">
                                    <button className="app-cinema-testimonials__social-btn">
                                        <Linkedin size={18} />
                                    </button>
                                    <button className="app-cinema-testimonials__social-btn">
                                        <Twitter size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right: Navigation */}
                    <div className="app-cinema-testimonials__nav-col">
                        <button
                            onClick={prevSlide}
                            className="app-cinema-testimonials__nav-btn"
                        >
                            <ArrowUp size={20} />
                        </button>

                        <div className="app-cinema-testimonials__nav-dots">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`app-cinema-testimonials__nav-dot ${i === currentIndex ? 'app-cinema-testimonials__nav-dot--active' : ''}`}
                                >
                                    0{i + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="app-cinema-testimonials__nav-btn app-cinema-testimonials__nav-btn--active"
                        >
                            <ArrowDown size={20} />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
