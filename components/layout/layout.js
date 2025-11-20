import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, showNavbar }) {
  return (
    <>
      <Navbar show={showNavbar} />
      {children}
      <Footer />
    </>
  );
}
