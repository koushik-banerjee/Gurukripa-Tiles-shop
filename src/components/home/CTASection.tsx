"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function CTASection() {
  const targetRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={targetRef}
      className="py-40 md:py-60 px-6 bg-ag-black relative overflow-hidden text-center"
    >
      {/* Parallax Background */}
      <motion.div
        style={{
          y: backgroundY,
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
        className="absolute inset-0 z-0 opacity-40"
      >
        <Image
          src="/images/tiles/obsidian-1.jpg"
          alt="Dark Texture"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover grayscale"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ag-black via-transparent to-ag-black" />
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto relative z-10 space-y-16">

        {/* Title Block */}
        <div className="space-y-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-ag-copper font-mono text-xs uppercase tracking-[0.4em] block"
          >
            Final Collaboration
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
            className="text-5xl md:text-8xl font-display font-semibold tracking-tighter text-ag-white leading-none"
          >
            Define Your <br />
            <span className="italic text-ag-sand/50">Space.</span>
          </motion.h2>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.25, duration: 0.9 }}
          style={{
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
          className="text-ag-sand/70 font-sans max-w-xl mx-auto text-lg leading-relaxed"
        >
          Whether you're planning a landmark or curating a sanctuary,
          our surfaces provide the canvas for your architectural vision.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="pt-12"
        >
          <Button
            asChild
            className="bg-ag-copper hover:bg-ag-copper/90 text-ag-white px-16 py-8 text-sm uppercase tracking-widest rounded-none h-auto transition-transform duration-300 hover:scale-105"
          >
            <Link href="/contact">Book Consultation</Link>
          </Button>
        </motion.div>

      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 right-0 w-[1px] h-32 bg-gradient-to-b from-ag-copper/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-[1px] h-32 bg-gradient-to-t from-ag-copper/30 to-transparent" />
    </section>
  );
}