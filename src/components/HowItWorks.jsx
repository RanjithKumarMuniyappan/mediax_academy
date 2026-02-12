import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Image as ImageIcon, Users, Mail, Plane } from 'lucide-react';

const steps = [
    { num: "01", title: "Submit Application", desc: "Fill out the online form with your details.", icon: <FileText size={20} /> },
    { num: "02", title: "Portfolio Review", desc: "Upload your creative work or showreel.", icon: <ImageIcon size={20} /> },
    { num: "03", title: "Interview", desc: "Meet with our pedagogical coordinator.", icon: <Users size={20} /> },
    { num: "04", title: "Decision", desc: "Receive your acceptance letter within 2 weeks.", icon: <Mail size={20} /> },
    { num: "05", title: "Enroll", desc: "Secure your spot and apply for visa if needed.", icon: <Plane size={20} /> }
];

export default function HowItWorks() {
    return (
        <section className="app-cinema-process section">
            <div className="app-cinema-container">
                {/* Header Section from Design */}
                <div className="app-cinema-process__header">
                    <span className="app-cinema-section-subtitle">
                        Admission Process
                    </span>
                    <h2 className="app-cinema-section-title">
                        Your Journey to <br />
                        <span className="app-cinema-text-gradient">DBIMA Starts Here</span>
                    </h2>
                </div>

                {/* Timeline Container */}
                <div className="app-cinema-process__timeline">

                    {/* Central Line */}
                    <div className="app-cinema-process__line"></div>

                    {steps.map((step, index) => {
                        return (
                            <motion.div
                                key={index}
                                className="app-cinema-process__item"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Center Marker */}
                                <div className="app-cinema-process__marker"></div>

                                {/* Content Box */}
                                <div className="app-cinema-process__content">
                                    {/* Step Number */}
                                    <div className="app-cinema-process__step-num">
                                        Step {step.num}
                                    </div>

                                    {/* Title */}
                                    <h3 className="app-cinema-process__step-title">{step.title}</h3>

                                    <div className="app-cinema-process__step-row">
                                        {/* Icon Box */}
                                        <div className="app-cinema-process__icon-box">
                                            {step.icon}
                                        </div>

                                        {/* Description */}
                                        <p className="app-cinema-process__desc">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
