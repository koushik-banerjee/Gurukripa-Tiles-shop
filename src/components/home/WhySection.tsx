"use client";

import { motion, useScroll } from "framer-motion";
import * as React from "react";
import Image from "next/image";

type Stage = {
  title: string;
  description: string;
  image: string;
  label: string;
  specs: string[];
};

const stages: Stage[] = [
  {
    title: "Material Purity",
    description:
      "Ethically sourced raw stone and high-grade minerals processed with zero compromises on integrity.",
    image: "/images/tiles/obsidian-1.jpg",
    label: "Quartzite // 001",
    specs: ["MOHS // 7.5", "ORIGIN // ITALY"],
  },
  {
    title: "Precision Cut",
    description:
      "Laser calibrated edges allowing seamless 1mm grout lines.",
    image: "/images/tiles/silver-slate-1.jpg",
    label: "Joint // 002",
    specs: ["TOLERANCE // 0.1mm", "JOINT // 1mm"],
  },
  {
    title: "Architect Grade",
    description:
      "Specified by global studios for hospitality and luxury projects.",
    image: "/images/tiles/basalt-1.jpg",
    label: "Volume // 003",
    specs: ["RATING // R11", "ABSORPTION // <0.1%"],
  },
  {
    title: "Lifetime Support",
    description:
      "From curation to installation our specialists accompany your project for life.",
    image: "/images/tiles/carrara-1.jpg",
    label: "Legacy // 004",
    specs: ["SERVICE // 24/7", "TYPE // WHITE GLOVE"],
  },
];

export function WhySection() {

  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const i = Math.min(stages.length - 1, Math.floor(v * stages.length));
      setIndex(i);
    });
  }, [scrollYProgress]);

  const stage = stages[index];

  return (
    <section ref={ref} className="bg-black py-32 h-[400vh]">

      <div className="sticky top-24 flex justify-center">

        {/* MAIN CARD */}
        <div className="w-full max-w-6xl mx-6 rounded-[32px] bg-neutral-900 border border-white/10 p-6 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">

          {/* IMAGE */}
          <div className="relative w-full lg:w-1/2 h-[300px] md:h-[480px] rounded-2xl overflow-hidden flex-shrink-0">

            <Image
              src={stage.image}
              alt={stage.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

          </div>

          {/* TEXT */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-white">

            <span className="px-4 py-1 bg-ag-copper/20 border border-ag-copper/40 rounded-full w-fit text-xs tracking-widest">
              {stage.label}
            </span>

            <h2 className="text-3xl md:text-4xl mt-6 font-display leading-tight">
              {stage.title}
            </h2>

            <p className="text-white/70 mt-4 text-base md:text-lg leading-relaxed font-sans">
              {stage.description}
            </p>

            {/* SPECS */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8">

              {stage.specs.map((s, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 md:px-6 py-3 md:py-4"
                >
                  <p className="text-[10px] text-white/50 uppercase tracking-widest font-mono">
                    Spec
                  </p>
                  <p className="text-sm md:text-lg font-semibold">{s}</p>
                </div>
              ))}

            </div>

            {/* CTA */}
            <button className="mt-10 border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition uppercase tracking-widest text-xs font-bold w-full md:w-fit">
              Explore Materials
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}