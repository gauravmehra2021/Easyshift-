
const services = [
  {
    title: "Home Shifting",
    desc: "Professional home moving and apartment relocation across Ontario.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
  },
  {
    title: "Office Shifting",
    desc: "Reliable office relocation and business moving services.",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
  },
  {
    title: "Local Moving",
    desc: "Quick, affordable moving solutions for condos and small loads.",
    img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=800",
  },
  {
    title: "Dock to Dock Moving",
    desc: "Local dock-to-dock and warehouse deliveries.",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800",
  },
  {
    title: "Mattress Shifting",
    desc: "Careful and hygienic mattress moving with protective wrapping.",
    img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=800",
  },
  {
    title: "Furniture Moving",
    desc: "Safe and insured furniture moving with blanket wrapping.",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800",
  },
  {
    title: "Appliances Moving",
    desc: "Secure handling and transport of heavy appliances.",
    img: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?q=80&w=800",
  },
  {
    title: "Commercial Shifting",
    desc: "Large-scale commercial moves done right and on time.",
    img: "https://images.unsplash.com/photo-1596075780750-81249df16d19?q=80&w=800",
  },
];




const MainServices =()=>{
    return(
        <>
        
         <section className="bg-[#f9fafb] py-16 scroll-mt-24 " id="services">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Heading */}
        <h2 className="text-3xl font-semibold text-center text-[#2f2f2f] mb-12">
          Our <span className="text-[#9ACD32]">Main Services</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            >
              <a href="#">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-48 w-72 object-cover rounded-t-xl"
                />

                <div className="px-4 py-4 w-72 text-center">
                  <p className="text-lg font-semibold text-[#2f2f2f] mb-2">
                    {service.title}
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>

                  <button className="mt-4 text-sm font-medium text-[#9ACD32] hover:underline">
                    Learn More →
                  </button>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
        </>
    )
}

export default MainServices