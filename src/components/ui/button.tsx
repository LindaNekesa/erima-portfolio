import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};
