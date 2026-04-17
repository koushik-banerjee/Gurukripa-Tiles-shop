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
  const items = [...materials, ...materials];

  return (
    <div className="bg-ag-charcoal py-10 border-y border-ag-mist/20 overflow-hidden flex whitespace-nowrap relative">

      {/* Side fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ag-charcoal to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ag-charcoal to-transparent z-10" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
        className="flex items-center space-x-20 px-6"
      >
        {items.map((material, i) => (
          <div key={i} className="flex items-center space-x-20">
            <span className="text-xs md:text-sm font-mono tracking-[0.5em] text-ag-white/25 hover:text-ag-copper transition-colors duration-300 cursor-default">
              {material}
            </span>

            <span className="w-1.5 h-1.5 rotate-45 border border-ag-copper/30" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}