import React from "react";
import Link from "next/link";

function SeoWhyChoose() {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-20 bg-sky-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-teal-500/20 text-teal-300 text-sm font-semibold rounded-full mb-4">
            Why Choose ScholarClone HP
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Trusted by Institutions Across Himachal Pradesh
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">AI-Powered Innovation</h3>
            <p className="text-sky-200 text-sm">
              Cutting-edge artificial intelligence for predictive analytics, personalized learning paths, and smart automation.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Unified Platform</h3>
            <p className="text-sky-200 text-sm">
              One login for all academic and administrative needs—LMS, HRMS, Finance, and more seamlessly integrated.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Local HP Focus</h3>
            <p className="text-sky-200 text-sm">
              Tailored for Himachal Pradesh institutions with regional compliance, local support, and HP-specific features.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Cloud-Native Scale</h3>
            <p className="text-sky-200 text-sm">
              Scalable cloud architecture that grows with your institution—secure, reliable, and always accessible.
            </p>
          </div>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link 
            href="/contact" 
            className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full transition"
          >
            Schedule a Demo
          </Link>
          <Link 
            href="/about" 
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition border border-white/30"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SeoWhyChoose;
