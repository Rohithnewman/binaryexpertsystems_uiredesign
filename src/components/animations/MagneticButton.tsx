"use client";

import { useRef, ReactNode, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: "button" | "a" | "div";
  href?: string;
}

export const MagneticButton = ({ children, className, onClick, as = "div", href }: MagneticButtonProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: container });

  const onMouseMove = contextSafe((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const element = container.current;
    if (!element) return;
    
    const { left, top, width, height } = element.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;

    gsap.to(element, {
      x,
      y,
      duration: 1,
      ease: "power3.out",
    });
  });

  const onMouseLeave = contextSafe(() => {
    if (!container.current) return;
    gsap.to(container.current, {
      x: 0,
      y: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  });

  const Element = as;

  return (
    <div
      ref={container}
      className={cn("relative inline-block", className)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <Element 
        className="w-full h-full block cursor-pointer" 
        onClick={onClick}
        {...(href ? { href } : {})}
      >
        {children}
      </Element>
    </div>
  );
};
