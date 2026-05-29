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
	      {/* Spinner */}
              <div className="text-cyan-400 font-mono animate-pulse">SYSTEM CORRELATION IN PROGRESS...</div>
            </div>
          ) : (
            <>
              {activeTab === 'dashboard' && (
                <>
		  {/* Stats Summary Panel */}
                  {stats}

		    {/* Primary Data Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left & Middle Column: Filters, Search, Cards Grid */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <h2 className="text-lg font-mono font-bold tracking-wider text-cyan-400 flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
                            SEISMIC TELEMETRY STREAM
                          </h2>
                          {searchBar}
                        </div>
                        {filters}
                      </div>
