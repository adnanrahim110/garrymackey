"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/book", label: "BOOKS" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        isScrolled
          ? "bg-[#FF9A3C]/95 backdrop-blur-sm shadow-lg py-1"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="transition-transform duration-300 hover:scale-[1.03]"
        >
          <Image
            src="/imgs/logo.png"
            alt="Garrey - Children's Author"
            width={1080}
            height={520}
            className="w-40 h-auto"
          />
        </Link>

        <nav
          className={`flex items-center gap-3 max-md:fixed max-md:top-0 max-md:h-screen max-md:w-4/5 max-md:max-w-[320px] max-md:bg-gradient-to-b max-md:from-[#FF9A3C] max-md:to-[#FFB347] max-md:flex-col max-md:justify-center max-md:gap-6 max-md:p-8 max-md:transition-all max-md:duration-300 max-md:shadow-[-5px_0_30px_rgba(0,0,0,0.1)] ${
            isMobileMenuOpen ? "max-md:right-0" : "max-md:-right-full"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-['Baloo_2'] font-semibold text-[0.95rem] text-gray-800 no-underline py-2.5 px-5 rounded-full bg-white border-2 border-transparent transition-all duration-300 shadow-sm hover:border-[#FF9A3C] hover:-translate-y-0.5 hover:shadow-md max-md:text-lg max-md:text-center max-md:w-full ${
                pathname === link.href ? "border-[#FF9A3C] shadow-md" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="hidden max-md:flex flex-col gap-[5px] bg-white border-none cursor-pointer p-3 rounded-xl z-[1001]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-[25px] h-[3px] bg-[#FF9A3C] rounded-sm transition-all duration-300 ${
              isMobileMenuOpen
                ? "rotate-45 translate-x-[5px] translate-y-[5px]"
                : ""
            }`}
          />
          <span
            className={`block w-[25px] h-[3px] bg-[#FF9A3C] rounded-sm transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[25px] h-[3px] bg-[#FF9A3C] rounded-sm transition-all duration-300 ${
              isMobileMenuOpen
                ? "-rotate-45 translate-x-[7px] -translate-y-[6px]"
                : ""
            }`}
          />
        </button>
      </div>
    </header>
  );
}
