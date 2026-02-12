import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Play, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const videos = [
    {
        id: 1,
        title: "The Silent Echo",
        director: "Dir. Sarah Jenkins",
        thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Placeholder
    },
    {
        id: 2,
        title: "Urban Rhythms",
        director: "Dir. Michael Chen",
        thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
        id: 3,
        title: "Neon Shadows",
        director: "Dir. Alex Morgan",
        thumbnail: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
        id: 4,
        title: "Forgotten Tales",
        director: "Dir. Emily Rose",
        thumbnail: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    }
];

export default function StudentWork() {
    const [activeVideo, setActiveVideo] = useState(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="app-cinema-showcase section" id="showcase">
            <div className="app-cinema-container">
                <div className="app-cinema-showcase__header">
                    <span className="app-cinema-section-subtitle">Student Artifacts</span>
                    <h2 className="app-cinema-section-title">
                        Student <span className="app-cinema-text-gradient">Showcase</span>
                    </h2>
                    <p className="app-cinema-showcase__desc">
                        Watch award-winning films from last year's graduates.
                    </p>
                </div>

                <div className="app-cinema-showcase__container">

                    {/* External Navigation Buttons */}
                    <button ref={prevRef} className="app-cinema-showcase__nav-btn app-cinema-showcase__nav-btn--prev">
                        <ChevronLeft size={24} />
                    </button>
                    <button ref={nextRef} className="app-cinema-showcase__nav-btn app-cinema-showcase__nav-btn--next">
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
                        autoplay={{ delay: 6000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 2 }
                        }}
                        className="app-cinema-showcase__swiper"
                    >
                        {videos.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div
                                    onClick={() => setActiveVideo(item)}
                                    className="app-cinema-showcase__card group"
                                >
                                    {/* Thumbnail */}
                                    <div className="app-cinema-showcase__card-thumb-wrapper">
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className="app-cinema-showcase__card-thumb"
                                        />
                                        <div className="app-cinema-showcase__card-overlay"></div>
                                    </div>

                                    {/* Play Button */}
                                    <div className="app-cinema-showcase__play-btn">
                                        <div className="app-cinema-showcase__play-icon">
                                            <Play fill="white" color="white" size={28} className="app-cinema-showcase__play-icon-svg" />
                                        </div>
                                    </div>

                                    <div className="app-cinema-showcase__card-info">
                                        <div className="app-cinema-showcase__card-title">{item.title}</div>
                                        <div className="app-cinema-showcase__card-director">{item.director}</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div className="app-cinema-showcase__modal" onClick={() => setActiveVideo(null)}>
                    <button
                        onClick={() => setActiveVideo(null)}
                        className="app-cinema-showcase__modal-close"
                    >
                        <X size={24} color="black" />
                    </button>

                    <div className="app-cinema-showcase__modal-video" onClick={e => e.stopPropagation()}>
                        <iframe
                            width="100%"
                            height="100%"
                            src={activeVideo.videoUrl}
                            title={activeVideo.title}
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
