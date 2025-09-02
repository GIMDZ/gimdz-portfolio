import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { expCards } from '../constants';
import TitleHeader from '../components/TitleHeader';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Fade in cards instead of slide
    gsap.utils.toArray('.exp-card').forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 50, // Small upward movement
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      });
    });

    // Animate timeline logos
    gsap.utils.toArray('.timeline-logo').forEach((logo) => {
      gsap.from(logo, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: logo,
          start: 'top 70%',
        },
      });
    });
  }, []);

  return (
    <section id="experience" className="flex-center md:mt-40 mt-20 section-padding">
      <div className="w-full h-full max-w-7xl mx-auto">
        <TitleHeader title="Professional Work Experience" sub="💼 My Career Overview" />

        <div className="mt-32 relative">
          {/* Central Timeline - Lower z-index on mobile, higher on desktop */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full flex justify-center z-0 lg:z-10">
            <div className="gradient-line h-full"></div>
          </div>

          {/* Experience Cards in Zigzag */}
          <div className="space-y-20 md:space-y-32">
            {expCards.map((card, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={card.id} className="relative">
                  {/* Timeline Logo - Positioned on top of cards */}
                  <div
                    className="timeline-logo absolute left-1/2 -top-8 -translate-x-1/2 z-30 group cursor-pointer"
                    style={{
                      boxShadow: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 20px ${card.glowColor}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <img
                      src={card.logoPath}
                      alt="logo"
                      className="w-full h-full object-contain rounded-full p-2 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Experience Content */}
                  <div className="exp-card">
                    {/* Mobile Layout - Cards above timeline */}
                    <div className="lg:hidden">
                      <div className=" relative z-20 pt-12">
                        <div
                          className="relative group cursor-pointer rounded-xl p-6
                          bg-gradient-to-br from-slate-900 to-slate-800
                          border border-slate-700 hover:border-slate-600
                          transition-all duration-500 shadow-lg"
                          style={{
                            boxShadow: 'none',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = `0 0 40px ${card.glowColor}`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          <h1 className="font-semibold text-2xl text-white mb-2">{card.title}</h1>

                          <p className="text-white-50 mb-4 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                            🗓️ {card.date}
                          </p>

                          <div>
                            <p className="text-[#839CB5] italic mb-4">Key Responsibilities</p>
                            <ul className="space-y-3 text-white-50 group-hover:text-white transition-colors duration-300">
                              {card.responsibilities.map((responsibility, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <span className="text-white mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    •
                                  </span>
                                  <span className="text-sm leading-relaxed">{responsibility}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout - Zigzag pattern */}
                    <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center pt-12">
                      {/* Content Side */}
                      <div className={`${isLeft ? 'order-1 pr-8' : 'order-2 pl-8'}`}>
                        <div
                          className="relative group cursor-pointer rounded-xl p-8
                          bg-gradient-to-br from-slate-900 to-slate-800
                          border border-slate-700 hover:border-slate-600
                          transition-all duration-500 shadow-lg"
                          style={{
                            boxShadow: 'none',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = `0 0 40px ${card.glowColor}`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          <h1 className="font-semibold text-2xl md:text-3xl text-white mb-2">
                            {card.title}
                          </h1>

                          <p className="text-white-50 mb-4 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                            🗓️ {card.date}
                          </p>

                          <div>
                            <p className="text-[#839CB5] italic mb-4">Key Responsibilities</p>
                            <ul className="space-y-3 text-white-50 group-hover:text-white transition-colors duration-300">
                              {card.responsibilities.map((responsibility, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <span className="text-white mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    •
                                  </span>
                                  <span className="text-base leading-relaxed">
                                    {responsibility}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Empty Side for spacing */}
                      <div className={`${isLeft ? 'order-2' : 'order-1'}`}>
                        {/* This creates the spacing for the zigzag effect */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
