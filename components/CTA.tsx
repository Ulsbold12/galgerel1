"use client";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { CTA_IMG } from "@/lib/products";

export default function CTA() {
  const { t: tt } = useLang();
  const t = tt.cta;

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={CTA_IMG} alt="" fill sizes="100vw" className="object-cover drift" style={{ filter: "grayscale(15%) brightness(0.8)" }} />
        <div className="absolute inset-0 bg-[var(--ink)]/35" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 py-32 lg:py-56 text-[var(--paper)]">
        <div className="mono-label opacity-70 mb-8 reveal">{t.eyebrow}</div>

        <h2 className="serif font-light leading-[0.95] tracking-tight text-[48px] sm:text-[80px] lg:text-[120px] max-w-[12ch]">
          {t.title.map((line, i) => (
            <span key={i} className="block reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              {line}
              {i === 1 && <span className="italic-serif opacity-80"> {t.cursive}</span>}
            </span>
          ))}
        </h2>

        <p className="max-w-md mt-10 lg:mt-14 text-[15px] leading-relaxed opacity-80 reveal">{t.sub}</p>

        <div className="mt-10 flex flex-wrap gap-4 reveal">
          <a href="mailto:hello@galgerel.mn" className="inline-flex items-center gap-3 bg-[var(--paper)] text-[var(--ink)] px-7 py-4 text-[13px] mono-label hover:bg-[var(--paper)]/90 transition-colors">
            <span>{t.btn}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a href="#" className="inline-flex items-center gap-3 px-7 py-4 text-[13px] mono-label border border-[var(--paper)]/50 hover:bg-[var(--paper)] hover:text-[var(--ink)] transition-colors">
            <span>{t.btn2}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
