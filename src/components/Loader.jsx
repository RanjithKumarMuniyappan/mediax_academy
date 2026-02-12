import React from 'react';
import { motion } from 'framer-motion';
import { Film, Clapperboard } from 'lucide-react';

export default function Loader() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                background: '#0f172a', // Slate 900
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
            }}
        >
            <div style={{ position: 'relative', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Rotating Film Reel */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    style={{ position: 'absolute' }}
                >
                    <Film size={64} color="#7c3aed" strokeWidth={1.5} />
                </motion.div>


            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                    marginTop: '1.5rem',
                    fontFamily: 'monospace',
                    fontSize: '1.2rem',
                    letterSpacing: '4px',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.8)'
                }}
            >
                Loading Scene...
            </motion.div>

            {/* Progress Bar Line */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: '200px' }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
                style={{
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #7c3aed, transparent)',
                    marginTop: '1rem',
                    borderRadius: '2px'
                }}
            />
        </motion.div>
    );
}
