import React from 'react';
import { Hammer, Loader as Road, Lightbulb, Sun, Waves, Pipette as Pipe, Heart, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: 'Civil Construction & Repair',
      description: 'Complete construction solutions from residential to commercial projects with quality assurance.',
      color: 'orange'
    },
    {
      icon: Road,
      title: 'Road Building & Maintenance',
      description: 'Expert road construction and maintenance services for urban and rural connectivity.',
      color: 'amber'
    },
    {
      icon: Lightbulb,
      title: 'Street Lighting (Urban & Rural)',
      description: 'Comprehensive street lighting solutions for improved safety and visibility.',
      color: 'yellow'
    },
    {
      icon: Sun,
      title: 'Solar Light Installation',
      description: 'Sustainable solar lighting systems for eco-friendly illumination solutions.',
      color: 'red'
    },
    {
      icon: Waves,
      title: 'Pond Development & Restoration',
      description: 'Water body development and restoration for agricultural and community needs.',
      color: 'orange'
    },
    {
      icon: Pipe,
      title: 'Pipeline & Industrial Coating',
      description: 'Professional pipeline installation and industrial coating services.',
      color: 'amber'
    },
    {
      icon: Heart,
      title: 'NGO & CSR-focused Projects',
      description: 'Social impact projects supporting community development and CSR initiatives.',
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white',
      amber: 'bg-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white',
      yellow: 'bg-yellow-100 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white',
      red: 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.orange;
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive infrastructure solutions tailored to meet diverse project requirements across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${getColorClasses(service.color)}`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center text-orange-600 font-medium group-hover:text-orange-700 transition-colors">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Let our experienced team help you bring your infrastructure vision to life with quality, 
              reliability, and timely delivery.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;