"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { useCart } from "@/context/CartContext";

export default function TopBar() {
  const { lang, setLang, t } = useLang();
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[var(--paper)]/90 backdrop-blur border-b hairline"
          : "bg-transparent"
      }`}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-4 lg:py-5 flex items-center justify-between gap-8">
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.jpg"
            alt="Gal Gerel"
            width={36}
            height={36}
            className="object-contain mix-blend-multiply"
          />
          <div className="leading-none">
            <div className="serif text-[20px] tracking-tight">Gal Gerel</div>
            <div className="mono-label text-[var(--muted)] mt-1">
              Est. 2000 — UB
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          <a href="#collection" className="nav-link text-[14px]">
            {t.nav.collection}
          </a>
          <a href="#story" className="nav-link text-[14px]">
            {t.nav.story}
          </a>
          <a href="#craft" className="nav-link text-[14px]">
            {t.nav.craft}
          </a>
          <a href="#showroom" className="nav-link text-[14px]">
            {t.nav.showroom}
          </a>
          <a href="#contact" className="nav-link text-[14px]">
            {t.nav.contact}
          </a>
        </nav>

        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-1 mono-label">
            <button
              onClick={() => setLang("mn")}
              className={`px-1.5 py-1 transition-opacity ${lang === "mn" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}>
              MN
            </button>
            <span className="opacity-30">/</span>
            <button
              onClick={() => setLang("en")}
              className={`px-1.5 py-1 transition-opacity ${lang === "en" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}>
              EN
            </button>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 text-[13px]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}>
              <path d="M3 6h2l2.5 11h11L21 9H6" />
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
            <span className="hidden sm:inline">{t.cart}</span>
            <span className="figure">({count})</span>
          </button>
        </div>
      </div>
    </header>
  );
}
