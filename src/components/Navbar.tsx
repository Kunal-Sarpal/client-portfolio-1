import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const navItems = ["home", "services", "about", "contact"];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-zinc-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        
        {/* Logo */}
        <div className="font-extrabold text-lg md:text-xl tracking-tight text-zinc-900 cursor-pointer">
          Visura Studio <span className="text-amber-600">—</span>{" "}
          <span className="font-light">The art of visual perfection</span>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-7 h-7 text-zinc-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <li
              key={item}
              className="relative cursor-pointer capitalize text-zinc-700 hover:text-zinc-500 transition-colors duration-200"
              onClick={() => scrollToSection(item)}
            >
              {item}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Quote Button */}
       
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 bg-white/90 backdrop-blur-md border-t border-zinc-200">
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer capitalize text-zinc-800 hover:text-amber-600 transition-colors duration-200"
              onClick={() => scrollToSection(item)}
            >
              {item}
            </li>
          ))}
          <button className="bg-amber-600 hover:bg-amber-700 px-5 py-2 rounded-lg text-sm font-medium text-white shadow-sm transition-colors duration-300">
            Get Quote
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
  