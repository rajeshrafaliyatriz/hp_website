export default function Index() {
  return (
    <div className="h-fit">
      <div className="relative lg:py-20 bg-white lg:mx-20 lg:mb-0 sm:mb-5">
        {/* Top Border Line */}
        <div className="w-full h-0.5 bg-payroll-dark mb-16"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="font-prompt font-bold text-4xl lg:text-5xl text-payroll-teal text-center mb-20">
            Why Scan Your Organization?
          </h2>

          {/* Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            {/* Image Container */}
            <div className="relative">
              <div className="w-full max-w-[370px] h-[394px] rounded-3xl bg-gradient-to-br from-cyan-300 to-teal-300 shadow-lg relative overflow-hidden mx-auto">
                {/* Decorative Line */}
                <div className="absolute left-2 right-10 top-[350px] h-0.5 bg-payroll-dark transform rotate-1"></div>
                <div className="absolute left-9 right-10 top-[355px] h-6 bg-yellow-300 border-2 border-payroll-dark transform rotate-1"></div>
                {/* Person Image */}
                <div className="absolute inset-3 rounded-3xl  overflow-hidden">
                  <img
                    src="/Detailes page/image 16.jpg"
                    alt="Professional working on laptop"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-12">
              {/* Feature 1.1 */}
              <div>
                <h3 className="font-prompt font-medium text-3xl lg:text-3xl text-black mb-4">
                  Visual Skill Heatmaps
                </h3>
                <p className="font-prompt text-lg lg:text-lg text-black leading-relaxed">
                  Instantly visualize skill distribution across departments and teams.
                </p>
              </div>

              {/* Feature 1.2 */}
              <div>
                <h3 className="font-prompt font-medium text-3xl lg:text-3xl text-black mb-4">
                  Identify Critical Risks
                </h3>
                <p className="font-prompt text-lg lg:text-lg text-black leading-relaxed">
                  Spot single points of failure and key person dependencies before they become issues.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content - Left Side */}
            <div className="space-y-12 lg:order-1">
              {/* Feature 2.1 */}
              <div>
                <h3 className="font-prompt font-medium text-3xl lg:text-3xl text-black mb-4">
                  Future-Readiness Index
                </h3>
                <p className="font-prompt text-lg lg:text-lg text-black leading-relaxed">
                  Measure how prepared your workforce is for emerging technologies and market shifts.
                </p>
              </div>

              {/* Feature 2.2 */}
              <div>
                <h3 className="font-prompt font-medium text-3xl lg:text-3xl text-black mb-4">
                  Upskilling Recommendations
                </h3>
                <p className="font-prompt text-lg lg:text-lg text-black leading-relaxed">
                  Get automated suggestions for training programs based on identified gaps.
                </p>
              </div>

              {/* Feature 2.3 */}
              <div>
                <h3 className="font-prompt font-medium text-3xl lg:text-3xl text-black mb-4">
                  Strategic Alignment
                </h3>
                <p className="font-prompt text-lg lg:text-lg text-black leading-relaxed">
                  Ensure your talent strategy matches your long-term business goals.
                </p>
              </div>
            </div>

            {/* Image Container - Right Side */}
            <div className="relative lg:order-2">
              <div className="w-full max-w-[368px] h-[400px] rounded-3xl bg-gradient-to-br from-cyan-300 to-teal-300 shadow-lg relative overflow-hidden mx-auto">
                {/* Person Image */}
                <div className="absolute inset-3 rounded-3xl  overflow-hidden">
                  <img
                    src="/Detailes page/image 17.jpg"
                    alt="Professional using technology"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



