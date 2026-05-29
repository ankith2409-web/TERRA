import React from 'react';
const Dashboard = ({
  navbar,
  sidebar,
  stats,
  charts,
  filters,
  searchBar,
  cards,
  activity,
  isLoading,
  activeTab
}) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 cyber-grid flex">
      {/* Scanline overlay for CRT look */}
      <div className="scanlines" />
     
      {/* Sidebar Panel */}
      {sidebar}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
