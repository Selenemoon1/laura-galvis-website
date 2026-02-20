import { Toaster } from '@/components/ui/sonner';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import About from './sections/About';
import GrupoLada from './sections/GrupoLada';
import Services from './sections/Services';
import WhyChooseMe from './sections/WhyChooseMe';
import Clients from './sections/Clients';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <About />
        <GrupoLada />
        <Services />
        <WhyChooseMe />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
