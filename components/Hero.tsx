"use client";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { HERO_IMG } from "@/lib/products";

export default function Hero() {
  const { lang, t: tt } = useLang();
  const t = tt.hero;

  const stats = [
    { n: "1978",  l: lang === "mn" ? "Үүсгэн байгуулагдсан" : "Founded" },
    { n: "III",   l: lang === "mn" ? "Үе дамжсан гар"       : "Generations" },
    { n: "94",    l: lang === "mn" ? "Гар хийц бүтээгдэхүүн": "Pieces in catalog" },
    { n: "12—16", l: lang === "mn" ? "Долоо хоногт бүтнэ"   : "Weeks per piece" },
  ];

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-[var(--paper)]">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%] overflow-hidden">
          <Image
            src={HERO_IMG}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover drift"
            style={{ filter: "grayscale(8%) contrast(0.97)" }}
            priority
          />
        </div>
        <div className="lg:hidden absolute inset-0 bg-[var(--paper)]/60" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-20 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center max-w-[760px]">
          <div className="mono-label text-[var(--muted)] mb-8 reveal">{t.eyebrow}</div>

          <h1 className="serif font-light tracking-tight leading-[0.92] text-[56px] sm:text-[88px] md:text-[112px] lg:text-[132px]">
            <span className="block reveal">{t.title[0]}</span>
            <span className="block reveal" style={{ transitionDelay: "120ms" }}>
              {t.title[1]}
              <span className="italic-serif text-[var(--muted)]"> {t.cursive.split(" ")[0]}</span>
            </span>
            <span className="block reveal" style={{ transitionDelay: "240ms" }}>{t.title[2] ?? ""}</span>
          </h1>

          <div className="mt-12 lg:mt-14 max-w-md reveal" style={{ transitionDelay: "380ms" }}>
            <p className="text-[15px] leading-relaxed text-[var(--muted)] mb-8">{t.sub}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#collection" className="group inline-flex items-center gap-3 bg-[var(--ink)] text-[var(--paper)] px-7 py-4 text-[13px] tracking-wide hover:bg-[var(--ink)]/90 transition-colors">
                <span>{t.cta1}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>
              <a href="#showroom" className="inline-flex items-center gap-3 px-7 py-4 text-[13px] tracking-wide border hairline-strong hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors">
                <span>{t.cta2}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 pt-12 mt-12 border-t hairline reveal">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="serif text-[40px] lg:text-[52px] font-light leading-none">{s.n}</div>
              <div className="mono-label text-[var(--muted)] mt-3">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
