import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "sonner";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-display",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Gurukripa Tiles | Surface. Redefined.",
  description: "Luxury tiles for architectural, designer, and high-end interiors.",
};

import { LoadingScreen } from "@/components/shared/LoadingScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body
        className={`${cormorant.variable} ${dmMono.variable} ${dmSans.variable} font-sans bg-ag-black text-ag-white min-h-screen selection:bg-ag-copper/30 flex flex-col relative`}
      >
        {/* Cinematic Grain Overlay */}
        <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>

        <LoadingScreen />
        <Navbar />
        <main className="flex-grow">
          <NuqsAdapter>{children}</NuqsAdapter>
        </main>
        <Footer />
        <Toaster position="bottom-right" toastOptions={{
          style: {
            background: 'var(--ag-charcoal)',
            border: '1px solid var(--ag-mist)',
            color: 'var(--ag-white)',
          }
        }} />
        <WhatsAppButton />
      </body>
    </html>
  );
}
