"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ConsultationModal } from "@/components/shared/ConsultationModal";
import { SearchOverlay } from "./SearchOverlay";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Tiles", href: "/tiles" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-ag-black/80 backdrop-blur-md border-b border-ag-mist py-3"
          : isHome
          ? "bg-transparent"
          : "bg-ag-black"
      )}
    >
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <h1 className="text-xl md:text-2xl font-display font-semibold tracking-tighter text-ag-white group-hover:text-ag-copper transition-colors">
            GURUKRIPA TILES
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-sans uppercase tracking-widest text-ag-white/70 hover:text-ag-copper transition-colors",
                pathname === link.href && "text-ag-copper"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-ag-white/70 hover:text-ag-white transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>

          <div className="hidden lg:block">
            <ConsultationModal>
              <Button variant="outline" className="border-ag-copper text-ag-copper hover:bg-ag-copper hover:text-ag-white font-sans uppercase tracking-wider text-xs px-6">
                Book Consultation
              </Button>
            </ConsultationModal>
          </div>

          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="md:hidden text-ag-white" />
              }
            >
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-ag-black border-ag-mist text-ag-white p-0">
              <SheetHeader className="p-6 border-b border-ag-mist">
                <SheetTitle className="text-ag-white font-display text-xl md:text-2xl tracking-tighter">
                  GURUKRIPA TILES
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-6 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-display tracking-wide hover:text-ag-copper transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-6 border-t border-ag-mist">
                  <ConsultationModal>
                    <Button className="w-full bg-ag-copper hover:bg-ag-copper/90 text-ag-white font-sans uppercase tracking-wider">
                      Book Consultation
                    </Button>
                  </ConsultationModal>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
