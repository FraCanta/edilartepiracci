import Hero from "@/components/layout/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Home({ onHeroFinished }) {
  return (
    <>
      <Hero onHeroFinished={onHeroFinished} />
      <div className="w-full min-h-[42svh] lg:min-h-[20vh] bg-[#BCA70D] px-4 py-6 lg:py-10 lg:px-10 sticky top-[calc(100svh-40svh)] lg:top-[calc(100vh-20vh)] z-50 flex flex-col lg:flex-row  items-center lg:justify-between gap-4">
        {/* wrapper testo */}
        <div className="flex flex-col justify-center gap-2">
          <h2 className="text-[28px] fxl:text-[42px] text-white leading-none font-medium">
            Affidati alla nostra consulenza in showroom
          </h2>
          <p className="text-[15px] fxl:text-[21px] text-white leading-none">
            Qualità certificata, fornitori esclusivi, consulenza sartoriale
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {" "}
          <Link
            href="/"
            className="uppercase bg-[#306D93] text-white px-[20px] py-[20px] text-center text-lg xl:text-sm lg:px-[42px] 2xl:text-base fxl:px-[60px] md:py-5 w-full lg:max-w-max"
          >
            prenota
          </Link>
          <Link
            href="/"
            className="uppercase border border-white text-white px-[20px] py-[20px] text-center text-lg xl:text-sm lg:px-[42px] 2xl:text-base fxl:px-[60px] md:py-5 w-full lg:max-w-max"
          >
            scopri come funziona
          </Link>
        </div>
      </div>

      <div className="flex flex-col  lg:justify-center min-h-screen lg:min-h-[40vh] gap-20  -my-[38vh] lg:-my-[15vh]">
        <h2 className="text-4xl font-medium fxl:text-5xl">Dicono di noi</h2>
        {/* <script src="https://elfsightcdn.com/platform.js" async></script>
        <div
          className="elfsight-app-91403e13-7093-478f-a7c3-731b0445758e"
          data-elfsight-app-lazy
        ></div> */}
      </div>

      <div className="flex flex-col min-h-screen gap-20 py-4 mt-20 lg:py-10">
        <div className="relative">
          <Image
            src="/assets/grande_scritta.svg"
            alt="showroom interno"
            width={1920}
            height={1080}
            className="object-cover w-full h-auto "
          />
          <div className="absolute left-0 -bottom-24 h-[30vh] bg-[#DDD2C0] w-full  flex flex-col justify-center gap-10">
            <h2 className="px-4 text-4xl font-medium fxl:text-5xl lg:px-10">
              Alcuni nostri fornitori
            </h2>
            <p>marquee loghi</p>
          </div>
        </div>
      </div>
    </>
  );
}
