"use client";

import React, { useState, useMemo } from "react";
import { BlogCard } from "./BlogCard";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
};

export function BlogsList({ initialBlogs }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(7);

  const filteredBlogs = useMemo(() => {
    if (!searchQuery.trim()) return initialBlogs;
    const lowerQuery = searchQuery.toLowerCase();
    return initialBlogs.filter(
      (blog) =>
        blog.title?.toLowerCase().includes(lowerQuery) ||
        blog.author?.name?.toLowerCase().includes(lowerQuery) ||
        blog.description?.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery, initialBlogs]);

  const spotlightBlog = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const gridBlogs = filteredBlogs.slice(1, visibleCount);
  const hasMore = visibleCount < filteredBlogs.length;

  const handleLoadMore = () => setVisibleCount((prev) => prev + 6);

  const getHref = (blog) => `/blog/${blog.slug || blog.id}`;

  const getSnippet = (text) => text ? text.replace(/<[^>]+>/g, '').slice(0, 180) + '...' : "Read more...";

  return (
    <div className="flex flex-col items-center w-full px-6 lg:px-8 max-w-[1400px] mx-auto min-h-[500px]">
      
      {/* Filter Header & Search Bar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row gap-6 justify-between items-center mt-4 mb-12 w-full"
      >
        <div className="flex flex-col gap-2">
          <div className="font-extrabold capitalize text-slate-900 text-2xl lg:text-4xl tracking-tight">Our Latest Insights</div>
          <div className="h-1.5 w-20 bg-[#76B900] rounded-full" />
        </div>
        
        <div className="relative w-full md:w-96 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#76B900] transition-colors">
            <Search size={20} />
          </div>
          <input
            type="search"
            placeholder="Search articles, authors..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(7);
            }}
            className="w-full pl-12 pr-4 py-4 rounded-full bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#76B900]/50 focus:border-[#76B900] transition-all shadow-sm group-hover:shadow-md"
            suppressHydrationWarning
          />
        </div>
      </motion.div>

      {/* Empty State */}
      {filteredBlogs.length === 0 && (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="py-20 text-center w-full">
          <div className="text-slate-400 mb-4 flex justify-center"><Search size={48} /></div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">No articles found</h3>
          <p className="text-slate-500">We couldn&apos;t find anything matching &quot;{searchQuery}&quot;. Try a different term.</p>
        </motion.div>
      )}

      {/* Cinematic Hero Spotlight */}
      {spotlightBlog && (
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} className="w-full mb-16">
          <Link href={getHref(spotlightBlog)} className="group block relative w-full overflow-hidden rounded-[2.5rem] bg-[#2A3E5C] aspect-auto md:aspect-[21/9] lg:aspect-[2.5/1]">
            <img 
              loading="lazy" 
              src={spotlightBlog.image || "/assets/placeholder-hero.webp"} 
              alt={spotlightBlog.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 group-hover:opacity-70 transition-all duration-700 ease-in-out"
            />
            {/* Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A3E5C] via-[#2A3E5C]/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2A3E5C]/80 via-[#2A3E5C]/20 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-14 lg:p-20 z-10 flex flex-col justify-end max-w-4xl text-left">
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold tracking-widest uppercase text-[#76B900] mb-6">
                <span className="bg-[#76B900]/20 px-4 py-1.5 rounded-full backdrop-blur-md border border-[#76B900]/30 text-white">Featured Insight</span>
                <span className="flex items-center gap-1.5 text-slate-300"><Calendar size={14} /> {spotlightBlog.date}</span>
                {spotlightBlog.readTime && <span className="flex items-center gap-1.5 text-slate-300"><Clock size={14} /> {spotlightBlog.readTime}</span>}
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 drop-shadow-lg group-hover:text-green-50 transition-colors line-clamp-2 md:line-clamp-none">
                {spotlightBlog.title}
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-3xl line-clamp-2 drop-shadow-sm font-medium">
                {getSnippet(spotlightBlog.description)}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-[#76B900] shadow-xl flex items-center justify-center bg-slate-800 text-slate-300">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-base">{spotlightBlog.author?.name || "Author"}</p>
                    <p className="text-sm text-slate-400">Expert Contributor</p>
                  </div>
                </div>
                <div className="hidden sm:inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide group-hover:bg-[#76B900] group-hover:text-white transition-colors duration-300 shadow-xl">
                  Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      )}

      {/* Benthos Grid */}
      {gridBlogs.length > 0 && (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 w-full pb-16"
        >
          <AnimatePresence>
            {gridBlogs.map((blog, index) => (
              <motion.div 
                key={blog.id || index} 
                variants={itemVariants} 
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              >
                <BlogCard {...blog} href={getHref(blog)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Load More Action */}
      {hasMore && filteredBlogs.length > 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center w-full mb-10">
          <button
            onClick={handleLoadMore}
            className="group flex items-center justify-center gap-3 bg-white text-slate-800 border-2 border-slate-200 hover:border-[#76B900] px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#76B900]/20"
            suppressHydrationWarning
          >
            Load More Articles
            <ArrowRight size={18} className="text-slate-400 group-hover:text-[#76B900] group-hover:translate-y-0.5 group-hover:rotate-90 transition-all" />
          </button>
        </motion.div>
      )}

    </div>
  );
}
