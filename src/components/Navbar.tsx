"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Courses", href: "#courses", id: "courses" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Scroll listener for background change
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Intersection Observer for active section
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-line/50 py-2 shadow-sm"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="relative h-12 w-28 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/alloria.png"
              alt="Alloria Learning Center"
              fill
              className="object-contain"
              sizes="112px"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1 list-none m-0 p-0">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 font-bold text-[15px] rounded-full transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-navy bg-cream/80 shadow-sm"
                      : "text-ink hover:text-coral hover:bg-cream/40"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-coral rounded-full animate-pulse" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 bg-coral text-white rounded-full font-display font-medium text-base shadow-[0_4px_0_#c63b3b] hover:shadow-[0_2px_0_#c63b3b] hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none transition-all duration-150"
          >
            Inquiry Form
            <ArrowRight className="w-5 h-5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 bg-cream/50 hover:bg-cream rounded-xl transition-colors md:hidden text-ink"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-line overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "max-h-[500px] opacity-100 py-6"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-5 py-3.5 rounded-2xl font-bold text-lg transition-all ${
                activeSection === item.id
                  ? "bg-cream text-navy"
                  : "text-ink hover:bg-cream/50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-line/50">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-coral text-white py-4 rounded-2xl font-display font-bold text-lg shadow-[0_4px_0_#c63b3b] active:shadow-none active:translate-y-1 transition-all"
            >
              Inquiry Form
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
