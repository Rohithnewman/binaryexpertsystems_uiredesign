import { CTA } from "@/components/sections/CTA";
import { TextReveal } from "@/components/animations/TextReveal";

export const metadata = {
  title: "About Us | Binary Expert Systems",
  description: "Global technology partner for enterprises.",
};

export default function AboutPage() {
  return (
    <div className="pt-[80px] min-h-screen flex flex-col pt-24">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-surface-primary border-b border-subtle">
        <div className="container mx-auto px-4 max-w-7xl">
          <TextReveal>
            <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6">
              About <br/> <span className="text-tertiary">Binary Expert Systems</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl leading-relaxed">
              Binary Expert Systems is a global technology powerhouse specializing in next-generation digital services. Based in India with operations spanning 3+ countries, we partner with enterprises to reimagine their businesses through innovative technology solutions.
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Timeline Placeholder */}
      <section className="py-24 bg-surface-secondary">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-headline font-bold mb-12">Our Journey</h2>
          <div className="flex flex-col space-y-8 border-l border-primary/30 pl-8 relative">
            {[2020, 2021, 2023, 2025].map((year, i) => (
              <TextReveal key={year} delay={i * 0.1} direction="left">
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-surface-primary border-2 border-primary" />
                  <h3 className="text-2xl font-headline font-bold text-primary mb-2">{year}</h3>
                  <p className="text-text-secondary">Milestone expansion and technological adoption across new global markets.</p>
                </div>
              </TextReveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
