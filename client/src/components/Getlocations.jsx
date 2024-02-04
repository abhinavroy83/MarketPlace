import React, { useEffect, useState } from "react";
import LeafletMap from "./LeafletMap";

function Getlocations() {
  const [currentlocation, setcurrentlocation] = useState(null);
  const [showmap, setshowmap] = useState(true);

  useEffect(() => {
    Getlocations();
    // promptForLocationChoice();
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
          //   promptForLocationChoice();
        }
      );
    }
  };
  //   const promptForLocationChoice = () => {
  //     const choice = prompt(
  //       "Choose location setting method:\n1. Map\n2. Enter manually"
  //     );

  //     if (choice === "1") {
  //       setshowmap(true);
  //     } else if (choice === "2") {
  //       manullocation();
  //     } else {
  //       console.log("Invalid choice. Location setting canceled.");
  //     }
  //   };

  //   const manullocation = () => {
  //     const manualInput = prompt("Enter your location (city, ZIP code, etc.):");
  //     if (manualInput) {
  //       setcurrentlocation(manualInput);
  //     } else {
  //       console.log("Manual input cancel");
  //     }
  //   };

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
      <p>{currentlocation}</p>
    </div>
  );
}

export default Getlocations;
