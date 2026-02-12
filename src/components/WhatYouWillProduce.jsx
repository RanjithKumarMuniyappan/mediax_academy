import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FileText, UserCheck, Film, Map, Award, Star, Zap, Shield } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const outcomes = [
    {
        title: "Screenplay Drafts",
        desc: "From initial concept to final screenplay submission.",
        gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)", // Green
        icon: FileText,
        tags: ["Concept", "Drafting", "Polishing"]
    },
    {
        title: "Mentor-Reviewed Outputs",
        desc: "Regular feedback loops with industry professionals.",
        gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)", // Orange
        icon: UserCheck,
        tags: ["Industry Pro", "Feedback", "Guidance"]
    },
    {
        title: "Capstone Deliverable",
        desc: "A portfolio-ready short film or screenplay.",
        gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)", // Blue
        icon: Film,
        tags: ["Portfolio", "Short Film", "Screenplay"]
    },
    {
        title: "Structured Milestones",
        desc: "Clear learning path with defined goals.",
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)", // Purple
        icon: Map,
        tags: ["Goals", "Timeline", "Progress"]
    },
    {
        title: "Completion Credential",
        desc: "Recognized certification upon program completion.",
        gradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)", // Pink
        icon: Award,
        tags: ["Certificate", "Recognition", "Alumni"]
    }
];

export default function WhatYouWillProduce() {
    return (
        <section className="section" style={{ background: '#f8fafc', padding: '6rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{
                        color: 'var(--accent-primary)',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        fontSize: '0.9rem',
                        display: 'block',
                        marginBottom: '0.5rem'
                    }}>
                        Tangible Results
                    </span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                        What you will produce
                    </h2>
                </div>

                <div className="produces-slider-container">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        style={{ padding: '1rem 1rem 4rem 1rem' }}
                    >
                        {outcomes.map((item, i) => (
                            <SwiperSlide key={i} style={{ height: 'auto', display: 'flex' }}>
                                <div style={{
                                    background: item.gradient,
                                    borderRadius: '1.5rem',
                                    padding: '2.5rem 2rem',
                                    minHeight: '450px',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    color: 'white',
                                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    {/* Decorative Overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0, left: 0, right: 0, bottom: 0,
                                        background: 'linear-gradient(to bottom right, rgba(255,255,255,0.1) 0%, transparent 60%)',
                                        pointerEvents: 'none'
                                    }}></div>

                                    {/* Top Label */}
                                    <div style={{
                                        fontSize: '0.8rem',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        marginBottom: '1rem',
                                        opacity: 0.9
                                    }}>
                                        Key Outcome
                                    </div>

                                    {/* Title */}
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 800,
                                        lineHeight: 1.2,
                                        marginBottom: '1.5rem',
                                        textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}>
                                        {item.title}
                                    </h3>

                                    {/* Center Graphic / Icon Area */}
                                    <div style={{
                                        flex: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '1.5rem',
                                        position: 'relative',
                                        width: '100%'
                                    }}>
                                        {/* Illustration Placeholder - Using Large Icon with glow */}
                                        <div style={{
                                            width: '100px',
                                            height: '100px',
                                            background: 'rgba(255,255,255,0.2)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backdropFilter: 'blur(10px)',
                                            boxShadow: '0 0 40px rgba(0,0,0,0.1)',
                                            border: '2px solid rgba(255,255,255,0.3)'
                                        }}>
                                            <item.icon size={48} strokeWidth={1.5} color="white" />
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p style={{
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        opacity: 0.95,
                                        marginBottom: '2rem',
                                        maxWidth: '90%'
                                    }}>
                                        {item.desc}
                                    </p>

                                    {/* Bottom Tags / Pills */}
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        marginTop: 'auto'
                                    }}>
                                        {item.tags.map((tag, tIdx) => (
                                            <span key={tIdx} style={{
                                                background: 'rgba(255,255,255,0.2)',
                                                padding: '0.4rem 1rem',
                                                borderRadius: '50px',
                                                fontSize: '0.8rem',
                                                fontWeight: 600,
                                                backdropFilter: 'blur(5px)'
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <style>{`
                .swiper-pagination-bullet {
                    background: var(--text-secondary) !important;
                    opacity: 0.5;
                }
                .swiper-pagination-bullet-active {
                    background: var(--accent-primary) !important;
                    opacity: 1;
                }
                .swiper-pagination {
                    bottom: 0 !important;
                }
            `}</style>
        </section>
    );
}
