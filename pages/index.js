import Hero from "@/components/layout/Hero";

export default function Home({ onHeroFinished }) {
  return (
    <>
      <Hero onHeroFinished={onHeroFinished} />
      <div className="w-full h-[25vh] bg-[#BCA70D] sticky top-0 z-50"></div>

      <div className="pt-[15vh]">
        <div className="h-screen">cacca</div>
      </div>
    </>
  );
}
