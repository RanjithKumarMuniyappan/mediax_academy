import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Search } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';
import PageHeader from '../components/PageHeader';

const allFaqs = {
    "Programs": [
        { q: "What is the difference between the Bachelor and Elite Diploma?", a: "The Bachelor is a 3-year accredited degree providing a comprehensive education in all aspects of cinema. The Elite Diploma is a 1-year intensive practical course focused on rapid upskilling for technical roles." },
        { q: "Are the programs taught in English?", a: "Yes, our international track is 100% English. We also offer French language support for daily life in Paris." },
        { q: "Do I need a portfolio to apply?", a: "For the Bachelor, it is recommended but not mandatory. For the Master and Elite Diploma, a portfolio or showreel is required to demonstrate prior experience." }
    ],
    "Admissions & Fees": [
        { q: "What are the tuition fees?", a: "Fees range from €12,000 to €15,000 depending on the program. See our Admissions page for a detailed breakdown." },
        { q: "Do you offer scholarships?", a: "Yes, merit-based scholarships are available for outstanding candidates, covering up to 30% of tuition." },
        { q: "When is the application deadline?", a: "We have two main intake rounds. For September 2025, the deadlines are March 15th and June 15th." }
    ],
    "Student Life": [
        { q: "Do you provide accommodation?", a: "We do not own dormitories, but we have partnerships with student residences in Paris and assist accepted students with their housing search." },
        { q: "Can international students work in France?", a: "Yes, students with a valid long-stay student visa can work up to 964 hours per year (approx. 20 hours/week)." },
        { q: "Where is the campus located?", a: "We are located in the 12th arrondissement of Paris, a safe and vibrant district with easy access to the city center." }
    ],
    "Career": [
        { q: "What kind of jobs do graduates get?", a: "Our alumni work as directors, cinematographers, editors, and producers. Many start their own production companies or work for major broadcasters." },
        { q: "Is there an alumni network?", a: "Yes, as part of the Salesian network, you join a global community. DBIMA also maintains a strong alumni association for networking and job opportunities." }
    ]
};

export default function FAQPage() {
    const [activeCategory, setActiveCategory] = useState("Programs");
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <PageHeader
                title={<>Frequently Asked <span className="app-cinema-text-gradient">Questions</span></>}
                subtitle="Find answers to common questions about our programs, admissions, and student life in Paris."
                backgroundImage="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=2000" // Library/Study
            />

            <section className="app-cinema-faq section">
                <div className="app-cinema-container">
                    <div className="app-cinema-faq__grid">
                        {/* Sidebar */}
                        <div className="app-cinema-faq__sidebar">
                            {Object.keys(allFaqs).map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                                    className={`app-cinema-faq__tab-btn ${activeCategory === cat ? 'app-cinema-faq__tab-btn--active' : ''}`}
                                >
                                    {cat}
                                </button>
                            ))}
                            <div className="app-cinema-faq__help-box">
                                <h4 className="app-cinema-faq__help-title">Still have questions?</h4>
                                <p className="app-cinema-faq__help-text">Our team is ready to help.</p>
                                <a href="/contact" className="app-cinema-faq__help-btn">Contact Us</a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="app-cinema-faq__content">
                            <h2 className="app-cinema-faq__category-title">{activeCategory}</h2>
                            <div className="app-cinema-faq__list">
                                {allFaqs[activeCategory].map((item, i) => (
                                    <div key={i} className="app-cinema-faq__item">
                                        <button
                                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                            className="app-cinema-faq__question"
                                        >
                                            {item.q}
                                            {openIndex === i ? <Minus size={20} color="var(--primary-orange)" /> : <Plus size={20} />}
                                        </button>

                                        {openIndex === i && (
                                            <div className="app-cinema-faq__answer">
                                                {item.a}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA />
        </motion.div>
    );
}
