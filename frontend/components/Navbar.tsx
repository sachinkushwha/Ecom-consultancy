"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Marketplaces",
    href: "#marketplaces",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 backdrop-blur-xl shadow-lg"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex items-center justify-between rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-xl px-4 sm:px-6 lg:px-8 py-3 shadow-xl">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl">

              <Image
                src="/logo.png"
                alt="Logo"
                width={42}
                height={42}
                className="object-contain"
              />

            </div>

            <div>

              <h1 className="text-base sm:text-lg lg:text-xl font-extrabold text-gray-900 leading-none">
                E-COMMERCE
              </h1>

              <p className="text-[10px] sm:text-xs tracking-[0.35em] text-blue-600 font-semibold mt-1">
                CONSULTANT
              </p>

            </div>

          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-10">

            {navItems.map((item) => (

              <Link
                key={item.title}
                href={item.href}
                className="relative font-semibold text-gray-700 hover:text-blue-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {item.title}
              </Link>

            ))}

          </nav>

          {/* Right Side */}

          <div className="flex items-center gap-4">

            {/* Desktop Button */}

            <Link
              href="#contact"
              className="hidden lg:inline-flex rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 text-white font-semibold shadow-lg transition hover:scale-105"
            >
              Get Free Consultation
            </Link>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-gray-200 bg-white shadow"
            >
              {mobileMenu ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileMenu
              ? "max-h-[600px] opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }`}
        >

          <div className="rounded-2xl bg-white shadow-2xl border border-gray-200 px-6 py-6">
                        {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="block border-b border-gray-100 py-4 text-lg font-semibold text-gray-700 transition hover:text-blue-600"
              >
                {item.title}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setMobileMenu(false)}
              className="mt-6 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 text-white font-semibold shadow-lg transition hover:scale-[1.02]"
            >
              Get Free Consultation
            </Link>

          </div>

        </div>

      </div>
    </header>
  );
}