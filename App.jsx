import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import StatsPanel from './components/StatsPanel';
import Charts from './components/Charts';
import Filters from './components/Filters';
import SearchBar from './components/SearchBar';
import LoadingSpinner from './components/LoadingSpinner';

// Import CSS
import './styles/dashboard.css';
import './styles/sidebar.css';

// Mock Data
import { mockEarthquakes } from './data/mockData';

// Component Imports
import EarthquakeCard from './components/EarthquakeCard';
import RecentActivity from './components/RecentActivity';

function App() {
  // App-level Navigation and View state
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Filters State
  const [searchTerm, setSearchTerm] = useState('');
  const [minMagnitude, setMinMagnitude] = useState(0);
  const [maxDepth, setMaxDepth] = useState(300);
  const [regionFilter, setRegionFilter] = useState('All');

