
import React from "react";
import HeroSection from "./HeroSection";
import JobPosting from "./JobPosting";
import JobPosting2 from "./JobPosting2";
import ScrollToTop from "@/Components/layout/scroll-to-top/ScrollToTop";
import ProductSEOContent from "@/Components/shared/ProductSEOContent";

export default function SkillRepository() {
  return (
    <div className="flex flex-col w-full max-w-[1920px] mx-auto overflow-x-hidden bg-white">
      <HeroSection />
      <JobPosting />
      <JobPosting2 />
      <ProductSEOContent pageId="performance-enablement" />
      <ScrollToTop />
    </div>
  );
}




