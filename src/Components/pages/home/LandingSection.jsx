import React from "react";
import Link from "next/link";

const LandingSection = () => {
  return (
    <section className="bg-[#014c68] rounded-tl-[1rem] lg:mt-0 sm:mt-10 rounded-br-[2rem] lg:w-full lg:max-w-7xl lg:mx-auto sm:mx-10 px-6 py-10 lg:py-14 lg:px-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          {/* START NOW label */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#2bdfd5] text-sm font-semibold uppercase tracking-wider">
              Get Started
            </span>
            <div className="flex-grow h-px bg-[#2cdfd5] max-w-[96px]"></div>
          </div>

          {/* Headings */}
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-snug font-sans">
            Transform Your Institution
          </h2>
          <p className="text-white text-xl sm:text-2xl font-semibold mt-1">
            Upskill Your Organization Today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="/contact"
              className="inline-block h-11 px-8 bg-[#1fcfc5] text-white font-semibold text-sm rounded-md hover:bg-[#18b7ae] transition text-center py-2.5"
            >
              Request a Demo
            </Link>
            <Link
              href="/products/talent-solutions"
              className="inline-block h-11 px-8 border-2 border-white text-white font-semibold text-sm rounded-md hover:bg-white/10 transition text-center py-2"
            >
              Explore Solutions
            </Link>
          </div>

          {/* Subtext */}
          <p className="text-[#d3d3d3] text-sm mt-4">
            Ready to transform your institution?{" "}
            <Link href="/contact" className="text-[#1fcfc5] hover:underline">
              Contact our team
            </Link>{" "}for a personalized consultation.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[420px] rounded-xl overflow-hidden">
          <img
            src="/new cor/team.png"
            alt="Team session"
            className="w-full h-auto object-cover rounded-tl-[1rem] rounded-br-[2rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingSection;



