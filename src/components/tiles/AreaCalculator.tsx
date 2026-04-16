"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Tile } from "@/lib/tiles-data";

interface AreaCalculatorProps {
  tile: Tile;
}

export function AreaCalculator({ tile }: AreaCalculatorProps) {
  const [area, setArea] = React.useState<string>("100");
  const wastagePercent = 0.1; // 10% wastage

  const totalAreaWithWastage = React.useMemo(() => {
    const numericArea = parseFloat(area) || 0;
    return numericArea * (1 + wastagePercent);
  }, [area]);

  const boxesNeeded = React.useMemo(() => {
    return Math.ceil(totalAreaWithWastage / tile.coveragePerBox);
  }, [totalAreaWithWastage, tile.coveragePerBox]);

  const totalPrice = React.useMemo(() => {
    return boxesNeeded * tile.coveragePerBox * tile.pricePerSqFt;
  }, [boxesNeeded, tile.coveragePerBox, tile.pricePerSqFt]);

  return (
    <div className="bg-ag-charcoal p-6 border border-ag-mist space-y-6">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-xs uppercase tracking-widest text-ag-sand font-semibold">Quantity Calculator</h4>
        <span className="text-[10px] text-ag-white/40 font-mono">+10% Wastage Recommended</span>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-wider text-ag-white/50">Project Area (sq ft)</label>
          <Input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="bg-ag-black border-ag-mist text-ag-white focus:border-ag-copper"
            placeholder="Enter floor area..."
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-ag-black border border-ag-mist/30">
            <div className="text-[9px] uppercase tracking-widest text-ag-sand/50 mb-1">Total sq ft</div>
            <div className="text-lg font-mono text-ag-white">{totalAreaWithWastage.toFixed(1)}</div>
          </div>
          <div className="p-4 bg-ag-black border border-ag-mist/30">
            <div className="text-[9px] uppercase tracking-widest text-ag-sand/50 mb-1">Boxes Needed</div>
            <div className="text-lg font-mono text-ag-copper">{boxesNeeded}</div>
          </div>
        </div>

        <div className="pt-4 border-t border-ag-mist/30 flex justify-between items-end">
          <div className="text-[10px] uppercase tracking-widest text-ag-white/40">Estimated Total</div>
          <div className="text-2xl font-display text-ag-white">
            ₹{totalPrice.toLocaleString("en-IN")}
          </div>
        </div>
      </div>
    </div>
  );
}
