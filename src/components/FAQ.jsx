import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, BookOpen, User, Briefcase, FileText, ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
    {
        category: "General",
        icon: <HelpCircle size={24} />,
        questions: [
            { q: "Is DBIMA a recognized school?", a: "Yes, DBIMA is a private higher education institution recognized by the Rectorate of Paris." },
            { q: "Do I need to speak French?", a: "No, all our international programs are taught 100% in English. French courses are available as electives." }
        ]
    },
    {
        category: "Admissions",
        icon: <FileText size={24} />,
        questions: [
            { q: "Do you help with student visas?", a: "Yes, once enrolled, we provide all necessary documentation and guidance for your visa application." },
            { q: "Is there an age limit to apply?", a: "We welcome students from 18 years old. There is no upper age limit for our programs." }
        ]
    },
    {
        category: "Student Life",
        icon: <User size={24} />,
        questions: [
            { q: "Do you offer housing support?", a: "We have partnerships with student residences in Paris and assist accepted students with their search." },
            { q: "Can I work while studying?", a: "International students in France can work up to 20 hours per week with a valid student visa." }
        ]
    },
    {
        category: "Academics",
        icon: <BookOpen size={24} />,
        questions: [
            { q: "Is equipment provided?", a: "Absolutely. Students have access to professional cameras, lighting, and post-production suites included in tuition." },
            { q: "Are there internship opportunities?", a: "Yes, internships are a core part of the curriculum, with placements at partner production companies." }
        ]
    }
];

export default function FAQ() {
    const [activeTab, setActiveTab] = useState(0); // Index of active category
    const [openQuestionIndex, setOpenQuestionIndex] = useState(0); // Index of open question within the active category

    const activeCategory = faqData[activeTab];

    return (
        <section className="app-cinema-faq-section section" id="faq">
            <div className="app-cinema-faq-section__container">

                {/* Header */}
                <div className="app-cinema-faq-section__header">
                    <span className="app-cinema-section-subtitle">
                        FAQ
                    </span>
                    <h2 className="app-cinema-section-title">
                        Frequently Asked <span className="app-cinema-text-gradient">Questions</span>
                    </h2>
                    <p className="app-cinema-faq-section__desc">Find answers to common questions about our programs and admissions.</p>
                </div>

                {/* Categories / Tabs */}
                <div className="app-cinema-faq-section__tabs">
                    {faqData.map((cat, idx) => (
                        <button
                            key={cat.category}
                            onClick={() => { setActiveTab(idx); setOpenQuestionIndex(null); }}
                            className={`app-cinema-faq-section__tab-btn ${activeTab === idx ? 'app-cinema-faq-section__tab-btn--active' : ''}`}
                        >
                            <div className="app-cinema-faq-section__tab-icon">
                                {cat.icon}
                            </div>
                            <span className="app-cinema-faq-section__tab-label">{cat.category}</span>
                        </button>
                    ))}
                </div>

                {/* Questions List */}
                <div className="app-cinema-faq-section__questions">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {activeCategory.questions.map((item, i) => {
                                const isOpen = openQuestionIndex === i;
                                return (
                                    <div key={i} className="app-cinema-faq-section__item">
                                        <button
                                            onClick={() => setOpenQuestionIndex(isOpen ? null : i)}
                                            className="app-cinema-faq-section__question-btn"
                                        >
                                            {/* Arrow Icon on Left */}
                                            <div className={`app-cinema-faq-section__arrow ${isOpen ? 'app-cinema-faq-section__arrow--active' : ''}`}>
                                                <ChevronDown size={20} />
                                            </div>

                                            {/* Question Text */}
                                            <span style={{ flex: 1 }}>{item.q}</span>
                                        </button>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    style={{ overflow: 'hidden' }}
                                                >
                                                    <div className="app-cinema-faq-section__answer">
                                                        {item.a}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
