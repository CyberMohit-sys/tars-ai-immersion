import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import TechCards from '../components/TechCards';
import ProductShowcase from '../components/ProductShowcase';
import Founder from '../components/Founder';
import Roadmap from '../components/Roadmap';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <TechCards />
      <ProductShowcase />
      <Founder />
      <Roadmap />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
