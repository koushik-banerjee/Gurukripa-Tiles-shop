"use client";

import { motion } from "framer-motion";
import * as React from "react";

const testimonials = [
  {
    quote:
      "The precision of the Obsidian Noir tiles allowed us to create a truly monolithic lobby that feels carved from a single block.",
    author: "Zarah H.",
    project: "Visionary Studio",
  },
  {
    quote:
      "Gurukripa Tiles' curation of raw materials is unmatched. Their travertine has a soul that you just don't find in mass-produced alternatives.",
    author: "Marcus Aurelius",
    project: "Heritage Restoration",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 md:py-40 px-6 bg-ag-stone relative overflow-hidden">

      {/* Section Title */}
      <div className="max-w-6xl mx-auto mb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-semibold text-ag-white tracking-tight"
        >
          Trusted by Visionaries
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-ag-sand/60 mt-4 max-w-xl mx-auto text-lg"
        >
          Architects and designers across the world trust Gurukripa Tiles
          to bring their spaces to life.
        </motion.p>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="relative p-10 md:p-12 border border-ag-mist/20 bg-ag-black/40 backdrop-blur-lg group transition-all"
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 left-6 text-6xl text-ag-copper/20 font-display">
              "
            </div>

            {/* Quote */}
            <p className="text-ag-white text-xl md:text-2xl font-display italic leading-relaxed mb-8">
              {t.quote}
            </p>

            {/* Divider */}
            <div className="w-12 h-[1px] bg-ag-copper mb-6" />

            {/* Author */}
            <div>
              <div className="text-ag-white text-lg font-display">
                {t.author}
              </div>

              <div className="text-ag-sand/50 text-xs uppercase tracking-[0.35em] mt-1 font-mono">
                {t.project}
              </div>
            </div>

            {/* Hover Accent */}
            <div className="absolute inset-0 border border-ag-copper/0 group-hover:border-ag-copper/40 transition-all pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}