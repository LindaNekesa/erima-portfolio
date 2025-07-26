import React from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700 dark:text-white">
          Erima Portfolio
        </h1>
        <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-700 dark:text-gray-200">
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
};
