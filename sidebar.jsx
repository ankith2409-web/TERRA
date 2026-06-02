import React from 'react';
import {
  LayoutDashboard,
  BarChart3,
  SlidersHorizontal,
  Settings,
  ChevronLeft,
  ChevronRight,
  Activity
} from 'lucide-react';
import '../styles/sidebar.css';
const Sidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'filters', label: 'Filters', icon: SlidersHorizontal },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];
  
   return (
    <aside 
      className={`sidebar-container shrink-0 flex flex-col h-screen select-none ${
        sidebarOpen ? 'w-64' : 'w-20'
      }`}
    >
       {/* Sidebar Header Brand */}
      <div className="h-16 flex items-center justify-between px-5 border-b border-slate-800/80">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="p-2 bg-cyan-950 border border-cyan-500/30 rounded-lg text-cyan-400">
            <Activity size={18} className="animate-pulse" />
          </div>
          {sidebarOpen && (
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-cyan-400 whitespace-nowrap">
              E-MONITOR
            </span>
          )}
        </div>
	
	 {/* Toggle Button */}
        {sidebarOpen && (
          <button 
            onClick={() => setSidebarOpen(false)}
            className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
        )}
      </div>
