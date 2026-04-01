import LearningContent from "./LearningContent";
import SchemaComponent from "@/Components/seo/SchemaComponent";
import { generateCanonical, BASE_URL } from "@/lib/seo";
import Link from "next/link";

export const metadata = {
    title: "Learning Solutions | LMS & Training Platform",
    description: "GapsToGrowth's Learning Solutions provides a comprehensive Learning Management System (LMS) for universities, schools, and corporate training. Features include mobile learning, course library, knowledge vault, and SCORM compliance for Himachal Pradesh institutions.",
    keywords: [
        "Learning Management System",
        "LMS Software",
        "Corporate Training Platform",
        "E-Learning Solution",
        "Mobile Learning App",
        "Course Library",
        "SCORM Compliant LMS",
        "Training Management",
        "Employee Training Software",
        "K-12 LMS"
    ],
    alternates: {
        canonical: generateCanonical('/products/learning-solutions'),
    },
    openGraph: {
        title: 'Learning Solutions | LMS & Training Platform',
        description: 'Comprehensive Learning Management System for universities, schools, and corporate training.',
        url: generateCanonical('/products/learning-solutions'),
        type: 'website',
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is GapsToGrowth Learning Solutions?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "GapsToGrowth Learning Solutions is a comprehensive Learning Management System (LMS) designed for universities, schools, and corporate training departments. It provides tools for course creation, delivery, tracking, and certification."
            }
        },
        {
            "@type": "Question",
            "name": "Is the LMS SCORM compliant?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our LMS is fully SCORM 1.2 and SCORM 2004 compliant, ensuring compatibility with industry-standard e-learning content from any provider."
            }
        },
        {
            "@type": "Question",
            "name": "Does it support mobile learning?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Learning Solutions includes dedicated iOS and Android apps, allowing learners to access courses, track progress, and complete training on any device, anywhere."
            }
        },
        {
            "@type": "Question",
            "name": "Who should use Learning Solutions?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ideal for universities delivering online courses, K-12 schools implementing digital learning, and corporate HR departments managing employee training and development programs."
            }
        },
        {
            "@type": "Question",
            "name": "Can we create custom courses?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, the platform includes a built-in course builder with multimedia support. You can create engaging courses using videos, quizzes, interactive content, and assessments."
            }
        },
        {
            "@type": "Question",
            "name": "Does it include a course library?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, access thousands of pre-built courses covering technical skills, soft skills, compliance training, and industry-specific content ready for immediate deployment."
            }
        }
    ]
};

const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "GapsToGrowth Learning Solutions",
    "description": "Comprehensive Learning Management System (LMS) for universities, schools, and corporate training.",
    "brand": {
        "@type": "Brand",
        "name": "GapsToGrowth HP"
    },
    "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "priceRange": "Contact for pricing",
        "availability": "https://schema.org/InStock"
    },
    "category": "Education Software"
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
            "name": "Learning Solutions",
            "item": generateCanonical('/products/learning-solutions')
        }
    ]
};

const LearningSolutionsPage = () => {
    return (
        <>
            <SchemaComponent data={faqSchema} />
            <SchemaComponent data={productSchema} />
            <SchemaComponent data={breadcrumbSchema} />
            <LearningContent />
            
            {/* Related Solutions Section */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore Related Solutions</h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <Link href="/products/talent-solutions" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                            <h3 className="font-semibold text-sky-900 mb-2">Talent Solutions</h3>
                            <p className="text-sm text-gray-600">AI-powered recruitment and HR management</p>
                        </Link>
                        <Link href="/products/analytics-solutions" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                            <h3 className="font-semibold text-sky-900 mb-2">Analytics Solutions</h3>
                            <p className="text-sm text-gray-600">Data insights and learning analytics</p>
                        </Link>
                        <Link href="/products/finance-hr" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                            <h3 className="font-semibold text-sky-900 mb-2">Finance & HR</h3>
                            <p className="text-sm text-gray-600">Payroll, leave management, and compliance</p>
                        </Link>
                    </div>
                    <div className="text-center">
                        <Link href="/contact" className="inline-block px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-full transition">
                            Request a Demo
                        </Link>
                    </div>
                </div>
            </section>

            {/* Guides Section */}
            <section className="py-8 bg-white border-t">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-gray-600 mb-4">Explore expert guides on maximizing learning outcomes.</p>
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
        </>
    );
};

export default LearningSolutionsPage;



