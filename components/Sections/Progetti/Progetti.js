import Image from "next/image";
import Link from "next/link";
import React from "react";

function Progetti() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen px-4 py-10 lg:px-10 lg:py-20 ">
      {/* Overlay SEMPRE sotto */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-white/85"></div>

      {/* Tutto il resto SEMPRE sopra */}
      <div className="relative z-10 flex flex-col h-full gap-6 text-black">
        <div className="grid w-full gap-6 lg:grid-cols-[1fr_auto]">
          {/* Titolo */}
          <h2 className="order-1 text-[32px] lg:text-[38px] fxl:text-[52px] font-medium leading-none">
            Alcuni nostri <strong>progetti</strong>
          </h2>

          {/* Bottone */}
          <Link
            href="/progetti-realizzati"
            className="order-3 w-full px-6 py-4 text-center text-white uppercase bg-yellow lg:order-2 lg:w-auto"
          >
            Vedi tutti
          </Link>
        </div>

        <div className="relative z-10 grid justify-between w-full grid-cols-1 gap-10 mt-10 lg:grid-cols-3">
          <div className="block w-full ">
            <Link href="/">
              <Image
                width={400}
                height={300}
                src="/assets/placeholder.png"
                className="w-full"
                alt=""
              />

              <h4 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-blue text-heading">
                Appartamento vista mare
              </h4>
              <p className="text-xl text-black">Vieste, [Anno]</p>

              <p className="my-6 text-black text-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </Link>
          </div>
          <div className="block w-full ">
            <Link href="/">
              <Image
                width={400}
                height={300}
                src="/assets/placeholder.png"
                className="w-full"
                alt=""
              />

              <h4 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-blue text-heading">
                Appartamento vista mare
              </h4>
              <p className="text-xl text-black">Vieste, [Anno]</p>

              <p className="my-6 text-black text-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </Link>
          </div>
          <div className="block w-full ">
            <Link href="/">
              <Image
                width={400}
                height={300}
                src="/assets/placeholder.png"
                className="w-full"
                alt=""
              />

              <h4 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-blue text-heading">
                Appartamento vista mare
              </h4>
              <p className="text-xl text-black">Vieste, [Anno]</p>

              <p className="my-6 text-black text-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progetti;
