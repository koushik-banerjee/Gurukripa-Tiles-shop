"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import * as React from "react";

const testimonials = [
  {
    quote: "The precision of the Obsidian Noir tiles allowed us to create a truly monolithic lobby that feels carved from a single block.",
    author: "Zarah H.",
    project: "Visionary Studio",
  },
  {
    quote: "Gurukripa Tiles' curation of raw materials is unmatched. Their travertine has a soul that you just don't find in mass-produced alternatives.",
    author: "Marcus Aurelius",
    project: "Heritage Restoration",
  },
];

export function Testimonials() {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const xOffset = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section 
      ref={targetRef}
      className="py-32 md:py-48 px-6 bg-ag-stone relative overflow-hidden"
    >
      {/* Background Parallax Text */}
      <motion.div 
        style={{ x: xOffset }}
        className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap opacity-[0.03] pointer-events-none select-none"
      >
        <span className="text-[30vw] font-display font-bold leading-none tracking-tighter">
          PHILOSOPHY•TESTIMONIALS•HERITAGE•PHILOSOPHY
        </span>
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col space-y-24">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className={`flex flex-col ${i % 2 === 0 ? "items-start" : "items-end"} space-y-8`}
            >
              <div className={`max-w-3xl ${i % 2 === 0 ? "text-left" : "text-right"} relative`}>
                <div className={`absolute -top-12 ${i % 2 === 0 ? "-left-8" : "-right-8"} opacity-10`}>
                   <span className="text-8xl font-display">“</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display italic leading-tight text-ag-white">
                  {t.quote}
                </h2>
              </div>
              
              <div className={`flex items-center space-x-4 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse space-x-reverse"}`}>
                <div className="w-12 h-[1px] bg-ag-copper" />
                <div className={i % 2 === 0 ? "text-left" : "text-right"}>
                  <div className="text-ag-white font-display text-xl">{t.author}</div>
                  <div className="text-ag-sand/50 text-[10px] uppercase tracking-[0.3em] font-mono mt-1">
                    {t.project}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

