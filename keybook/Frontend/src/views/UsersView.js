import React from "react";
import UsersGrid from '../Components/users/UsersGrid'
import Footer from "../Components/footer/Footer";
import NavBar from "../Components/navbar/NavBar";

export default function UsersView() {
  return (
    <>
      <NavBar />
      <UsersGrid />
      <Footer />
    </>
  );
}
