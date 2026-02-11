
import React from 'react';
import { SEO_CONTENT } from '@/lib/seo-content';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ProductSEOContent({ pageId }) {
    const content = SEO_CONTENT[pageId] || SEO_CONTENT["default"];
    const [openIndex, setOpenIndex] = React.useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <article className="prose prose-slate max-w-none">
                    {/* Main Title & Description */}
                    <div className="mb-12 text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                            {content.title}
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            {content.description}
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {content.features.map((feature, idx) => (
                            <div key={idx} className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-600" />
                                <p className="text-slate-700 font-medium m-0">{feature}</p>
                            </div>
                        ))}
                    </div>

                    {/* FAQ Section */}
                    {content.faq && content.faq.length > 0 && (
                        <div className="max-w-3xl mx-auto">
                            <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">Frequently Asked Questions</h3>
                            <div className="space-y-4">
                                {content.faq.map((item, idx) => (
                                    <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                                        <button
                                            onClick={() => toggleAccordion(idx)}
                                            className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 transition-colors text-left"
                                        >
                                            <span className="font-semibold text-slate-800">{item.question}</span>
                                            {openIndex === idx ? (
                                                <ChevronUp className="w-5 h-5 text-slate-500" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-slate-500" />
                                            )}
                                        </button>
                                        <div
                                            className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                        >
                                            <div className="p-4 bg-slate-50 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </article>
            </div>
        </section>
    );
}
