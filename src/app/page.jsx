import React from 'react';
import Client from '@/Components/pages/home/ClientSection';
import { generateMetadata, generateFaqSchema, generateWebSiteSchema, BASE_URL } from '@/lib/seo';
import SchemaComponent from '@/Components/seo/SchemaComponent';
import Scroll from '@/Components/layout/scroll-to-top/ScrollToTop';
import ElevateWorkforce from '@/Components/pages/home/ElevateWorkforce';
import Image from '@/Components/pages/home/Image';
import ExpertiseSolutions from '@/Components/pages/home/ExpertiseSolutions';
import BenefitsSection from '@/Components/pages/home/BenefitsSection';
import TestimonialSection from '@/Components/pages/home/TestimonialSection';
import LandingSection from '@/Components/pages/home/LandingSection';
import ScrollAnimationWrapper from '@/Components/ui/animations/ScrollAnimationWrapper';
import SeoWhatIs from '@/Components/pages/home/SeoWhatIs';
import SeoWhoFor from '@/Components/pages/home/SeoWhoFor';
import SeoWhyChoose from '@/Components/pages/home/SeoWhyChoose';
import SeoFaqSection from '@/Components/pages/home/SeoFaqSection';
import Link from 'next/link';

export const metadata = generateMetadata({
    title: 'AI-Powered University Management System & Education ERP',
    description: 'ScholarClone HP is a leading AI-powered University Management System (ERP) for universities, colleges, and K-12 schools in Himachal Pradesh. Comprehensive solutions for Talent Management, Learning & Development, Finance & HR.',
    keywords: [
        'University Management System',
        'Education ERP',
        'School ERP',
        'College ERP',
        'AI Education Platform',
        'Talent Management System',
        'Learning Management System',
        'LMS',
        'HRIS',
        'ERP for Education',
        'Campus Management',
        'Himachal Pradesh'
    ],
    options: {
        canonical: '/',
        images: ['/assets/og-image.png'],
    }
});

const homepageFaqs = [
    {
        question: 'What is ScholarClone HP?',
        answer: 'ScholarClone HP is a comprehensive AI-powered University Management System (ERP) designed for universities, colleges, and K-12 schools. It provides integrated solutions for Talent Management, Learning & Development, Finance & HR, System Integration, and Analytics, specifically tailored for educational institutions in Himachal Pradesh and across India.'
    },
    {
        question: 'Who uses ScholarClone HP?',
        answer: 'ScholarClone HP serves universities, colleges, K-12 schools, and corporate training departments. Our clients include Higher Education Institutions (HEIs) needing accreditation management, schools requiring student information systems, and corporations seeking workforce development solutions.'
    },
    {
        question: 'What are the key features of ScholarClone?',
        answer: 'Key features include AI-powered Talent Management, Learning Management System (LMS), Finance & HR automation, System Integration capabilities, Analytics dashboards, Compliance management (NAAC/NIRF), and mobile learning options. The platform supports outcome-based education (OBE) and choice-based credit systems.'
    },
    {
        question: 'Is ScholarClone suitable for Himachal Pradesh institutions?',
        answer: 'Yes, ScholarClone HP is specifically designed for institutions in Himachal Pradesh with local support, compliance with regional regulations, and understanding of local educational frameworks. Our solutions are tailored to meet the unique needs of HP-based universities and schools.'
    },
    {
        question: 'How does ScholarClone help with NAAC accreditation?',
        answer: 'ScholarClone includes dedicated modules for NAAC/NIRF accreditation preparation, including data collection, report generation, and compliance tracking. The system maintains all necessary documentation and metrics required for accreditation processes.'
    },
    {
        question: 'Can ScholarClone integrate with existing systems?',
        answer: 'Yes, ScholarClone offers robust Integration services including API connections, biometric device integration, payment gateway integration, and compatibility with existing ERPs. Our HRIT Solutions ensure seamless data flow across all institutional systems.'
    }
];

const faqSchema = generateFaqSchema(homepageFaqs);
const websiteSchema = generateWebSiteSchema();

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL
        }
    ]
};

function Home() {
    return (
        <>
            <SchemaComponent data={websiteSchema} />
            <SchemaComponent data={faqSchema} />
            <SchemaComponent data={breadcrumbSchema} />
            <div className="flex flex-col w-full max-w-[1920px] mx-auto overflow-x-hidden bg-white">

                {/* Above-the-fold: No animation delay for LCP */}
                <ElevateWorkforce />
                <Image />
                
                {/* Below-the-fold: Lazy loaded sections */}
                <ScrollAnimationWrapper effect="fadeUp" delay={0.3}><SeoWhatIs /></ScrollAnimationWrapper>
                <ScrollAnimationWrapper effect="fadeRight" delay={0.5}><ExpertiseSolutions /></ScrollAnimationWrapper>
                <ScrollAnimationWrapper effect="fadeUp" delay={0.3}><SeoWhoFor /></ScrollAnimationWrapper>
                <ScrollAnimationWrapper effect="zoomIn" delay={0.6}><BenefitsSection /></ScrollAnimationWrapper>
                <ScrollAnimationWrapper effect="fadeUp" delay={0.3}><SeoWhyChoose /></ScrollAnimationWrapper>
                <ScrollAnimationWrapper effect="rotateIn" delay={0.7}><TestimonialSection /></ScrollAnimationWrapper>
                <ScrollAnimationWrapper effect="fadeUp" delay={0.8}><Client /></ScrollAnimationWrapper>
                <ScrollAnimationWrapper effect="zoomIn" delay={0.9}><LandingSection /></ScrollAnimationWrapper>
                <ScrollAnimationWrapper effect="fadeUp" delay={0.3}><SeoFaqSection /></ScrollAnimationWrapper>

                {/* FAQ CTA Section */}
                <section className="py-16 bg-slate-50">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Have More Questions?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Find answers to more frequently asked questions about our <Link href="/services" className="text-sky-600 hover:text-sky-800 underline">Education ERP services</Link>, or learn more about <Link href="/about" className="text-sky-600 hover:text-sky-800 underline">our company</Link>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Link 
                                href="/faq" 
                                className="inline-block px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-full transition"
                            >
                                View All FAQs
                            </Link>
                            <Link 
                                href="/contact" 
                                className="inline-block px-8 py-3 bg-white hover:bg-gray-50 text-sky-600 font-semibold rounded-full transition border border-sky-600"
                            >
                                Contact Our Team
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Guides Section */}
                <section className="py-12 bg-white border-t">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Explore Our Guides</h2>
                        <p className="text-gray-600 mb-6">Expert insights on education technology and institutional growth.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/guides/learning-analytics-student-outcomes" className="text-sky-600 hover:text-sky-800 font-medium">
                                Learning Analytics Guide
                            </Link>
                            <span className="text-gray-400">|</span>
                            <Link href="/guides/talent-management-skill-development-educational-institutions" className="text-sky-600 hover:text-sky-800 font-medium">
                                Talent Management Guide
                            </Link>
                        </div>
                    </div>
                </section>

                <Scroll />
            </div>
        </>
    );
}

export default Home;




