import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({ onHeroFinished }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image animata */}
      <motion.div
        initial={{ filter: "blur(14px)", scale: 1.15 }}
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
          src="/assets/hero_piracci.jpg"
          alt="hero pagina"
          fill
          className="object-cover object-right lg:object-center"
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
        className="absolute bottom-0 left-0 p-4 lg:p-10 fxl:p-20 w-full xs:h-[32vh] sm:h-[28vh] fxl:h-[30vh] backdrop-blur-sm bg-black/10 lg:rounded-t-[60px] flex items-center gap-10 text-white"
      >
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-10">
          {/* Logo */}
          <div className="absolute md:top-4 right-6 lg:static">
            <Image
              src="/assets/flower_logo.svg"
              alt="flower"
              width={184}
              height={184}
              className="w-20 h-20 md:w-[150px] md:h-[150px] xl:w-[120px] xl:h-[120px] fxl:w-[184px] fxl:h-[184px]"
            />
          </div>

          {/* Testo */}
          <div className="flex flex-col gap-2 md:gap-3 fxl:gap-4 lg:text-left">
            <p className="text-xs md:text-xl lg::text-lg xl:text-lg">
              Con noi scegli bene, una volta sola
            </p>

            <h1 className="text-[38px] md:text-[77px] xl:text-[56px] fxl:text-[64px] font-medium leading-none flex flex-wrap md:gap-1 lg:gap-4">
              <span>Ogni cosa</span>
              <span>per ogni casa</span>
            </h1>

            <p className="text-[14px] md:text-2xl lg:text-xl">
              Selezioniamo materiali certificati e introvabili, ti guidiamo con
              una consulenza sartoriale fino a qui
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
