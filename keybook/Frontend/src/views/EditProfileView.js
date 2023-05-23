import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import EditProfile from "../Components/EditProfile/EditProfile";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

export default function EditProfileView() {
  return (
    <>
      <NavBar />
      <EditProfile />
      <Footer />
    </>
  );
}
