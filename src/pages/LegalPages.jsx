import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

const LegalContent = ({ title, lastUpdated, children }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="app-cinema-legal-section"
    >
        <div className="container app-cinema-legal-container">
            <div className="app-cinema-legal-header">
                <p className="app-cinema-legal-updated">Last Updated: {lastUpdated}</p>
            </div>
            <div className="app-cinema-legal-content">
                {children}
            </div>
        </div>
    </motion.div>
);

export function TermsPage() {
    return (
        <>
            <PageHeader
                title={<>Terms of <span className="app-cinema-text-gradient">Service</span></>}
                subtitle="Please read these terms carefully before using our services."
                backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000" // Legal/Documents
            />
            <LegalContent title="Terms of Service" lastUpdated="September 1, 2025">
                <h3>1. Acceptance of Terms</h3>
                <p>By accessing and using the MediaX Academy / DBIMA platform, you accept and agree to be bound by the terms and provision of this agreement.</p>

                <h3>2. Educational Services</h3>
                <p>MediaX Academy provides educational content, mentorship, and certification programs. We reserve the right to modify curriculum and schedules as necessary.</p>

                <h3>3. User Conduct</h3>
                <p>Students and users are expected to maintain professional conduct in all community interactions and submissions.</p>
            </LegalContent>
        </>
    );
}

export function PrivacyPage() {
    return (
        <>
            <PageHeader
                title={<>Privacy <span className="app-cinema-text-gradient">Policy</span></>}
                subtitle="We are committed to protecting your personal data."
                backgroundImage="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=2000" // Security/Lock or Minimal office
            />
            <LegalContent title="Privacy Policy" lastUpdated="September 1, 2025">
                <h3>1. Data Collection</h3>
                <p>We collect information necessary for enrollment, communication, and educational delivery, including name, email, and academic history.</p>

                <h3>2. Usage of Information</h3>
                <p>Your data is used solely for the purpose of delivering our educational services and legal compliance. We do not sell your data to third parties.</p>

                <h3>3. Cookies</h3>
                <p>Our website uses cookies to enhance user experience and analyze site traffic.</p>
            </LegalContent>
        </>
    );
}

export function RefundPage() {
    return (
        <>
            <PageHeader
                title={<>Refund <span className="app-cinema-text-gradient">Policy</span></>}
                subtitle="Transparent policies regarding tuition and fees."
                backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000" // Financial/Calculator
            />
            <LegalContent title="Refund Policy" lastUpdated="September 1, 2025">
                <h3>1. Withdrawal Period</h3>
                <p>Students may withdraw within the first 14 days of the program start date for a partial refund, subject to administrative fees.</p>

                <h3>2. Non-refundable Fees</h3>
                <p>Application fees and registration deposits are non-refundable.</p>

                <h3>3. Exceptional Circumstances</h3>
                <p>Requests for refunds due to medical or exceptional personal circumstances are reviewed on a case-by-case basis by the administration.</p>
            </LegalContent>
        </>
    );
}
