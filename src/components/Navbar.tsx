import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to scroll to section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close mobile menu after click
    }
  };

  const navItems = ["home", "services", "about", "contact"];

  return (
    <nav className="bg-white text-zinc-900  shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="h-12 w-20 overflow-hidden m-1 rounded border border-2">
        <img  className="w-full h-full object-cover scale-180 " src="https://i.ibb.co/qbYN4JL/visura.jpg" alt="" />

        </div>

        {/* Hamburger Icon for mobile */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-zinc-900"
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
        <ul className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer capitalize hover:text-zinc-700"
              onClick={() => scrollToSection(item)}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Quote Button (Desktop only) */}
        <button className="hidden md:block bg-zinc-900 hover:bg-zinc-800 px-4 py-2 rounded-xl text-sm text-white">
          Get Quote
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <li
                key={item}
                className="cursor-pointer capitalize hover:text-zinc-800"
                onClick={() => scrollToSection(item)}
              >
                {item}
              </li>
            ))}
            {/* <button className="bg-zinc-900 hover:bg-zinc-700 px-4 py-2 rounded-xl text-sm text-white">
              Get Quote
            </button> */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
