import React from 'react';
import { MapPin, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About RVH Infratech</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dynamic infrastructure company delivering dependable, affordable, and sustainable solutions across India
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              RVH Infratech stands as a beacon of excellence in India's infrastructure landscape. 
              We are committed to delivering projects that not only meet but exceed expectations, 
              building the foundation for tomorrow's growth.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our core strength lies in our skilled team, transparent processes, and unwavering 
              commitment to timely delivery. We believe in creating infrastructure that empowers 
              communities and drives sustainable development.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800">Growing</h4>
                <p className="text-sm text-gray-600">Rapidly Expanding</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Award className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800">Certified</h4>
                <p className="text-sm text-gray-600">Quality Assured</p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Infrastructure Development"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Locations */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Our Presence</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg p-4">
              <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-4 group-hover:text-orange-700 transition-colors duration-300" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-700 transition-colors duration-300">Headquarters</h4>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Prayagraj</p>
              <p className="text-sm text-gray-500 mt-2 group-hover:text-gray-600 transition-colors duration-300">Strategic Command Center</p>
            </div>
            <div className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg p-4">
              <MapPin className="h-12 w-12 text-amber-600 mx-auto mb-4 group-hover:text-amber-700 transition-colors duration-300" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors duration-300">Operational Hub</h4>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Lucknow</p>
              <p className="text-sm text-gray-500 mt-2 group-hover:text-gray-600 transition-colors duration-300">Regional Operations</p>
            </div>
            <div className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg p-4">
              <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4 group-hover:text-red-700 transition-colors duration-300" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-red-700 transition-colors duration-300">Business Center</h4>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Noida</p>
              <p className="text-sm text-gray-500 mt-2 group-hover:text-gray-600 transition-colors duration-300">Corporate Affairs</p>
            </div>
          </div>
        </div>

        {/* Owner Section */}
        <div className="bg-orange-50 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Leadership</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="Profile.jpg?auto=compress&cs=tinysrgb&w=400"
                alt="Company Leadership"
                className="w-64 h-64 object-cover rounded-full mx-auto shadow-lg"
              />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Visionary Leadership</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Under dynamic leadership, RVH Infratech has grown from a local contractor to a 
                pan-India infrastructure solutions provider. Our founder's vision of sustainable 
                development and community empowerment drives every project we undertake.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With over a decade of experience in infrastructure development, our leadership 
                team brings together expertise in engineering, project management, and sustainable 
                development practices. This combination ensures that every RVH project delivers 
                lasting value to communities across India.
              </p>
              <div className="flex items-center space-x-4 mt-6">
                <Users className="h-6 w-6 text-orange-600" />
                <span className="text-gray-700 font-medium">Leading a team of 200+ professionals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;