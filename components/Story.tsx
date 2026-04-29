"use client";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { STORY_IMG } from "@/lib/products";

export default function Story() {
  const { lang, t: tt } = useLang();
  const t = tt.story;

  return (
    <section id="story" className="relative bg-[var(--paper)] py-24 lg:py-40">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
          <div className="mono-label text-[var(--muted)] mb-8 reveal">
            {t.eyebrow}
          </div>
          <h2 className="serif font-light leading-[0.98] text-[40px] lg:text-[64px] tracking-tight reveal">
            {t.title}
          </h2>
        </div>

        <div className="lg:col-span-7">
          <div className="relative aspect-[4/5] w-full overflow-hidden mb-12 reveal">
            <Image
              src={STORY_IMG}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
              style={{ filter: "grayscale(15%)" }}
            />
          </div>
          {t.body.map((p, i) => (
            <p
              key={i}
              className="text-[16px] lg:text-[17px] leading-[1.75] mb-7 max-w-[58ch] reveal"
              style={{ transitionDelay: `${i * 120}ms` }}>
              {p}
            </p>
          ))}

          <div className="mt-10 inline-block reveal">
            <div className="serif italic text-[28px] text-[var(--muted)]">
              — Ц. Улсболд
            </div>
            <div className="mono-label text-[var(--muted)] mt-2">
              {lang === "mn" ? "2 дахь үеийн урчин" : "Third-generation master"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
