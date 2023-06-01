import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Login from '../Components/account/Login'
import Footer from '../Components/footer/Footer';

export default function LoginView() {
  return (
    <>
      <Login />
      <Footer />
    </>
  );
}
