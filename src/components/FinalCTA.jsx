import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
    { q: "Is DBIMA a recognized school?", a: "Yes, DBIMA is a private higher education institution recognized by the Rectorate of Paris." },
    { q: "Do I need to speak French?", a: "No, all our international programs are taught 100% in English. French courses are available as electives." },
    { q: "Do you help with student visas?", a: "Yes, once enrolled, we provide all necessary documentation and guidance for your visa application." },
    { q: "Is equipment provided?", a: "Absolutely. Students have access to professional cameras, lighting, and post-production suites included in tuition." },
    { q: "Are there internship opportunities?", a: "Yes, internships are a core part of the curriculum, with placements at partner production companies." },
    { q: "Do you offer housing support?", a: "We have partnerships with student residences in Paris and assist accepted students with their search." }
];

export default function FinalCTA() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <React.Fragment>

            {/* Final CTA Band */}
            <section className="app-cinema-cta">
                <div className="app-cinema-container">
                    <h2 className="app-cinema-section-title" style={{ color: 'white' }}>
                        Ready to Start Your <span className="app-cinema-text-gradient">Story?</span>
                    </h2>
                    <p className="app-cinema-cta__text">
                        Join the next generation of filmmakers at MediaX Academy / DBIMA.
                    </p>

                    <div className="app-cinema-cta__actions">
                        <Link to="/apply" className="app-cinema-cta__btn app-cinema-cta__btn--primary">
                            Apply Now
                        </Link>
                        <Link to="/talk-to-advisor" className="app-cinema-cta__btn app-cinema-cta__btn--outline">
                            Talk to Advisor
                        </Link>
                        <button className="app-cinema-cta__btn app-cinema-cta__btn--secondary-outline">
                            Download Brochure
                        </button>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
