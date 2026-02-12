import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const handleScroll = () => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = totalScroll / windowHeight;

        setScrollProgress(scroll);
        toggleVisibility();
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (scrollProgress * circumference);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    onClick={scrollToTop}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        position: "fixed",
                        bottom: "2rem",
                        right: "2rem",
                        zIndex: 100,
                        cursor: "pointer",
                        background: 'transparent'
                    }}
                >
                    <div style={{ position: 'relative', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Progress Circle SVG */}
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                            style={{ position: 'absolute', transform: 'rotate(-90deg)' }}
                        >
                            {/* Background Circle */}
                            <circle
                                cx="25"
                                cy="25"
                                r={radius}
                                fill="white"
                                stroke="#e2e8f0"
                                strokeWidth="4"
                                style={{
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                                }}
                            />
                            {/* Progress Indicator */}
                            <circle
                                cx="25"
                                cy="25"
                                r={radius}
                                fill="transparent"
                                stroke="var(--accent-primary)"
                                strokeWidth="4"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                style={{ transition: 'stroke-dashoffset 0.1s linear' }}
                            />
                        </svg>

                        {/* Floating Shadow for visual depth since SVG shadow is tricky */}
                        <div style={{
                            position: 'absolute',
                            inset: 2,
                            borderRadius: '50%',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                            pointerEvents: 'none',
                            zIndex: -1
                        }}></div>

                        {/* Arrow Icon */}
                        <div style={{
                            color: 'var(--accent-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1
                        }}>
                            <ArrowUp size={20} strokeWidth={2.5} />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
