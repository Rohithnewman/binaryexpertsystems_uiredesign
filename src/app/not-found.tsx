import Link from "next/link";
import { MagneticButton } from "@/components/animations/MagneticButton";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Decorative Binary Rain background placeholder */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif')] bg-cover bg-center pointer-events-none" />
      
      <div className="relative z-10 text-center">
        <h1 className="text-8xl md:text-9xl font-headline font-bold text-primary mb-4 drop-shadow-[0_0_20px_rgba(22,136,87,0.5)] animate-pulse">
           404
        </h1>
        <h2 className="text-2xl md:text-3xl text-text-primary mb-8 font-headline font-bold uppercase tracking-widest">
           System Offline
        </h2>
        <p className="text-text-secondary text-lg mb-12 max-w-md mx-auto">
           The digital node you are looking for has been moved, deleted, or does not exist on our servers.
        </p>
        
        <MagneticButton>
          <Link 
            href="/" 
            className="px-8 py-4 bg-transparent border border-primary text-primary font-label uppercase text-sm rounded-brutalist hover:bg-primary/10 transition-colors inline-block"
          >
            Re-Initialize System (Go Home)
          </Link>
        </MagneticButton>
      </div>
    </div>
  );
}
