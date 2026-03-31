import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://binaryexpertsystems.co.in'),
  title: {
    template: "%s | Binary Expert Systems",
    default: "Binary Expert Systems | Next-Gen Digital Hub"
  },
  description: "Transform your business with Binary Expert Systems. We deliver cutting-edge web development, mobile apps, UI/UX design, SEO, and IT consulting.",
  keywords: ["web development", "mobile app development", "digital transformation", "IT consulting", "SEO", "UI/UX design", "Antigravity Brutalist"],
  openGraph: {
    title: "Binary Expert Systems",
    description: "Next-generation digital capabilities for global disruptors.",
    url: "https://binaryexpertsystems.co.in",
    siteName: "Binary Expert Systems",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Binary Expert Systems",
    creator: "@bx_systems",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased text-primary selection:bg-primary/20 bg-primary overflow-x-hidden min-h-screen flex flex-col" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Preloader and PageTransition can wrap layout or be children */}
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
