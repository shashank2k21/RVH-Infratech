import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Foundation of Trust. Lasting Structure.",
      subtitle: "Engineering Progress. Building Trust.",
      description: "RVH Infratech delivers dependable, affordable, and sustainable infrastructure solutions across India with expertise in civil construction, road building, and innovative development projects.",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "Pan-India Operations"
    },
    {
      title: "Building Tomorrow's Infrastructure Today",
      subtitle: "Innovation. Quality. Excellence.",
      description: "From rural roads to urban development, we create infrastructure that empowers communities and drives sustainable growth across the nation.",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "500+ Projects"
    },
    {
      title: "Sustainable Solutions for Modern India",
      subtitle: "Eco-Friendly. Future-Ready.",
      description: "Leading the way in sustainable infrastructure development with solar lighting, eco-friendly materials, and environmentally conscious construction practices.",
      image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "Green Technology"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-orange-900 via-orange-800 to-red-700 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex flex-col lg:flex-row items-center min-h-screen relative z-10">
          {/* Content */}
          <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-500">
              {slides[currentSlide].title.split('.')[0]}.{' '}
              <span className="text-orange-200">{slides[currentSlide].title.split('.')[1]}</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-orange-100 font-medium">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-lg mb-10 text-orange-50 leading-relaxed">
              {slides[currentSlide].description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-800 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-800 transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                <img
                  src={slides[currentSlide].image}
                  alt="Infrastructure Construction"
                  className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-2xl transition-all duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold text-sm">{slides[currentSlide].badge}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;