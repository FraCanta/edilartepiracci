import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

function HeroPage({
  title,
  paragraph,
  link,
  linkName,
  linkName1,
  linkName2,
  link2,
  linkCta1,
  linkCta2,
  backgroundClass, // <-- nuova prop
}) {
  return (
    <div
      className={`h-[90svh]  w-full flex flex-col justify-end relative ${backgroundClass} bg-cover bg-center"}`}
    >
      <div
        className={`${backgroundClass ? "absolute inset-0 bg-black/20" : ""}`}
      />
      <div className="z-50 px-4 pb-6 lg:pb-20 lg:px-10">
        <div className="flex flex-wrap items-end justify-between w-full h-full gap-y-4">
          {/* Titolo e paragrafo */}
          <div className="flex flex-col gap-2 lg:gap-6">
            <h1
              className="text-[32px] lg:text-5xl fxl:text-[64px] text-black font-medium"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p
              className="text-lg text-black lg:max-w-3xl fxl:max-w-max lg:text-xl fxl:text-2xl"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
            {/* Secondo link sotto il testo */}
            {link2 && (
              <div className="flex flex-wrap gap-4 mt-4 lg:gap-20">
                {linkCta1 && (
                  <Link
                    href={linkCta1}
                    className="uppercase justify-center flex w-full lg:w-fit items-center border border-yellow text-yellow px-[20px] py-[20px] xl:px-10 text-center text-lg xl:text-sm lg:px-[42px] 2xl:text-base fxl:px-[60px] md:py-5"
                  >
                    {linkName1}
                    <Icon
                      icon="heroicons:chevron-right-20-solid"
                      width="28px"
                      height="28px"
                      className="text-yellow"
                    />
                  </Link>
                )}
                {linkCta2 && (
                  <Link
                    href={linkCta2}
                    className="uppercase w-full lg:w-fit bg-yellow text-white px-[20px] py-[20px] text-center text-lg xl:text-sm lg:px-[42px] 2xl:text-base fxl:px-[60px] md:py-5"
                  >
                    {linkName2}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Primo link a justify-between */}
          {link && linkName && (
            <Link
              href={link}
              className="uppercase w-full lg:w-fit bg-yellow text-white px-[20px] py-[20px] text-center text-lg xl:text-sm lg:px-[42px] 2xl:text-base fxl:px-[60px] md:py-5"
            >
              {linkName}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
