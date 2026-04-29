"use client";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { SHOWROOM_IMG } from "@/lib/products";

export default function Showroom() {
  const { lang, t: tt } = useLang();
  const t = tt.showroom;

  return (
    <section id="showroom" className="relative bg-[var(--paper)] py-24 lg:py-40">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden reveal">
          <Image src={SHOWROOM_IMG} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" style={{ filter: "grayscale(10%)" }} />
        </div>

        <div>
          <div className="mono-label text-[var(--muted)] mb-6 reveal">{t.eyebrow}</div>
          <h2 className="serif font-light leading-[0.98] text-[40px] lg:text-[60px] tracking-tight mb-12 reveal">{t.title}</h2>

          <div className="grid grid-cols-2 gap-10 mb-12">
            <div className="reveal">
              <div className="mono-label text-[var(--muted)] mb-3">{lang === "mn" ? "Хаяг" : "Address"}</div>
              <p className="serif text-[18px] leading-relaxed whitespace-pre-line">{t.addr}</p>
            </div>
            <div className="reveal" style={{ transitionDelay: "120ms" }}>
              <div className="mono-label text-[var(--muted)] mb-3">{lang === "mn" ? "Цагийн хуваарь" : "Hours"}</div>
              <p className="serif text-[18px] leading-relaxed whitespace-pre-line">{t.hours}</p>
            </div>
          </div>

          <a href="#contact" className="inline-flex items-center gap-3 border hairline-strong px-7 py-4 text-[13px] mono-label hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors reveal">
            <span>{t.visit}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
