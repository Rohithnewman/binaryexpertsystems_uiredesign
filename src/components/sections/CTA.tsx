"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { MagneticButton } from "@/components/animations/MagneticButton";

export const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ctaRef.current) return;
    
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1, 
        scale: 1, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: ctaRef });

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface-secondary border-t border-subtle relative overflow-hidden" ref={ctaRef}>
      {/* Decorative background glow & Relatable CLI GIF */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-10 bg-[url('https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif')] bg-cover bg-center pointer-events-none mix-blend-overlay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-30 pointer-events-none mix-blend-screen" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto p-12 md:p-16 border border-subtle bg-bg-primary rounded-brutalist relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-headline font-bold text-text-primary mb-6">
            Ready to <span className="text-primary italic font-normal">Transform</span><br/> Your Business?
          </h2>
          <p className="text-lg text-text-secondary font-body mb-10 max-w-2xl">
            Let's discuss how Binary Expert Systems can accelerate your digital roadmap with cutting-edge engineering and design.
          </p>

          <MagneticButton>
            <button className="px-10 py-5 bg-primary text-white font-label text-sm uppercase rounded-brutalist hover:bg-primary-light hover:shadow-glow transition-all">
              Book a Free Consultation
            </button>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};
