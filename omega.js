import React, { useRef, useEffect } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";

export default function VisualEffects() {
  const globeRef = useRef();

  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    // Add atmosphere glow
    globe.globeMaterial().emissive = new THREE.Color("blue");
    globe.globeMaterial().emissiveIntensity = 0.2;

    // Add starfield background
    globe.scene().background = new THREE.Color("black");
    const starsGeometry = new THREE.BufferGeometry();
    const starVertices = [];
    for (let i = 0; i < 1000; i++) {
      starVertices.push(THREE.MathUtils.randFloatSpread(2000)); // x
      starVertices.push(THREE.MathUtils.randFloatSpread(2000)); // y
      starVertices.push(THREE.MathUtils.randFloatSpread(2000)); // z
    }
    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    globe.scene().add(starField);
  }, []);

  // Example pulsing marker
  const markers = [
    { lat: 12.9, lng: 77.5, size: 0.1 },
    { lat: 35.6, lng: 139.7, size: 0.2 }
  ];

  return (
    <div style={{ height: "600px", width: "100%" }}>
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        pointsData={markers}
        pointLat="lat"
        pointLng="lng"
        pointAltitude="size"
        pointColor={() => "cyan"}
        autoRotate={true}
        autoRotateSpeed={1.5}
      />
    </div>
  );
}

