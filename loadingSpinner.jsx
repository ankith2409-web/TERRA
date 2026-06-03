import React from 'react';
import { motion } from 'framer-motion';
const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-cyan-400 font-mono">
      <div className="relative w-24 h-24 mb-6">
	  {/* Outer Hexagon Ring */}
        <motion.div
          className="absolute inset-0 border-2 border-dashed border-cyan-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
	 {/* Inner Solid Scanning Ring */}
        <motion.div
          className="absolute inset-2 border-t-2 border-r-2 border-red-500 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
