"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-surface-secondary border-t border-subtle overflow-hidden mt-auto">
      {/* Decorative Wave/Geometric Divider can go here */}
      <div className="h-1 w-full bg-gradient-primary"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold font-headline text-text-primary mb-4 block">
              Binary
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Next-generation web & mobile solutions for enterprises navigating digital transformation.
            </p>
            <p className="text-text-secondary text-sm mb-2">Tamil Nadu, India & UAE</p>
            <p className="text-text-secondary text-sm">info@binaryexpertsystems.co.in</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-label text-text-primary mb-6">Services</h4>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Dev', 'UI/UX Design', 'Cloud Solutions'].map(svc => (
                 <li key={svc}>
                    <Link href="/services" className="text-text-secondary text-sm hover:text-primary transition-colors">
                      {svc}
                    </Link>
                 </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-label text-text-primary mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Portfolio', 'Blog', 'Contact'].map(link => (
                 <li key={link}>
                    <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-text-secondary text-sm hover:text-primary transition-colors">
                      {link}
                    </Link>
                 </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-label text-text-primary mb-6">Stay Updated</h4>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-surface-tertiary border border-subtle px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors rounded-none"
                required
              />
              <button 
                type="submit"
                className="bg-text-primary text-bg-primary px-4 py-3 text-sm font-label uppercase hover:bg-neutral-light transition-colors"
                >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 mt-12 border-t border-subtle">
          <p className="text-text-secondary text-sm">
            © {year} Binary Expert Systems. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             {/* Social Links Placeholder */}
             <a href="#" className="text-text-secondary hover:text-primary transition-colors">LinkedIn</a>
             <a href="#" className="text-text-secondary hover:text-primary transition-colors">Twitter</a>
             <a href="#" className="text-text-secondary hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
