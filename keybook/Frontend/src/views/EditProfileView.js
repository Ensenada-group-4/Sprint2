import React from "react";
import EditProfile from "../Components/edit/EditProfile"
import Footer from "../Components/footer/Footer";
import NavBar from "../Components/navbar/NavBar";

export default function EditProfileView() {
  return (
    <>
      <NavBar />
      <EditProfile />
      <Footer />
    </>
  );
}
