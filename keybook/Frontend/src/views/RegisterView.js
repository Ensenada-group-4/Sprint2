import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Register from '../Components/registration/Registration'
import Footer from '../Components/footer/Footer';

export default function RegisterView() {
  return (
    <>
      <Register />
      <Footer />
    </>
  );
}
