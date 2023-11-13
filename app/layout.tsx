"use client";

import { Inter } from "next/font/google";
import { Header } from "./components";
import "./globals.css";
import { Providers } from "./providers";
import { useRef, useState } from "react";
import SideNav from "./components/SideNav";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [animationParent] = useAutoAnimate();
  const sidebar = {
    open: () => ({
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const containerRef = useRef(null);
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} h-screen overflow-hidden`}>
          <div>
            <Header
              onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
              sidebarOpen
            />
          </div>
          <div className="flex h-full xl:block">
            <div className="flex-1 h-full">{children}</div>
            <div
              className={`${
                sidebarOpen
                  ? "-translate-x-0 ease-out w-40"
                  : "translate-x-full ease-in w-0"
              }  inset-y-0 right-0 transition duration-300 transform z-30 xl:hidden bg-white`}
              ref={animationParent}
            >
              {sidebarOpen && <SideNav />}
            </div>
          </div>
        </body>
      </html>
    </Providers>
  );
}
