import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Mono, DM_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "ANTIGRAVITY | Surface. Redefined.",
  description: "Luxury tiles for architectural, designer, and high-end interiors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased dark", "font-sans", geist.variable)}>
      <body
        className={`${cormorant.variable} ${dmMono.variable} ${geist.variable} font-sans bg-ag-black text-ag-white min-h-screen selection:bg-ag-copper/30`}
      >
        {children}
      </body>
    </html>
  );
}
