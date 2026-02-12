import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Heart, Star, BookOpen, Clock, ChevronLeft, ChevronRight, CheckCircle, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const programs = [
    {
        id: "script-writing",
        title: "Script Writing (DBIMA)",
        status: "Now Open",
        outcome: "Write a complete screenplay with structured mentorship and portfolio-ready deliverables.",
        highlights: ["Structured curriculum with checkpoints", "Mentor feedback loop across drafts", "Capstone-ready final screenplay submission"],
        badge: "Co-created with Mindlogicx + DBIMA Paris",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800", // Writing/Script
        buttons: [
            { label: "View Program", link: "/programs", primary: true },
            { label: "Apply Now", link: "/apply", primary: false },
            { label: "Talk to Advisor", link: "/talk-to-advisor", primary: false }
        ]
    },
    {
        id: "video-editing",
        title: "Video Editing & Post-Production (DBIMA)",
        status: "Coming Soon",
        outcome: "Build an editing portfolio through guided projects and a showreel-focused capstone.",
        badge: "Co-created with Mindlogicx + DBIMA Paris",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?auto=format&fit=crop&q=80&w=800", // Video Editing Timeline
        buttons: [
            { label: "Notify Me", link: "/contact", icon: <Bell size={16} />, primary: true },
            { label: "Talk to Advisor", link: "/talk-to-advisor", primary: false }
        ],
        microcopy: "Get notified when admissions open."
    },
    {
        id: "film-making",
        title: "Film Making (DBIMA)",
        status: "Coming Soon",
        outcome: "Learn end-to-end filmmaking workflow and work towards a capstone short-film project plan/output.",
        badge: "Co-created with Mindlogicx + DBIMA Paris",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800", // Film Set/Camera
        buttons: [
            { label: "Notify Me", link: "/contact", icon: <Bell size={16} />, primary: true },
            { label: "Talk to Advisor", link: "/talk-to-advisor", primary: false }
        ],
        microcopy: "Get notified when admissions open."
    }
];

export default function FeaturedPrograms() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="app-cinema-programs" id="programs">
            <div className="app-cinema-container app-cinema-programs__sw-container">
                <div className="app-cinema-programs__header">
                    <span className="app-cinema-section-subtitle">
                        Academic Partnership
                    </span>
                    <h2 className="app-cinema-section-title">
                        DBIMA Programs on <span className="app-cinema-text-gradient">MediaX Academy</span>
                    </h2>
                </div>

                <div className="app-cinema-programs__sw-container">
                    {/* Custom Nav Arrows - Absolute Positioned */}
                    <button ref={prevRef} className="app-cinema-programs__nav-btn app-cinema-programs__nav-btn--prev">
                        <ChevronLeft size={24} />
                    </button>
                    <button ref={nextRef} className="app-cinema-programs__nav-btn app-cinema-programs__nav-btn--next">
                        <ChevronRight size={24} />
                    </button>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        className="app-cinema-programs__swiper-wrapper"
                    >
                        {programs.map((prog, i) => (
                            <SwiperSlide key={i} className="app-cinema-programs__slide">
                                <div className="app-cinema-programs__card">
                                    {/* Image Header */}
                                    <div className="app-cinema-programs__card-image-wrapper">
                                        <img src={prog.image} alt={prog.title} className="app-cinema-programs__card-image" />
                                        <div className={`app-cinema-programs__status ${prog.status === 'Now Open' ? 'app-cinema-programs__status--open' : 'app-cinema-programs__status--soon'}`}>
                                            {prog.status}
                                        </div>
                                    </div>

                                    <div className="app-cinema-programs__card-content">
                                        {/* Badge */}
                                        <div className="app-cinema-programs__badge">
                                            {prog.badge}
                                        </div>

                                        <h3 className="app-cinema-programs__card-title">
                                            {prog.title}
                                        </h3>

                                        <p className="app-cinema-programs__card-desc">
                                            {prog.outcome}
                                        </p>

                                        {/* Highlights (Only if present) */}
                                        {prog.highlights && (
                                            <div className="app-cinema-programs__highlights">
                                                {prog.highlights.map((h, idx) => (
                                                    <div key={idx} className="app-cinema-programs__highlight-item">
                                                        <CheckCircle size={14} color="var(--primary-orange)" /> {h}
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Buttons */}
                                        <div className="app-cinema-programs__actions">
                                            {prog.buttons.map((btn, bIdx) => (
                                                <Link
                                                    key={bIdx}
                                                    to={btn.link}
                                                    className={`app-cinema-btn ${btn.primary ? 'app-cinema-btn--primary' : 'app-cinema-btn--outline'} app-cinema-programs__cta-btn`}
                                                >
                                                    {btn.icon} {btn.label}
                                                </Link>
                                            ))}
                                            {prog.microcopy && (
                                                <div className="app-cinema-programs__microcopy">
                                                    {prog.microcopy}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
