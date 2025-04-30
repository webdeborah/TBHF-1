"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Cruise", path: "/cruise" },
    { name: "Volunteer", path: "/volunteer" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-primary)] bg-opacity-95 shadow-md py-2"
          : "backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo with conditional image source */}
        <Link href="/" className="flex items-center">
          <Image
            src={
              scrolled
                ? "/Logos/TBHF_Logo_Black.png"
                : "/Logos/TBHF_Main_Text.png"
            }
            width={200}
            height={200}
            loading="eager"
            priority={true}
            alt="The Black History Foundation Logo - Protecting and preserving Black history and heritage"
            className="transition-opacity duration-300"
          />
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
          <div className="flex items-center justify-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`font-helvetica hover:text-[var(--primary)] transition-colors font-medium ${
                  scrolled ? "text-[var(--text-primary)]" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Donate Button */}
        <div className="hidden md:block">
          <Link
            href="/donate"
            className={`font-helvetica font-bold px-5 py-2 rounded-full transition-colors ${
              scrolled
                ? "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] hover:text-white"
                : "bg-[var(--secondary)] text-[var(--text-primary)] hover:bg-[var(--secondary-dark)]"
            }`}
          >
            Donate
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col justify-between h-5">
            <span
              className={`h-0.5 w-full bg-[var(--text-primary)] transition-all transform ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-[var(--text-primary)] transition-all ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-[var(--text-primary)] transition-all transform ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[var(--bg-primary)] shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="font-helvetica text-[var(--text-primary)] hover:text-[var(--primary)] py-2 px-4 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/donate"
                className="font-helvetica font-bold py-3 bg-[var(--primary)] text-white rounded-md text-center hover:bg-[var(--primary-dark)] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
