import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

const Hero = () => {
  return (
    <div>
       <section
      id="home"
      className="relative bg-gradient-to-br from-[#f4f8ea] to-white py-16 md:py-24 scroll-mt-24 "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2f2f2f] mb-6">
              Your Trusted Moving Partner
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Professional packing and moving services for homes and offices.
              We make relocation stress-free and seamless.
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {[
                "Experienced & Professional Team",
                "Safe & Secure Handling",
                "On-Time Delivery Guaranteed",
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <FaCheckCircle className="w-5 h-5 text-[#9ACD32] mr-3" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#9ACD32] text-[#2f2f2f] px-8 py-4 rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center">
                Get Free Quote
                <FaArrowRight className="w-5 h-5 ml-2" />
              </button>

              <button className="border-2 border-[#9ACD32] text-[#2f2f2f] px-8 py-4 rounded-lg font-medium hover:bg-[#f4f8ea] transition">
                Call Now
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1752550218113-b8f5823e5d9c?auto=format&fit=crop&w=1080&q=80"
                alt="Moving truck with boxes"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg hidden md:block">
              <div className="text-3xl font-bold text-[#9ACD32]">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero




