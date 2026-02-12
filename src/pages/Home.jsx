import React from 'react';
import Hero from '../components/Hero';
import ProgramFinder from '../components/ProgramFinder';
import FeaturedPrograms from '../components/FeaturedPrograms';
import WhyDBIMA from '../components/WhyDBIMA';
import WhatYouWillProduce from '../components/WhatYouWillProduce';
import Outcomes from '../components/Outcomes';
import StudentWork from '../components/StudentWork';
import Mentors from '../components/Mentors';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';
import Cohorts from '../components/Cohorts';
import Fees from '../components/Fees';
import Admissions from '../components/Admissions';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
    return (
        <>
            <Hero />
            <FeaturedPrograms />
            <WhyDBIMA />
            {/* <WhatYouWillProduce /> */}
            <Outcomes />
            <StudentWork />
            <Mentors />
            {/* <ProgramFinder /> */}
            <Testimonials />
            <HowItWorks />
            <Cohorts />
            {/* <Fees /> */}
            <Admissions />
            <FAQ />
            <FinalCTA />
        </>
    );
}
