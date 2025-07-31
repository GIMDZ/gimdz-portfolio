import Hero from './sections/Hero';
import ShowcaseSection from './sections/ShowcaseSection.jsx';
import Navbar from './components/Navbar';
import LogoShowcase from './sections/LogoShowcase';
import FeatureCards from './sections/FeatureCards';
import Experience from './sections/Experience';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
    </>
  );
};
export default App;
