"use client";

import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-gray-800 py-2 px-[50px] w-full">
      <nav className="flex justify-between items-center relative">
        {/* Logo */}
        <div className="text-gray-100 text-lg font-semibold">
          <a href="#">Logo</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">
          <ul className="flex justify-center items-center gap-7 text-gray-100">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Burger */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute top-12 right-0 bg-gray-800 w-48 p-5 rounded shadow-lg md:hidden"
          >
            <ul className="flex flex-col gap-5 text-gray-100">
              <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="/about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>

            <button className="w-full mt-5 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
