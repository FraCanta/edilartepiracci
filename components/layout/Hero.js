import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({ onHeroFinished }) {
  return (
    <div className="relative min-h-[100svh]  lg:h-screen overflow-hidden">
      {/* Background Image animata */}
      <motion.div
        initial={{ filter: "blur(14px)", scale: 1.8 }}
        animate={{ filter: "blur(0px)", scale: 1 }}
        transition={{
          delay: 0.8,
          type: "spring",
          mass: 1,
          duration: 1.5,
          stiffness: 19.75,
          damping: 6.67,
        }}
        className="absolute inset-0"
      >
        <Image
          src="/assets/hero_home2.jpg"
          alt="hero pagina"
          fill
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlay animato (questo chiama la fine animazione) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          type: "spring",
          mass: 1,
          stiffness: 19.75,
          damping: 6.67,
        }}
        onAnimationComplete={onHeroFinished}
        className="absolute bottom-0 left-0 px-4 py-4   lg:px-10  w-full xs:h-[64vh] sm:h-[58vh] lg:h-[38vh] 2xl:h-[42vh] fxl:h-[31vh] backdrop-blur-sm bg-black/10 lg:rounded-t-[60px] flex items-center gap-10 text-white"
      >
        <div className="relative flex flex-col items-center w-full gap-6 lg:flex-row lg:gap-10">
          {/* Logo */}
          <div className="absolute right-0 top-10 lg:static">
            <Image
              src="/assets/flower_logo.svg"
              alt="flower"
              width={184}
              height={184}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-[150px] md:h-[150px] 2xl:w-[180px] 2xl:h-[180px] fxl:w-[184px] fxl:h-[184px]"
            />
          </div>

          {/* Testo */}
          <div className="flex flex-col gap-6 py-10 md:gap-3 fxl:gap-4 lg:text-left">
            <h1 className="text-[38px] font-jost sm:text-[42px] xl:text-[48px] 2xl:text-[54px] fxl:text-[64px]  leading-none flex flex-col md:gap-1 lg:gap-2">
              <span className="font-medium">La vostra casa,</span>

              <span className="font-bold">come l’avete immaginata.</span>
            </h1>

            <p className="text-[16px]  xl:text-base xl:max-w-[65rem] fxl:max-w-max">
              Da 50 anni arrediamo i vostri spazi,{" "}
              <strong>su misura per voi</strong>.
              <br /> Una realtà unica dove tradizione, innovazione e ricerca dei
              brand di eccellenza sul mercato si incontrano per dare forma alla
              casa dei tuoi sogni.
              <br /> Attraverso l’esplorazione di materiali, l’accostamento di
              forme, genere e colori, vi guidiamo nella scelta degli elementi
              migliori per{" "}
              <strong>tradurre in realtà le idee dei vostri spazi</strong>.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
