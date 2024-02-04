import React, { useState, useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch } from "react-redux";
import { login as authlogin } from "../store/authslice";

const LeafletMap = ({ onLocationReceived }) => {
  const mapContainerRef = useRef(null);
  const markerRef = useRef(null);
  const dispatch = useDispatch();
  const [currentLocation, setCurrentLocation] = useState({
    lat: 0,
    lng: 0,
  });
  
  useEffect(() => {
    const [lat, lng] = onLocationReceived.split(",").map(parseFloat);

    if (mapContainerRef) {
      const map = L.map(mapContainerRef.current).setView([lat, lng], 9);
      setCurrentLocation({ lat, lng });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      markerRef.current = L.marker([lat, lng], {
        draggable: true,
      }).addTo(map);

      markerRef.current.on("dragend", (e) => {
        const { lat, lng } = e.target.getLatLng();
        setCurrentLocation({ lat, lng });
      });

      map.on("click", (e) => {
        const { lat, lng } = e.latlng;
        markerRef.current.setLatLng([lat, lng]);
        setCurrentLocation({ lat, lng });
      });

      return () => map.remove();
    }
  }, [onLocationReceived]);

  useEffect(() => {
    console.log("Your location is ", currentLocation);
    dispatch(authlogin({ location: currentLocation }));
  }, [currentLocation]);

  return (
    <div
      ref={(div) => {
        mapContainerRef.current = div;
      }}
      style={{ height: "400px", width: "1000px" }}
    />
  );
};

export default LeafletMap;
