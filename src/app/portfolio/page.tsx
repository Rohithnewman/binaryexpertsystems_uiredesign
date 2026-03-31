import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase";
import { CTA } from "@/components/sections/CTA";

export const metadata = {
  title: "Portfolio | Binary Expert Systems",
  description: "See our latest projects and success stories.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-[80px] min-h-screen flex flex-col">
      <div className="pt-12">
        <PortfolioShowcase />
      </div>

      <section className="py-24 bg-surface-secondary border-t border-subtle">
        <div className="container mx-auto px-4 max-w-7xl text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">More case studies archiving soon.</h2>
            <p className="text-text-secondary text-lg">We are actively migrating our success stories into the new platform.</p>
        </div>
      </section>

      <CTA />
    </div>
  );
}
