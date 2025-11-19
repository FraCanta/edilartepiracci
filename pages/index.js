import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero section senza il div amber */}
      <div className="relative min-h-screen">
        {/* Immagine */}
        <Image
          src="/assets/hero_piracci.jpg"
          alt="hero pagina"
          fill
          className="object-cover object-right lg:object-center"
        />

        {/* Overlay h1 centrato verticalmente */}
        <div className="absolute bottom-0 left-0 p-4 lg:p-10 fxl:p-20 w-full lg:h-[28vh] fxl:h-[30vh] backdrop-blur-sm bg-black/10 lg:rounded-t-[60px] flex items-center  gap-10 text-white">
          {/* Container interno per logo + testo */}
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-10">
            {/* Logo */}
            <div className="absolute right-6 lg:static">
              <Image
                src="/assets/flower_logo.svg"
                alt="flower"
                width={184}
                height={184}
                className="w-20 h-20 lg:w-[150px] lg:h-[150px] fxl:w-[184px] fxl:h-[184px]"
              />
            </div>

            {/* Testo */}
            <div className="flex flex-col gap-2 lg:gap-3 fxl:gap-4 lg:text-left">
              <p className="text-xs lg:text-lg">
                Con noi scegli bene, una volta sola
              </p>
              <h1 className="text-[38px] lg:text-[56px] fxl:text-[64px] font-medium leading-none flex flex-wrap lg:gap-4">
                <span>Ogni cosa</span>
                <span>per ogni casa</span>
              </h1>
              <p className="text-[14px] lg:text-xl">
                Selezioniamo materiali certificati e introvabili, ti guidiamo
                con una consulenza sartoriale fino a qui
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Div amber: parte subito sotto la hero */}
      <div className="w-full h-[25vh] bg-[#BCA70D] sticky top-[calc(100vh-25vh)] z-50"></div>

      {/* Contenuti sotto */}
      <div className="pt-[15vh]">
        <div className="h-screen">cacca</div>
      </div>
    </>
  );
}
