import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Enzo Piracci",
    image: "/assets/avatar.png",
  },
  {
    id: 2,
    name: "Pino Piracci",
    image: "/assets/avatar.png",
  },
];

export default function Team() {
  return (
    <section className="my-10">
      <div className="px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="mx-auto mb-10">
          <h2 className="mb-6 text-3xl leading-tight text-black lg:text-5xl ">
            <span className="font-medium">
              La scelta quotidiana di dare ascolto ai vostri
            </span>{" "}
            <strong>desideri</strong>
          </h2>
          <p className="text-base text-black lg:text-lg">
            Raccogliere le vostre aspirazioni è alla base del nostro lavoro,
            motivazione e fonte creativa per dare forma e comfort ai vostri
            ambienti.
            <br /> Spesso i nostri progetti iniziano dal passaparola di chi
            racconta la propria esperienza, dalla consulenza nella scelta dei
            materiali, al relativo equilibrio di forme e colori, <br />
            fino alla progettazione di ciò che dovrà custodire le vostre
            emozioni
          </p>
        </div>

        {/* FLEX RIGA + relative per allineare i separators */}
        <div className="relative grid justify-between grid-cols-2 gap-10 pt-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-black/20"></div>
          {teamMembers.map((member, idx) => (
            <div
              key={member.id}
              className="relative flex flex-col items-center flex-1 text-center text-black "
            >
              {/* Avatar */}
              <Image
                src={member.image}
                width={144}
                height={144}
                alt={member.name}
                className="object-cover mx-auto mb-4 rounded-full w-36 h-36"
              />

              {/* Nome */}
              <h3 className="mb-1 text-lg font-medium text-black lg:text-2xl">
                {member.name}
              </h3>

              {/* Bio */}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 mx-auto mt-20 lg:gap-10">
          <h2 className="mb-6 text-3xl font-medium leading-tight text-black lg:text-5xl ">
            Noi tutti al vostro servizio
          </h2>
          <div className="relative w-full lg:min-h-screen aspect-square lg:aspect-video">
            <Image
              src="/assets/placeholder.png"
              alt="Tutto lo staff"
              fill
              className="object-cover w-full h-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
