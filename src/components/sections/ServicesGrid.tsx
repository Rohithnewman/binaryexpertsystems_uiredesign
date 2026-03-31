"use client";

import { Code, Smartphone, PenTool, TrendingUp, Cloud, Briefcase, ShoppingCart, Terminal } from "lucide-react";
import RadialOrbitalTimeline, { TimelineItem } from "@/components/ui/radial-orbital-timeline";
import { Badge } from "@/components/ui/badge";

const serviceData: TimelineItem[] = [
  {
    id: 1,
    title: "Web Development",
    date: "Core Engine",
    content: "Scalable, lightning-fast web solutions built on modern tech stacks.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 3, 5],
    status: "completed",
    energy: 95,
  },
  {
    id: 2,
    title: "Mobile App Dev",
    date: "Mobile Matrix",
    content: "Native & cross-platform mobile experiences that dominate app stores.",
    category: "Development",
    icon: Smartphone,
    relatedIds: [1, 3],
    status: "in-progress",
    energy: 85,
  },
  {
    id: 3,
    title: "UI/UX Design",
    date: "Neural Interface",
    content: "Human-centered design systems engineered for conversion and delight.",
    category: "Design",
    icon: PenTool,
    relatedIds: [1, 2, 8],
    status: "completed",
    energy: 90,
  },
  {
    id: 4,
    title: "SEO & Content",
    date: "Hyper-Growth",
    content: "Data-driven growth strategies that push your brand to the top.",
    category: "Marketing",
    icon: TrendingUp,
    relatedIds: [1, 7],
    status: "pending",
    energy: 60,
  },
  {
    id: 5,
    title: "Cloud Solutions",
    date: "Serverless",
    content: "Scale without limits. We architect and manage your cloud infrastructure.",
    category: "Infrastructure",
    icon: Cloud,
    relatedIds: [1, 8],
    status: "completed",
    energy: 100,
  },
  {
    id: 6,
    title: "IT Consulting",
    date: "Strategy Loop",
    content: "Strategic technology guidance to navigate digital transformation.",
    category: "Consulting",
    icon: Briefcase,
    relatedIds: [5, 8],
    status: "in-progress",
    energy: 70,
  },
  {
    id: 7,
    title: "E-Commerce",
    date: "Conversion Ops",
    content: "Sell more, sell smarter. End-to-end digital storefront architectures.",
    category: "Development",
    icon: ShoppingCart,
    relatedIds: [1, 4],
    status: "pending",
    energy: 50,
  },
  {
    id: 8,
    title: "Custom Software",
    date: "Terminal Base",
    content: "Tailored solutions engineered specifically for your unique challenges.",
    category: "Development",
    icon: Terminal,
    relatedIds: [1, 5, 6],
    status: "completed",
    energy: 90,
  },
];

export const ServicesGrid = () => {
  return (
    <section className="py-24 md:py-32 bg-surface-secondary relative overflow-hidden" id="services">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8 md:mb-12 flex flex-col items-center text-center relative z-20 pointer-events-none">
          <div className="max-w-3xl pointer-events-auto flex flex-col items-center">
            <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1.5 uppercase tracking-widest bg-primary/5 shadow-glow">
              Capabilities Network
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-headline font-bold mb-6 text-text-primary">
              <span className="text-primary mr-2">/</span>Core Digital Services
            </h2>
            <p className="text-text-secondary font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Interact with the nodes below to explore our cross-functional connected service pipelines and architectural capabilities.
            </p>
          </div>
        </div>

        {/* The Radial Orbital Timeline wrapper */}
        <div className="relative z-10 w-full flex justify-center">
          <RadialOrbitalTimeline timelineData={serviceData} />
        </div>
      </div>
    </section>
  );
};
