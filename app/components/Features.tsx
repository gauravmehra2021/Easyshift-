
import {
  FaClock,
  FaUsers,
  FaDollarSign,
  FaHeadset,
} from 'react-icons/fa';
const Features =()=>{

      const features = [
    {
      icon: FaClock,
      title: 'On-Time Service',
      description: 'We value your time and ensure punctual service delivery.',
    },
    {
      icon: FaUsers,
      title: 'Expert Team',
      description: 'Trained professionals handle your belongings with care.',
    },
    {
      icon: FaDollarSign,
      title: 'Affordable Rates',
      description: 'Competitive pricing without compromising on quality.',
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for your queries.',
    },
  ];

    return(
        <>
         <section id="about"  className="py-16 md:py-24 bg-white scroll-mt-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGES */}
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1614926781997-9ca2e6d2785a"
                alt="Professional movers packing"
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />

              <img
                src="https://images.unsplash.com/photo-1600725935160-f67ee4f6084a"
                alt="Moving boxes"
                className="w-full h-64 object-cover rounded-xl shadow-md mt-6"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#9ACD32] mb-6">
              Why Choose Us?
            </h2>

            <p className="text-gray-600 mb-8">
              With over 15 years of experience, we’ve helped thousands of
              families and businesses relocate smoothly and efficiently.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#9ACD32] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white text-xl" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
        
        </>
    )
}

export default Features






