
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Roadmap from '@/components/Roadmap';
import BetaSignup from '@/components/BetaSignup';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Roadmap />
      <BetaSignup />
      <Footer />
    </div>
  );
};

export default Index;
