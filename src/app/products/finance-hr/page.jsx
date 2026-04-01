import FinanceContent from "./FinanceContent";
import SchemaComponent from "@/Components/seo/SchemaComponent";
import { generateCanonical, BASE_URL } from "@/lib/seo";
import Link from "next/link";

export const metadata = {
    title: "Finance & HR Solutions | Payroll & HR Software",
    description: "GapsToGrowth's Finance & HR Solutions automate payroll, leave management, time & attendance, and compliance for universities, schools, and corporates in Himachal Pradesh. Streamline your financial and HR operations with our comprehensive ERP.",
    keywords: [
        "Payroll Management Software",
        "HR Software",
        "Leave Management System",
        "Time and Attendance",
        "HRIS Software",
        "Payroll Automation",
        "Employee Self Service",
        "Compliance Management",
        "Statutory Compliance",
        "Finance HR Software"
    ],
    alternates: {
        canonical: generateCanonical('/products/finance-hr'),
    },
    openGraph: {
        title: 'Finance & HR Solutions | Payroll & HR Software',
        description: 'Automate payroll, leave management, and compliance for your institution.',
        url: generateCanonical('/products/finance-hr'),
        type: 'website',
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is GapsToGrowth Finance & HR Solutions?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Finance & HR Solutions is a comprehensive platform that combines financial management and human resource functions. It includes payroll processing, leave management, time tracking, and compliance management in one unified system."
            }
        },
        {
            "@type": "Question",
            "name": "Does it handle payroll automation?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, the system fully automates payroll processing including salary calculations, tax deductions (TDS, PF, ESI), overtime processing, and generates payslips automatically for all employees."
            }
        },
        {
            "@type": "Question",
            "name": "Can employees self-service?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, employees can access self-service portals to view payslips, apply for leave, track attendance, update personal information, and download tax documents."
            }
        },
        {
            "@type": "Question",
            "name": "Is it compliant with Indian regulations?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Finance & HR Solutions is fully compliant with Indian statutory requirements including EPF, ESI, TDS, Professional Tax, and state labor laws. Regular updates ensure compliance with regulatory changes."
            }
        },
        {
            "@type": "Question",
            "name": "Who should use Finance & HR?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ideal for universities managing faculty payroll, schools handling staff administration, and corporates needing automated HR processes. Any organization with 50+ employees will see significant efficiency gains."
            }
        },
        {
            "@type": "Question",
            "name": "Does it integrate with attendance systems?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, the platform integrates with biometric devices, RFID systems, and geo-fenced mobile attendance, ensuring accurate time tracking and seamless payroll processing."
            }
        }
    ]
};

const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "GapsToGrowth Finance & HR Solutions",
    "description": "Integrated finance and HR management platform with payroll automation and compliance.",
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
            "name": "Finance & HR",
            "item": generateCanonical('/products/finance-hr')
        }
    ]
};

const FinanceHrPage = () => {
    return (
        <>
            <SchemaComponent data={faqSchema} />
            <SchemaComponent data={productSchema} />
            <SchemaComponent data={breadcrumbSchema} />
            <FinanceContent />
            
            {/* Related Solutions Section */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore Related Solutions</h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <Link href="/products/talent-solutions" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                            <h3 className="font-semibold text-sky-900 mb-2">Talent Solutions</h3>
                            <p className="text-sm text-gray-600">AI-powered recruitment and HR management</p>
                        </Link>
                        <Link href="/products/integration" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                            <h3 className="font-semibold text-sky-900 mb-2">Integration</h3>
                            <p className="text-sm text-gray-600">API connections and system integration</p>
                        </Link>
                        <Link href="/products/learning-solutions" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                            <h3 className="font-semibold text-sky-900 mb-2">Learning Solutions</h3>
                            <p className="text-sm text-gray-600">LMS and training management</p>
                        </Link>
                    </div>
                    <div className="text-center">
                        <Link href="/contact" className="inline-block px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-full transition">
                            Talk to an Expert
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FinanceHrPage;



