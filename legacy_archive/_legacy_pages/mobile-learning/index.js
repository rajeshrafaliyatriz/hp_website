import React from "react";
import Header from "@/Components/layout/navbar/Navbar";
import HeroSection from "./HeroSection";
import SecondSection from "./SecondSection";
import CourseSection from "./CourseSection";
import TrainingSection from "./TrainingSection";
import Footer from "@/Components/layout/footer/Footer";
import ScrollToTop from "@/Components/layout/scroll-to-top/ScrollToTop";

export default function SkillRepository() {
  return (
    <div className="flex flex-col w-full max-w-[1920px] mx-auto overflow-x-hidden bg-white">
      <Header />
      <HeroSection />
      <SecondSection />
      <CourseSection />
      <TrainingSection />
      <ScrollToTop />
      <Footer />
    </div>
  );
}



