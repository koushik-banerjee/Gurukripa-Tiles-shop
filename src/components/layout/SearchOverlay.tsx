"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, Loader2 } from "lucide-react";
import { tiles } from "@/lib/tiles-data";
import Image from "next/image";
import Link from "next/link";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const results = React.useMemo(() => {
    if (query.length < 2) return [];
    return tiles.filter(tile => 
      tile.name.toLowerCase().includes(query.toLowerCase()) ||
      tile.collection.toLowerCase().includes(query.toLowerCase()) ||
      tile.material.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-ag-black/95 backdrop-blur-xl flex flex-col"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-8">
            <h2 className="text-ag-white font-display text-2xl tracking-tighter">Search Catalogue</h2>
            <button 
              onClick={onClose}
              className="p-3 border border-ag-mist text-ag-white/60 hover:text-ag-white hover:border-ag-white transition-all rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search bar */}
          <div className="flex-grow flex flex-col items-center justify-start pt-20 px-6">
            <div className="w-full max-w-3xl relative">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 text-ag-copper" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Find a material, series, or collection..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-b-2 border-ag-mist focus:border-ag-copper py-6 pl-12 text-3xl md:text-5xl font-display text-ag-white outline-none transition-colors placeholder:text-ag-white/10"
              />
            </div>

            {/* Results */}
            <div className="w-full max-w-3xl mt-16 space-y-8">
              {query.length >= 2 && results.length > 0 ? (
                <>
                  <h3 className="text-xs uppercase tracking-[0.3em] text-ag-sand/50 font-mono">Found {results.length} designs</h3>
                  <div className="grid grid-cols-1 gap-6">
                    {results.map((tile) => (
                      <Link 
                        key={tile.id}
                        href={`/tiles/${tile.slug}`}
                        onClick={onClose}
                        className="group flex items-center space-x-6 p-4 border border-ag-mist/30 hover:border-ag-copper transition-all bg-ag-charcoal/50"
                      >
                        <div className="relative w-20 h-20 overflow-hidden border border-ag-mist">
                          <Image src={tile.images[0]} alt={tile.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all" />
                        </div>
                        <div className="flex-grow">
                          <div className="text-xs uppercase tracking-widest text-ag-copper mb-1">{tile.collection}</div>
                          <div className="text-xl font-display text-ag-white">{tile.name}</div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-ag-white/20 group-hover:text-ag-copper group-hover:translate-x-2 transition-all" />
                      </Link>
                    ))}
                  </div>

                </>
              ) : query.length >= 2 ? (
                <div className="text-center py-20">
                  <p className="text-ag-sand/50 font-display text-2xl italic">No matches for "{query}"</p>
                </div>
              ) : null}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
