import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Register from '../Components/account/Registration'
import Footer from '../Components/footer/Footer';

export default function RegisterView() {
  return (
    <>
      <Register />
      <Footer />
    </>
  );
}
