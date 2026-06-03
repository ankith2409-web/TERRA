import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Compass, Clock, AlertTriangle } from 'lucide-react';
import { getSeverityColor } from '../data/mockData';
import '../styles/cards.css';


const EarthquakeCard = ({ earthquake }) => {
  const { location, magnitude, depth, time, severity, region } = earthquake;

  const borderAndBgClass = getSeverityColor(severity);

  // Parse time
  const formattedTime = new Date(time).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  });
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`glass-panel eq-card p-4 rounded-xl flex justify-between items-start gap-4 severity-${severity} ${borderAndBgClass}`}
    >
       {/* Event Details */}
      <div className="space-y-3 flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className={`px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-wider ${
            severity === 'critical' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
            severity === 'major' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
            severity === 'moderate' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
            'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
          }`}>
            {severity}
          </span>
          <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">{region}</span>
        </div>
