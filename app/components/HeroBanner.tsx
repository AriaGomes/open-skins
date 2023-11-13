import { useSession } from "next-auth/react";

//TODO: This componenet looks a little weird in certain screen sizes, fix it
export const HeroBanner = () => {
  const { data: session, status } = useSession();
  return (
    <section
      className={`relative bg-[url('/assets/nuke.webp')] bg-cover bg-center bg-no-repeat h-100vh`}
      style={{
        height: "100vh",
      }}
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Open
            <strong className="block font-extrabold text-primary">Skins</strong>
          </h1>

          {status === "loading" ? (
            <p className="mt-4 max-w-lg sm:text-xl/relaxed"> Loading...</p>
          ) : (
            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              {session
                ? `Welcome Back, ${session?.user?.name}`
                : "More than just a CS2 Stash clone!"}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-secondary px-12 py-3 text-sm font-medium text-white shadow hover:bg-secondary/60 focus:outline-none focus:ring active:bg-gray-400 sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="https://github.com/AriaGomes/open-skins"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-primary shadow hover:text-secondary focus:outline-none focus:ring active:text-gray-400 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
        <video autoPlay muted loop>
          <source src="/assets/agent.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};

export default HeroBanner;
