import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import UsersGrid from '../Components/UsersGrid'
import Footer from "../Components/footer/Footer";
import NavBar from '../Components/NavBar';

export default function UsersView() {
  return (
    <>
      <NavBar />
      <UsersGrid />
      <Footer />
    </>
  );
}
