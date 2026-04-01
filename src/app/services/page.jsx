import React from 'react';
import ServicesPage from '@/Components/pages/services';
import { generateCanonical, generateServiceSchema, generateBreadcrumbSchema, BASE_URL } from "@/lib/seo";
import SchemaComponent from '@/Components/seo/SchemaComponent';
import Link from 'next/link';

export const metadata = {
    title: 'Services | Education ERP Solutions',
    description: 'Explore comprehensive Education ERP services including Talent Management, Learning Solutions, Finance & HR, and Analytics for universities, colleges, and schools across Himachal Pradesh and India.',
    keywords: ['Education ERP services', 'University Management', 'Learning Management', 'Talent Management', 'School ERP', 'College ERP', 'Himachal Pradesh'],
    alternates: {
        canonical: generateCanonical('/services'),
    },
    openGraph: {
        title: 'Education ERP Services',
        description: 'Comprehensive Education ERP services for educational institutions.',
        type: 'website',
    },
};

const serviceSchema = generateServiceSchema({
    name: 'Education ERP Services',
    description: 'Comprehensive Education ERP services for universities, colleges, and schools.',
    category: 'Education Technology'
});

const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Services', url: generateCanonical('/services') }
]);

const Page = () => {
    return (
        <>
            <SchemaComponent data={serviceSchema} />
            <SchemaComponent data={breadcrumbSchema} />
            <ServicesPage />

            {/* CTA Section */}
            <section className="py-12 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Our Product Solutions</h2>
                    <p className="text-gray-600 mb-6">Learn more about our specialized solutions for educational institutions.</p>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <Link href="/products/talent-solutions" className="px-6 py-2 bg-sky-600 text-white font-semibold rounded-full hover:bg-sky-700 transition">
                            Talent Solutions
                        </Link>
                        <Link href="/products/learning-solutions" className="px-6 py-2 bg-sky-600 text-white font-semibold rounded-full hover:bg-sky-700 transition">
                            Learning Solutions
                        </Link>
                        <Link href="/products/analytics-solutions" className="px-6 py-2 bg-sky-600 text-white font-semibold rounded-full hover:bg-sky-700 transition">
                            Analytics
                        </Link>
                    </div>
                </div>
            </section>

            {/* Guides Section */}
            <section className="py-8 bg-white border-t">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-gray-600 mb-4">Explore our expert guides for institutional growth.</p>
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

export default Page;



