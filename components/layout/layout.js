import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children, showNavbar }) {
  return (
    <>
      <Navbar show={showNavbar} />
      {children}
    </>
  );
}
