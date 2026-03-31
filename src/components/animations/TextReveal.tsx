"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

// Make sure to register ScrollTrigger before using it!
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const TextReveal = ({ children, className, delay = 0, direction = "up" }: TextRevealProps) => {
  const container = useRef<HTMLDivElement>(null);
  
  const getInitialVars = () => {
    switch (direction) {
      case "up": return { y: 60, opacity: 0 };
      case "down": return { y: -60, opacity: 0 };
      case "left": return { x: 60, opacity: 0 };
      case "right": return { x: -60, opacity: 0 };
      default: return { y: 60, opacity: 0 };
    }
  };

  useGSAP(() => {
    const el = container.current;
    if (!el) return;

    gsap.fromTo(
      el,
      getInitialVars(),
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: container });

  return (
    <div ref={container} className={cn("", className)}>
      {children}
    </div>
  );
};
