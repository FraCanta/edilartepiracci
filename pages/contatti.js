import HeroPage from "@/components/layout/HeroPage";
import { Icon } from "@iconify/react";
import dynamic from "next/dynamic";
import Link from "next/link";

const ContattiMap = dynamic(() => import("../components/ContattiMap"), {
  ssr: false,
});

export default function Contatti() {
  return (
    <div>
      <HeroPage
        title={"Parliamone: <br/> ti aspettiamo in showroom"}
        paragraph={"Chiamaci e prenota un appuntamento"}
      />

      <section className="relative w-full">
        {/* Overlay con card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 lg:translate-x-0 mx-auto lg:left-32 -translate-y-1/2 z-[1000] w-[90%] lg:w-[450px] lg:h-[450px] bg-white  ">
          {" "}
          <div className="flex flex-col justify-between h-full p-8 bg-white">
            <div>
              <h2 className="mb-4 text-2xl font-medium lg:text-4xl">
                Edilarte Piracci
              </h2>

              <Link
                href="https://maps.app.goo.gl/C5WBEjNcda2tGnfA6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mb-4 text-base"
              >
                <span>
                  <Icon
                    icon="el:map-marker"
                    width="24px"
                    height="24px"
                    className="text-blue"
                  />
                </span>{" "}
                Contrada Valle Castellana 71010 Peschici (FG)
              </Link>
            </div>

            <h3 className="mb-2 text-xl font-medium">Chiamaci</h3>

            <ul className="space-y-6 text-sm">
              <li>
                <Link
                  className="flex items-center gap-2 text-base"
                  href="tel:0884963001"
                  rel="noopener noreferrer"
                >
                  <span>
                    <Icon
                      icon="ic:round-phone"
                      width="24px"
                      height="24px"
                      className="text-blue"
                    />
                  </span>{" "}
                  Ufficio 0884.963001
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2 text-base"
                  href="tel:0884963016"
                  rel="noopener noreferrer"
                >
                  <span>
                    <Icon
                      icon="ic:round-phone"
                      width="24px"
                      height="24px"
                      className="text-blue"
                    />
                  </span>{" "}
                  Showroom 0884.963016
                </Link>
              </li>
              <li>
                <Link
                  href="tel:0884964027"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-base"
                >
                  <span>
                    <Icon
                      icon="ic:round-phone"
                      width="24px"
                      height="24px"
                      className="text-blue"
                    />
                  </span>{" "}
                  Amministrazione 0884.964027
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:edilaartepiracci@hotmail.com"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-base"
                >
                  <span>
                    <Icon
                      icon="ic:round-email"
                      width="24px"
                      height="24px"
                      className="text-blue"
                    />
                  </span>{" "}
                  edilaartepiracci@hotmail.com
                </Link>
              </li>
              <li className="flex items-center gap-2 text-base">
                <span>
                  <Icon
                    icon="material-symbols-light:schedule"
                    width="24px"
                    height="24px"
                    className="text-blue"
                  />
                </span>{" "}
                Showroom, consigliato prendere appuntamento
              </li>
            </ul>
          </div>
        </div>

        <ContattiMap />
      </section>
    </div>
  );
}
