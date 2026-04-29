"use client";
import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { useCart } from "@/context/CartContext";
import { PRODUCTS, FEATURED_IMG } from "@/lib/products";
import { fmtPrice } from "@/lib/format";

export default function Featured() {
  const { lang, t: tt } = useLang();
  const t = tt.featured;
  const { add } = useCart();
  const p = PRODUCTS[1];
  const [hover, setHover] = useState(false);

  return (
    <section className="relative bg-[var(--bone)] py-24 lg:py-40 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div
            className="relative w-full aspect-[5/6] overflow-hidden bg-[var(--paper)] reveal"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Image
              src={FEATURED_IMG}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-[1400ms] ease-out"
              style={{ transform: hover ? "scale(1.04)" : "scale(1)", filter: "grayscale(8%)" }}
            />
            <div className={`absolute top-6 left-6 transition-opacity duration-500 ${hover ? "opacity-100" : "opacity-80"}`}>
              <div className="bg-[var(--paper)]/90 backdrop-blur-sm px-4 py-2 mono-label flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <ellipse cx="12" cy="12" rx="10" ry="4"/>
                  <path d="M2 12c0 5.5 4.5 10 10 10s10-4.5 10-10"/>
                </svg>
                <span>360°</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="mono-label text-[var(--muted)] mb-6 reveal">{t.eyebrow}</div>
          <h2 className="serif font-light leading-[0.98] text-[40px] lg:text-[60px] tracking-tight mb-8 reveal">{t.title}</h2>

          <div className="border-t hairline pt-8 reveal">
            <div className="mono-label text-[var(--muted)] mb-3">{t.tag}</div>
            <h3 className="serif text-[28px] lg:text-[34px] mb-5">{lang === "mn" ? p.name_mn : p.name_en}</h3>
            <p className="text-[15px] leading-relaxed text-[var(--muted)] mb-8 max-w-[44ch]">
              {lang === "mn"
                ? "Хатаалт болсон хус модноос гараар угсарсан. Зөгийн балны өнгөлгөө. Найман хүнд зориулсан."
                : "Hand-joined from air-dried birch. Beeswax finish. Seats eight comfortably."}
            </p>

            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="mono-label text-[var(--muted)]">{lang === "mn" ? "Үнэ" : "Price"}</div>
                <div className="serif text-[36px] font-light mt-2">{fmtPrice(p.price, lang)}</div>
              </div>
              <div className="text-right">
                <div className="mono-label text-[var(--muted)]">{lang === "mn" ? "Хүлээх хугацаа" : "Lead time"}</div>
                <div className="serif text-[20px] mt-2">{lang === "mn" ? "14 долоо хоног" : "14 weeks"}</div>
              </div>
            </div>

            <button onClick={() => add(p)} className="w-full bg-[var(--ink)] text-[var(--paper)] py-5 text-[13px] tracking-wider mono-label hover:bg-[var(--ink)]/90 transition-colors">
              {tt.collection.addToCart}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
