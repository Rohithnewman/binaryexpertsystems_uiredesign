"use client";

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
  { Icon: SiNextdotjs, color: "#000000" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: FaGithub, color: "#181717" },
  { Icon: SiSupabase, color: "#3ECF8E" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
  { Icon: SiPostgresql, color: "#4169E1" },
  { Icon: FaFigma, color: "#F24E1E" },
];

export function HeroTechOrbit() {
  const orbitCount = 3;
  const orbitGap = 6.5; // rem between orbits (wider for cleaner look)
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <>
      <style>{`
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div className="relative w-full h-full flex items-center justify-center lg:justify-end overflow-visible">
        {/* Container shifted right for cut-off look, but with tightened bounding box to avoid extra vertical padding */}
        <div className="relative w-[28rem] h-[28rem] lg:w-[35rem] lg:h-[35rem] translate-x-[30%] lg:translate-x-[45%] flex items-center justify-center">

          {/* Glow Effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-30 pointer-events-none mix-blend-screen" />

          {/* Center Core */}
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-bg-primary dark:bg-[#1a1f21] border border-subtle shadow-lg flex items-center justify-center z-20 relative">
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse opacity-50"></div>
            <div className="text-primary font-headline font-bold tracking-tighter text-2xl md:text-4xl">BES</div>
          </div>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${12 + orbitGap * (orbitIdx + 1)}rem`;
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border-2 border-dotted border-subtle"
                style={{
                  width: size,
                  height: size,
                  animation: `orbitSpin ${30 + orbitIdx * 15}s linear infinite`,
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
                        className="absolute bg-bg-primary dark:bg-[#1a1f21] rounded-full p-2 shadow-md hover:scale-110 transition-transform"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <cfg.Icon className="w-6 h-6 lg:w-8 lg:h-8" style={{ color: cfg.color === '#ffffff' || cfg.color === '#000000' ? 'var(--color-text-primary)' : cfg.color }} />
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
