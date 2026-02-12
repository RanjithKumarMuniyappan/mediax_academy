import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        program: 'Bachelor of Arts',
        experience: 'Beginner',
        cohort: 'Sept 2025',
        message: '',
        consent: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your interest! An advisor will contact you shortly.');
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <PageHeader
                title={<span>Get in touch with <br />MediaX Academy</span>}
                subtitle="Have questions about our programs or the admissions process? Our team is here to help you navigate your creative journey."
                backgroundImage="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=2000" // Contact/Desk
            />

            <section className="app-cinema-contact section">
                <div className="app-cinema-container">
                    <div className="app-cinema-contact__grid">
                        {/* Contact Info */}
                        <div>
                            <span className="app-cinema-contact__info-title">Contact Information</span>

                            <div className="app-cinema-contact__info-list">
                                <div className="app-cinema-contact__info-item">
                                    <div className="app-cinema-contact__icon-box">
                                        <MapPin color="var(--primary-orange)" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="app-cinema-contact__info-heading">Visit Us in Paris</h3>
                                        <p className="app-cinema-contact__info-text">123 Avenue de Saint-Mandé<br />75012 Paris, France</p>
                                    </div>
                                </div>
                                <div className="app-cinema-contact__info-item">
                                    <div className="app-cinema-contact__icon-box">
                                        <Mail color="var(--primary-orange)" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="app-cinema-contact__info-heading">Email Us</h3>
                                        <p className="app-cinema-contact__info-text">admissions@dbima.eu</p>
                                        <p className="app-cinema-contact__info-text">info@mediax.academy</p>
                                    </div>
                                </div>
                                <div className="app-cinema-contact__info-item">
                                    <div className="app-cinema-contact__icon-box">
                                        <Phone color="var(--primary-orange)" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="app-cinema-contact__info-heading">Call Us</h3>
                                        <p className="app-cinema-contact__info-text">+33 1 23 45 67 89</p>
                                        <p className="app-cinema-contact__info-text app-cinema-contact__info-text--small">Mon-Fri, 9am - 6pm CET</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="app-cinema-contact__form-card">
                            <h3 className="app-cinema-contact__form-title">Send us a message</h3>
                            <form onSubmit={handleSubmit} className="app-cinema-contact__form">
                                <div className="app-cinema-contact__form-row">
                                    <div className="app-cinema-contact__field">
                                        <label className="app-cinema-contact__label">Full Name *</label>
                                        <input required name="name" value={formData.name} onChange={handleChange} type="text" className="app-cinema-contact__input" placeholder="John Doe" />
                                    </div>
                                    <div className="app-cinema-contact__field">
                                        <label className="app-cinema-contact__label">Email *</label>
                                        <input required name="email" value={formData.email} onChange={handleChange} type="email" className="app-cinema-contact__input" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div className="app-cinema-contact__form-row">
                                    <div className="app-cinema-contact__field">
                                        <label className="app-cinema-contact__label">Phone</label>
                                        <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className="app-cinema-contact__input" placeholder="+33..." />
                                    </div>
                                    <div className="app-cinema-contact__field">
                                        <label className="app-cinema-contact__label">City / Country</label>
                                        <input name="location" value={formData.location} onChange={handleChange} type="text" className="app-cinema-contact__input" placeholder="Paris, France" />
                                    </div>
                                </div>

                                <div className="app-cinema-contact__field">
                                    <label className="app-cinema-contact__label">Program Interest *</label>
                                    <select required name="program" value={formData.program} onChange={handleChange} className="app-cinema-contact__select">
                                        <option>Bachelor of Arts</option>
                                        <option>Master of Arts</option>
                                        <option>Elite Diploma</option>
                                        <option>BTS Audiovisual</option>
                                    </select>
                                </div>

                                <div className="app-cinema-contact__form-row">
                                    <div className="app-cinema-contact__field">
                                        <label className="app-cinema-contact__label">Experience Level</label>
                                        <select name="experience" value={formData.experience} onChange={handleChange} className="app-cinema-contact__select">
                                            <option>Beginner</option>
                                            <option>Intermediate</option>
                                            <option>Advanced</option>
                                        </select>
                                    </div>
                                    <div className="app-cinema-contact__field">
                                        <label className="app-cinema-contact__label">Preferred Intake</label>
                                        <select name="cohort" value={formData.cohort} onChange={handleChange} className="app-cinema-contact__select">
                                            <option>Sept 2025</option>
                                            <option>Jan 2026</option>
                                            <option>Sept 2026</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="app-cinema-contact__field">
                                    <label className="app-cinema-contact__label">Message / Goals</label>
                                    <textarea rows={4} name="message" value={formData.message} onChange={handleChange} className="app-cinema-contact__textarea" placeholder="Tell us about your background..."></textarea>
                                </div>

                                <div className="app-cinema-contact__checkbox-row">
                                    <input required type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="app-cinema-contact__checkbox" />
                                    <label className="app-cinema-contact__checkbox-label">
                                        I consent to MediaX Academy / DBIMA processing my data to contact me about my application. I understand I can unsubscribe at any time.
                                    </label>
                                </div>

                                <button type="submit" className="app-cinema-contact__submit-btn">Submit Enquiry</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
