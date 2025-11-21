import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
import LenisScroll from "./LenisScroll/LenisScroll";

export default function Layout({ children, showNavbar }) {
  return (
    <>
      <LenisScroll />
      <Navbar show={showNavbar} />

      {children}

      <Footer />
    </>
  );
}
