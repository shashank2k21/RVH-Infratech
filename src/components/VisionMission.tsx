import React from 'react';
import { Target, Eye, CheckCircle } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Vision & Mission</h2>
          <p className="text-xl text-gray-600">Guiding principles that drive our commitment to excellence</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Eye className="h-12 w-12 text-orange-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Empowering communities through infrastructure excellence, creating sustainable 
              solutions that foster growth, connectivity, and prosperity across India.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Target className="h-12 w-12 text-amber-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Deliver projects quickly and responsibly with uncompromising quality</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Build development-driven infrastructure that serves communities</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Maintain professionalism and trust in every partnership</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Quality</h4>
              <p className="text-sm text-gray-600">Excellence in every project</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-amber-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Reliability</h4>
              <p className="text-sm text-gray-600">Consistent delivery</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Innovation</h4>
              <p className="text-sm text-gray-600">Forward-thinking solutions</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Sustainability</h4>
              <p className="text-sm text-gray-600">Environmental responsibility</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;