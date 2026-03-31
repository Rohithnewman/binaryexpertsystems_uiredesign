"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const stats = [
  { value: 3, suffix: "+", label: "Countries Served" },
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

export const StatsCounter = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const counters = gsap.utils.toArray<HTMLElement>(".stat-num");

    gsap.fromTo(
      counters,
      { textContent: "0" },
      {
        textContent: (i) => stats[i].value,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        stagger: {
          each: 0.2,
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section className="py-24 bg-surface-tertiary border-y border-subtle" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-subtle/30">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-4">
              <div className="flex items-baseline mb-2">
                <span className="stat-num text-5xl md:text-7xl font-headline font-bold text-primary">0</span>
                <span className="text-3xl md:text-5xl font-headline font-bold text-primary ml-1">{stat.suffix}</span>
              </div>
              <span className="text-xs md:text-sm font-label uppercase text-text-secondary tracking-widest text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
