import React from "react";
import Getlocations from "./Getlocations";
import Header from "./Header";
import { useSelector } from "react-redux";

function Home() {
  const currentlocation = useSelector((state) => state.auth.location);
  return (
    <div className=" flex justify-center">
      <h1>Home</h1>
      {/* <Header /> */}
      <Getlocations />
    </div>
  );
}

export default Home;
