import Link from "next/link";
import React from "react";

function HeroPage({ title, paragraph, link, linkName }) {
  return (
    <div className="h-[calc(80svh-70px)] lg:h-[calc(70svh-100px)] bg-blue/60 w-full flex flex-col justify-end">
      <div className="px-4 pb-20 lg:px-10">
        <div className="flex flex-wrap items-end justify-between w-full h-full gap-y-4">
          <div className="flex flex-col gap-6">
            <h1
              className="text-[32px] lg:text-5xl fxl:text-[64px] text-white font-medium"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>
            <p
              className="text-lg text-white lg:max-w-3xl fxl:max-w-max lg:text-xl fxl:text-2xl"
              dangerouslySetInnerHTML={{
                __html: paragraph,
              }}
            ></p>
          </div>{" "}
          {link && (
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
