import React, { useRef, useEffect } from "react";
import Globe from "react-globe.gl";

export default function Controls() {
  const globeRef = useRef();

  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    // Enable zoom
    globe.controls().enableZoom = true;

    // Enable drag rotation
    globe.controls().enableRotate = true;

    // Add reset view button
    const resetBtn = document.createElement("button");
    resetBtn.innerText = "Reset View";
    resetBtn.style.position = "absolute";
    resetBtn.style.top = "10px";
    resetBtn.style.left = "10px";
    resetBtn.onclick = () => {
      globe.pointOfView({ lat: 0, lng: 0, altitude: 2 }, 1000);
    };
    document.body.appendChild(resetBtn);
  }, []);

  return (
    <div style={{ height: "600px", width: "100%" }}>
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        autoRotate={false}
      />
    </div>
  );
}

