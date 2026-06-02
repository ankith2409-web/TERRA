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
