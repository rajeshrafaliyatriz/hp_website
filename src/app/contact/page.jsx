
import ContactHero from '@/Components/pages/contact/ContactHero';
import ContactForm from '@/Components/pages/contact/ContactForm';
import ContactMap from '@/Components/pages/contact/ContactMap';
import SchemaComponent from '@/Components/seo/SchemaComponent';
import { generateCanonical } from "@/lib/seo";
import Link from 'next/link';

export const metadata = {
    title: 'Contact Us | Get in Touch',
    description: 'Contact ScholarClone HP for inquiries about our Education ERP solutions. Serving universities, colleges, and schools across Himachal Pradesh and India. Get a free demo or consultation today.',
    keywords: ['Contact ScholarClone', 'Education ERP Support', 'University Management', 'Himachal Pradesh', 'Demo Request', 'Sales Inquiry'],
    alternates: {
        canonical: generateCanonical('/contact'),
    },
    openGraph: {
        title: 'Contact Us - Get in Touch',
        description: 'Get in touch with our team to learn how we can help your institution.',
        images: ['/assets/Logo.png'],
        type: 'website',
    },
};

const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact ScholarClone HP",
    "description": "Contact page for ScholarClone HP - AI-powered Education ERP solutions.",
    "url": generateCanonical('/contact'),
    "mainEntity": {
        "@type": "Organization",
        "name": "ScholarClone HP",
        "areaServed": ["Himachal Pradesh", "India"]
    }
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <SchemaComponent data={contactSchema} />
            {/* Hero Section */}
            <h1 className="sr-only">Contact Scholar Clone</h1>
            <ContactHero />

            <div className="max-w-4xl mx-auto px-4 py-8 text-center">
                <p className="text-lg text-black leading-relaxed">
                    We are here to help you transform your educational institution. Whether you have questions about our ERP features, need a customized demo, or require technical support, our team is ready to assist you. Reach out to us via the form below, email, or visit our office. Let's build the future of education together.
                </p>
            </div>

            <ContactForm />

            <ContactMap />

            {/* Quick Links Section */}
            <section className="py-12 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/products/talent-solutions" className="text-sky-600 hover:text-sky-800 font-medium">
                            Talent Solutions
                        </Link>
                        <span className="text-gray-400">|</span>
                        <Link href="/products/learning-solutions" className="text-sky-600 hover:text-sky-800 font-medium">
                            Learning Solutions
                        </Link>
                        <span className="text-gray-400">|</span>
                        <Link href="/faq" className="text-sky-600 hover:text-sky-800 font-medium">
                            FAQ
                        </Link>
                        <span className="text-gray-400">|</span>
                        <Link href="/" className="text-sky-600 hover:text-sky-800 font-medium">
                            Home
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}




