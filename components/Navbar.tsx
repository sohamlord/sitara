"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-onyx/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-goldfish font-bold text-xl">Sitara</span>
          <span className="text-white font-semibold text-xl">Travellers</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white/70 hover:text-goldfish text-sm transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-white/70 hover:text-goldfish text-sm transition-colors">
            About
          </Link>
          <Link href="/faq" className="text-white/70 hover:text-goldfish text-sm transition-colors">
            FAQ
          </Link>
          <Link
            href="/#book"
            className="bg-goldfish hover:bg-goldfish-dark text-onyx text-sm font-semibold px-5 py-2 rounded-full transition-colors"
          >
            Book a Ride
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-onyx border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-goldfish text-sm transition-colors">
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-goldfish text-sm transition-colors">
            About
          </Link>
          <Link href="/faq" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-goldfish text-sm transition-colors">
            FAQ
          </Link>
          <Link
            href="/#book"
            onClick={() => setMenuOpen(false)}
            className="bg-goldfish text-onyx text-sm font-semibold px-5 py-2 rounded-full text-center transition-colors"
          >
            Book a Ride
          </Link>
        </div>
      )}
    </nav>
  );
}
