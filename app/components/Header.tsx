import { CounterStrikeLogo } from "../../public/assets";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const Header = () => {
  const { data: session, status } = useSession();

  return (
    <header className="bg-white grow">
      <div className="mx-auto flex max-w-screen items-center gap-8 px-4 my-2 sm:px-6 lg:px-8">
        <a className="block" href="/">
          <span className="sr-only">Home</span>
          <CounterStrikeLogo height={"45px"} width={"45px"} />
        </a>

        <div className="flex flex-1 items-center justify-end xl:justify-between">
          <nav aria-label="Global" className="hidden xl:block">
            <ul className="flex items-center gap-6 text-sm">
              {HeaderValues.map((item, index) => (
                <li key={index}>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href={item.url}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex gap-4 hidden">
              {status === "loading" && (
                <div className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-600">
                  Loading...
                </div>
              )}

              {status === "authenticated" && (
                <div className="flex border rounded-md">
                  <Link
                    href={`https://steamcommunity.com/profiles/${
                      session.user?.email?.split("@")[0]
                    }`}
                  >
                    <Image
                      src={session?.user?.image as string}
                      alt={session?.user?.name as string}
                      className="rounded-md w-10 h-10 mr-2"
                      width={40}
                      height={40}
                    />
                  </Link>

                  <button
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-secondary "
                    onClick={() => signOut()}
                  >
                    Sign Out
                  </button>
                </div>
              )}

              {status === "unauthenticated" && (
                <button
                  onClick={() => signIn("steam")}
                  className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-100 hover:text-primary/75 sm:block"
                >
                  Login
                </button>
              )}
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 xl:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const HeaderValues = [
  {
    name: "Skins",
    url: "/skins",
  },
  {
    name: "Crates",
    url: "/crates",
    dropDown: [
      {
        name: "Patches",
        url: "/cases/patches",
      },
      {
        name: "Pins",
        url: "/cases/pins",
      },
      {
        name: "Graffiti",
        url: "/cases/graffiti",
      },
      {
        name: "Music Kits",
        url: "/cases/music-kits",
      },
      {
        name: "Collectibles",
        url: "/cases/collectibles",
      },
      {
        name: "Keys",
        url: "/cases/keys",
      },
    ],
  },
  {
    name: "Stickers",
    url: "/stickers",
  },
  {
    name: "Collections",
    url: "/collections",
  },
  {
    name: "Keys",
    url: "/keys",
  },
  {
    name: "Collectibles",
    url: "/collectibles",
    dropDown: [
      {
        name: "Fantasy Trophies",
        url: "/collectibles/fantasy-trophies",
      },
      {
        name: "Finalist Trophies",
        url: "/collectibles/finalist-trophies",
      },
      {
        name: "Pick'Em Coins",
        url: "/collectibles/pickem-coins",
      },
      {
        name: "Pick'Em Old",
        url: "/collectibles/pickem-old",
      },
      {
        name: "Coins",
        url: "/collectibles/coins",
      },
      {
        name: "Stars",
        url: "/collectibles/stars",
      },
      {
        name: "Map Coins",
        url: "/collectibles/map-coins",
      },
      {
        name: "Pins",
        url: "/collectibles/pins",
      },
      {
        name: "Service Medals",
        url: "/collectibles/service-medals",
      },
      {
        name: "Other",
        url: "/collectibles/other",
      },
    ],
  },
  {
    name: "Agents",
    url: "/agents",
  },
  {
    name: "Patches",
    url: "/patches",
  },
  {
    name: "Graffitis",
    url: "/graffitis",
  },
  {
    name: "Music Kits",
    url: "/music-kits",
  },
  {
    name: "Updates",
    url: "/updates",
  },
  {
    name: "Tools",
    url: "/tools",
    dropDown: [
      {
        name: "Float Checker",
        url: "/tools/float-checker",
      },
      {
        name: "Pattern Checker",
        url: "/tools/pattern-checker",
      },
      {
        name: "Trade Up Contract",
        url: "/tools/trade-up-contract",
      },
      {
        name: "Item Database",
        url: "/tools/item-database",
      },
      {
        name: "Item Generator",
        url: "/tools/item-generator",
      },
    ],
  },
];

export default Header;
