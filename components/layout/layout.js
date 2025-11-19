import React, { useState } from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <>
      {/* Navbar sempre montata, ma animata */}
      <Navbar show={showNavbar} />

      {/* Passo la funzione onHeroFinished ai figli */}
      {React.cloneElement(children, {
        onHeroFinished: () => setShowNavbar(true),
      })}
    </>
  );
}

export default Layout;
