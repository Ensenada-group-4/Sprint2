import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Home from "../Components/Home";
import Footer from "../Components/footer/Footer";
import NavBar from "../Components/NavBar";

export default function HomeView() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}
