import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Building2
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Optionally handle error feedback here
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  const offices = [
    {
      title: 'Headquarters',
      location: 'Prayagraj',
      address: 'Main Office Complex, Prayagraj, Uttar Pradesh',
      phone: '+91 81789 10508',
      email: 'infratechrvh@gmail.com',
      type: 'primary'
    },
    {
      title: 'Operational Hub',
      location: 'Lucknow',
      address: 'Business Center, Lucknow, Uttar Pradesh',
      phone: '+91 98390 94670',
      email: 'infratechrvh@gmail.com',
      type: 'secondary'
    },
    {
      title: 'Business Center',
      location: 'Noida',
      address: 'Corporate Office, Noida, Uttar Pradesh',
      phone: '+91 81789 10508',
      email: 'infratechrvh@gmail.com',
      type: 'secondary'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your infrastructure project? Contact us for a free consultation and discover how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Message Sent!</h4>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="civil-construction">Civil Construction & Repair</option>
                    <option value="road-building">Road Building & Maintenance</option>
                    <option value="street-lighting">Street Lighting</option>
                    <option value="solar-installation">Solar Light Installation</option>
                    <option value="pond-development">Pond Development</option>
                    <option value="pipeline-coating">Pipeline & Industrial Coating</option>
                    <option value="ngo-csr">NGO & CSR Projects</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    placeholder="Please describe your project requirements, timeline, and any specific details..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Locations */}
            <div className="space-y-6">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className={`group rounded-xl p-6 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer ${
                    office.type === 'primary' 
                      ? 'bg-orange-600 text-white hover:bg-orange-700' 
                      : 'bg-white text-gray-800 hover:bg-orange-50'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <Building2 className={`h-6 w-6 mr-3 transition-colors duration-300 ${
                      office.type === 'primary' ? 'text-orange-200 group-hover:text-white' : 'text-orange-600 group-hover:text-orange-700'
                    }`} />
                    <h4 className="text-lg font-semibold">{office.title}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 transition-colors duration-300 ${
                        office.type === 'primary' ? 'text-orange-200 group-hover:text-white' : 'text-gray-500 group-hover:text-orange-600'
                      }`} />
                      <div>
                        <p className="font-medium">{office.location}</p>
                        <p className={`text-sm transition-colors duration-300 ${
                          office.type === 'primary' ? 'text-orange-100 group-hover:text-orange-50' : 'text-gray-600 group-hover:text-gray-700'
                        }`}>
                          {office.address}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className={`h-5 w-5 mr-3 transition-colors duration-300 ${
                        office.type === 'primary' ? 'text-orange-200 group-hover:text-white' : 'text-gray-500 group-hover:text-orange-600'
                      }`} />
                      <a 
                        href={`tel:${office.phone}`}
                        className={`hover:underline transition-colors duration-300 ${
                          office.type === 'primary' ? 'text-orange-100 group-hover:text-white' : 'text-gray-700 group-hover:text-orange-700'
                        }`}
                      >
                        {office.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className={`h-5 w-5 mr-3 transition-colors duration-300 ${
                        office.type === 'primary' ? 'text-orange-200 group-hover:text-white' : 'text-gray-500 group-hover:text-orange-600'
                      }`} />
                      <a 
                        href={`mailto:${office.email}`}
                        className={`hover:underline transition-colors duration-300 ${
                          office.type === 'primary' ? 'text-orange-100 group-hover:text-white' : 'text-gray-700 group-hover:text-orange-700'
                        }`}
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="group bg-white rounded-xl p-6 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer hover:bg-orange-50">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-orange-600 mr-3 group-hover:text-orange-700 transition-colors duration-300" />
                <h4 className="text-lg font-semibold text-gray-800 group-hover:text-orange-700 transition-colors duration-300">Business Hours</h4>
              </div>
              <div className="space-y-2 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-red-500">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <div className="bg-gray-200 rounded-2xl p-8 text-center">
            <iframe
              title="Jaunpur Road, Phulpur, Prayagraj Office Location"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '1rem' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=25.444986,81.949089&z=15&output=embed"
            ></iframe>
            <h4 className="text-xl font-semibold text-gray-600 mb-2 mt-4">Office Locations Map</h4>
            <p className="text-gray-500">Interactive map showing our office locations across India</p>
            <p className="text-sm text-gray-400 mt-2">
              For exact directions to any of our offices, please contact us directly.
            </p>
            <a
              href="https://maps.apple.com/place?address=Jaunpur%20Road,%20Phulpur,%20Prayagraj,%20211019,%20Uttar%20Pradesh,%20India&coordinate=25.444986,81.949089&name=Jaunpur%20Road&map=h"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-orange-600 underline"
            >
              View on Apple Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;