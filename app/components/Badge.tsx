import React, { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}
//TODO: Add more badge colors with ability to filter
export const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
      {children}
    </span>
  );
};
