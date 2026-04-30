import React, { useEffect, useState } from "react";
import Script from "next/script";

function Reviews() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col gap-10 px-4 py-6 my-10 overflow-hidden lg:mb-0 lg:py-0 lg:px-10 lg:justify-center lg:gap-20">
      <h2 className="text-3xl font-medium lg:text-4xl fxl:text-5xl">
        Dicono di noi
      </h2>

      {isClient && (
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="afterInteractive"
        />
      )}
      <div
        className="elfsight-app-d3944196-da86-4ad6-84aa-5c985058fd61"
        data-elfsight-app-lazy
        suppressHydrationWarning
      ></div>
    </div>
  );
}

export default Reviews;
