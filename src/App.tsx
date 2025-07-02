import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import Products from './components/Products';
import Clients from './components/Clients';
import WhyChoose from './components/WhyChoose';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <Products />
      <Clients />
      <WhyChoose />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;