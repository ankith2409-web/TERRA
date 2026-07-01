import React from "react";
import Globe from "react-globe.gl";

export default function Tooltips() {
  const earthquakes = [
    { lat: 12.9, lng: 77.5, magnitude: 5.6, depth: 40, location: "Bangalore" },
    { lat: 35.6, lng: 139.7, magnitude: 6.2, depth: 30, location: "Tokyo" },
    { lat: -33.9, lng: 151.2, magnitude: 4.8, depth: 20, location: "Sydney" },
    { lat: 37.7, lng: -122.4, magnitude: 7.1, depth: 10, location: "San Francisco" }
  ];

  return (
    <div style={{ height: "600px", width: "100%" }}>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        pointsData={earthquakes}
        pointLat="lat"
        pointLng="lng"
        pointAltitude={(d) => d.magnitude * 0.01}
        pointColor={() => "orange"}
        pointLabel={(d) =>
          `Location: ${d.location}\nMagnitude: ${d.magnitude}\nDepth: ${d.depth} km`
        }
        autoRotate={true}
        autoRotateSpeed={1.5}
      />
    </div>
  );
}

