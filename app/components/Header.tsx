import { CounterStrikeLogo } from "../../public/assets";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Routes } from "../routes";
import { LoadingDots } from "./Loading";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { AuthBadge } from "./AuthBadge";
import { ThemeSwitch } from "./ThemeSwitch";

export const Header = ({
  onToggleSidebar,
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

  return (
    <header className="bg-white dark:bg-black grow">
      <div className="mx-auto flex max-w-screen items-center gap-8 px-4 py-2 sm:px-6 lg:px-8">
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
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-gray-500/75"
                    href={item.url}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeSwitch />
            <AuthBadge />

            <button
              onClick={handleToggleSidebar}
              className="block rounded bg-gray-100 p-3 text-gray-600 transition hover:text-gray-600/75 xl:hidden "
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
