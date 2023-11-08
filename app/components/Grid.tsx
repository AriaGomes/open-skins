import React from "react";

type GridProps = {
  children: React.ReactNode;
};

export const Grid = ({ children }: GridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {children}
    </div>
  );
};
