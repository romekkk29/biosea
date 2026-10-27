"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#productos", label: "Productos" },
  { href: "#cultivos", label: "Cultivos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1" onClick={handleLinkClick}>
          <Image
            src="/logo-icon.svg"
            alt="Biosea Soluciones"
            width={52}
            height={25}
            priority
          />
          <span className="text-lg font-bold text-green-900 tracking-tight ml-1">
            Biosea<span className="text-green-600">Soluciones</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.slice(0, 3).map((l) => (
            <a key={l.href} href={l.href} className="text-gray-600 hover:text-green-700 transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors"
          >
            Contacto
          </a>
        </div>

        {/* Mobile: hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-green-50 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span
            className={`block w-5 h-0.5 bg-green-800 transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-green-800 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-green-800 transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-b border-green-100 ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 pb-4 pt-2 flex flex-col gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={handleLinkClick}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                l.href === "#contacto"
                  ? "bg-green-700 text-white hover:bg-green-800 text-center mt-1"
                  : "text-gray-700 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
