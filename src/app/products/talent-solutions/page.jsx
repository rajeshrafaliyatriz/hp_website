import TalentContent from "./TalentContent";
import SchemaComponent from "@/Components/seo/SchemaComponent";
import { generateCanonical, BASE_URL } from "@/lib/seo";
import Link from "next/link";

export const metadata = {
    title: "Talent Solutions | AI-Powered HR & Recruitment Software",
    description: "Transform your workforce with ScholarClone's AI-driven Talent Solutions. Features Smart Hiring Engine, Competency Matrix, Skill Management, and Performance Enablement for universities, schools, and corporates in Himachal Pradesh.",
    keywords: [
        "Talent Management System",
        "AI Recruitment Software", 
        "HRMS Software",
        "HRMS Himachal Pradesh",
        "Skill Management Software",
        "Competency Mapping Tool",
        "Performance Management System",
        "Employee Lifecycle Management",
        "HR Automation",
        "Campus Recruitment"
    ],
    alternates: {
        canonical: generateCanonical('/products/talent-solutions'),
    },
    openGraph: {
        title: 'Talent Solutions | AI-Powered HR & Recruitment',
        description: 'Transform your workforce with AI-driven Talent Solutions. Smart Hiring, Competency Matrix, Skill Management.',
        url: generateCanonical('/products/talent-solutions'),
        type: 'website',
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is ScholarClone Talent Solutions?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "ScholarClone Talent Solutions is a comprehensive suite of tools designed to manage the entire employee lifecycle, from AI-driven recruitment to performance enablement and succession planning. It includes modules for Smart Hiring, Competency Matrix, Skill Management, and Career Pathing."
            }
        },
        {
            "@type": "Question",
            "name": "How does the Smart Hiring Engine work?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Smart Hiring Engine uses AI to parse resumes, rank candidates based on job descriptions, and automate interview scheduling. It significantly reduces time-to-hire while improving candidate quality through data-backed insights."
            }
        },
        {
            "@type": "Question",
            "name": "Can I track employee skills with this platform?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our Skill Management and Competency Matrix modules allow you to map, track, and validate organizational skills. Identify gaps for targeted training and make data-driven workforce planning decisions."
            }
        },
        {
            "@type": "Question",
            "name": "Who should use Talent Solutions?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Talent Solutions is ideal for universities managing faculty and staff, K-12 schools with teaching and administrative personnel, and corporate HR departments. Any organization looking to streamline recruitment and performance management will benefit."
            }
        },
        {
            "@type": "Question",
            "name": "Does it support campus recruitment?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Talent Solutions includes specialized features for campus recruitment including bulk applicant tracking, campus partner management, and automated candidate ranking for fresh graduates."
            }
        },
        {
            "@type": "Question",
            "name": "Is the platform suitable for Himachal Pradesh institutions?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. ScholarClone HP is specifically designed for institutions in Himachal Pradesh with support for local compliance requirements, regional regulations, and dedicated local support teams."
            }
        }
    ]
};

const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ScholarClone Talent Solutions",
    "description": "AI-powered talent management suite for universities, schools, and corporate HR departments.",
    "brand": {
        "@type": "Brand",
        "name": "ScholarClone HP"
    },
    "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "priceRange": "Contact for pricing",
        "availability": "https://schema.org/InStock"
    },
    "category": "Enterprise Software"
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Talent Solutions",
            "item": generateCanonical('/products/talent-solutions')
        }
    ]
};

const TalentSolutionsPage = () => {
    return (
        <>
            <SchemaComponent data={faqSchema} />
            <SchemaComponent data={productSchema} />
            <SchemaComponent data={breadcrumbSchema} />
            <TalentContent />
            
            {/* Related Solutions Section */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore Related Solutions</h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <Link href="/products/learning-solutions" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                            <h3 className="font-semibold text-sky-900 mb-2">Learning Solutions</h3>
                            <p className="text-sm text-gray-600">Comprehensive LMS for training and development</p>
                        </Link>
                        <Link href="/products/analytics-solutions" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                            <h3 className="font-semibold text-sky-900 mb-2">Analytics Solutions</h3>
                            <p className="text-sm text-gray-600">Data insights and learning analytics</p>
                        </Link>
                        <Link href="/contact" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                            <h3 className="font-semibold text-sky-900 mb-2">Contact Us</h3>
                            <p className="text-sm text-gray-600">Get a custom quote for your institution</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Guides Section */}
            <section className="py-8 bg-white border-t">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-gray-600 mb-4">Explore our expert guides on talent management and workforce development.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/guides/talent-management-skill-development-educational-institutions" className="text-sky-600 hover:text-sky-800 font-medium">
                            Talent Management Guide
                        </Link>
                        <span className="text-gray-400">|</span>
                        <Link href="/guides/learning-analytics-student-outcomes" className="text-sky-600 hover:text-sky-800 font-medium">
                            Learning Analytics Guide
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TalentSolutionsPage;



