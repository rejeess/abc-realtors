"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  { href: "/about", label: "About Us" },
  { href: "/careers", label: "Careers" },
  { href: "/availability", label: "Schedule" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur border-b border-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-display font-bold text-gold-500 tracking-tight">
              ABC
            </span>
            <span className="text-white font-semibold text-lg tracking-wide">
              Realtors
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors hover:text-gold-400 ${
                  pathname === href ? "text-gold-500" : "text-gray-300"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link href="/availability" className="btn-gold text-sm ml-2">
              Book a Viewing
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-navy-700 py-4 flex flex-col gap-3">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`px-2 text-sm font-medium transition-colors hover:text-gold-400 ${
                  pathname === href ? "text-gold-500" : "text-gray-300"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link href="/availability" className="btn-gold text-sm mt-2 text-center" onClick={() => setOpen(false)}>
              Book a Viewing
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
