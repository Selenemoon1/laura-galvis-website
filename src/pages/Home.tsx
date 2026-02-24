import Hero from '@/sections/Hero';
import Stats from '@/sections/Stats';
import About from '@/sections/About';
import GrupoLada from '@/sections/GrupoLada';
import Services from '@/sections/Services';
import WhyChooseMe from '@/sections/WhyChooseMe';
import Clients from '@/sections/Clients';
import Asesoria from '@/sections/Asesoria';
import Contact from '@/sections/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <GrupoLada />
      <Services />
      <WhyChooseMe />
      <Clients />
      <Asesoria />
      <Contact />
    </main>
  );
};

export default Home;
