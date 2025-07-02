import React from 'react';
import { Palette, Sun, Package, Loader as Road } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Palette,
      title: 'Eco-friendly Paints & Coatings',
      description: 'Sustainable painting solutions with superior durability and environmental compliance.',
      features: ['Zero VOC formulations', 'Weather resistant', 'Long-lasting finish', 'Eco-certified']
    },
    {
      icon: Sun,
      title: 'Solar & LED Systems',
      description: 'Energy-efficient lighting solutions for residential, commercial, and street applications.',
      features: ['High efficiency LEDs', 'Solar integration', 'Smart controls', 'Low maintenance']
    },
    {
      icon: Package,
      title: 'Durable Construction Materials',
      description: 'Premium quality cement, bricks, and pipes for reliable construction projects.',
      features: ['Quality tested', 'BIS certified', 'Bulk supply', 'Competitive pricing']
    },
    {
      icon: Road,
      title: 'Road Surfacing Utilities',
      description: 'Specialized equipment and materials for professional road construction and maintenance.',
      features: ['Modern equipment', 'Quality bitumen', 'Expert application', 'Warranty support']
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium quality materials and innovative solutions for superior infrastructure development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{product.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Product Gallery */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Product Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://images.pexels.com/photos/221047/pexels-photo-221047.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Construction Materials"
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white font-medium">Premium Construction Materials</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Solar Systems"
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white font-medium">Solar & LED Solutions</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Road Equipment"
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white font-medium">Road Surfacing Equipment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;