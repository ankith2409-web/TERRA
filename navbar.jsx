import React, { useState, useEffect } from 'react';
import { Bell, Search, RefreshCw, Cpu } from 'lucide-react';
const Navbar = ({ searchTerm, setSearchTerm, alertCount = 3 }) => {
  const [systemTime, setSystemTime] = useState(new Date().toISOString());
  useEffect(() => {
    const timer = setInterval(() => {
      setSystemTime(new Date().toISOString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <header className="h-16 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md px-6 flex items-center justify-between">
	        {/* Title & Status */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2">
          <Cpu className="text-cyan-400" size={18} />
          <span className="h-4 w-px bg-slate-800" />
        </div>
        <div>
          <h1 className="text-sm md:text-base font-mono font-bold tracking-widest text-slate-100 uppercase m-0 leading-none">
            Live Earthquake &amp; Disaster Monitor
          </h1>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-mono text-[9px] text-emerald-400 tracking-wider uppercase">
              USGS Live Stream: Synced
            </span>
          </div>
        </div>
      </div>

      {/* Utilities */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* System Time Counter */}
        <div className="hidden lg:flex flex-col items-end font-mono">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider">SYSTEM_COORDINATE_TIME</span>
          <span className="text-xs text-cyan-400 font-bold">{systemTime}</span>
        </div>
