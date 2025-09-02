import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Canvas } from '@react-three/fiber';
import Project1 from '../components/Project1';
import ContactExperience from '../components/models/Contact/ContactExperience.jsx';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: 'power2.inOut' }
    );
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3 * (index + 1),
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div>
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className=" image-wrapper">
              <Project1 />
            </div>
            {/*<div className="image-wrapper">*/}
            {/*  <Canvas*/}
            {/*    className="r3f rounded-2xl"*/}
            {/*    camera={{*/}
            {/*      fov: 45,*/}
            {/*      near: 0.1,*/}
            {/*      far: 2000,*/}
            {/*      position: [-3, 1.5, 4],*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <Project1 />*/}
            {/*  </Canvas>*/}
            {/*  /!*<img src="/images/project1.png" alt="Ryde" />*!/*/}
            {/*</div>*/}
            <div className="text-content">
              <h2>On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde</h2>
              <p className="text-white-50 md:text-xl">
                {' '}
                A site built with NextJS, TypeScript, & Tailwind CSS for a fast user-friendly
                experience.
              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/project4.png" alt="Library Management Platform" />
              </div>
              <h2>PolyJoule's Website</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/project5.png" alt="YC Directory" />
              </div>
              <h2>3D Bike Configurator</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ShowcaseSection;
