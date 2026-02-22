import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function Navbar({ show }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inspirationOpen, setInspirationOpen] = useState(false);
  const { locale, pathname } = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full h-[70px] lg:h-[100px] fixed top-0 z-[9999] backdrop-blur-sm bg-transparent "
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
        <div className="flex justify-end pr-6 lg:hidden ">
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
                <Link
                  href="/chi-siamo"
                  className={`${
                    pathname === "/chi-siamo"
                      ? "font-semibold transition-all ease-linear"
                      : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  chi siamo
                </Link>

                {/* Ispirazioni dropdown mobile */}
                <div
                  className={`flex flex-col  ${
                    inspirationOpen
                      ? "border border-yellow px-2 py-2 transition-all"
                      : "border-none px-0 py-0 transition-all"
                  }`}
                >
                  {" "}
                  <div className="flex items-center justify-between w-full uppercase ">
                    {/* Testo = LINK */}
                    <Link
                      href="/ispirazioni"
                      onClick={() => {
                        setMenuOpen(false); // chiude menu principale
                        setInspirationOpen(false); // chiude dropdown
                      }}
                      className={`${
                        pathname === "/ispirazioni"
                          ? "font-semibold transition-all ease-linear"
                          : "flex-1"
                      }`}
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
                        className="flex flex-col gap-4 mt-3 overflow-hidden text-base "
                      >
                        <Link
                          href="/ispirazioni/bagno"
                          onClick={() => {
                            setMenuOpen(false); // chiude menu principale
                            setInspirationOpen(false); // chiude dropdown
                          }}
                          className={`${
                            pathname === "/ispirazioni/bagno"
                              ? "font-semibold transition-all ease-linear"
                              : ""
                          }`}
                        >
                          Bagno
                        </Link>
                        <Link
                          href="/ispirazioni/spazio-living"
                          onClick={() => {
                            setMenuOpen(false); // chiude menu principale
                            setInspirationOpen(false); // chiude dropdown
                          }}
                          className={`${
                            pathname === "/ispirazioni/living"
                              ? "font-semibold transition-all ease-linear"
                              : ""
                          }`}
                        >
                          Living
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/progetti-realizzati"
                  onClick={() => setMenuOpen(false)}
                  className={`${
                    pathname === "/progetti-realizzati"
                      ? "font-semibold transition-all ease-linear"
                      : ""
                  }`}
                >
                  progetti realizzati
                </Link>
                <Link
                  className={`${
                    pathname === "/contatti"
                      ? "font-semibold transition-all ease-linear"
                      : ""
                  }`}
                  href="/contatti"
                  onClick={() => setMenuOpen(false)}
                >
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
        <div className="relative items-center justify-between hidden text-black uppercase lg:flex xl:text-sm 2xl:text-base fxl:text-lg">
          <Link
            className={`${
              pathname === "/chi-siamo"
                ? "font-semibold transition-all ease-linear"
                : ""
            }`}
            href="/chi-siamo"
          >
            chi siamo
          </Link>

          {/* Wrapper per ispirazioni + dropdown */}
          <div className="relative group">
            <Link
              className={`${
                pathname === "/ispirazioni"
                  ? "font-semibold transition-all ease-linear px-3 py-2 border border-transparent group-hover:border-t-yellow group-hover:border-l-yellow group-hover:border-r-yellow"
                  : "inline-flex items-center px-3 py-2 uppercase border border-transparent group-hover:border-t-yellow group-hover:border-l-yellow group-hover:border-r-yellow"
              }`}
              href="/ispirazioni"
            >
              ispirazioni
            </Link>

            {/* Dropdown assoluto */}
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 top-full group-hover:opacity-100">
              <div className="flex flex-col gap-3 p-3 text-sm bg-transparent border-b border-l border-r backdrop-blur-sm border-l-yellow border-r-yellow border-b-yellow">
                <Link
                  className={`${
                    pathname === "/ispirazioni/bagno"
                      ? "underline"
                      : "hover:opacity-70"
                  }`}
                  href="/ispirazioni/bagno"
                >
                  Bagno
                </Link>
                <Link
                  href="/ispirazioni/spazio-living"
                  className={`${
                    pathname === "/ispirazioni/living"
                      ? "underline"
                      : "hover:opacity-70"
                  }`}
                >
                  Living
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/progetti-realizzati"
            className={`${
              pathname === "/progetti-realizzati"
                ? "font-semibold transition-all ease-linear"
                : ""
            }`}
          >
            progetti realizzati
          </Link>
          <Link
            href="/contatti"
            className={`${
              pathname === "/contatti"
                ? "font-semibold transition-all ease-linear"
                : ""
            }`}
          >
            contatti
          </Link>
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
