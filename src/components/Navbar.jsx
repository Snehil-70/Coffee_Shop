import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Persistent theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-lg bg-linen/80 dark:bg-chocolate/80 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-coffee dark:text-linen tracking-wide cursor-pointer">
          BrewSpace ☕
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative text-coffee dark:text-linen font-medium transition-all hover:text-cocoa"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cocoa transition-all duration-300 hover:w-full"></span>
            </button>
          ))}

          {/* Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-coffee/10 hover:bg-coffee/20 dark:bg-linen/10 dark:hover:bg-linen/20 transition-all"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-linen" />
            ) : (
              <Moon className="w-5 h-5 text-coffee" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-coffee/10 dark:hover:bg-linen/10 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-coffee dark:text-linen" />
          ) : (
            <Menu className="w-6 h-6 text-coffee dark:text-linen" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-linen/95 dark:bg-chocolate/95 backdrop-blur-md shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-coffee dark:text-linen text-lg font-medium hover:text-cocoa transition"
              >
                {link.name}
              </button>
            ))}

            {/* Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-coffee/10 hover:bg-coffee/20 dark:bg-linen/10 dark:hover:bg-linen/20 transition-all"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-linen" />
              ) : (
                <Moon className="w-5 h-5 text-coffee" />
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
