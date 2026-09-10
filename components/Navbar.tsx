"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white"
        >
          NEXA<span className="text-gray-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Services
          </a>

          <a
            href="#portfolio"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Work
          </a>

          <a
            href="#contact"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Contact
          </a>

          <a
            href="#contact"
            className="px-5 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden mx-4 mt-2 rounded-2xl border border-gray-800 bg-black/95 p-6">
          <div className="flex flex-col gap-5">
            <a
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              Services
            </a>

            <a
              href="#portfolio"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              Work
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}