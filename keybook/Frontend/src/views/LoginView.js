import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Login from '../Components/Login'
import Footer from '../Components/Footer';

export default function LoginView() {
  return (
    <>
      <Login />
      <Footer />
    </>
  );
}
