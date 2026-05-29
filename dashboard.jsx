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
        {/* Navbar */}
        {navbar}

          {/* Dash Content Wrapper */}
        <main className="p-4 md:p-6 lg:p-8 space-y-6 overflow-y-auto max-w-[1600px] mx-auto w-full">
          {isLoading ? (
            <div className="flex items-center justify-center min-h-[50vh]">
