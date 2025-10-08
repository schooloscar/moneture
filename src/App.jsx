import { useState } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <Gallery />
      <Services />
      <Philosophy />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
