import React from "react";
import Link from "next/link";

function SeoWhoFor() {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-teal-100 text-teal-900 text-sm font-semibold rounded-full mb-4">
            Target Institutions
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-black">
            Who is ScholarClone HP For?
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Our comprehensive Education ERP solution serves institutions of all sizes across 
            Himachal Pradesh and India.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* K-12 Schools */}
          <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 shadow-lg border border-sky-100">
            <div className="w-16 h-16 bg-sky-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-sky-900 mb-4">K-12 Schools</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">✓</span>
                <span>Student Information System (SIS)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">✓</span>
                <span>Automated timetable generation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">✓</span>
                <span>Parent-teacher communication</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">✓</span>
                <span>Attendance & transport management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">✓</span>
                <span>CCE compliance support</span>
              </li>
            </ul>
            <Link 
              href="/products/learning-solutions" 
              className="inline-block mt-6 text-sky-600 font-semibold hover:text-sky-800"
            >
              Learn more →
            </Link>
          </div>
          
          {/* Higher Education */}
          <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 shadow-lg border border-teal-100">
            <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-teal-900 mb-4">Universities & Colleges</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">✓</span>
                <span>NAAC/NIRF accreditation support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">✓</span>
                <span>Outcome-Based Education (OBE)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">✓</span>
                <span>Choice-Based Credit System (CBCS)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">✓</span>
                <span>Faculty & research management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">✓</span>
                <span>Alumni engagement portal</span>
              </li>
            </ul>
            <Link 
              href="/products/learning-solutions/learning-management" 
              className="inline-block mt-6 text-teal-600 font-semibold hover:text-teal-800"
            >
              Learn more →
            </Link>
          </div>
          
          {/* Corporate */}
          <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 shadow-lg border border-sky-100">
            <div className="w-16 h-16 bg-sky-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-sky-900 mb-4">Corporate Training</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">✓</span>
                <span>Corporate LMS solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">✓</span>
                <span>AI-powered recruitment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">✓</span>
                <span>Skill gap analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">✓</span>
                <span>Compliance training</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">✓</span>
                <span>Performance management</span>
              </li>
            </ul>
            <Link 
              href="/products/talent-solutions" 
              className="inline-block mt-6 text-sky-600 font-semibold hover:text-sky-800"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeoWhoFor;
