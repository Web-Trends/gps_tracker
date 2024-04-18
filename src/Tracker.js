// Tracker.js
import React, { useState, useEffect } from 'react';
import './styles/Tracker.css';

const Tracker = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        }, (error) => {
          console.error('Error getting location:', error);
        });
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    getLocation();

    return () => {
      setLocation(null);
    };
  }, []);

  return (
    
    <div className="tracker-container">
      
     
      {location ? (
        <div>
          <p className="location">Latitude: {location.latitude}</p>
          <p className="location">Longitude: {location.longitude}</p>
          {/* Integrate Google Maps */}
          <iframe
            className="map"
            title="Google Maps"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://maps.google.com/maps?q=${location.latitude},${location.longitude}&output=embed`}
            allowFullScreen
          />
        </div>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default Tracker;
