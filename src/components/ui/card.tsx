import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`rounded-2xl shadow-md p-6 bg-white dark:bg-gray-800 ${className}`}>
      {children}
    </div>
  );
};
