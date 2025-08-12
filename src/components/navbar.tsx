import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useScrollSpy } from "../context/scrollspycontext";

export default function Navbar() {
  const { activeId } = useScrollSpy();

  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const navItems = [
    { id: "hero", label: "Hero" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" }, // ✅ Blog section
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow-md fixed top-0 z-50">
      <h1 className="text-xl font-bold text-blue-600 dark:text-white">Erima</h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-white">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`hover:text-blue-500 transition ${
                activeId === item.id ? "text-blue-600 font-semibold underline" : ""
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Dark/Light Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="text-gray-700 dark:text-white ml-4"
        aria-label="Toggle Theme"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-gray-700 dark:text-white ml-4"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-center space-y-4 py-4 md:hidden shadow-md">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className={`${
                activeId === item.id ? "text-blue-600 font-semibold underline" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

