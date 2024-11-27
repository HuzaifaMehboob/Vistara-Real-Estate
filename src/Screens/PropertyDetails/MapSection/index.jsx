import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { IoLocationSharp } from "react-icons/io5";
import { renderToStaticMarkup } from 'react-dom/server'; // Converts React components to static HTML

const MapSection = ({ lat = 40.7128, lng = -74.0060 }) => {
  const mapRef = useRef(null); // Use ref to store the map instance

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize the map only if it doesn't already exist
      mapRef.current = L.map('map').setView([lat, lng], 13);

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      // Convert React component (IoLocationSharp) into static HTML
      const iconHtml = renderToStaticMarkup(<IoLocationSharp style={{ color: 'red', fontSize: '20px' }} />);

      // Add a marker at the property location
      L.marker([lat, lng])
        .addTo(mapRef.current)
        .bindPopup(iconHtml) // Use the converted static HTML for the popup
        .openPopup();
    }

    // Cleanup function to remove the map instance
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null; // Reset the reference
      }
    };
  }, [lat, lng]);

  return(
    <>
      <div className='pb-2 mb-2 border-b-2 border-gray-400'><h1 className='text-2xl font-semibold'>Location</h1></div>
      <div id="map" style={{ height: '300px', width: '100%' }} className=' mb-6'></div>
    </>
  ) 
};

export default MapSection;
