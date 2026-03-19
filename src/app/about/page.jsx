
import AboutHero from "@/Components/pages/about/AboutHero";
import WhatWeDo from "@/Components/pages/about/WhatWeDo";
import SuccessJourney from '@/Components/pages/about/SuccessJourney';
import SchemaComponent from '@/Components/seo/SchemaComponent';
import { BASE_URL, generateCanonical } from "@/lib/seo";
import Link from "next/link";

export const metadata = {
  title: "About Us | Leading Education ERP Company",
  description: "Learn about ScholarClone HP, a leading AI-powered Education ERP company serving universities, colleges, and schools in Himachal Pradesh and across India. Discover our mission to transform education through innovative technology.",
  keywords: ["About ScholarClone", "Education ERP Company", "University Management", "EdTech Company", "Himachal Pradesh", "School ERP India", "AI Education"],
  alternates: {
    canonical: generateCanonical('/about'),
  },
  openGraph: {
    title: "About Us - Leading Education ERP Company",
    description: "Transforming education through AI-powered ERP solutions for institutions across Himachal Pradesh and India.",
    images: ['/assets/hero_aboutus.jpg'],
    type: 'website',
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About ScholarClone HP",
  "description": "ScholarClone HP is a leading AI-powered Education ERP company serving institutions across Himachal Pradesh and India.",
  "url": generateCanonical('/about'),
  "mainEntity": {
    "@type": "Organization",
    "name": "ScholarClone HP",
    "url": BASE_URL,
    "areaServed": ["Himachal Pradesh", "India"],
    "serviceType": ["Education ERP", "University Management System", "School ERP", "LMS"]
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <SchemaComponent data={aboutSchema} />
      <AboutHero />
      <WhatWeDo />
      <SuccessJourney />
      
      {/* CTA Section */}
      <section className="py-12 bg-sky-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Institution?</h2>
          <p className="text-sky-100 mb-6">Explore our comprehensive ERP solutions designed for educational institutions.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link href="/products/talent-solutions" className="px-6 py-2 bg-white text-sky-600 font-semibold rounded-full hover:bg-sky-50 transition">
              Talent Solutions
            </Link>
            <Link href="/products/learning-solutions" className="px-6 py-2 bg-white text-sky-600 font-semibold rounded-full hover:bg-sky-50 transition">
              Learning Solutions
            </Link>
            <Link href="/faq" className="px-6 py-2 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition">
              FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600 mb-4">Explore expert guides on education technology and institutional growth.</p>
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
    </main>
  );
}




