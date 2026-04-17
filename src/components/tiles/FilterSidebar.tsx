"use client";

import * as React from "react";
import { useQueryState, parseAsArrayOf, parseAsString } from "nuqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";

const filters = {
  material: [
    "Marble",
    "Marble-Finish",
    "Porcelain",
    "Ceramic",
    "Vitrified",
    "Cement",
    "Terrazzo",
    "Mosaic",
    "Slate",
    "Stone-Look",
    "Wooden-Finish",
    "Travertine",
    "Terracotta",
  ],
  finish: ["Matte", "Glossy", "Textured", "Polished", "Brushed"],
};

export function FilterSidebar() {
  const [activeMaterials, setActiveMaterials] = useQueryState(
    "materials",
    parseAsArrayOf(parseAsString).withDefault([])
  );
  const [priceRange, setPriceRange] = useQueryState(
    "price",
    parseAsArrayOf(parseAsString).withDefault(["0", "2000"])
  );

  const toggleFilter = (
    current: string[],
    setter: (val: string[] | null) => void,
    value: string
  ) => {
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setter(next.length ? next : null);
  };

  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-8">
        <div>
          <h3 className="text-xs uppercase tracking-widest text-ag-sand font-semibold mb-6">Filters</h3>
          
          <Accordion multiple defaultValue={["material"]} className="space-y-4">
            <AccordionItem value="material" className="border-ag-mist">
              <AccordionTrigger className="text-sm font-sans uppercase tracking-wider py-2">
                Material
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-3 pb-6">
                {filters.material.map((item) => (
                  <div key={item} className="flex items-center space-x-3 group cursor-pointer" 
                       onClick={() => toggleFilter(activeMaterials, setActiveMaterials, item)}>
                    <div className={`w-4 h-4 border border-ag-mist rounded-sm flex items-center justify-center transition-colors ${activeMaterials.includes(item) ? 'bg-ag-copper border-ag-copper' : 'group-hover:border-ag-sand'}`}>
                      {activeMaterials.includes(item) && <span className="text-[10px] text-ag-white">✓</span>}
                    </div>
                    <span className={`text-sm tracking-wide transition-colors ${activeMaterials.includes(item) ? 'text-ag-white' : 'text-ag-white/40'}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>



            <AccordionItem value="price" className="border-ag-mist">
              <AccordionTrigger className="text-sm font-sans uppercase tracking-wider py-2">
                Price (₹/sq ft)
              </AccordionTrigger>
              <AccordionContent className="pt-6 pb-6 px-2">
                <Slider
                  defaultValue={[Number(priceRange[0]), Number(priceRange[1])]}
                  max={2000}
                  step={50}
                  onValueCommitted={(val) => {
                    const values = Array.isArray(val) ? val : [val];
                    setPriceRange([values[0].toString(), values[1].toString()]);
                  }}
                  className="[&_[role=slider]]:bg-ag-copper"
                />
                <div className="flex justify-between mt-4 text-[10px] font-mono text-ag-sand/50 uppercase tracking-widest">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <button 
          onClick={() => {
            setActiveMaterials(null);
            setPriceRange(null);
          }}
          className="text-[10px] uppercase tracking-[0.2em] text-ag-copper/60 hover:text-ag-copper transition-colors"
        >
          Clear All Filters
        </button>
      </div>
    </aside>
  );
}
