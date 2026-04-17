"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tile } from "@/lib/tiles-data";

interface TileCardProps {
  tile: Tile;
}

export function TileCard({ tile }: TileCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group relative bg-ag-charcoal border border-ag-mist overflow-hidden h-full flex flex-col"
    >
      <Link href={`/tiles/${tile.slug}`} className="relative aspect-square overflow-hidden block">
        <Image
          src={tile.images[0]}
          alt={tile.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-ag-black/20 group-hover:bg-transparent transition-colors" />
        
        {/* Hover Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform bg-ag-black/80 backdrop-blur-sm border-t border-ag-mist">
          <div className="flex justify-between items-end">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-ag-copper mb-1">{tile.material}</div>
              <div className="text-sm font-display text-ag-white">{tile.size}</div>
            </div>
            <div className="text-ag-white flex items-center gap-1 group/link">
              <span className="text-[10px] uppercase tracking-widest">View Details</span>
              <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>

      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-display text-ag-white mb-1 group-hover:text-ag-copper transition-colors">
            {tile.name}
          </h3>
          <p className="text-xs text-ag-sand/50 font-mono tracking-wider">{tile.collection}</p>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-ag-mist/30">
          <div className="text-[10px] uppercase tracking-[0.2em] text-ag-sand/50 font-mono">{tile.material}</div>
          <Badge variant="outline" className="text-[9px] uppercase tracking-[0.2em] border-ag-mist text-ag-sand/70 rounded-none bg-ag-stone/30">
            {tile.finish}
          </Badge>
        </div>
      </div>
    </motion.div>
  );
}
