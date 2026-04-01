import IntegrationContent from "./IntegrationContent";
import SchemaComponent from "@/Components/seo/SchemaComponent";
import { generateCanonical, BASE_URL } from "@/lib/seo";
import Link from "next/link";

export const metadata = {
    title: "Integration Solutions | API & System Integration",
    description: "GapsToGrowth Integration Solutions provide seamless API connections, HRIT services, and system integration for universities, schools, and corporates. Connect your existing systems with our ERP for unified data flow and operational efficiency.",
    keywords: [
        "System Integration",
        "API Integration",
        "HRIT Solutions",
        "ERP Integration",
        "Data Integration",
        "Biometric Integration",
        "Payment Gateway Integration",
        "Software Integration Services",
        "API Management",
        "Third Party Integration"
    ],
    alternates: {
        canonical: generateCanonical('/products/integration'),
    },
    openGraph: {
        title: 'Integration Solutions | API & System Integration',
        description: 'Seamless API connections and system integration for your existing systems.',
        url: generateCanonical('/products/integration'),
        type: 'website',
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What are Integration Solutions?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Integration Solutions provides seamless connectivity between GapsToGrowth and your existing systems. This includes APIs, middleware, and custom connectors that enable data flow between different software applications used by your institution."
            }
        },
        {
            "@type": "Question",
            "name": "What systems can integrate with GapsToGrowth?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "GapsToGrowth integrates with biometric attendance devices, payment gateways, existing ERPs, student information systems, library management systems, transport management, and more. We support both REST and SOAP APIs."
            }
        },
        {
            "@type": "Question",
            "name": "What is HRIT Services?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "HRIT (HR Information Technology) services provide dedicated support for HR technology infrastructure. This includes system configuration, data migration, integration management, and ongoing technical support for HR systems."
            }
        },
        {
            "@type": "Question",
            "name": "Do you support biometric integration?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we integrate with all major biometric attendance devices including fingerprint scanners, facial recognition systems, and RFID card readers from leading manufacturers."
            }
        },
        {
            "@type": "Question",
            "name": "How long does integration take?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Typical integrations range from 2-6 weeks depending on complexity. Simple API connections can be completed in days, while comprehensive system integrations may take several weeks. Our team provides timeline estimates during consultation."
            }
        },
        {
            "@type": "Question",
            "name": "Is there ongoing support for integrations?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide dedicated HRIT support teams that handle integration maintenance, monitor data flows, troubleshoot issues, and implement updates as your systems evolve."
            }
        }
    ]
};

const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "GapsToGrowth Integration Solutions",
    "description": "API and system integration services for education and enterprise software.",
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
    "category": "IT Services"
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
            "name": "Integration",
            "item": generateCanonical('/products/integration')
        }
    ]
};

const IntegrationPage = () => {
    return (
        <>
            <SchemaComponent data={faqSchema} />
            <SchemaComponent data={productSchema} />
            <SchemaComponent data={breadcrumbSchema} />
            <IntegrationContent />
            
            {/* Related Solutions Section */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore Related Solutions</h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <Link href="/products/talent-solutions" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                            <h3 className="font-semibold text-sky-900 mb-2">Talent Solutions</h3>
                            <p className="text-sm text-gray-600">HRIT services and workforce management</p>
                        </Link>
                        <Link href="/products/finance-hr" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                            <h3 className="font-semibold text-sky-900 mb-2">Finance & HR</h3>
                            <p className="text-sm text-gray-600">Payroll and HR automation</p>
                        </Link>
                        <Link href="/products/analytics-solutions" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                            <h3 className="font-semibold text-sky-900 mb-2">Analytics Solutions</h3>
                            <p className="text-sm text-gray-600">Data insights and reporting</p>
                        </Link>
                    </div>
                    <div className="text-center">
                        <Link href="/contact" className="inline-block px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-full transition">
                            Discuss Your Needs
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IntegrationPage;



