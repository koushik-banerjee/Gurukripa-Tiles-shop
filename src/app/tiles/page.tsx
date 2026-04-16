"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { useQueryState, parseAsArrayOf, parseAsString } from "nuqs";
import { tiles } from "@/lib/tiles-data";
import { FilterSidebar } from "@/components/tiles/FilterSidebar";
import { TileCard } from "@/components/tiles/TileCard";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

// Use dynamic import with ssr: false to bypass prerendering issues with nuqs/searchParams
const TilesContent = dynamic(() => Promise.resolve(function TilesContentComponent() {
  const [activeMaterials] = useQueryState(
    "materials",
    parseAsArrayOf(parseAsString).withDefault([])
  );
  const [priceRange] = useQueryState(
    "price",
    parseAsArrayOf(parseAsString).withDefault(["0", "2000"])
  );

  const filteredTiles = React.useMemo(() => {
    return tiles.filter((tile) => {
      // Material filter
      if (activeMaterials.length > 0 && !activeMaterials.includes(tile.material)) {
        return false;
      }

      // Price filter
      const minPrice = Number(priceRange[0]);
      const maxPrice = Number(priceRange[1]);
      if (tile.pricePerSqFt < minPrice || tile.pricePerSqFt > maxPrice) {
        return false;
      }
      return true;
    });
  }, [activeMaterials, priceRange]);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-6 min-h-screen bg-ag-black border-t border-ag-mist/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <FilterSidebar />

        {/* content */}
        <div className="flex-grow">
          <div className="flex justify-between items-baseline mb-12">
            <div>
              <h1 className="text-3xl md:text-5xl font-display text-ag-white mb-2">Catalogue</h1>
              <p className="text-sm text-ag-sand/50 font-sans">
                Showing {filteredTiles.length} of {tiles.length} designs
              </p>
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredTiles.map((tile) => (
                <TileCard key={tile.id} tile={tile} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredTiles.length === 0 && (
            <div className="py-32 text-center space-y-4">
              <p className="text-ag-sand/50 font-display text-2xl">No designs match your criteria.</p>
              <button 
                onClick={() => window.location.href = '/tiles'}
                className="text-ag-copper hover:underline uppercase tracking-widest text-xs"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}), { 
  ssr: false,
  loading: () => (
    <div className="pt-32 flex items-center justify-center min-h-screen bg-ag-black">
      <Loader2 className="w-8 h-8 animate-spin text-ag-copper" />
    </div>
  )
});

export default function TilesPage() {
  return <TilesContent />;
}
