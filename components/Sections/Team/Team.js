import React from "react";

function Team() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="px-4 py-8 mx-auto lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 lg:mb-16">
            <h2 className="mb-4 text-3xl font-medium leading-none text-black lg:text-4xl dark:text-white">
              Volti reali, consulenti che ascoltano prima di proporre.
            </h2>
            <p className="text-black sm:text-xl lg:text-lg">
              Volti reali, consulenti dedicati e spazi aggiornati per toccare
              con mano i materiali.
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3">
            <div className="text-center text-black">
              <img
                className="mx-auto mb-4 rounded-full w-36 h-36"
                src="/assets/avatar.png"
                alt="Bonnie Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Bonnie Green</a>
              </h3>
              <p>CEO/Co-founder</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 rounded-full w-36 h-36"
                src="/assets/avatar.png"
                alt="Helene Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                <a href="#">Helene Engels</a>
              </h3>
              <p>CTO/Co-founder</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 rounded-full w-36 h-36"
                src="/assets/avatar.png"
                alt="Jese Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Jese Leos</a>
              </h3>
              <p>SEO & Marketing</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
