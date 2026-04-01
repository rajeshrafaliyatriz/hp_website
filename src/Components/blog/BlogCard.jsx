import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

export function BlogCard({ image, title, author, date, readTime, href, description }) {
  const snippet = description
    ? description.replace(/<[^>]+>/g, '').slice(0, 100) + '...'
    : "Read this insightful article to learn more about the topic.";

  return (
    <Link href={href} className="flex flex-col h-full w-full group overflow-hidden bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-[#76B900]/10 hover:border-[#76B900]/30 transition-all duration-500 will-change-transform hover:-translate-y-2 relative">

      {/* Blog Image Container */}
      <div className="relative aspect-[1.6] w-full overflow-hidden bg-slate-100 shrink-0">
        {image ? (
          <img
            loading="lazy"
            src={image}
            alt={title || "Blog Image"}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 font-medium tracking-widest text-sm uppercase">
            No Image
          </div>
        )}

        {/* Magic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Animated Badge on Hover */}
        <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wide translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
          Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6 md:p-8">

        {/* Meta Infos: Date & Read Time */}
        <div className="flex items-center gap-4 text-xs font-semibold tracking-wider uppercase text-[#76B900] mb-4">
          <div className="flex items-center gap-1.5"><Calendar size={13} /> {date}</div>
          {readTime && <div className="flex items-center gap-1.5 text-slate-500"><Clock size={13} /> {readTime}</div>}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-tight mb-4 group-hover:text-[#76B900] transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        {/* Snippet */}
        <p className="text-sm text-slate-500 leading-relaxed mb-8 line-clamp-3">
          {snippet}
        </p>

        <div className="mt-auto pt-6 border-t border-slate-100 w-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex shrink-0 items-center justify-center text-slate-500 shadow-sm border border-slate-200">
              <User size={18} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                {author?.name || "GapsToGrowth Team"}
              </p>
              <p className="text-xs text-slate-500">Expert Contributor</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
