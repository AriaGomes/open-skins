import { CounterStrikeLogo } from "../../public/assets";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Routes } from "../routes";
import { LoadingDots } from "./Loading";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { motion } from "framer-motion";

export const Header = ({
  onToggleSidebar,
  sidebarOpen,
}: {
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
}) => {
  const { data: session, status } = useSession();
  const [iconTransition, setIconTransition] = useState(false);

  const handleToggleSidebar = () => {
    setIconTransition(!iconTransition);
    onToggleSidebar();
  };

  const [animationParent] = useAutoAnimate();
  return (
    <header className="bg-white grow">
      <div className="mx-auto flex max-w-screen items-center gap-8 px-4 my-2 sm:px-6 lg:px-8">
        <Link className="block" href="/">
          <span className="sr-only">Home</span>
          <CounterStrikeLogo height={"45px"} width={"45px"} />
        </Link>

        <div className="flex flex-1 items-center justify-end xl:justify-between">
          <nav aria-label="Global" className="hidden xl:block">
            <ul className="flex items-center gap-6 text-sm">
              {Routes.map((item, index) => (
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
                <div className="rounded-md bg-gray-100 px-5 py-4 text-sm font-medium text-gray-600">
                  <LoadingDots />
                </div>
              )}

              {status === "authenticated" && (
                <div className={`flex border rounded-md `}>
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

            <button
              onClick={handleToggleSidebar}
              className="block rounded bg-gray-100 p-3 text-gray-600 transition hover:text-gray-600/75 xl:hidden "
              ref={animationParent}
            >
              {iconTransition ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
