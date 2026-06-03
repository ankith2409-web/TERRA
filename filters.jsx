import React from 'react';
import { SlidersHorizontal, RotateCcw } from 'lucide-react';

const Filters = ({
  minMagnitude,
  setMinMagnitude,
  maxDepth,
  setMaxDepth,
  regionFilter,
  setRegionFilter,
  onReset
}) => {
  const regions = ["All", "Asia-Pacific", "Americas", "Europe/Africa", "Oceania"];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2 text-slate-300 font-mono text-xs">

        {/* Magnitude Range Filter */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-slate-400 tracking-wider">MIN MAGNITUDE</span>
          <span className="text-cyan-400 font-bold">{minMagnitude.toFixed(1)} Mw</span>
        </div>
        <input
          type="range"
          min="0"
          max="9.0"
          step="0.5"
          value={minMagnitude}
          onChange={(e) => setMinMagnitude(parseFloat(e.target.value))}
          className="w-full h-1.5 bg-slate-900 border border-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
        />
        <div className="flex justify-between text-[9px] text-slate-500">
          <span>0.0 Mw</span>
          <span>5.0 Mw</span>
          <span>9.0 Mw</span>
        </div>
      </div>

      {/* Depth Filter */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-slate-400 tracking-wider">MAX HYPOCENTER DEPTH</span>
          <span className="text-blue-400 font-bold">{maxDepth} km</span>
        </div>
        <input
          type="range"
          min="10"
          max="300"
          step="10"
          value={maxDepth}
          onChange={(e) => setMaxDepth(parseInt(e.target.value))}
          className="w-full h-1.5 bg-slate-900 border border-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
        <div className="flex justify-between text-[9px] text-slate-500">
          <span>10 km</span>
          <span>150 km</span>
          <span>300 km</span>
        </div>
      </div>
