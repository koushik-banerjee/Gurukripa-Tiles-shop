"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import * as React from "react";
import Image from "next/image";

const stages = [
  {
    title: "Material Purity",
    description: "Ethically sourced raw stone and high-grade minerals, processed with zero compromises on integrity.",
    image: "/images/tiles/obsidian-1.jpg",
    label: "Quartzite // 001",
    specs: ["MOHS // 7.5", "ORIGIN // ITALY"],
  },
  {
    title: "Precision Cut",
    description: "Laser-calibrated edges that allow for seamless 1mm grout lines for a monolithic architectural look.",
    image: "/images/tiles/silver-slate-1.jpg",
    label: "Joint // 002",
    specs: ["TOLERANCE // 0.1mm", "JOINT // 1mm"],
  },
  {
    title: "Architect-Grade",
    description: "Specified by world-renowned studios for hospitality, commercial, and ultra-high-end residential projects.",
    image: "/images/tiles/basalt-1.jpg",
    label: "Volume // 003",
    specs: ["RATING // R11", "ABSORPTION // <0.1%"],
  },
  {
    title: "Lifetime Support",
    description: "From curation to installation and maintenance, our specialist team accompanies your project for life.",
    image: "/images/tiles/carrara-1.jpg",
    label: "Legacy // 004",
    specs: ["SERVICE // 24/7", "TYPE // WHITE GLOVE"],
  },
];

export function WhySection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-ag-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Background Visual Stack */}
        <div className="absolute inset-0 z-0">
          {stages.map((stage, i) => (
            <BackgroundLayer 
              key={i} 
              image={stage.image} 
              index={i} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
          <div className="absolute inset-0 bg-ag-black/50 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-ag-black via-transparent to-ag-black z-10" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Column: Fixed Layout / Dynamic Text */}
            <div className="space-y-12">
               <motion.div
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 className="space-y-4"
               >
                  <span className="text-ag-copper font-mono text-xs uppercase tracking-[0.4em] block">Our Ethos</span>
                  <h2 className="text-4xl md:text-7xl font-display font-semibold tracking-tighter text-ag-white">
                    WHY <br /> <span className="text-ag-sand italic">GURUKRIPA.</span>
                  </h2>
               </motion.div>

               <div className="relative h-64 md:h-80">
                  {stages.map((stage, i) => (
                    <TextLayer 
                      key={i} 
                      stage={stage} 
                      index={i} 
                      scrollYProgress={scrollYProgress} 
                    />
                  ))}
               </div>
            </div>

            {/* Right Column: Visual Accent */}
            <div className="hidden lg:block relative h-[60vh] border border-ag-mist/10 overflow-hidden">
               <div className="absolute top-12 right-12 w-24 h-24 border-t border-r border-ag-copper/30" />
               <div className="absolute bottom-12 left-12 w-24 h-24 border-b border-l border-ag-copper/30" />
               
               {/* Metadata Progress */}
               <div className="absolute bottom-12 right-12 text-right space-y-2">
                  <div className="text-[10px] font-mono text-ag-sand/30 uppercase tracking-[0.3em]">Phase</div>
                  <div className="flex justify-end gap-1">
                     {stages.map((_, i) => (
                       <ProgressDot key={i} index={i} scrollYProgress={scrollYProgress} />
                     ))}
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function BackgroundLayer({ image, index, scrollYProgress }: { image: string, index: number, scrollYProgress: any }) {
  const start = index * 0.25;
  const end = (index + 1) * 0.25;
  
  // Cross-fade logic with strictly increasing clamped ranges
  const opacity = useTransform(
    scrollYProgress, 
    [
      Math.max(0, start - 0.1), 
      Math.max(0.01, start), 
      Math.min(0.99, end), 
      Math.min(1, end + 0.1)
    ], 
    [index === 0 ? 1 : 0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [Math.max(0, start), Math.min(1, end)],
    [1.1, 1]
  );

  return (
    <motion.div 
      style={{ opacity, scale }}
      className="absolute inset-0"
    >
      <Image
        src={image}
        alt="Stone Texture"
        fill
        className="object-cover grayscale brightness-50"
      />
    </motion.div>
  );
}

function TextLayer({ stage, index, scrollYProgress }: { stage: any, index: number, scrollYProgress: any }) {
  const start = index * 0.25;
  const end = (index + 1) * 0.25;

  const opacity = useTransform(
    scrollYProgress,
    [
      Math.max(0, start - 0.05), 
      Math.max(0.01, start), 
      Math.min(0.99, end - 0.05), 
      Math.min(1, end)
    ],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [
      Math.max(0, start - 0.05), 
      Math.max(0.01, start), 
      Math.min(0.99, end - 0.05), 
      Math.min(1, end)
    ],
    [50, 0, 0, -50]
  );

  return (
    <motion.div 
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center space-y-6"
    >
      <div className="flex gap-4">
        {stage.specs.map((spec: string, i: number) => (
          <span key={i} className="text-[10px] font-mono text-ag-copper tracking-widest border border-ag-copper/30 px-3 py-1">
            {spec}
          </span>
        ))}
      </div>
      <h3 className="text-3xl md:text-5xl font-display text-ag-white">
        {stage.title}
      </h3>
      <p className="text-ag-sand/60 font-sans text-lg md:text-xl leading-relaxed max-w-md">
        {stage.description}
      </p>
    </motion.div>
  );
}

function ProgressDot({ index, scrollYProgress }: { index: number, scrollYProgress: any }) {
  const start = index * 0.25;
  const end = (index + 1) * 0.25;
  
  const width = useTransform(
    scrollYProgress,
    [Math.max(0, start), Math.min(1, end)],
    ["12px", "48px"]
  );

  const backgroundColor = useTransform(
    scrollYProgress,
    [Math.max(0, start), Math.min(1, end)],
    ["rgba(184, 115, 51, 0.2)", "rgba(184, 115, 51, 1)"]
  );

  return (
    <motion.div 
      style={{ width, backgroundColor }}
      className="h-1 rounded-full"
    />
  );
}
