"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { TextReveal } from "@/components/animations/TextReveal";
import { HeroTechOrbit } from "@/components/ui/hero-tech-orbit";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // Stagger character/word animation for headline after Preloader finishes
    // We delay this by 2.5s to wait for the Preloader, though usually we'd pass a state flag
    gsap.fromTo(
      headlineRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "expo.out", delay: 2.2 }
    );
  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="relative min-h-[100vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden">

      <div className="absolute inset-0 z-0 bg-gradient-bg opacity-90 backdrop-blur-sm" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 flex flex-col lg:flex-row items-center justify-between mt-10 lg:mt-0 gap-8 lg:gap-0">

        {/* Left side content */}
        <div className="w-full lg:w-[45%] flex flex-col items-start justify-center z-20 relative">
          
          {/* Matrix rain isolated to the text area */}
          <div
            className="absolute -inset-20 md:-inset-32 z-0 opacity-10 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 dark:opacity-40 blend-overlay pointer-events-none"
            style={{ 
              backgroundImage: "url('https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif')",
              maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)'
            }}
          />

          <div className="relative z-10 flex flex-col items-start w-full">
            <h1 
              ref={headlineRef}
              className="text-4xl md:text-5xl lg:text-7xl font-headline font-bold text-text-primary leading-[1.1] tracking-tight max-w-3xl mb-5 opacity-0"
            >
              We Build <br />
              <span className="text-primary text-shadow-glow">Digital Futures</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-text-secondary font-body max-w-2xl mb-8 leading-relaxed">
              Next-generation web & mobile solutions for enterprises navigating digital transformation.
              We turn complex challenges into beautiful, scalable digital products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <MagneticButton>
                <button className="px-6 py-3 bg-primary text-text-primary dark:text-bg-primary font-label text-sm uppercase rounded-brutalist hover:bg-primary-light hover:shadow-glow hover:-translate-y-1 transition-all">
                  Start Your Project
                </button>
              </MagneticButton>

              <MagneticButton>
                <button className="px-6 py-3 bg-transparent border border-subtle text-text-primary font-label text-sm uppercase rounded-brutalist hover:border-primary hover:text-primary transition-all">
                  View Our Work
                </button>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Right side orbit integration */}
        <div className="w-full lg:w-[55%] h-[50vh] lg:h-full flex items-center justify-center relative mt-16 lg:mt-0 z-10 pointer-events-auto">
          <HeroTechOrbit />
        </div>
      </div>
    </section>
  );
};
