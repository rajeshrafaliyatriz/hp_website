"use client";
import React, { useState } from "react";
import Link from "next/link";
import SchemaComponent from "@/Components/seo/SchemaComponent";
import { generateCanonical } from "@/lib/seo";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI-powered University Management System?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI-powered University Management System is software that uses artificial intelligence to automate and optimize university operations including admissions, student lifecycle management, faculty scheduling, and accreditation tracking."
      }
    },
    {
      "@type": "Question",
      name: "How does ScholarClone help educational institutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ScholarClone provides a unified ERP platform that integrates Talent Management, Learning & Development, Finance & HR, and Analytics. It helps institutions automate processes, improve efficiency, and make data-driven decisions."
      }
    },
    {
      "@type": "Question",
      name: "Who should use Talent Solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Talent Solutions is ideal for universities managing faculty, schools with teaching staff, and corporate HR departments. Any organization seeking to streamline recruitment, performance management, and employee development benefits from this module."
      }
    },
    {
      "@type": "Question",
      name: "What is Learning Analytics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Learning Analytics is the measurement and analysis of learner data, including course completion rates, assessment scores, and knowledge retention. It helps educators identify struggling students and optimize course content for better learning outcomes."
      }
    },
    {
      "@type": "Question",
      name: "How does system integration work with ScholarClone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ScholarClone offers REST and SOAP APIs that connect with existing systems like biometric attendance devices, payment gateways, library management systems, and other ERPs. Integration typically takes 2-6 weeks depending on complexity."
      }
    },
    {
      "@type": "Question",
      name: "How do Finance and HR modules help institutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Finance & HR modules automate payroll processing, leave management, time tracking, and compliance reporting. They reduce manual work, ensure statutory compliance (EPF, ESI, TDS), and provide accurate financial data for decision-making."
      }
    },
    {
      "@type": "Question",
      name: "Is ScholarClone suitable for K-12 schools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ScholarClone offers K-12 specific features including student information systems, automated timetable generation, parent-teacher communication, attendance tracking, transport management, and CCE compliance support."
      }
    },
    {
      "@type": "Question",
      name: "Does ScholarClone support NAAC accreditation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ScholarClone includes dedicated modules for NAAC and NIRF accreditation preparation, including data collection, report generation, and compliance tracking. The system maintains all documentation required for accreditation processes."
      }
    },
    {
      "@type": "Question",
      name: "What is the pricing model for ScholarClone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ScholarClone offers customized pricing based on institution size, number of users, and selected modules. Contact the sales team for a custom quote tailored to your specific requirements."
      }
    },
    {
      "@type": "Question",
      name: "Do you offer a free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ScholarClone offers demonstrations and pilot programs for interested institutions. Contact the sales team to schedule a personalized demo and discuss your institution's needs."
      }
    }
  ]
};

const faqData = [
  {
    question: "What is an AI-powered University Management System?",
    answer: "An AI-powered University Management System is software that uses artificial intelligence to automate and optimize university operations including admissions, student lifecycle management, faculty scheduling, and accreditation tracking."
  },
  {
    question: "How does ScholarClone help educational institutions?",
    answer: "ScholarClone provides a unified ERP platform that integrates Talent Management, Learning & Development, Finance & HR, and Analytics. It helps institutions automate processes, improve efficiency, and make data-driven decisions."
  },
  {
    question: "Who should use Talent Solutions?",
    answer: "Talent Solutions is ideal for universities managing faculty, schools with teaching staff, and corporate HR departments. Any organization seeking to streamline recruitment, performance management, and employee development benefits from this module."
  },
  {
    question: "What is Learning Analytics?",
    answer: "Learning Analytics is the measurement and analysis of learner data, including course completion rates, assessment scores, and knowledge retention. It helps educators identify struggling students and optimize course content for better learning outcomes."
  },
  {
    question: "How does system integration work with ScholarClone?",
    answer: "ScholarClone offers REST and SOAP APIs that connect with existing systems like biometric attendance devices, payment gateways, library management systems, and other ERPs. Integration typically takes 2-6 weeks depending on complexity."
  },
  {
    question: "How do Finance and HR modules help institutions?",
    answer: "Finance & HR modules automate payroll processing, leave management, time tracking, and compliance reporting. They reduce manual work, ensure statutory compliance (EPF, ESI, TDS), and provide accurate financial data for decision-making."
  },
  {
    question: "Is ScholarClone suitable for K-12 schools?",
    answer: "Yes, ScholarClone offers K-12 specific features including student information systems, automated timetable generation, parent-teacher communication, attendance tracking, transport management, and CCE compliance support."
  },
  {
    question: "Does ScholarClone support NAAC accreditation?",
    answer: "Yes, ScholarClone includes dedicated modules for NAAC and NIRF accreditation preparation, including data collection, report generation, and compliance tracking. The system maintains all documentation required for accreditation processes."
  },
  {
    question: "What is the pricing model for ScholarClone?",
    answer: "ScholarClone offers customized pricing based on institution size, number of users, and selected modules. Contact the sales team for a custom quote tailored to your specific requirements."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, ScholarClone offers demonstrations and pilot programs for interested institutions. Contact the sales team to schedule a personalized demo and discuss your institution's needs."
  }
];

function ClientFaqPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <SchemaComponent data={faqSchema} />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-sky-900 py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-sky-200 max-w-2xl mx-auto">
              Find answers to common questions about ScholarClone HP's Education ERP solutions.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition"
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-8">
              Our team is here to help you find the right solution for your institution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-full transition"
              >
                Contact Our Team
              </Link>
              <Link 
                href="/products/talent-solutions" 
                className="px-8 py-3 bg-white hover:bg-gray-50 text-sky-600 font-semibold rounded-full border border-sky-600 transition"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ClientFaqPage;