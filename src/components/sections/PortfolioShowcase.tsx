"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MagneticButton } from "@/components/animations/MagneticButton";

const showcaseProjects = [
  {
    id: 1,
    title: "EcoFin Dashboard",
    category: "Web Application",
    bg: "bg-surface-tertiary", 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Lumino E-Commerce",
    category: "Mobile App",
    bg: "bg-surface-tertiary",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Nexus Platform",
    category: "UX/UI Design",
    bg: "bg-surface-tertiary",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  }
];

export const PortfolioShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const cards = gsap.utils.toArray<HTMLElement>(".portfolio-card");

    gsap.fromTo(
      cards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section className="py-24 md:py-32 bg-surface-primary" id="portfolio" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-4">
              <span className="text-tertiary mr-2">/</span>Selected Work
            </h2>
            <p className="text-text-secondary font-body text-lg">
              Explore our recent collaborations where we pushed the boundaries of digital experiences.
            </p>
          </div>
          <MagneticButton>
            <Link 
              href="/portfolio" 
              className="px-6 py-3 border border-subtle bg-transparent text-text-primary font-label text-sm uppercase hover:bg-surface-tertiary hover:border-primary transition-all rounded-brutalist inline-flex"
            >
              View Full Portfolio
            </Link>
          </MagneticButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseProjects.map((project) => (
            <div 
              key={project.id} 
              className="portfolio-card group relative overflow-hidden rounded-brutalist aspect-[4/5] bg-surface-tertiary border border-transparent hover:border-subtle transition-colors cursor-pointer"
            >
              {/* Image Background */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[800ms] ease-out group-hover:scale-105 opacity-60 group-hover:opacity-40"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent z-10" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="inline-block px-3 py-1 bg-surface-primary border border-subtle text-xs font-label uppercase tracking-widest text-secondary mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-headline font-bold text-text-primary mb-2">
                    {project.title}
                  </h3>
                </div>
                
                {/* View Project Button that slides up */}
                <span className="inline-block mt-4 text-xs font-label uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  View Case Study →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
