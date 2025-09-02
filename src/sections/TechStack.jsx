import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import TitleHeader from '../components/TitleHeader';
import LogoShowcase from './LogoShowcase.jsx';

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.marquee-item',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '#skills',
          start: 'top center',
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <LogoShowcase />
      </div>
    </div>
  );
};

export default TechStack;
