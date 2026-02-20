
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section  className="py-16 md:py-24 bg-white">
      <div id="contact" className="max-w-7xl mx-auto px-4 scroll-mt-24 " >

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to move? Contact us now for a free, no-obligation quote
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Form */}
         <div className="bg-[#3a3a3a] p-8 rounded-xl shadow-xl">
  <form className="space-y-6 text-white">

    {/* Name & Phone */}
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium mb-2">
          Full Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full px-4 py-3 rounded-lg bg-white text-black
          focus:ring-2 focus:ring-[#9ACD32] outline-none transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="+1 (234) 567-890"
          className="w-full px-4 py-3 rounded-lg bg-white text-black
          focus:ring-2 focus:ring-[#9ACD32] outline-none transition"
        />
      </div>
    </div>

    {/* Email */}
    <div>
      <label className="block text-sm font-medium mb-2">
        Email Address
      </label>
      <input
        type="email"
        placeholder="john@example.com"
        className="w-full px-4 py-3 rounded-lg bg-white text-black
        focus:ring-2 focus:ring-[#9ACD32] outline-none transition"
      />
    </div>

    {/* Locations */}
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium mb-2">
          Moving From
        </label>
        <input
          type="text"
          placeholder="Current Location"
          className="w-full px-4 py-3 rounded-lg bg-white text-black
          focus:ring-2 focus:ring-[#9ACD32] outline-none transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Moving To
        </label>
        <input
          type="text"
          placeholder="New Location"
          className="w-full px-4 py-3 rounded-lg bg-white text-black
          focus:ring-2 focus:ring-[#9ACD32] outline-none transition"
        />
      </div>
    </div>

    {/* Message */}
    <div>
      <label className="block text-sm font-medium mb-2">
        Message
      </label>
      <textarea
        rows={4}
        placeholder="Tell us about your moving requirements..."
        className="w-full px-4 py-3 rounded-lg bg-white text-black
        focus:ring-2 focus:ring-[#9ACD32] outline-none resize-none transition"
      />
    </div>

    {/* Animated Button */}
    <button
      type="submit"
      className="
        w-full bg-[#9ACD32] text-[#2f2f2f] py-4 rounded-lg font-semibold
        transition-all duration-300
        hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(154,205,50,0.45)]
        active:scale-[0.98]
      "
    >
      Request Free Quote
    </button>

  </form>
</div>

          {/* Contact Info */}
          <div>
            {/* Image */}
            <div className="rounded-xl overflow-hidden mb-8 shadow">
              <img
                src="https://images.unsplash.com/photo-1619070284836-e850273d69ac"
                alt="Warehouse"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Info Items */}
            <div className="space-y-6">

              <InfoItem
                icon={<FaPhoneAlt />}
                title="Phone"
                lines={["+1 (234) 567-890", "+1 (234) 567-891"]}
              />

              <InfoItem
                icon={<FaEnvelope />}
                title="Email"
                lines={["info@swiftmove.com", "support@swiftmove.com"]}
              />

              <InfoItem
                icon={<FaMapMarkerAlt />}
                title="Address"
                lines={["123 Moving Street, Suite 100", "New York, NY 10001"]}
              />

              <InfoItem
                icon={<FaClock />}
                title="Working Hours"
                lines={[
                  "Mon – Sat: 8:00 AM – 8:00 PM",
                  "Sunday: 10:00 AM – 6:00 PM",
                ]}
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Reusable Info Item */
function InfoItem({ icon, title, lines }) {
  return (
    <div className="flex items-start">
      <div className="w-12 h-12 bg-[#9acd32]/15 rounded-lg flex items-center justify-center text-[#9acd32] text-xl">
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        {lines.map((line, i) => (
          <p key={i} className="text-gray-600 text-sm">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}