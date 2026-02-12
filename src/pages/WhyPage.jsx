import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Globe } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';
import PageHeader from '../components/PageHeader';

export default function WhyPage() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <PageHeader
                title={<>Why <span className="app-cinema-text-gradient">DBIMA?</span></>}
                subtitle="More than a film school. A global community of storytellers rooted in the Salesian tradition of education."
                backgroundImage="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2000" // University/Community
            />

            <section className="app-cinema-why-page-section section">
                <div className="container">
                    <div className="app-cinema-why-page__grid">
                        <div className="app-cinema-why-page__image-col">
                            <div className="app-cinema-why-page__image-card">
                                <img
                                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200"
                                    alt="Cinema Production"
                                    className="app-cinema-why-page__img"
                                />
                                <div className="app-cinema-why-page__image-overlay"></div>
                            </div>
                        </div>
                        <div className="app-cinema-why-page__content-col">
                            <h2 className="app-cinema-why-page__title">The <span className="app-cinema-text-gradient">DBIMA Difference</span></h2>
                            <p className="app-cinema-why-page__intro">
                                More than a school, we are a global production ecosystem designed to launch your career.
                            </p>
                            <div className="app-cinema-why-page__features">
                                <FeatureItem
                                    Icon={Globe}
                                    title="International Recognition"
                                    desc="Recognized by the French Ministry of Education and part of the global Don Bosco network present in 134 countries."
                                />
                                <FeatureItem
                                    Icon={Users}
                                    title="Personalized Mentorship"
                                    desc="Small class sizes ensure every student receives 1-on-1 guidance from industry professionals like Joan de Camaret."
                                />
                                <FeatureItem
                                    Icon={CheckCircle}
                                    title="Outcome-Based Learning"
                                    desc="You graduate with a professional portfolio, not just a diploma. 100% of our students produce a short film or capstone project."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA />
        </motion.div>
    );
}

function FeatureItem({ Icon, title, desc }) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <motion.div
            className="app-cinema-why-page__feature-card"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                initial={false}
                animate={{
                    scale: isHovered ? 40 : 1,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="app-cinema-why-page__feature-circle"
            />

            <div className="app-cinema-why-page__feature-content">
                <div className="app-cinema-why-page__feature-icon">
                    <Icon size={24} strokeWidth={2} />
                </div>
                <div>
                    <h3 className="app-cinema-why-page__feature-title">{title}</h3>
                    <p className="app-cinema-why-page__feature-desc">{desc}</p>
                </div>
            </div>
        </motion.div>
    );
}
