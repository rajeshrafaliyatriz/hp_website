"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "What is GapsToGrowth HP?",
    answer: "GapsToGrowth HP is a comprehensive AI-powered University Management System (ERP) designed for universities, colleges, and K-12 schools. It provides integrated solutions for Talent Management, Learning & Development, Finance & HR, System Integration, and Analytics, specifically tailored for educational institutions in Himachal Pradesh and across India."
  },
  {
    question: "Who uses GapsToGrowth HP?",
    answer: "GapsToGrowth HP serves universities, colleges, K-12 schools, and corporate training departments. Our clients include Higher Education Institutions (HEIs) needing accreditation management, schools requiring student information systems, and corporations seeking workforce development solutions."
  },
  {
    question: "What are the key features of GapsToGrowth?",
    answer: "Key features include AI-powered Talent Management, Learning Management System (LMS), Finance & HR automation, System Integration capabilities, Analytics dashboards, Compliance management (NAAC/NIRF), and mobile learning options. The platform supports outcome-based education (OBE) and choice-based credit systems."
  },
  {
    question: "Is GapsToGrowth suitable for Himachal Pradesh institutions?",
    answer: "Yes, GapsToGrowth HP is specifically designed for institutions in Himachal Pradesh with local support, compliance with regional regulations, and understanding of local educational frameworks. Our solutions are tailored to meet the unique needs of HP-based universities and schools."
  },
  {
    question: "How does GapsToGrowth help with NAAC accreditation?",
    answer: "GapsToGrowth includes dedicated modules for NAAC/NIRF accreditation preparation, including data collection, report generation, and compliance tracking. The system maintains all necessary documentation and metrics required for accreditation processes."
  },
  {
    question: "Can GapsToGrowth integrate with existing systems?",
    answer: "Yes, GapsToGrowth offers robust Integration services including API connections, biometric device integration, payment gateway integration, and compatibility with existing ERPs. Our HRIT Solutions ensure seamless data flow across all institutional systems."
  }
];

function SeoFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 lg:py-20 px-6 lg:px-20 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-sky-100 text-sky-900 text-sm font-semibold rounded-full mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-black">
            Common Questions About GapsToGrowth HP
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Find answers to the most frequently asked questions about our Education ERP solutions.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition"
                suppressHydrationWarning
              >
                <span className="font-semibold text-lg text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className={`text-sky-600 text-2xl font-light transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-full transition"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}

export default SeoFaqSection;
