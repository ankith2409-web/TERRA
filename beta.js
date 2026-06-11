import React from "react";
import Globe from "react-globe.gl";

export default function EarthMarkers() {
  // Example earthquake data
  const earthquakes = [
    { lat: 12.9, lng: 77.5, magnitude: 5.6, depth: 40 },   // Bangalore
    { lat: 35.6, lng: 139.7, magnitude: 6.2, depth: 30 },  // Tokyo
    { lat: -33.9, lng: 151.2, magnitude: 4.8, depth: 20 }, // Sydney
    { lat: 37.7, lng: -122.4, magnitude: 7.1, depth: 10 }  // San Francisco
  ];

  // Depth-based color
  const getColor = (d) => {
    if (d.depth < 20) return "red";
    if (d.depth < 50) return "orange";
    return "yellow";
  };

  return (
    <div style={{ height: "600px", width: "100%" }}>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundColor="black"
        pointsData={earthquakes}
        pointLat="lat"
        pointLng="lng"
        pointColor={getColor}
        pointAltitude={(d) => d.magnitude * 0.01}
        autoRotate={true}
        autoRotateSpeed={1.5}
      />
    </div>
  );
}

