import Header from './components/Header';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Plans from './components/Plans';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-navy-900 text-cream">
      <Header />
      <Hero />
      <Showcase />
      <Plans />
      <WhyUs />
      <Footer />
    </main>
  );
}
