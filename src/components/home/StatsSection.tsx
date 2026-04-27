"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import * as React from "react";
import Image from "next/image";

const stats = [
  { value: "1000+", label: "Architectural Designs" },
  { value: "45+", label: "Tiles Categories" },
  { value: "Premium", label: "Exquisite Selection" },
  { value: "Exclusive", label: "White-Glove Support" },
];

export function StatsSection() {
  const targetRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={targetRef}
      className="relative min-h-[90vh] py-24 md:py-40 overflow-hidden bg-ag-black border-y border-ag-mist/20 flex items-center"
    >
      {/* Parallax Background */}
      <motion.div
        style={{
          y: backgroundY,
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
        className="absolute inset-0 z-0 opacity-50"
      >
        <Image
          src="/images/tiles/basalt-1.jpg"
          alt="Dark Marble"
          fill
          sizes="100vw"
          className="object-cover grayscale"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-ag-black via-transparent to-ag-black" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-16">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  index,
}: {
  stat: { value: string; label: string };
  index: number;
}) {
  const ref = React.useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: "easeOut",
      }}
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
        willChange: "transform, opacity",
        transform: "translateZ(0)",
      }}
      className="p-8 md:p-12 border border-ag-mist/20 backdrop-blur-xl relative group overflow-hidden"
    >
      {/* Accent Corner */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-ag-copper/30 group-hover:border-ag-copper transition-colors duration-500" />

      <div className="space-y-4">
        <motion.div
          initial={{ scale: 0.85 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-semibold text-ag-white"
        >
          {stat.value}
        </motion.div>

        <div className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-ag-sand/50 font-mono leading-relaxed">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}