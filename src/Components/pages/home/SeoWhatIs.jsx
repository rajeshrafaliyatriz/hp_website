import React from "react";
import Link from "next/link";

function SeoWhatIs() {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-20 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-sky-100 text-sky-900 text-sm font-semibold rounded-full mb-4">
            About GapsToGrowth HP
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-black">
            What is GapsToGrowth HP?
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
            <strong className="text-sky-900">GapsToGrowth HP</strong> provides a comprehensive
            <Link href="/products/talent-solutions" className="text-sky-600 hover:text-sky-800 underline"> University Management System (ERP)</Link> for
            educational institutions in <strong>Himachal Pradesh</strong> and across India.
            Our platform supports the complete institutional lifecycle—from student admissions to alumni engagement—
            through integrated modules for talent management, learning development, finance, and operations.
          </p>

          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
            Our Education ERP platform delivers the following core capabilities:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-sky-50 p-5 rounded-xl border-l-4 border-sky-600">
              <h3 className="font-semibold text-sky-900 mb-2">Talent Solutions</h3>
              <p className="text-sm text-gray-600">
                AI-driven recruitment, competency mapping, skill management, and performance enablement.
              </p>
            </div>

            <div className="bg-sky-50 p-5 rounded-xl border-l-4 border-teal-500">
              <h3 className="font-semibold text-sky-900 mb-2">Learning Solutions</h3>
              <p className="text-sm text-gray-600">
                Full-featured LMS, mobile learning, course library, and knowledge management.
              </p>
            </div>

            <div className="bg-sky-50 p-5 rounded-xl border-l-4 border-sky-600">
              <h3 className="font-semibold text-sky-900 mb-2">Finance & HR</h3>
              <p className="text-sm text-gray-600">
                Automated payroll, leave management, compliance, and financial reporting.
              </p>
            </div>

            <div className="bg-sky-50 p-5 rounded-xl border-l-4 border-teal-500">
              <h3 className="font-semibold text-sky-900 mb-2">Integration</h3>
              <p className="text-sm text-gray-600">
                Seamless API connections, biometric integration, and system interoperability.
              </p>
            </div>

            <div className="bg-sky-50 p-5 rounded-xl border-l-4 border-sky-600">
              <h3 className="font-semibold text-sky-900 mb-2">Analytics</h3>
              <p className="text-sm text-gray-600">
                Real-time dashboards, learning analytics, and data-driven decision making.
              </p>
            </div>

            <div className="bg-sky-50 p-5 rounded-xl border-l-4 border-teal-500">
              <h3 className="font-semibold text-sky-900 mb-2">Agentic AI</h3>
              <p className="text-sm text-gray-600">
                Conversational AI, Generative AI, Knowledge Graph, Recommendation ai
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mt-8">
            Serving institutions across Himachal Pradesh, we support educational organizations
            with localized implementation, regional compliance understanding, and dedicated support
            for institutions operating in the HP education ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SeoWhatIs;
