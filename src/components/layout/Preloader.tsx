"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export const Preloader = () => {
  const [complete, setComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current || !progressRef.current) return;

    // Use a GSAP timeline for the Preloader sequence
    const tl = gsap.timeline({
      onComplete: () => {
        setComplete(true);
      },
    });

    // 1. Text reveals with a glitch or fade
    tl.fromTo(textRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      // 2. Progress bar fills
      .to(progressRef.current, { scaleX: 1, duration: 1.2, ease: "expo.inOut" }, "-=0.4")
      // 3. Container curtain slide up
      .to(containerRef.current, { yPercent: -100, duration: 0.8, ease: "power4.inOut" }, "+=0.2");

    return () => {
      tl.kill();
    };
  }, []);

  if (complete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-surface-primary flex flex-col items-center justify-center pointer-events-none"
    >
      <div 
        ref={textRef} 
        className="text-4xl md:text-6xl font-headline font-bold text-primary mb-8 tracking-tighter"
      >
        <span className="text-text-primary">0</span>1<span className="text-text-secondary">1</span>0
      </div>

      <div className="w-[200px] md:w-[300px] h-[2px] bg-surface-tertiary relative overflow-hidden">
        <div
          ref={progressRef}
          className="absolute inset-y-0 left-0 bg-gradient-primary w-full origin-left scale-x-0"
        />
      </div>
    </div>
  );
};
