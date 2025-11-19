import Hero from "@/components/layout/Hero";
import Link from "next/link";

export default function Home({ onHeroFinished }) {
  return (
    <>
      <Hero onHeroFinished={onHeroFinished} />
      <div className="w-full min-h-[42svh] lg:min-h-[20vh] bg-[#BCA70D] px-4 py-6 lg:py-10 lg:px-10 sticky top-[calc(100svh-40svh)] lg:top-[calc(100vh-20vh)] z-50 flex flex-col lg:flex-row  items-center lg:justify-between gap-4">
        {/* wrapper testo */}
        <div className="flex flex-col justify-center gap-2">
          <h2 className="text-[28px] fxl:text-[42px] text-white leading-none">
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
            onClick={() => setMenuOpen(false)}
          >
            prenota
          </Link>
          <Link
            href="/"
            className="uppercase border border-white text-white px-[20px] py-[20px] text-center text-lg xl:text-sm lg:px-[42px] 2xl:text-base fxl:px-[60px] md:py-5 w-full lg:max-w-max"
            onClick={() => setMenuOpen(false)}
          >
            scopri come funziona
          </Link>
        </div>
      </div>

      <div className="pt-[15vh]">
        <div className="h-screen">cacca</div>
      </div>
    </>
  );
}
