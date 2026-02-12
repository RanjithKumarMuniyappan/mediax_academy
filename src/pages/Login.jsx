import React, { useEffect } from 'react';

import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

export default function LoginPage() {
    useEffect(() => {
        // Redirect logic would go here, maybe after a timeout or immediately
        const timer = setTimeout(() => {
            // window.location.href = "https://example-lms.com/login"; // Commented out for preview
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <PageHeader
                title="Student Portal"
                subtitle="Access your course materials, grades, and schedule."
                backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000" // Computer/Digital
            />
            <div className="app-cinema-login-container">
                <p className="app-cinema-login-text">Redirecting to Learning Management System...</p>
                <div className="app-cinema-loader"></div>
            </div>
        </motion.div>
    );
}
