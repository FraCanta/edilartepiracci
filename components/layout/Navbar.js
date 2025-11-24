import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ show }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inspirationOpen, setInspirationOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full h-[70px] lg:h-[100px] fixed top-0 z-[9999] backdrop-blur-sm bg-transparent"
    >
      <nav className="grid items-center w-full h-full grid-cols-2 lg:grid-cols-3">
        {/* Logo */}
        <Link
          href="/"
          title="homepage"
          className="z-20 pl-4 lg:pl-6"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/assets/logo/logo.svg"
            alt="logo piracci"
            width={150}
            height={80}
            className="w-28  fxl:w-[150px]  lg:w-[130px]  2xl:w-[150px] "
          />
        </Link>

        {/* MENU MOBILE */}
        <div className="flex justify-end pr-6 lg:hidden">
          <button
            className="nav__burger"
            style={{ "--length": 2 }}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
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

        {/* Menu mobile animato */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="fixed lg:hidden pt-[8rem] top-0 left-0 w-full h-dvh bg-white "
            >
              <div className="flex flex-col uppercase w-[90%] mx-auto h-full gap-6 text-lg overflow-y-auto pb-8">
                <Link href="/chi-siamo" onClick={() => setMenuOpen(false)}>
                  chi siamo
                </Link>

                {/* Ispirazioni dropdown mobile */}
                <div className="flex flex-col">
                  <div className="flex items-center justify-between w-full uppercase ">
                    {/* Testo = LINK */}
                    <Link
                      href="/ispirazioni"
                      onClick={() => setMenuOpen(false)}
                      className="flex-1"
                    >
                      ispirazioni
                    </Link>

                    {/* Chevron = apre sottomenu */}
                    <button
                      onClick={() => setInspirationOpen((prev) => !prev)}
                      aria-label="Apri ispirazioni"
                      className="p-2"
                    >
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          inspirationOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>

                  <AnimatePresence>
                    {inspirationOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="flex flex-col gap-4 pl-4 mt-3 overflow-hidden text-base border-b-2 border-b-yellow"
                      >
                        <Link
                          href="/ispirazioni/bagno"
                          onClick={() => {
                            setMenuOpen(false); // chiude menu principale
                            setInspirationOpen(false); // chiude dropdown
                          }}
                        >
                          Bagno
                        </Link>
                        <Link
                          href="/ispirazioni/living"
                          onClick={() => {
                            setMenuOpen(false); // chiude menu principale
                            setInspirationOpen(false); // chiude dropdown
                          }}
                        >
                          Living
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/" onClick={() => setMenuOpen(false)}>
                  progetti realizzati
                </Link>
                <Link href="/contatti" onClick={() => setMenuOpen(false)}>
                  contatti
                </Link>
                <Link
                  href="/la-nostra-consulenza"
                  className="uppercase bg-yellow text-white px-[20px] py-[20px] text-center text-lg xl:text-sm lg:px-[42px] 2xl:text-base fxl:px-[60px] md:py-5"
                  onClick={() => setMenuOpen(false)}
                >
                  la nostra consulenza
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MENU DESKTOP */}
        <div className="items-center justify-between hidden text-black uppercase xl:text-sm 2xl:text-base fxl:text-lg lg:flex">
          <Link href="/chi-siamo">chi siamo</Link>

          {/* Ispirazioni dropdown desktop */}
          <div className="relative group">
            <Link href="/ispirazioni" className="uppercase cursor-pointer">
              ispirazioni
            </Link>
            <div className="absolute left-0 pt-2 transition-opacity duration-200 opacity-0 pointer-events-none top-full group-hover:opacity-100 group-hover:pointer-events-auto">
              <div className="bg-white shadow-lg py-3 px-4  min-w-[180px] text-black border-b-2 border-b-yellow">
                <div className="flex flex-col gap-3 text-sm">
                  <Link
                    href="/ispirazioni/bagno"
                    className="transition-opacity hover:opacity-70"
                  >
                    Bagno
                  </Link>
                  <Link
                    href="/ispirazioni/living"
                    className="transition-opacity hover:opacity-70"
                  >
                    Living
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/">progetti realizzati</Link>
          <Link href="/contatti">contatti</Link>
        </div>

        {/* Bottone desktop */}
        <div className="items-center justify-end hidden lg:flex">
          <Link
            href="/la-nostra-consulenza"
            className="uppercase bg-yellow text-white lg:text-lg xl:text-sm lg:px-[42px] 2xl:text-base fxl:px-[60px] py-5"
          >
            la nostra consulenza
          </Link>
        </div>
      </nav>
    </motion.div>
  );
}

export default Navbar;
