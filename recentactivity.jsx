import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldAlert } from 'lucide-react';
import '../styles/cards.css';
const RecentActivity = ({ earthquakes = [] }) => {
  return (
    <div className="glass-panel p-4 rounded-xl border border-slate-800/80 h-full flex flex-col min-h-[500px]">
        {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
        <h3 className="font-mono text-xs font-bold text-cyan-400 flex items-center gap-2 tracking-widest uppercase">
          <Terminal size={14} className="text-cyan-500 animate-pulse" />
          REALTIME SEISMIC FEED (LOGS)
        </h3>
        <span className="font-mono text-[8px] px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-400 rounded">
          STREAM: LIVE
        </span>
      </div>

       {/* Terminal log panel */}
      <div className="flex-1 overflow-y-auto space-y-2 activity-feed-scroll pr-1 font-mono text-[10px]">
        <AnimatePresence initial={false}>
          {earthquakes.map((eq, idx) => {
            const timeStr = new Date(eq.time).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            });
            return (
              <motion.div
                key={eq.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="p-2.5 bg-slate-950/40 rounded border border-slate-900/60 hover:border-slate-800/80 flex items-start justify-between gap-3 group transition-colors"
              >
                <div className="flex items-start gap-2.5 min-w-0">
