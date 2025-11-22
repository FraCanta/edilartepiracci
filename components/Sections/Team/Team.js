import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Bonnie Green",
    role: "CEO/Co-founder",
    image: "/assets/avatar.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 2,
    name: "Helene Fischer",
    role: "Project Lead",
    image: "/assets/avatar.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 3,
    name: "Jese Leos",
    role: "Marketing Strategist",
    image: "/assets/avatar.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
];

export default function Team() {
  return (
    <section className="my-10">
      <div className="px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="mx-auto mb-10">
          <h2 className="mb-4 text-3xl font-medium leading-none text-black lg:text-4xl fxl:text-[50px]">
            Volti reali, consulenti che ascoltano prima di proporre.
          </h2>
          <p className="text-base text-black lg:text-lg">
            Volti reali, consulenti dedicati e spazi aggiornati per toccare con
            mano i materiali.
          </p>
        </div>

        {/* FLEX RIGA + relative per allineare i separators */}
        <div className="relative grid justify-between grid-cols-1 pt-10 lg:grid-cols-3 gap-y-10">
          {teamMembers.map((member, idx) => (
            <div
              key={member.id}
              className="relative flex flex-col items-center flex-1 px-4 text-center text-black lg:px-6"
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

              {/* Ruolo */}
              <p className="text-base text-black">{member.role}</p>

              {/* Bio */}
              <p className="mt-2 text-sm text-black max-w-max lg:max-w-md lg:text-base ">
                {member.bio}
              </p>

              {/* ★ SEPARATORE tra card (solo se non è l'ultima card) */}
              {idx !== teamMembers.length - 1 && (
                <div className="hidden md:block w-[1px] bg-black/20 h-full absolute right-0 top-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
