import Link from "next/link";
import { Routes } from "../routes";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { motion } from "framer-motion";
export default function SideNav() {
  const [animationParent] = useAutoAnimate();
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  return (
    <motion.div
      className="overflow-y-auto h-full pb-20"
      ref={animationParent}
      variants={variants}
      initial="closed"
      animate="open"
    >
      {Routes.map((item, index) => (
        <NavItem href={item.url} key={index}>
          {item.name}
        </NavItem>
      ))}
    </motion.div>
  );
}

const NavItem = ({ href, children }: { href: any; children: any }) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <motion.ul
      className="pl-2 py-2"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        className="text-gray-500 transition hover:text-gray-500/75 hover:font-bold hover:bg-gray-100 rounded-md px-2 py-1"
        href={href}
      >
        {children}
      </Link>
    </motion.ul>
  );
};
