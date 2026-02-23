
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";



const Footer = () => {
  return (
    <div>
      <footer className="bg-[#2f2f2f] text-white">
      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-semibold text-[#9ACD32] mb-4">
            Easyshift Movers
          </h3>

          <p className="text-sm leading-relaxed text-gray-300">
            We established in 2021 and provide super fast and reliable
            house, office moving and relocation services.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            {[FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full
                             bg-[#9ACD32] text-[#2f2f2f]
                             hover:bg-white hover:text-[#9ACD32]
                             transition"
                >
                  <Icon size={16} />
                </a>
              )
            )}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-[#9ACD32] mb-4">
            Our Services
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {[
              "Loading & Unloading",
              "Packing and Moving",
              "Home Shifting",
              "Office Relocation",
            ].map((service, i) => (
              <li
                key={i}
                className="hover:text-[#9ACD32] transition cursor-pointer"
              >
                › 
                <a  href="#contact"> {service}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="text-xl font-semibold text-[#9ACD32] mb-4">
            Working Hours
          </h3>
          <p className="text-sm text-gray-300">
            We’re <span className="text-[#9ACD32] font-semibold">24/7</span> Hours
            Service Provider!
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-[#9ACD32] mb-4">
            Contact
          </h3>

          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex gap-3">
              <FaMapMarkerAlt className="text-[#9ACD32] mt-1" />
              <span>
                4028 Gate Dr, Mississauga, ON L4T 3Z4, Canada
              </span>
            </li>

            <li className="flex gap-3">
              <FaMapMarkerAlt className="text-[#9ACD32] mt-1" />
              <span>
                1220 Dr #29, Mississauga, ON L4W 2S9, Canada
              </span>
            </li>

            <li className="flex gap-3">
              <FaEnvelope className="text-[#9ACD32] mt-1" />
              <span>info@Easyshiftmovers.com</span>
            </li>

            <li className="flex gap-3">
              <FaPhoneAlt className="text-[#9ACD32] mt-1" />
              <span>+1-236-880-23777</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#9ACD32] text-[#2f2f2f] text-center py-4 text-sm font-medium">
        © 2026 Easyshift Movers. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer
