import React from "react";
import Globe from "react-globe.gl";

export default function GlobeComponent() {
  // Example earthquake data
  const data = [
    { lat: 12.9, lng: 77.5, magnitude: 5.6, depth: 40 },
    { lat: 35.6, lng: 139.7, magnitude: 6.2, depth: 30 },
    { lat: -33.9, lng: 151.2, magnitude: 4.8, depth: 20 }
  ];

  return (
    <div style={{ height: "600px", width: "100%" }}>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundColor="black"
        pointsData={data}
        pointLat="lat"
        pointLng="lng"
        pointColor={(d) => (d.magnitude > 6 ? "red" : "orange")}
        pointAltitude={(d) => d.magnitude * 0.01}
        autoRotate={true}
        autoRotateSpeed={1.5}
      />
    </div>
  );
}

// Step 1: Globe setup started
function rotateGlobe() { return true; }
