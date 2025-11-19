import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-[70px] lg:h-[100px] fixed top-0 flex z-[9999] items-center ease-in duration-300 bg-transparent backdrop-blur-sm">
      <nav className="grid items-center w-full grid-cols-2 lg:grid-cols-3">
        {/* Logo */}
        <Link href="/" title="homepage" className="pl-6">
          <Image
            src="/assets/logo/logo.svg"
            alt="logo piracci"
            width={150}
            height={80}
            className="w-32 h-20 lg:w-[150px] lg:h-20"
          />
        </Link>

        {/* MENU MOBILE (2a colonna) */}
        <div className="flex justify-end pr-6 lg:hidden">
          {" "}
          <button
            className="nav__burger"
            style={{ "--length": 2 }}
            // onClick={() => setMenuOpen((prev) => !prev)}
          >
            <div
              className={`nav__burger__line transition-all duration-500 ${
                menuOpen
                  ? "rotate-45 translate-y-1 width-20 opacity-100"
                  : "width-20 opacity-100"
              }`}
              style={{ "--index": 0 }}
            >
              <div className="nav__burger__line__fill" />
            </div>
            <div
              className={`nav__burger__line transition-all duration-500 ${
                menuOpen
                  ? "-rotate-45 -translate-y-1 width-20 opacity-100"
                  : "width-20 opacity-100"
              }`}
              style={{ "--index": 1 }}
            >
              <div className="nav__burger__line__fill" />
            </div>
          </button>
        </div>

        {/* MENU DESKTOP (centrato nella 2a colonna desktop) */}
        <div className="items-center justify-between hidden uppercase fxl:text-lg lg:flex">
          <Link href="/chi-siamo">chi siamo</Link>
          <Link href="/">ispirazioni</Link>
          <Link href="/">progetti realizzati</Link>
          <Link href="/">contatti</Link>
        </div>

        {/* Bottone (3a colonna desktop) */}
        <div className="items-center justify-end hidden lg:flex">
          <Link
            href="/"
            className="uppercase bg-[#BCA70D] text-white lg:text-lg lg:px-[42px] fxl:px-[60px] py-5"
          >
            la nostra consulenza
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
