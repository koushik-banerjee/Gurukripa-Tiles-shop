"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import * as React from "react";

export default function AboutPage() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="bg-ag-black min-h-screen text-ag-white overflow-hidden">
      {/* 01. IMMERSIVE HERO */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-ag-black/60 z-10" />
          <Image
            src="/images/tiles/basalt-1.jpg"
            alt="Material Texture"
            fill
            className="object-cover grayscale brightness-50"
            priority
          />
        </motion.div>

        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="mb-8"
          >
            <span className="text-ag-copper font-mono text-[10px] uppercase tracking-[0.8em]">An Architectural Legacy</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-[12vw] md:text-[8vw] font-display font-semibold leading-[0.85] tracking-tighter uppercase">
            {"Honest".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: i * 0.05, ease: [0.33, 1, 0.68, 1] }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="text-ag-sand italic font-light lowercase"
            >
              Craft.
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="w-full max-w-sm h-px bg-ag-copper/30 mx-auto mt-12"
          />
        </div>

        {/* Floating Specs */}
        <div className="absolute bottom-12 left-12 hidden md:block border-l border-ag-mist/30 pl-4 py-2">
          <p className="text-[10px] uppercase tracking-widest text-ag-sand/40 font-mono">Founding Date</p>
          <p className="text-sm font-sans">EST. 1994</p>
        </div>
      </section>

      {/* 02. THE VISION - STAGGERED LAYOUT */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 space-y-12"
            >
              <div className="space-y-4">
                <span className="text-ag-copper font-mono text-xs uppercase tracking-widest">01 / Philosophy</span>
                <h2 className="text-5xl md:text-8xl font-display leading-[0.9]">
                  Surface <br /> <span className="text-ag-sand/50 italic">as Substance</span>
                </h2>
              </div>
              <p className="text-xl md:text-2xl text-ag-sand/80 font-sans leading-relaxed max-w-2xl">
                We believe that the final layer of a space is the foundation of its atmosphere. 
                Gurukripa Tiles exists at the intersection of raw geological heritage and 
                uncompromising modern precision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-5 relative aspect-3/4 border border-ag-mist overflow-hidden translate-y-12"
            >
              <Image
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
                alt="Gurukripa Hardware and Building Material showroom"
                fill
                className="object-cover grayscale hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 03. THE FOUNDING TEAM - EDITORIAL */}
      <section className="py-32 px-6 border-t border-ag-mist/10 bg-ag-charcoal/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="space-y-4">
              <span className="text-ag-copper font-mono text-xs uppercase tracking-widest">02 / Leadership</span>
              <h2 className="text-5xl md:text-7xl font-display">The Team</h2>
            </div>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
            {[
              {
                name: "Uday Singh Rajpurohit",
                role: "Leadership",
                image: "/static/owner.jpeg",
              },
              {
                name: "Ashok Singh",
                role: "Operations",
                image: "/static/manager.jpeg",
              },
              {
                name: "Mukesh Kumar Bhati",
                role: "Site Support",
                image: "/static/worker.jpeg",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative"
              >
                <div className="relative aspect-4/5 bg-ag-stone/20 border border-ag-mist/20 overflow-hidden mb-8">
                  <div className="absolute inset-0 bg-linear-to-t from-ag-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="relative">
                  <span className="text-[10px] font-mono text-ag-copper uppercase tracking-[0.3em] mb-2 block">{member.role}</span>
                  <h3 className="text-3xl font-display text-ag-white mb-4">{member.name}</h3>
                  <div className="h-px w-full bg-ag-mist/20 mb-4 group-hover:w-1/2 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. VALUES - TECHNICAL SPEC SHEET */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto border border-ag-mist/30 bg-ag-charcoal">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ag-mist/30">
            {[
              {
                title: "Materiality",
                desc: "We respect the raw origin of every material, from quarry to kiln.",
                code: "M-1.02"
              },
              {
                title: "Precision",
                desc: "Laser-cut edges and micron-perfect thickness for seamless installations.",
                code: "P-4.05"
              },
              {
                title: "Legacy",
                desc: "Built to last. Surfaces that witness generations of stories.",
                code: "L-9.01"
              },
            ].map((value, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="p-12 space-y-6 group cursor-default"
              >
                <span className="text-ag-copper font-mono text-[10px] tracking-widest">{value.code}</span>
                <h3 className="text-2xl font-display text-ag-white uppercase tracking-wider">{value.title}</h3>
                <p className="text-ag-sand/50 text-sm leading-relaxed font-sans">{value.desc}</p>
                <div className="w-8 h-px bg-ag-copper/30 group-hover:w-16 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. SUSTAINABILITY - THE BEDROCK */}
      <section className="relative py-48 px-6 bg-ag-black border-t border-ag-mist/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full opacity-40 pointer-events-none">
          <Image
             src="/images/tiles/basalt-1.jpg"
             alt="Sustainability Backdrop"
             fill
             className="object-cover grayscale"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-8">
            <span className="text-ag-copper font-mono text-xs uppercase tracking-widest">Conscious Extraction</span>
            <h2 className="text-5xl md:text-9xl font-display text-ag-white leading-tight">
               Built for <br /> <span className="italic text-ag-sand/30">Generations</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 pt-12 border-t border-ag-mist/20">
              <p className="text-ag-sand/70 leading-relaxed font-sans">
                Our commitment to the Earth is as strong as the materials we provide. 
                We utilize 100% water recycling in our production facilities.
              </p>
              <div className="flex flex-col justify-end">
                 <p className="text-[10px] uppercase tracking-widest text-ag-sand/40 font-mono mb-2 leading-relaxed">
                   Low-Emission Logistics <br /> 100% Recyclable Packaging
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}