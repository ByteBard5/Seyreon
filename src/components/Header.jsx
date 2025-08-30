import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Ordered nav items
const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact Us", path: "/contact" },
  { name: "About Us", path: "/about" },
  { name: "Blog", path: "/blog" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0e0e0e]/60 backdrop-saturate-150 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center h-full px-2">
            <img
              src="/Full Logo.png"
              alt="Seyreon Logo"
              className="h-[60px] w-auto object-contain" // 60px tall logo
            />
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center gap-6 text-white">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-purple-400 transition ${
                    isActive ? "text-purple-400 underline" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <NavLink to="/client-portal/login">
              <button className="glow-button">Client Portal</button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
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
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 backdrop-blur-md bg-[#0e0e0e]/60 text-white space-y-2 border-t border-white/10">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block hover:text-purple-400 transition ${
                  isActive ? "text-purple-400 underline" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink to="/client-portal/login" onClick={() => setIsOpen(false)}>
            <button className="glow-button w-full mt-2">Client Portal</button>
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
