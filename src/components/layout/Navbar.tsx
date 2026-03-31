"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FiSun, FiMoon } from "react-icons/fi";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Services", path: "/#services" },
    { name: "Portfolio", path: "/#portfolio" },
    { name: "About", path: "/#about" },
    { name: "Blog", path: "/#blog" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-glass border-b border-subtle h-[60px] md:h-[72px]" : "bg-transparent h-[80px]"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between max-w-7xl">
        <Link href="/" className="group flex items-center space-x-2">
          {/* Logo replaced text with brand image */}
          <img 
            src="/binary%20logo.png" 
            alt="Binary Expert Systems" 
            className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                "relative text-sm font-label uppercase text-text-secondary hover:text-text-primary transition-colors",
                "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                pathname === link.path && "text-text-primary after:w-full"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action + Theme Toggle */}
        <div className="flex items-center space-x-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 border border-subtle rounded-md hover:bg-neutral-800 transition-colors flex items-center justify-center text-text-primary"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FiMoon className="w-5 h-5" /> : <FiSun className="w-5 h-5" />}
            </button>
          )}

          <Link
            href="/#contact"
            className="hidden md:inline-flex px-5 py-2.5 bg-primary text-white font-label text-sm uppercase rounded-brutalist hover:bg-primary-light hover:shadow-glow hover:-translate-y-0.5 transition-all magnetic-active"
          >
            Start Project
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5 flex flex-col items-end">
              <span className={cn("block w-6 h-0.5 bg-text-primary transition-transform", menuOpen && "rotate-45 translate-y-2")} />
              <span className={cn("block w-5 h-0.5 bg-text-primary transition-opacity", menuOpen && "opacity-0")} />
              <span className={cn("block w-6 h-0.5 bg-text-primary transition-transform", menuOpen && "-rotate-45 -translate-y-2")} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="absolute top-[60px] inset-x-0 bg-primary h-screen md:hidden flex flex-col p-6 space-y-6">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold font-headline text-text-primary"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-6 py-3 bg-primary text-white font-label text-center uppercase rounded-brutalist w-full"
          >
            Start Project
          </Link>
        </div>
      )}
    </nav>
  );
};
