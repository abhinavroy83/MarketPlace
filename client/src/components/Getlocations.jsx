import React, { useEffect, useState } from "react";
import LeafletMap from "./LeafletMap";
import { useSelector } from "react-redux";

function Getlocations() {
  const [currentlocation, setcurrentlocation] = useState(null);
  const [showmap, setshowmap] = useState(true);
  const authlocation = useSelector((state) => state.auth.location);
  console.log("authlocation", authlocation);
  useEffect(() => {
    Getlocations();
  }, []);

  const Getlocations = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setcurrentlocation(`${latitude},${longitude}`);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  };

  return (
    <div>
      <h1>Your current location</h1>
      <p>Map</p>
      {currentlocation && showmap ? (
        <LeafletMap onLocationReceived={currentlocation} />
      ) : (
        <div>
          <p>loading</p>
        </div>
      )}
      {authlocation ? (
        <div>
          <p>{authlocation.lat}</p>
          <p>{authlocation.lng}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Getlocations;
