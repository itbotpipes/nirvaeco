"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Magnetic } from "@/components/motion/magnetic-button";

const navItems = [
  { href: "/products", label: "Products" },
  { href: "/#material-science", label: "Material Science" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-[#faf8f5]/90 backdrop-blur-xl shadow-xs border-b border-[#e8e3d8]/80 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group relative" aria-label="NIRVAECO home">
          <Image
            src="/images/nirvaeco-logo.png"
            width={168}
            height={48}
            alt="NIRVAECO - by Nirvartaya Industries LLP"
            priority
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[13.5px] font-medium tracking-tight transition-all duration-200 relative group/nav ${
                  isActive ? "text-[#173826] font-semibold" : "text-[#3f4a41] hover:text-[#173826]"
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`absolute left-0 bottom-[-4px] h-[1.5px] bg-[#173826] transition-all duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover/nav:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Magnetic strength={0.25}>
            <Link
              href="/contact?type=quote"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#173826] text-white text-[13px] font-semibold tracking-wide hover:bg-[#1f4d34] transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] group"
            >
              <span>Request Quote</span>
              <ArrowUpRight size={14} className="stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Magnetic>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-[#1c241e] hover:bg-black/5 transition-colors"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden fixed inset-x-0 top-full bg-[#faf8f5]/95 backdrop-blur-2xl border-b border-[#e8e3d8] px-6 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[#2d382f] py-2 border-b border-black/5 hover:text-[#173826] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact?type=quote"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#173826] text-white text-sm font-semibold shadow-md"
            >
              Request Quote
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
