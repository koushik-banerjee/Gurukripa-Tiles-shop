"use client";

import { motion } from "framer-motion";

const materials = [
  "PORCELAIN",
  "MARBLE",
  "CEMENT",
  "TERRAZZO",
  "MOSAIC",
  "STONE",
  "SLATE",
  "TRAVERTINE",
];

export function MarqueeBand() {
  return (
    <div className="bg-ag-charcoal py-10 border-y border-ag-mist/20 overflow-hidden flex whitespace-nowrap relative">
      {/* Subtle Side Fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ag-charcoal to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ag-charcoal to-transparent z-10" />
      
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
        className="flex space-x-20 px-6 items-center"
      >
        {[...materials, ...materials, ...materials].map((material, i) => (
          <div key={i} className="flex items-center space-x-20">
            <span className="text-xs md:text-sm font-mono tracking-[0.5em] text-ag-white/25 hover:text-ag-copper transition-colors cursor-default">
              {material}
            </span>
            <span className="w-1.5 h-1.5 rotate-45 border border-ag-copper/30" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
