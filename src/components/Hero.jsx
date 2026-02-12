import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2000", // Cinema Camera
        badge: "MediaX Academy • Mindlogicx • DBIMA Paris",
        title: <>MediaX <span className="app-cinema-text-gradient">Academy</span></>,
        subtitle: "Cohort-based learning with mentor feedback and portfolio-ready outcomes — built for serious creators.",
        buttons: [
            { label: "Explore Programs", link: "/programs", primary: true },
            { label: "Apply Now", link: "/apply", primary: false },
            { label: "Talk to Advisor", link: "/talk-to-advisor", primary: false, outline: true }
        ],
        microProof: "Admissions open for Script Writing (DBIMA).",
        trustLine: "Programs offered by MediaX Academy. Curriculum co-created in collaboration with Mindlogicx + DBIMA Paris."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=2000", // Film Set
        badge: "MediaX Academy • Mindlogicx • DBIMA Paris",
        title: <>MediaX <span className="app-cinema-text-gradient">Academy</span></>,
        subtitle: "Cohort-based learning with mentor feedback and portfolio-ready outcomes — built for serious creators.",
        buttons: [
            { label: "Explore Programs", link: "/programs", primary: true },
            { label: "Apply Now", link: "/apply", primary: false },
            { label: "Talk to Advisor", link: "/talk-to-advisor", primary: false, outline: true }
        ],
        microProof: "Admissions open for Script Writing (DBIMA).",
        trustLine: "Programs offered by MediaX Academy. Curriculum co-created in collaboration with Mindlogicx + DBIMA Paris."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2000", // Students/University
        badge: "MediaX Academy • Mindlogicx • DBIMA Paris",
        title: <>MediaX <span className="app-cinema-text-gradient">Academy</span></>,
        subtitle: "Cohort-based learning with mentor feedback and portfolio-ready outcomes — built for serious creators.",
        buttons: [
            { label: "Explore Programs", link: "/programs", primary: true },
            { label: "Apply Now", link: "/apply", primary: false },
            { label: "Talk to Advisor", link: "/talk-to-advisor", primary: false, outline: true }
        ],
        microProof: "Admissions open for Script Writing (DBIMA).",
        trustLine: "Programs offered by MediaX Academy. Curriculum co-created in collaboration with Mindlogicx + DBIMA Paris."
    }
];

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 = right, -1 = left

    const nextSlide = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(timer);
    }, [index]);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0
        })
    };

    return (
        <section className="app-cinema-hero">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={index}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="app-cinema-hero__slide"
                    style={{
                        backgroundImage: `url(${slides[index].image})`,
                    }}
                >
                    {/* Dark Theme Overlay */}
                    <div className="app-cinema-hero__overlay"></div>

                    <div className="app-cinema-container app-cinema-hero__content-container">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                {/* Badge */}
                                <div className="app-cinema-hero__badge">
                                    <span className="app-cinema-hero__badge-dot"></span>
                                    {slides[index].badge}
                                </div>

                                {/* Title */}
                                <h1 className="app-cinema-hero__title">
                                    {slides[index].title}
                                </h1>

                                {/* Subtitle */}
                                <p className="app-cinema-hero__subtitle">
                                    {slides[index].subtitle}
                                </p>

                                {/* Buttons */}
                                <div className="app-cinema-hero__actions">
                                    {slides[index].buttons.map((btn, i) => (
                                        <Link
                                            key={i}
                                            to={btn.link}
                                            className={`app-cinema-btn ${btn.primary ? 'app-cinema-btn--primary' :
                                                (btn.outline ? 'app-cinema-btn--outline' : 'app-cinema-btn--white')
                                                }`}
                                        >
                                            {btn.label}
                                        </Link>
                                    ))}
                                </div>

                                {/* Micro Proof & Trust Line */}
                                <div className="app-cinema-hero__trust">
                                    {slides[index].microProof && (
                                        <div className="app-cinema-hero__micro-proof">
                                            <CheckCircle size={16} /> {slides[index].microProof}
                                        </div>
                                    )}
                                    {slides[index].trustLine && (
                                        <p className="app-cinema-hero__trust-text">
                                            {slides[index].trustLine}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <button
                onClick={prevSlide}
                className="app-cinema-hero__nav-btn app-cinema-hero__nav-btn--prev"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={nextSlide}
                className="app-cinema-hero__nav-btn app-cinema-hero__nav-btn--next"
            >
                <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="app-cinema-hero__dots">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setDirection(i > index ? 1 : -1);
                            setIndex(i);
                        }}
                        className={`app-cinema-hero__dot ${i === index ? 'app-cinema-hero__dot--active' : ''}`}
                    />
                ))}
            </div>

            {/* Wave Border */}
            <div className="app-cinema-hero__wave">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    className="app-cinema-hero__wave-svg"
                >
                    <path fillOpacity="1" d="M0,160C240,280,480,40,720,160C960,280,1200,40,1440,160L1440,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
}
