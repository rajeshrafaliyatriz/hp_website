import AnalyticsContent from "./AnalyticsContent";
import SchemaComponent from "@/Components/seo/SchemaComponent";
import { generateCanonical, BASE_URL } from "@/lib/seo";
import Link from "next/link";

export const metadata = {
    title: "Analytics Solutions | Data Analytics & Reporting",
    description: "ScholarClone Analytics Solutions provide data-driven insights for universities, schools, and corporates. Features include Team Analytics, Learning Analytics, custom dashboards, and real-time reporting for better decision-making in Himachal Pradesh.",
    keywords: [
        "Analytics Dashboard",
        "Data Analytics",
        "Business Intelligence",
        "HR Analytics",
        "Learning Analytics",
        "Predictive Analytics",
        "Data Visualization",
        "Real-time Reporting",
        "KPI Dashboard",
        "Educational Analytics"
    ],
    alternates: {
        canonical: generateCanonical('/products/analytics-solutions'),
    },
    openGraph: {
        title: 'Analytics Solutions | Data Analytics & Reporting',
        description: 'Data-driven insights and analytics for better institutional decisions.',
        url: generateCanonical('/products/analytics-solutions'),
        type: 'website',
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What are Analytics Solutions?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Analytics Solutions provides comprehensive data analytics and business intelligence for educational institutions. It transforms raw data into actionable insights through custom dashboards, reports, and predictive analytics."
            }
        },
        {
            "@type": "Question",
            "name": "What is Team Analytics?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Team Analytics provides insights into workforce performance, productivity metrics, attendance patterns, skill utilization, and engagement levels. HR teams can identify trends, spot issues, and make data-driven decisions."
            }
        },
        {
            "@type": "Question",
            "name": "What is Learning Analytics?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Learning Analytics tracks learner progress, course completion rates, assessment scores, knowledge retention, and training ROI. Educators can identify struggling students and optimize course content."
            }
        },
        {
            "@type": "Question",
            "name": "Can we create custom dashboards?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, the platform includes a drag-and-drop dashboard builder that lets you create custom visualizations with the metrics that matter most to your institution. Export reports in multiple formats."
            }
        },
        {
            "@type": "Question",
            "name": "Is the data available in real-time?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, most metrics update in real-time or near real-time. Historical data can be analyzed, and automated alerts can be set for key performance indicators."
            }
        },
        {
            "@type": "Question",
            "name": "Does it support predictive analytics?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our AI-powered analytics can predict trends like employee attrition risk, student dropout probability, training effectiveness, and workforce planning scenarios."
            }
        }
    ]
};

const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ScholarClone Analytics Solutions",
    "description": "Data analytics and business intelligence platform for education and enterprise.",
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
    "category": "Business Intelligence"
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
            "name": "Analytics Solutions",
            "item": generateCanonical('/products/analytics-solutions')
        }
    ]
};

const AnalyticsPage = () => {
    return (
        <>
            <SchemaComponent data={faqSchema} />
            <SchemaComponent data={productSchema} />
            <SchemaComponent data={breadcrumbSchema} />
            <AnalyticsContent />
            
            {/* Related Solutions Section */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore Related Solutions</h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <Link href="/products/learning-solutions" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                            <h3 className="font-semibold text-sky-900 mb-2">Learning Solutions</h3>
                            <p className="text-sm text-gray-600">Learning analytics and LMS insights</p>
                        </Link>
                        <Link href="/products/talent-solutions" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                            <h3 className="font-semibold text-sky-900 mb-2">Talent Solutions</h3>
                            <p className="text-sm text-gray-600">Team analytics and workforce insights</p>
                        </Link>
                        <Link href="/products/integration" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                            <h3 className="font-semibold text-sky-900 mb-2">Integration</h3>
                            <p className="text-sm text-gray-600">Data integration services</p>
                        </Link>
                    </div>
                    <div className="text-center">
                        <Link href="/contact" className="inline-block px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-full transition">
                            Explore Analytics Today
                        </Link>
                    </div>
                </div>
            </section>

            {/* Guides Section */}
            <section className="py-8 bg-white border-t">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-gray-600 mb-4">Explore our expert guides on data-driven education.</p>
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

export default AnalyticsPage;



