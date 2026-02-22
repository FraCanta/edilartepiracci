import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="text-white footer_bg">
      <div className="w-full p-4 py-8 lg:py-8">
        <div className="gap-10 md:flex md:justify-between">
          <div className="flex flex-col justify-between gap-6 mb-6 md:mb-0 md:w-[40%] lg:w-[30%] pb-4 md:pb-0 border-b-[1px] border-white md:border-b-0">
            <div className="flex flex-col gap-2">
              <Link href="/">
                <Image
                  src="/assets/logo/logo.svg"
                  width={170}
                  height={80}
                  className="w-28 lg:w-[170px]"
                  alt="Edilarte Piracci Logo"
                />
              </Link>
              <p className="text-lg">
                <strong>Edilarte Piracci s.a.s.</strong> <br /> di Piracci
                Giuseppe e Vincenzo & C.
              </p>
            </div>

            <div>
              <p>Da 50 anni arrediamo i vostri spazi, su misura per voi.</p>
              <p>Sede legale: Contrada Valle Castellana 71010 Peschici (FG)</p>
            </div>
          </div>
          <div className="grid justify-between w-full grid-cols-1 gap-8 sm:gap-6 md:grid-cols-3 md:w-[60%] lg:w-[70%]">
            {" "}
            <div className="pb-4 border-b-[1px] border-white md:border-b-0 2xl:pl-4 lg:pl-3 md:border-l-[1px]">
              <h2 className="mb-6 text-sm font-medium uppercase text-heading">
                Edilarte piracci
              </h2>
              <ul className="flex flex-col gap-2 text-body">
                <li>
                  <Link href="/chi-siamo" className="hover:underline">
                    Chi siamo
                  </Link>
                </li>
                <li>
                  <Link href="/ispirazioni" className="hover:underline">
                    Ispirazioni
                  </Link>
                </li>
                <li>
                  <Link href="/progetti-realizzati" className="hover:underline">
                    Progetti realizzati
                  </Link>
                </li>
                <li>
                  <Link href="/contatti" className="hover:underline">
                    Lavora con noi
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pb-4 border-b-[1px] border-white md:border-b-0 2xl:pl-4 lg:pl-2 md:border-l-[1px] flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-sm font-medium uppercase text-heading">
                  Consulenza
                </h2>
                <p>Scopri come funziona</p>
              </div>

              <Link
                href="/"
                className="uppercase flex items-center  bg-yellow text-white px-[20px] py-[20px] xl:px-10 justify-center text-lg xl:text-sm lg:px-[42px] 2xl:text-base fxl:px-[60px] md:py-5 "
              >
                prenota ora
                <Icon
                  icon="heroicons:chevron-right-20-solid"
                  width="28px"
                  height="28px"
                  style={{ color: "#fff" }}
                />
              </Link>
            </div>
            <div className="border-white md:pl-4 md:border-l-[1px]">
              <h2 className="mb-6 text-sm font-medium uppercase text-heading">
                contatti e social
              </h2>
              <ul className=" text-body">
                <li className="mb-4">
                  <Link
                    href="mailto:edilartepiracci@hotmail.com"
                    className="hover:underline"
                  >
                    edilartepiracci@hotmail.com
                  </Link>
                </li>
                <li>
                  <Link href="tel:0884963001" className="hover:underline">
                    Ufficio - 0884 963001
                  </Link>
                </li>
                <li>
                  <Link href="tel:0884964027" className="hover:underline">
                    Edilizia - 0884 964027
                  </Link>
                </li>
                <li>
                  <Link href="tel:0884963016" className="hover:underline">
                    Termoidraulica - 0884 963016
                  </Link>
                </li>
                <li>
                  <div className="flex mt-4 ">
                    <a href="#" className="text-body hover:text-heading">
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Facebook page</span>
                    </a>

                    <a href="#" className="text-body hover:text-heading ms-5">
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32px"
                        height="32px"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#ffffff"
                          d="M16 7a1 1 0 1 1 2 0a1 1 0 0 1-2 0"
                        />
                        <path
                          fill="#ffffff"
                          fillRule="evenodd"
                          d="M12 7.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 12a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"
                          clipRule="evenodd"
                        />
                        <path
                          fill="#ffffff"
                          fillRule="evenodd"
                          d="M17.258 2.833a47.7 47.7 0 0 0-10.516 0c-2.012.225-3.637 1.81-3.873 3.832a46 46 0 0 0 0 10.67c.236 2.022 1.86 3.607 3.873 3.832a47.8 47.8 0 0 0 10.516 0c2.012-.225 3.637-1.81 3.873-3.832a46 46 0 0 0 0-10.67c-.236-2.022-1.86-3.607-3.873-3.832m-10.35 1.49a46.2 46.2 0 0 1 10.184 0c1.33.15 2.395 1.199 2.55 2.517a44.4 44.4 0 0 1 0 10.32a2.89 2.89 0 0 1-2.55 2.516a46.2 46.2 0 0 1-10.184 0a2.89 2.89 0 0 1-2.55-2.516a44.4 44.4 0 0 1 0-10.32a2.89 2.89 0 0 1 2.55-2.516"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Dribbble account</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-default sm:mx-auto lg:my-8" />
        <div className="flex-wrap gap-4 sm:flex sm:items-center sm:justify-between">
          <div className="grid items-center grid-cols-2 gap-2 lg:gap-10 2xl:gap-20 xl:grid-cols-4 font-work">
            <span className="text-sm text-body ">P. IVA 01745120715</span>
            <span className="text-sm text-body ">
              Cap. Soc. € 100.000,00 i.v
            </span>
            <span className="text-sm text-body ">Terms and conditions</span>
            <span className="text-sm text-body ">Privacy policy</span>
          </div>

          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <span className="text-sm text-body sm:text-center">
              © 2025{" "}
              <Link href="/" className="hover:underline">
                Edilarte Piracci™
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
