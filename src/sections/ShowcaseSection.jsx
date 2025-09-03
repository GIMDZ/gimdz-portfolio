import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Project1 from '../components/Project1';
import { projects } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: 'power2.inOut' }
    );
    const projectRefs = [project1Ref.current, project2Ref.current, project3Ref.current];
    projectRefs.forEach((card, index) => {
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
          <div
            className="first-project-wrapper cursor-pointer transition-all duration-300 hover:text-blue-50
"
            ref={project1Ref}
          >
            <div className="image-wrapper ">
              <figure>
                <div className="showcase-3d-layout">
                  <Project1 />
                </div>
              </figure>
            </div>

            <div
              className="text-content"
              onClick={() => handleProjectClick('https://www.fresco-design.com/')}
            >
              <h2>Beautiful & Modern Design Studio Website with Stunning Visual Identity</h2>
              <p className="text-white-50 md:text-xl">
                {' '}
                A site built with NextJS, TypeScript, & Tailwind CSS for a fast user-friendly
                experience.
              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project cursor-pointer transition-all duration-300 hover:text-blue-50"
                ref={index === 0 ? project2Ref : project3Ref}
                onClick={() => handleProjectClick(project.url)}
              >
                <div className="image-wrapper bg-[#FFEFDB] relative overflow-hidden">
                  <img
                    className="transition-transform duration-300 ease-out hover:scale-105"
                    src={project.image}
                    alt={project.title}
                  />

                  {/* Tech Stack Labels */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="glass-subtle px-2 py-1 rounded-lg flex items-center gap-1 text-white text-xs"
                      >
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <h2>{project.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ShowcaseSection;
