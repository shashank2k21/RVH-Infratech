import React from 'react';
import { 
  Globe, 
  Leaf, 
  Award, 
  DollarSign, 
  Clock, 
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const WhyChoose = () => {
  const reasons = [
    {
      icon: Globe,
      title: 'Pan-India Reach with Local Execution',
      description: 'National presence with deep local understanding and community-focused implementation',
      color: 'orange'
    },
    {
      icon: Leaf,
      title: 'Sustainability-Focused',
      description: 'Eco-friendly practices and sustainable solutions for long-term environmental benefits',
      color: 'amber'
    },
    {
      icon: Award,
      title: 'Certified Workforce',
      description: 'Skilled professionals with industry certifications and continuous training programs',
      color: 'yellow'
    },
    {
      icon: DollarSign,
      title: 'Transparent and Cost-Effective',
      description: 'Clear pricing, no hidden costs, and maximum value for your infrastructure investment',
      color: 'red'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Proven track record of on-time project completion with quality assurance',
      color: 'orange'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes and comprehensive project warranties',
      color: 'amber'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      orange: 'bg-orange-500',
      amber: 'bg-amber-500',
      yellow: 'bg-yellow-500',
      red: 'bg-red-500'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.orange;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose RVH Infratech</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining expertise, innovation, and integrity to deliver infrastructure solutions that exceed expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${getColorClasses(reason.color)} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CheckCircle className="h-6 w-6 text-amber-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Competitive Advantages */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Competitive Edge</h3>
            <p className="text-orange-100 max-w-2xl mx-auto">
              What sets us apart in the infrastructure industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">10+ Years</div>
              <div className="text-orange-100 text-sm">Industry Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">200+ Team</div>
              <div className="text-orange-100 text-sm">Skilled Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="text-orange-100 text-sm">Project Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">100%</div>
              <div className="text-orange-100 text-sm">Quality Commitment</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;