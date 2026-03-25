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
        className="absolute bottom-0 left-0 px-4 py-4   lg:px-10  w-full h-[32vh] xl:h-[22vh] 2xl:h-[42vh] fxl:h-[25vh] backdrop-blur-sm bg-black/10 lg:rounded-t-[60px] flex items-center gap-10 text-white"
      >
        <div className="relative flex flex-col items-center w-full gap-6 lg:flex-row lg:gap-10">
          {/* Logo */}
          <div className="absolute right-0 top-10 lg:static">
            <Image
              src="/assets/flower_logo.svg"
              alt="flower"
              width={184}
              height={184}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-[150px] md:h-[150px] xl:w-[120px] xl:h-[120px] 2xl:w-[180px] 2xl:h-[180px] fxl:w-[184px] fxl:h-[184px]"
            />
          </div>

          {/* Testo */}
          <div className="flex flex-col gap-6 py-10 md:gap-3 fxl:gap-4 lg:text-left">
            <h1 className="text-[38px] font-jost sm:text-[42px] xl:text-[42px] 2xl:text-[54px] fxl:text-[64px]  leading-none flex flex-col md:gap-1 lg:gap-2">
              <span className="font-medium">La vostra casa,</span>

              <span className="font-bold">come l’avete immaginata.</span>
            </h1>

            <p className="text-[18px] sm:text-[22px] xl:text-[19px] 2xl:text-2xl xl:max-w-[65rem] fxl:max-w-max">
              Da 50 anni arrediamo i vostri spazi,{" "}
              <strong>su misura per voi</strong>.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
