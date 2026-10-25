"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { navLinks } from "@/data/resume";
import { buttonClasses } from "@/components/button-link";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((node): node is Element => node instanceof Element);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-white/10 bg-[#090a0d]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] w-full max-w-page items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" className="text-sm font-medium tracking-[-0.02em] text-[#f3efe6]">
          Prince Pandey
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "true" : undefined}
              className={cn(
                "text-sm relative transition-colors",
                active === link.href ? "text-[#f3efe6]" : "text-[#b7b1a6] hover:text-[#f3efe6]",
                "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:content-[''] after:bg-[#a9b6ff] after:transition-transform after:duration-200",
                active === link.href ? "after:scale-x-100" : "after:scale-x-0",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className={buttonClasses("primary", "hidden md:inline-flex")}>
          Let&apos;s Connect
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[#f3efe6] md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div id={menuId} className="border-t border-white/10 bg-[#090a0d] md:hidden">
          <nav className="flex flex-col px-5 py-3" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-base text-[#f3efe6]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={buttonClasses("primary", "mb-2 mt-2")}
            >
              Let&apos;s Connect
            </a>
          </nav>
        </div>
      ) : null}

      <noscript>
        <nav className="border-t border-white/10 px-5 py-4 md:hidden" aria-label="Primary">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="py-2 text-base text-[#f3efe6]">
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </noscript>
    </header>
  );
}
