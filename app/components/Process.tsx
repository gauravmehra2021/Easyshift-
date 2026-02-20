
import {
  FaClipboardList,
  FaBoxOpen,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";

export function Process() {
  const steps = [
    {
      icon: FaClipboardList,
      title: "Request Quote",
      description:
        "Contact us for a free quote. We assess your requirements and provide transparent pricing.",
      step: "01",
    },
    {
      icon: FaBoxOpen,
      title: "Packing",
      description:
        "Our team arrives with quality packing materials and carefully packs your belongings.",
      step: "02",
    },
    {
      icon: FaTruck,
      title: "Transportation",
      description:
        "Safe loading and secure transportation to your destination with GPS tracking.",
      step: "03",
    },
    {
      icon: FaCheckCircle,
      title: "Unpacking",
      description:
        "We unload and unpack at your new location, ensuring everything is in place.",
      step: "04",
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-white scroll-mt-24 ">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our simple and efficient 4-step process ensures a hassle-free moving experience
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">

              {/* Icon */}
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-[#9acd32] rounded-full flex items-center justify-center shadow-md">
                  <step.icon className="text-white text-3xl" />
                </div>

                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-white border-2 border-[#9acd32] rounded-full flex items-center justify-center">
                  <span className="text-[#9acd32] font-bold">
                    {step.step}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.description}
              </p>

              {/* Connecting Line (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-[#9acd32]/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}