"use client";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { CRAFT_IMG } from "@/lib/products";

export default function Craft() {
  const { t: tt } = useLang();
  const t = tt.craft;

  return (
    <section id="craft" className="relative bg-[var(--ink)] text-[var(--paper)] py-24 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.18] pointer-events-none">
        <Image src={CRAFT_IMG} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/40 via-transparent to-[var(--ink)]" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="max-w-[820px] mb-20 lg:mb-28">
          <div className="mono-label opacity-60 mb-6 reveal">{t.eyebrow}</div>
          <h2 className="serif font-light leading-[0.98] text-[44px] lg:text-[72px] tracking-tight reveal">{t.title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-10">
          {t.steps.map((s, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="serif italic-serif text-[var(--paper)]/40 text-[64px] leading-none mb-8">{s.n}</div>
              <div className="border-t border-[var(--paper)]/30 pt-6">
                <h3 className="serif text-[24px] mb-4">{s.t}</h3>
                <p className="text-[14px] leading-relaxed text-[var(--paper)]/70 max-w-[28ch]">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
