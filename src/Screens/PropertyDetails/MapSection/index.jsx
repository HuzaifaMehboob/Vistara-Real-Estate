import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapSection = ({ lat = 33.6844, lng = 73.0479 }) => {
  const mapRef = useRef(null);
  const [activeTab, setActiveTab] = useState('map'); // Manage active tab

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize the map
      mapRef.current = L.map('map').setView([lat, lng], 15);

      // Add OpenStreetMap Tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      // Add a single custom marker
      const customIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/854/854878.png',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      L.marker([lat, lng], { icon: customIcon })
        .addTo(mapRef.current)
        .bindPopup('<strong>Property Location</strong>'); // Popup for the marker
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [lat, lng]);

  return (
    <div className="map-container mt-4">
      <div className="heading">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Location & Nearby</h1>
      </div>
      <div
        id="map"
        className='mx-auto md:mx-0 '
        style={{
          height: '400px',
          width: '90%',
          border: '2px solid #4CAF50',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      ></div>
    </div>
  );
};

export default MapSection;
