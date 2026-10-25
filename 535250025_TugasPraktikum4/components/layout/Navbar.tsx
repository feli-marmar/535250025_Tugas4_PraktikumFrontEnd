"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "../ui/Container";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/services", label: "Layanan" },
  { href: "/contact", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-pink-400">
          Code<span className="text-purple-400">Nova</span>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-blue-50 text-blue-700"
                  : "text-purple-500 hover:bg-white-500 hover:text-purple-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Tombol hamburger (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </Container>

      {/* Menu mobile */}
      {open && (
        <nav className="border-t border-gray-200 bg-white md:hidden">
          <Container className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-4 py-3 text-sm font-medium ${
                  isActive(link.href)
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}