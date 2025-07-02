import React from 'react';
import { 
  Building, 
  Heart, 
  Handshake, 
  Banknote, 
  GraduationCap, 
  Home,
  Star,
  Users
} from 'lucide-react';

const Clients = () => {
  const sectors = [
    {
      icon: Building,
      title: 'Government Bodies',
      description: 'Municipal corporations, development authorities, and public sector undertakings'
    },
    {
      icon: Heart,
      title: 'NGOs',
      description: 'Non-profit organizations focused on community development and social welfare'
    },
    {
      icon: Handshake,
      title: 'CSR Partners',
      description: 'Corporate social responsibility initiatives and community impact projects'
    },
    {
      icon: Banknote,
      title: 'Financial Institutions',
      description: 'Banks, microfinance institutions, and financial service providers'
    },
    {
      icon: GraduationCap,
      title: 'Education Sector',
      description: 'Schools, colleges, universities, and educational infrastructure projects'
    },
    {
      icon: Home,
      title: 'Housing Sector',
      description: 'Residential complexes, affordable housing, and community development projects'
    }
  ];

  const testimonials = [
    {
      quote: "RVH Infratech delivered our rural road project ahead of schedule with exceptional quality. Their commitment to community development is truly commendable.",
      author: "District Collector",
      organization: "Prayagraj Development Authority"
    },
    {
      quote: "The solar street lighting project transformed our village. Professional execution and ongoing support make RVH our preferred infrastructure partner.",
      author: "Project Director",
      organization: "Rural Development NGO"
    },
    {
      quote: "Outstanding CSR project execution. RVH Infratech understood our vision and delivered infrastructure that truly empowers the community.",
      author: "CSR Head",
      organization: "Leading Corporate Group"
    }
  ];

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Clients & Sectors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by diverse organizations across multiple sectors for reliable infrastructure solutions
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sectors.map((sector, index) => {
            const IconComponent = sector.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                  <IconComponent className="h-6 w-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-700 transition-colors duration-300">{sector.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{sector.description}</p>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="bg-orange-600 rounded-2xl p-8 text-white mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-orange-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-orange-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-orange-100">States Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-orange-100">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">What Our Clients Say</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current group-hover:text-yellow-500 transition-colors duration-300" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed italic group-hover:text-gray-700 transition-colors duration-300">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800 group-hover:text-orange-700 transition-colors duration-300">{testimonial.author}</p>
                  <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{testimonial.organization}</p>
                </div>
                <Users className="absolute top-4 right-4 h-6 w-6 text-orange-200 group-hover:text-orange-300 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;