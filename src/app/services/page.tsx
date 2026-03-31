import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTA } from "@/components/sections/CTA";

export const metadata = {
  title: "Our Services | Binary Expert Systems",
  description: "Explore our full range of digital services.",
};

export default function ServicesPage() {
  return (
    <div className="pt-[80px] min-h-screen flex flex-col">
      {/* Reusing Home Page Services Grid slightly padded */}
      <div className="pt-12">
        <ServicesGrid />
      </div>

      {/* Tech Stack Marquee / Cloud Placeholder */}
      <section className="py-24 bg-surface-primary border-t border-subtle">
        <div className="container mx-auto px-4 max-w-7xl text-center">
           <h2 className="text-3xl font-headline font-bold mb-12">Technologies We Master</h2>
           <div className="flex flex-wrap justify-center gap-4">
               {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'Figma', 'React Native', 'Flutter', 'TailwindCSS', 'GSAP'].map(tech => (
                 <span key={tech} className="px-6 py-3 border border-subtle rounded-full text-sm font-label uppercase text-text-secondary hover:text-primary hover:border-primary transition-colors cursor-default">
                    {tech}
                 </span>
               ))}
           </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
