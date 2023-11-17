import Link from "next/link";
import { LoadingDots } from "./Loading";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export const AuthBadge = () => {
  const { data: session, status } = useSession();

  return (
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
  );
};
