import { useState, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import TechCards from '../components/TechCards';
import ProductShowcase from '../components/ProductShowcase';
import Founder from '../components/Founder';
import Roadmap from '../components/Roadmap';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import GlowCursor from '../components/GlowCursor';

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <div className="min-h-screen bg-background">
      <LoadingScreen onComplete={handleComplete} />
      {loaded && (
        <>
          <GlowCursor />
          <Navbar />
          <Hero />
          <About />
          <TechCards />
          <ProductShowcase />
          <Founder />
          <Roadmap />
          <CallToAction />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
