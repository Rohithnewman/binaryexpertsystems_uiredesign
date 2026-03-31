"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaReact, FaAws, FaDocker, FaNodeJs, FaGithub, FaGoogle, FaApple, FaFigma
} from "react-icons/fa";
import {
  SiNextdotjs, SiVercel, SiRedux, SiTypescript, SiSupabase, SiTailwindcss, SiPostgresql
} from "react-icons/si";



const iconConfigs = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: FaAws, color: "#FF9900" },
  { Icon: FaDocker, color: "#2496ED" },
  { Icon: FaNodeJs, color: "#339933" },
  { Icon: SiNextdotjs, color: "#ffffff" },
  { Icon: SiVercel, color: "#ffffff" },
  { Icon: SiRedux, color: "#764ABC" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: FaGithub, color: "#ffffff" },
  { Icon: SiSupabase, color: "#3ECF8E" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
  { Icon: SiPostgresql, color: "#4169E1" },
  { Icon: FaGoogle, color: "#DB4437" },
  { Icon: FaApple, color: "#ffffff" },
  { Icon: FaFigma, color: "#F24E1E" },
];

export default function FeatureSection() {
  const orbitCount = 3;
  const orbitGap = 7; // rem between orbits
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className="relative w-full overflow-hidden bg-surface-secondary py-20 border-t border-subtle">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row items-center justify-between min-h-[40rem] rounded-brutalist border border-subtle bg-bg-tertiary relative shadow-card overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-30 pointer-events-none mix-blend-screen" />
        
        {/* Left side: Heading and Text */}
        <div className="w-full lg:w-1/2 z-20 p-8 lg:pl-16 flex flex-col justify-center">
          <div className="inline-block py-1 px-3 border border-subtle bg-bg-primary rounded-brutalist w-max mb-6">
            <span className="text-xs font-label text-primary tracking-widest uppercase">Tech Arsenal</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-6 text-text-primary leading-tight">
            Technologies We Master
          </h2>
          <p className="text-text-secondary font-body text-lg mb-8 max-w-lg leading-relaxed">
            Our engineers build enterprise-grade architectures leveraging the most powerful modern frameworks and cloud ecosystems.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="default" asChild className="h-12 px-8 text-sm group">
              <Link href="/services">
                Explore Stacks <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </Button>
            <Button variant="outline" asChild className="h-12 px-8 text-sm">
              <Link href="/portfolio">View Projects</Link>
            </Button>
          </div>
        </div>

        {/* Right side: Orbit animation */}
        <div className="relative w-full lg:w-1/2 h-[40rem] flex items-center justify-center lg:justify-end overflow-hidden lg:overflow-visible">
          <div className="relative w-[50rem] h-[50rem] lg:translate-x-1/4 flex items-center justify-center">
            
            {/* Center Core */}
            <div className="w-24 h-24 rounded-full bg-bg-primary border border-subtle shadow-glow flex items-center justify-center z-20 relative">
              <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping opacity-50"></div>
              <div className="text-primary font-headline font-bold tracking-tighter text-2xl">BES</div>
            </div>

            {/* Generate Orbits */}
            {[...Array(orbitCount)].map((_, orbitIdx) => {
              const size = `${12 + orbitGap * (orbitIdx + 1)}rem`; // equal spacing
              const angleStep = (2 * Math.PI) / iconsPerOrbit;

              return (
                <div
                  key={orbitIdx}
                  className="absolute rounded-full border border-dashed border-subtle/60"
                  style={{
                    width: size,
                    height: size,
                    animation: `spin ${20 + orbitIdx * 12}s linear infinite`,
                    animationDirection: orbitIdx % 2 === 0 ? "normal" : "reverse"
                  }}
                >
                  {iconConfigs
                    .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                    .map((cfg, iconIdx) => {
                      const angle = iconIdx * angleStep;
                      const x = (50 + 50 * Math.cos(angle)).toFixed(3);
                      const y = (50 + 50 * Math.sin(angle)).toFixed(3);

                      return (
                        <div
                          key={iconIdx}
                          className="absolute bg-bg-primary border border-subtle rounded-full p-2.5 shadow-card hidden md:flex"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            transform: `translate(-50%, -50%) rotate(0deg)`,
                            animation: `spin ${20 + orbitIdx * 12}s linear infinite reverse`,
                            animationDirection: orbitIdx % 2 === 0 ? "reverse" : "normal"
                          }}
                        >
                          <cfg.Icon className="w-6 h-6" style={{ color: cfg.color === '#ffffff' ? 'var(--color-text-primary)' : cfg.color }} />
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
