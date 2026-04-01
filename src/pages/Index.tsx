import { useState, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import TechCards from '../components/TechCards';
import ProductShowcase from '../components/ProductShowcase';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Founder from '../components/Founder';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import Roadmap from '../components/Roadmap';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import GlowCursor from '../components/GlowCursor';
import ParticleNetwork from '../components/ParticleNetwork';
import LiveChat from '../components/LiveChat';

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <div className="min-h-screen bg-background">
      <LoadingScreen onComplete={handleComplete} />
      {loaded && (
        <>
          <ParticleNetwork />
          <GlowCursor />
          <Navbar />
          <Hero />
          <About />
          <TechCards />
          <ProductShowcase />
          <Projects />
          <Testimonials />
          <Team />
          <Founder />
          <FAQ />
          <Newsletter />
          <Roadmap />
          <CallToAction />
          <Footer />
          <LiveChat />
        </>
      )}
    </div>
  );
};

export default Index;
