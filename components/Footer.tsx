"use client";
import Image from "next/image";
import { useLang } from "@/context/LangContext";

export default function Footer() {
  const { lang, setLang, t: tt } = useLang();
  const t = tt.footer;

  return (
    <footer className="bg-[var(--paper)] border-t hairline">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/logo.jpg"
              alt="Gal Gerel"
              width={40}
              height={40}
              className="object-contain mix-blend-multiply"
            />
            <div className="serif text-[24px]">Gal Gerel</div>
          </div>
          <p className="serif italic text-[28px] lg:text-[32px] font-light leading-tight max-w-[20ch]">
            {t.tagline}
          </p>
        </div>

        <div className="lg:col-span-4">
          <div className="mono-label text-[var(--muted)] mb-5">
            {t.newsletter}
          </div>
          <form className="flex border-b hairline-strong">
            <input
              type="email"
              placeholder={t.placeholder}
              className="flex-1 bg-transparent py-3 text-[15px] outline-none serif placeholder:text-[var(--muted)]"
            />
            <button
              type="submit"
              className="mono-label text-[12px] px-3 hover:opacity-60 transition-opacity">
              {t.subscribe} →
            </button>
          </form>
          <div className="caret mt-4 w-2 h-3 bg-[var(--ink)] inline-block" />
        </div>

        <div className="lg:col-span-3 lg:text-right">
          <div className="mono-label text-[var(--muted)] mb-5">
            {lang === "mn" ? "Холбоо барих" : "Contact"}
          </div>
          <a
            href="mailto:hello@galgerel.mn"
            className="block serif text-[18px] mb-2 hover:opacity-60">
            hello@galgerel.mn
          </a>
          <a
            href="tel:+97699107773"
            className="block serif text-[18px] mb-6 hover:opacity-60">
            +976 9910 7773
          </a>
          <div className="flex lg:justify-end gap-4">
            {["Instagram", "Facebook", "YouTube"].map((s) => (
              <a key={s} href="#" className="mono-label hover:opacity-60">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t hairline">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="mono-label text-[var(--muted)]">{t.rights}</div>
          <div className="flex items-center gap-1 mono-label">
            <button
              onClick={() => setLang("mn")}
              className={`px-1.5 py-1 ${lang === "mn" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}>
              MN
            </button>
            <span className="opacity-30">/</span>
            <button
              onClick={() => setLang("en")}
              className={`px-1.5 py-1 ${lang === "en" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}>
              EN
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
