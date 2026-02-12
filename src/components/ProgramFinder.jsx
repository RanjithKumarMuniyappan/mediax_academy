import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const goals = [
    { id: 'director', label: 'Become a Film Director' },
    { id: 'tech', label: 'Master Technical Skills (Sound/Edit)' },
    { id: 'start', label: 'Start from Scratch' },
    { id: 'advance', label: 'Advance My Career' }
];

export default function ProgramFinder() {
    const [selectedGoal, setSelectedGoal] = useState(goals[0].id);

    return (
        <section className="section" style={{ background: 'var(--bg-secondary)', padding: '3rem 0' }}>
            <div className="container">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Find Your Perfect Program</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>Select your primary goal to see our recommendation.</p>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {goals.map((g) => (
                            <button
                                key={g.id}
                                onClick={() => setSelectedGoal(g.id)}
                                style={{
                                    padding: '0.5rem 1rem',
                                    borderRadius: '0.5rem',
                                    border: `1px solid ${selectedGoal === g.id ? 'var(--accent-primary)' : 'var(--border-color)'}`,
                                    background: selectedGoal === g.id ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
                                    color: selectedGoal === g.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {g.label}
                            </button>
                        ))}
                    </div>

                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={selectedGoal}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            style={{
                                padding: '1rem 1.5rem',
                                background: 'var(--card-bg)',
                                border: '1px solid var(--accent-primary)',
                                borderRadius: '0.75rem',
                                minWidth: '300px'
                            }}
                        >
                            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)' }}>
                                Recommended:
                            </span>
                            <div style={{ fontWeight: 600, fontSize: '1.125rem', color: 'var(--text-primary)' }}>
                                {selectedGoal === 'director' && 'European Master of Arts'}
                                {selectedGoal === 'tech' && 'BTS Audiovisual Editing'}
                                {selectedGoal === 'start' && 'European Bachelor of Arts'}
                                {selectedGoal === 'advance' && 'Elite Diploma in Cinema'}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
