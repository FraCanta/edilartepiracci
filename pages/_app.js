import Layout from "@/components/layout/layout";
import PageTransition from "@/components/layout/PageTransition";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pageName, setPageName] = useState("");
  const router = useRouter();

  // Stato per far comparire la navbar dal layout
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      setPageName(url.replace("/", "") || "Homepage");
      setIsTransitioning(true);
    };

    const handleComplete = () => {
      setTimeout(() => setIsTransitioning(false), 500);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <Layout showNavbar={showNavbar}>
      <PageTransition
        isVisible={isTransitioning}
        colors={["#306d93", "#ddd2c0"]}
      />
      <Component
        {...pageProps}
        onHeroFinished={() => setShowNavbar(true)} // 🔥 modo corretto
      />
    </Layout>
  );
}
