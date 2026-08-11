import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LogoMarquee from '../components/LogoMarquee';
import PlacementVideo from '../components/PlacementVideo';
import Comparison from '../components/Comparison';
import StudentCarousel from '../components/StudentCarousel';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="bg-black text-white w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <PlacementVideo />
      <Comparison />
      <StudentCarousel />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
