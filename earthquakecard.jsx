import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Compass, Clock, AlertTriangle } from 'lucide-react';
import { getSeverityColor } from '../data/mockData';
import '../styles/cards.css';


const EarthquakeCard = ({ earthquake }) => {
  const { location, magnitude, depth, time, severity, region } = earthquake;

  const borderAndBgClass = getSeverityColor(severity);
