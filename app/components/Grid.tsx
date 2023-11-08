import React from "react";

type GridProps = {
  children: React.ReactNode;
};

export const Grid = ({ children }: GridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-2 gap-5">
      {children}
    </div>
  );
};
