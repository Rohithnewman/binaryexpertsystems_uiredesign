import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export const initGSAP = () => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    gsap.config({ force3D: true });
    ScrollTrigger.defaults({ toggleActions: "play none none reverse" });
  }
};

export const eases = {
  expo: "expo.out",
  back: "back.out(1.5)",
  spring: "elastic.out(1, 0.5)",
};
