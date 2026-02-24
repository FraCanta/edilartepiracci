import React from "react";
import progettiIT from "../../public/locales/it/progetti.json";
import Image from "next/image";
import CtaPrimary from "@/components/layout/Cta/CtaPrimary";
import Link from "next/link";
import { Icon } from "@iconify/react";
function SingleProject({ progetti, allProjects, slug }) {
  const currentIndex = allProjects.indexOf(slug);

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === allProjects.length - 1;

  const prevProjectSlug = !isFirst ? allProjects[currentIndex - 1] : null;

  const nextProjectSlug = !isLast ? allProjects[currentIndex + 1] : null;
  return (
    <>
      <div className="grid items-center justify-center min-h-[90svh] grid-cols-1 gap-10 pr-4 pl-4 pt-24 lg:pt-32 lg:pl-6 lg:grid-cols-2">
        <div className="flex flex-col justify-between h-full gap-6">
          <div className="flex flex-col gap-4">
            {" "}
            <div className="flex flex-wrap gap-4 font-medium text-black uppercase">
              {progetti?.type.map((item, index) => (
                <p
                  className="text-sm tracking-wide uppercase rounded-full lg:text-xl max-w-max"
                  key={index}
                >
                  {item.posto || item.stile}
                </p>
              ))}
            </div>
            <h1 className="font-bold text-4xl lg:text-[64px]">
              {progetti?.title}
            </h1>
            <div className="my-3 w-full h-[0.1px] bg-black mr-4 lg:mr-0" />
          </div>
          <p className="text-base lg:text-lg">{progetti?.description}</p>
          <div className="grid h-full grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="relative aspect-square">
              <Image
                fill
                alt={progetti.title}
                src={progetti?.img || "/assets/placeholder.png"}
                className="object-cover h-full aspect-sqaure"
              />
            </div>

            <div className="relative aspect-square">
              <Image
                fill
                alt={progetti.title}
                src={progetti?.img || "/assets/placeholder.png"}
                className="object-cover h-full aspect-sqaure"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p>Voglio una palette così</p>
            <CtaPrimary link="/contatti">Contattaci</CtaPrimary>
          </div>
        </div>
        <div className="relative h-full aspect-square lg:aspect-video">
          <Image
            fill
            alt={progetti.title}
            src={progetti?.img || "/assets/placeholder.png"}
            className="object-cover h-full aspect-sqaure"
          />
        </div>
      </div>
      <div className="px-4 mt-10 mb-20 lg:px-6 lg:w-[90%] mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Torna ai progetti */}
        <Link
          href="/progetti"
          className="flex items-center gap-2 font-medium uppercase lg:text-lg text-blue"
        >
          <Icon icon="ic:baseline-chevron-left" width="32px" height="32px" />
          torna ai progetti
        </Link>

        <div className="flex gap-8">
          {/* Progetto precedente */}
          {prevProjectSlug && (
            <Link
              href={`/progetti/${prevProjectSlug}`}
              className="flex items-center gap-2 font-medium uppercase lg:text-lg text-blue"
            >
              <Icon
                icon="ic:baseline-chevron-left"
                width="32px"
                height="32px"
              />
              Progetto precedente
            </Link>
          )}

          {/* Progetto successivo */}
          {nextProjectSlug && (
            <Link
              href={`/progetti/${nextProjectSlug}`}
              className="flex items-center gap-2 font-medium uppercase lg:text-lg text-blue"
            >
              progetto successivo
              <Icon
                icon="ic:baseline-chevron-right"
                width="32px"
                height="32px"
              />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default SingleProject;

/* ================= STATIC PROPS ================= */

export async function getStaticProps(context) {
  const { params } = context;

  let obj = progettiIT;
  let allProjects = Object.keys(obj?.progetti?.singleProjects);
  let targetObj = obj?.progetti?.singleProjects?.[params?.title];

  return {
    props: {
      progetti: targetObj,
      slug: params?.title,
      allProjects,
    },
  };
}

/* ================= STATIC PATHS ================= */

export async function getStaticPaths({ locale }) {
  let obj = progettiIT;

  const progetti = Object.keys(obj?.progetti?.singleProjects);

  const paths = progetti.map((el) => ({
    params: { title: el },
    locale: "it",
  }));

  return {
    paths,
    fallback: false,
  };
}
