"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { tiles } from "@/lib/tiles-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TileGallery() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate horizontal shift
  // We have many tiles, so we should show a good selection.
  const galleryTiles = tiles.slice(0, 10);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-ag-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Section Title Overlay */}
        <div className="absolute top-24 md:top-32 left-6 md:left-12 z-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-ag-copper" />
            <span className="text-ag-copper uppercase tracking-[0.4em] text-xs font-semibold">Tiles Gallery</span>
          </motion.div>
          
        </div>

        {/* Horizontal Scroll Track */}
        <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-6 md:px-12 pt-40 md:pt-32 pb-10">
          {galleryTiles.map((tile, index) => (
            <div
              key={tile.id}
              className="relative w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] xl:w-[45vw] h-[55vh] md:h-[65vh] flex-shrink-0 group overflow-hidden border border-ag-mist/10"
            >
              {/* Overlay info */}
              <div className="absolute inset-0 bg-ag-black/40 z-10 group-hover:bg-ag-black/10 transition-colors duration-700 p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-ag-copper font-mono text-[10px] uppercase tracking-[0.3em] block mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {tile.material} // {tile.collection}
                  </span>
                  <h3 className="text-ag-white font-display text-2xl md:text-4xl font-semibold tracking-tighter">
                    {tile.name}
                  </h3>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full h-full"
              >
                <Image
                  src={tile.images[0]}
                  alt={tile.name}
                  fill
                  sizes="(max-width: 768px) 85vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          ))}

          {/* Final Element to show End of Gallery */}
          <div className="relative w-[60vw] md:w-[40vw] h-[55vh] md:h-[65vh] flex-shrink-0 flex items-center justify-center border border-ag-copper/20 ml-8 bg-ag-charcoal/30 backdrop-blur-sm">
            <div className="text-center px-12">
              <h4 className="font-display text-3xl md:text-5xl text-ag-white mb-6 tracking-tight">Experience the <br/><span className="italic text-ag-sand/50">Collection.</span></h4>
              <p className="uppercase tracking-[0.3em] text-[10px] text-ag-sand/60 mb-10">Curating surfaces for visionary spaces</p>
              <Button asChild className="bg-ag-copper hover:bg-ag-copper/90 text-ag-white rounded-none px-10 py-6 uppercase tracking-widest text-xs h-auto">
                <Link href="/tiles">View All Designs</Link>
              </Button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}