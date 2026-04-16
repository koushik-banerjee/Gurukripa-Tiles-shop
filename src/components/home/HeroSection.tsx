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

  const title = "GURUKRIPA TILES";
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section 
      ref={targetRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-ag-black"
    >
      {/* Cinematic Background */}
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ag-black/20 via-transparent to-ag-black/80 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/static/tilesVideo.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <motion.div 
        style={{ y: textY }}
        className="relative z-20 text-center px-6"
      >
        <div className="overflow-hidden mb-4">
          <motion.h1 
            className="text-[12vw] sm:text-[10vw] md:text-[12vw] font-display font-semibold leading-none tracking-tighter text-ag-white"
          >
            {title.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className="inline-block whitespace-pre"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-lg md:text-2xl font-display italic text-ag-sand tracking-wide mb-12"
        >
          Surface. Redefined.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button asChild className="bg-ag-copper hover:bg-ag-copper/90 text-ag-white px-8 py-6 text-sm uppercase tracking-widest rounded-none h-auto">
            <Link href="/tiles">Explore Tiles</Link>
          </Button>
          <Button asChild variant="outline" className="border-ag-white text-ag-white hover:bg-ag-white hover:text-ag-black px-8 py-6 text-sm uppercase tracking-widest rounded-none h-auto">
            <Link href="/contact">Book a Visit</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-ag-copper to-transparent" 
        />
        <span className="text-[10px] uppercase tracking-[0.3em] text-ag-sand/50">Scroll</span>
      </motion.div>
    </section>
  );
}

