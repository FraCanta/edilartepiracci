import Layout from "@/components/layout/layout";
import PageTransition from "@/components/layout/PageTransition";
import "@/styles/globals.css";
import "@/styles/swiper.css";

import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setIsTransitioning(true);
    const handleComplete = () =>
      setTimeout(() => setIsTransitioning(false), 500);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  // Mostra subito la navbar solo se la pagina NON ha Hero animato
  useEffect(() => {
    if (!pageProps.hasHeroAnimated) {
      setShowNavbar(true);
    }
  }, [pageProps.hasHeroAnimated]);

  return (
    <>
      <Layout showNavbar={showNavbar}>
        <PageTransition
          isVisible={isTransitioning}
          colors={["#306d93", "#ddd2c0"]}
        />
        <Component
          {...pageProps}
          onHeroFinished={() => setShowNavbar(true)} // comparirà alla fine dell’animazione
        />
      </Layout>
    </>
  );
}
