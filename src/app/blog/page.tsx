import { CTA } from "@/components/sections/CTA";

export const metadata = {
  title: "Insights & Articles | Binary Expert Systems Blog",
  description: "Stay updated with the latest in web development, mobile technology, and digital marketing."
};

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

export default function BlogPage() {
  return (
    <div className="pt-[80px] min-h-screen flex flex-col pt-24">
      <section className="py-24 bg-surface-primary border-b border-subtle">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6 text-text-primary">
            Insights & <span className="text-secondary italic">Articles</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl">
            Thoughts, technical deep-dives, and industry perspectives from our engineering teams.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  );
}
