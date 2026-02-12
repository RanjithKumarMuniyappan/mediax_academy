import React from 'react';
import { motion } from 'framer-motion';

export default function PageHeader({ title, subtitle, backgroundImage, height = '60vh' }) {
    return (
        <section
            className="app-cinema-page-header"
            style={{
                height: height,
                backgroundImage: `url(${backgroundImage})`
            }}
        >
            {/* Dark Overlay */}
            <div className="app-cinema-page-header__overlay"></div>

            {/* Content */}
            <div className="app-cinema-page-header__container">
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="app-cinema-page-header__title"
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="app-cinema-page-header__subtitle"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>

            {/* Wave Divider */}
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
