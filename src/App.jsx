import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

import Hero from './sections/Hero';
import ShowcaseSection from './sections/ShowcaseSection.jsx';
import Navbar from './components/NavBar.jsx';

import FeatureCards from './sections/FeatureCards';
import Experience from './sections/Experience';
import TechStack from './sections/TechStack';
// import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      {/*<LogoShowcase />*/}
      <FeatureCards />
      <Experience />
      <TechStack />
      {/*<Testimonials />*/}
      <Contact />
      <Footer />
      <SpeedInsights />
      <Analytics />
    </>
  );
};
export default App;
