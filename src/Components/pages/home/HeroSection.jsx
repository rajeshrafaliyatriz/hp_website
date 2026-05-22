
import React from "react";
import EmailForm from "./EmailForm";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="flex flex-col w-[80%] max-md:ml-0 max-md:w-full mb-15">
      <div className="flex flex-col mx-14 items-start  w-full font-semibold max-md:mt-10 max-md:max-w-full">
        <h1 className="self-stretch text-6xl mt-20 leading-[65px] text-black max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
          Elevate Potential, <br />Redefine Workforce{" "}
          <span className="text-teal-400"><br />Excellence</span>
        </h1>
        <p className="mt-10 text-2xl font-medium leading-10 text-black lg:w-[600px] max-md:max-w-full">
          Gaps to Growth (G2G) — 
          Precision Talent Intelligence,Powered by AI, Skill Agents™ & Deep Ontology
        </p>
        <div className="flex flex-wrap lg:gap-5 mt-20 text-xl leading-none max-md:mt-10">
          <Link href="/contact" className="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-full transition">
            Book Demo
          </Link>
          <Link href="/products/talent-solutions" className="px-8 py-4 border-2 border-sky-600 text-sky-600 font-semibold rounded-full hover:bg-sky-50 transition">
            Explore Solutions
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;



