import { Preloader } from "@/components/layout/Preloader";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase";
import { CTA } from "@/components/sections/CTA";
import { TextReveal } from "@/components/animations/TextReveal";

const blogPosts = [
  {
    id: 1,
    title: "Navigating Digital Transformation in 2026",
    excerpt: "Enterprise systems are shifting rapidly. Learn how to architect your modern technical integrations directly from our senior consultants.",
    date: "March 15, 2026",
    category: "IT Consulting",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Future of React and Next.js Architecture",
    excerpt: "With server components dominating the frontend landscape, how should startups scale their Next.js codebases?",
    date: "April 02, 2026",
    category: "Web Development",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Designing Brutalist Interfaces that Convert",
    excerpt: "Breaking down the 'Antigravity Brutalist' design system used by top-tier engineering firms.",
    date: "May 11, 2026",
    category: "UI/UX Design",
    readTime: "4 min read"
  }
];

export default function Home() {
  return (
    <>
      <Preloader />
      
      <main className="flex flex-col w-full overflow-hidden">
        <Hero />
        
        <ServicesGrid />

        {/* Tech Stack section from old Services page */}
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

        {/* Timeline from old About page */}
        <section id="about" className="py-24 bg-surface-secondary border-t border-subtle">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-12">Our Journey</h2>
            <div className="flex flex-col space-y-8 border-l border-primary/30 pl-8 relative">
              {[
                { year: 2020, title: "Foundation", desc: "Binary Expert Systems was established to deliver specialized web solutions." },
                { year: 2021, title: "Expansion", desc: "Expanded operations to 3+ countries, developing enterprise mobile applications." },
                { year: 2023, title: "Transformation", desc: "Adopted cutting-edge frameworks like Next.js and specialized in AI integration." },
                { year: 2025, title: "Global Reach", desc: "Milestone expansion and technological adoption across new global markets." }
              ].map((item, i) => (
                <TextReveal key={item.year} delay={i * 0.1} direction="left">
                  <div className="relative">
                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-surface-primary border-2 border-primary" />
                    <h3 className="text-2xl font-headline font-bold text-primary mb-2">{item.year} - {item.title}</h3>
                    <p className="text-text-secondary">{item.desc}</p>
                  </div>
                </TextReveal>
              ))}
            </div>
          </div>
        </section>

        <StatsCounter />
        <PortfolioShowcase />

        {/* Blog Section from old Blog page */}
        <section id="blog" className="py-24 bg-surface-primary border-t border-b border-subtle">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-text-primary">
              Insights & <span className="text-secondary italic">Articles</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mb-16">
              Thoughts, technical deep-dives, and industry perspectives from our engineering teams.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="group relative border border-subtle bg-bg-tertiary p-8 hover:bg-surface-secondary transition-colors rounded-brutalist cursor-pointer flex flex-col">
                   <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-label uppercase tracking-widest text-primary border border-primary/30 px-3 py-1 bg-primary/10">
                        {post.category}
                      </span>
                      <span className="text-xs text-text-secondary">{post.readTime}</span>
                   </div>
                   
                   <h2 className="text-2xl font-headline font-bold mb-4 text-text-primary group-hover:text-primary transition-colors">
                     {post.title}
                   </h2>
                   <p className="text-text-secondary mb-8 line-clamp-3 leading-relaxed">
                     {post.excerpt}
                   </p>
                   
                   <div className="mt-auto flex items-center justify-between">
                     <span className="text-sm text-text-secondary">{post.date}</span>
                     <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300">
                       Read Article →
                     </span>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}
