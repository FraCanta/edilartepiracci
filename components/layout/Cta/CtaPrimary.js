import Link from "next/link";
import React from "react";

function CtaPrimary({ children, link }) {
  return (
    <Link
      href={link}
      className="uppercase bg-yellow w-full lg:w-fit text-white flex justify-center lg:text-lg xl:text-sm lg:px-[42px] 2xl:text-base fxl:px-[60px] px-4 py-5"
    >
      {children}
    </Link>
  );
}

export default CtaPrimary;
