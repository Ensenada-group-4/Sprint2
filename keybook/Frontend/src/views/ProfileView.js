import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Profile from "../Components/profile/Profile";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

export default function HomeView() {
  return (
    <>
      <NavBar />
      <Profile />
      <Footer />
    </>
  );
}
