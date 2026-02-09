import Hero from './components/portfolio/Hero';
import ValueProp from './components/portfolio/ValueProp';
import Process from './components/portfolio/Process';
import PortfolioGrid from './components/portfolio/PortfolioGrid';
import About from './components/portfolio/About';
import ContactForm from './components/portfolio/ContactForm';
import Footer from './components/portfolio/Footer';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ValueProp />
      <Process />
      <PortfolioGrid />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}