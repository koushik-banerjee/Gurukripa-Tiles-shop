"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  const targetRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={targetRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-ag-black"
    >
      {/* Background Video */}
      <motion.div
        style={{
          scale,
          opacity,
          willChange: "transform, opacity",
          transform: "translateZ(0)",
        }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ag-black/30 via-transparent to-ag-black/90 z-10" />

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/static/tilesVideo.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 text-center px-6 max-w-5xl"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-display font-semibold tracking-tight text-ag-white leading-tight"
        >
          {/* Mobile */}
          <span className="block sm:hidden text-4xl md:text-5xl">
            Gurukripa
          </span>

          <span className="block sm:hidden text-4xl italic text-ag-sand mt-1">
            Tiles
          </span>

          {/* Desktop */}
          <span className="hidden sm:block text-[9vw]">
            GURUKRIPA TILES
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-base sm:text-xl md:text-2xl font-display italic text-ag-sand tracking-wide mt-6 mb-10"
        >
          Surface. Redefined.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Button
            asChild
            className="bg-ag-copper hover:bg-ag-copper/90 text-ag-white px-8 py-6 text-sm uppercase tracking-widest rounded-none h-auto w-full sm:w-auto"
          >
            <Link href="/tiles">Explore Tiles</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-ag-white text-ag-white hover:bg-ag-white hover:text-ag-black px-8 py-6 text-sm uppercase tracking-widest rounded-none h-auto w-full sm:w-auto"
          >
            <Link href="/contact">Book a Visit</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-10 bg-gradient-to-b from-ag-copper to-transparent"
        />

        <span className="text-[10px] uppercase tracking-[0.3em] text-ag-sand/50">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}