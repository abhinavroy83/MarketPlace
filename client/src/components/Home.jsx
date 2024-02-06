import React from "react";
import Getlocations from "./Getlocations";
import Header from "./Header";
import { useSelector } from "react-redux";
import Getproduct from "../pages/Getproduct";
import Container from "./Container/Container";

function Home() {
  return (
    <Container>
      <Getlocations />
      <Getproduct />
    </Container>
  );
}

export default Home;
