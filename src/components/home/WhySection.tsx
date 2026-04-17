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
      "Ethically sourced raw stone and high-grade minerals, processed with zero compromises on integrity.",
    image: "/images/tiles/obsidian-1.jpg",
    label: "Quartzite // 001",
    specs: ["MOHS // 7.5", "ORIGIN // ITALY"],
  },
  {
    title: "Precision Cut",
    description:
      "Laser-calibrated edges that allow for seamless 1mm grout lines for a monolithic architectural look.",
    image: "/images/tiles/silver-slate-1.jpg",
    label: "Joint // 002",
    specs: ["TOLERANCE // 0.1mm", "JOINT // 1mm"],
  },
  {
    title: "Architect-Grade",
    description:
      "Specified by world-renowned studios for hospitality, commercial, and ultra-high-end residential projects.",
    image: "/images/tiles/basalt-1.jpg",
    label: "Volume // 003",
    specs: ["RATING // R11", "ABSORPTION // <0.1%"],
  },
  {
    title: "Lifetime Support",
    description:
      "From curation to installation and maintenance, our specialist team accompanies your project for life.",
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

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-ag-black">
      <div className="sticky top-0 h-screen flex overflow-hidden">

        {/* LEFT IMAGES */}
        <div className="relative hidden lg:block w-1/2 h-full overflow-hidden">

          {stages.map((s, i) => (
            <BackgroundLayer
              key={i}
              image={s.image}
              index={i}
              scrollYProgress={scrollYProgress}
            />
          ))}

        </div>

        {/* RIGHT TEXT */}
        <div className="w-full lg:w-1/2 flex items-center px-10 md:px-20">

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-xl space-y-6"
          >

            <div className="flex gap-3 flex-wrap">
              {stage.specs.map((s, i) => (
                <span
                  key={i}
                  className="text-[10px] font-mono text-ag-copper tracking-widest border border-ag-copper/30 px-3 py-1"
                >
                  {s}
                </span>
              ))}
            </div>

            <h3 className="text-4xl md:text-5xl font-display text-white">
              {stage.title}
            </h3>

            <p className="text-ag-sand/70 text-lg leading-relaxed">
              {stage.description}
            </p>

          </motion.div>

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
    [start, start + 0.05, end - 0.05, end],
    [0, 1, 1, 0]
  );

  const scale = useTransform(scrollYProgress, [start, end], [1.1, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
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