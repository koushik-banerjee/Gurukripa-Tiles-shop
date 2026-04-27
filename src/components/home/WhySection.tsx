"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
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
      "Laser-calibrated edges allowing seamless 1mm grout lines for monolithic architecture.",
    image: "/images/tiles/silver-slate-1.jpg",
    label: "Joint // 002",
    specs: ["TOLERANCE // 0.1mm", "JOINT // 1mm"],
  },
  {
    title: "Architect Grade",
    description:
      "Specified by renowned studios for hospitality, commercial and luxury residential projects.",
    image: "/images/tiles/basalt-1.jpg",
    label: "Volume // 003",
    specs: ["RATING // R11", "ABSORPTION // <0.1%"],
  },
  {
    title: "Lifetime Support",
    description:
      "From curation to installation and maintenance our specialists support your project for life.",
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

  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const index = Math.min(
        stages.length - 1,
        Math.floor(v * stages.length)
      );
      setActiveIndex(index);
    });
  }, [scrollYProgress]);

  const stage = stages[activeIndex];

  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative h-[500vh] bg-black">

      <div className="sticky top-0 h-screen flex overflow-hidden">

        {/* IMAGE SIDE */}
        <div className="relative hidden lg:block w-1/2 h-full overflow-hidden">

          {stages.map((s, i) => (
            <BackgroundLayer
              key={i}
              image={s.image}
              index={i}
              scrollYProgress={scrollYProgress}
            />
          ))}

          {/* overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10" />

        </div>

        {/* TEXT SIDE */}
        <div className="w-full lg:w-1/2 flex items-center px-10 md:px-24">

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl space-y-8"
          >

            {/* label */}
            <span className="text-xs tracking-[0.4em] uppercase text-ag-copper font-mono">
              {stage.label}
            </span>

            {/* title */}
            <h2 className="text-5xl md:text-6xl font-display text-white leading-tight tracking-tight">
              {stage.title}
            </h2>

            {/* description */}
            <p className="text-lg text-white/70 leading-relaxed">
              {stage.description}
            </p>

            {/* specs */}
            <div className="flex gap-3 flex-wrap pt-4">
              {stage.specs.map((s, i) => (
                <span
                  key={i}
                  className="text-[10px] font-mono tracking-widest text-white border border-white/20 px-4 py-2 backdrop-blur-sm"
                >
                  {s}
                </span>
              ))}
            </div>

          </motion.div>

        </div>

        {/* PROGRESS BAR */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-[300px] h-[2px] bg-white/20">
          <motion.div
            style={{ width: progress }}
            className="h-full bg-ag-copper"
          />
        </div>

      </div>
    </section>
  );
}

function BackgroundLayer({
  image,
  index,
  scrollYProgress,
}: {
  image: string;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {

  const start = index * 0.25;
  const end = (index + 1) * 0.25;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.08, end - 0.08, end],
    [0, 1, 1, 0]
  );

  const scale = useTransform(scrollYProgress, [start, end], [1.15, 1]);

  const y = useTransform(scrollYProgress, [start, end], ["-5%", "5%"]);

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className="absolute inset-0 will-change-transform"
    >
      <Image
        src={image}
        alt=""
        fill
        priority={index === 0}
        className="object-cover"
      />
    </motion.div>
  );
}