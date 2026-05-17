import Layout from "@/components/layout/layout";
import PageTransition from "@/components/layout/PageTransition";
import "@/styles/globals.css";
import "@/styles/swiper.css";

import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

export default function App({ Component, pageProps }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState("cover");
  const [showNavbar, setShowNavbar] = useState(false);
  const router = useRouter();
  const routeStartTimeRef = useRef(0);
  const transitionTimersRef = useRef([]);

  useEffect(() => {
    const clearTransitionTimers = () => {
      transitionTimersRef.current.forEach(clearTimeout);
      transitionTimersRef.current = [];
    };

    const addTransitionTimer = (callback, delay) => {
      const timer = setTimeout(callback, delay);
      transitionTimersRef.current.push(timer);
    };

    const closeTransition = () => {
      const elapsed = Date.now() - routeStartTimeRef.current;
      const waitForCover = Math.max(0, 380 - elapsed);

      addTransitionTimer(() => {
        setTransitionPhase("exit");
      }, waitForCover);

      addTransitionTimer(() => {
        setIsTransitioning(false);
      }, waitForCover + 520);
    };

    const handleStart = () => {
      clearTransitionTimers();
      routeStartTimeRef.current = Date.now();
      setTransitionPhase("cover");
      setIsTransitioning(true);

      addTransitionTimer(() => {
        setTransitionPhase("exit");
      }, 1800);

      addTransitionTimer(() => {
        closeTransition();
      }, 2400);
    };

    const handleComplete = () => {
      clearTransitionTimers();
      closeTransition();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
      clearTransitionTimers();
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
      <Script
        id="elfsight-platform"
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
      />
      <Layout showNavbar={showNavbar}>
        {isTransitioning && (
          <PageTransition
            phase={transitionPhase}
            colors={["#306d93", "#ddd2c0"]}
          />
        )}
        <Component
          {...pageProps}
          onHeroFinished={() => setShowNavbar(true)} // comparirà alla fine dell’animazione
        />
      </Layout>
    </>
  );
}
