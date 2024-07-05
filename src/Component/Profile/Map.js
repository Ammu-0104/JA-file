import React, { useRef, useEffect } from "react";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    window.initMap = initMap;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initMap = () => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 5.931027, lng: 70.836288 },
      zoom: 10,
    });

    new window.google.maps.Marker({
      position: { lat: 5.931027, lng: 70.836288 },
      map,
      title: "Marker Title",
    });
  };

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }}></div>;
};

export default Map;
