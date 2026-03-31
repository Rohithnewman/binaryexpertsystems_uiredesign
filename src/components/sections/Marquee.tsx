"use client";

import { cn } from "@/lib/utils";

const clients = [
  "Microsoft", "Amazon Web Services", "Google Cloud", 
  "Stripe", "Vercel", "Framer", "LottieFiles", 
  "SendGrid", "Tailwind Labs", "Next.js"
];

export const Marquee = () => {
  return (
    <section className="py-12 bg-surface-primary border-y border-subtle overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg-primary to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg-primary to-transparent z-10" />
      
      <div className="flex w-[200vw] sm:w-[150vw] xl:w-screen">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {clients.map((client, i) => (
            <span 
              key={`${client}-${i}`} 
              className="mx-8 md:mx-16 text-2xl md:text-3xl font-headline font-bold text-neutral hover:text-primary transition-colors duration-300 filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 cursor-default"
            >
              {client}
            </span>
          ))}
        </div>

        <div className="flex animate-marquee whitespace-nowrap items-center" aria-hidden="true">
          {clients.map((client, i) => (
            <span 
              key={`dup-${client}-${i}`} 
              className="mx-8 md:mx-16 text-2xl md:text-3xl font-headline font-bold text-neutral hover:text-primary transition-colors duration-300 filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
