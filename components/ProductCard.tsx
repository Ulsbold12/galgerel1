"use client";
import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { useLang } from "@/context/LangContext";
import { useCart } from "@/context/CartContext";
import { fmtPrice } from "@/lib/format";

export default function ProductCard({ p }: { p: Product }) {
  const { lang, t } = useLang();
  const { add } = useCart();
  const [hover, setHover] = useState(false);

  return (
    <article
      className="group cursor-pointer reveal"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--bone)] mb-5">
        <Image
          src={p.img}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1200ms] ease-out"
          style={{ transform: hover ? "scale(1.05)" : "scale(1)" }}
        />
        <button
          onClick={(e) => { e.stopPropagation(); add(p); }}
          className={`absolute left-4 right-4 bottom-4 bg-[var(--paper)] text-[var(--ink)] py-3 mono-label text-[11px] transition-all duration-500 ${hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          {t.collection.addToCart}
        </button>
        <div className="absolute top-4 right-4 mono-label text-[var(--paper)] mix-blend-difference">
          № {String(p.id).padStart(2, "0")}
        </div>
      </div>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="serif text-[19px] leading-tight">{lang === "mn" ? p.name_mn : p.name_en}</h3>
        <span className="figure text-[15px] shrink-0">{fmtPrice(p.price, lang)}</span>
      </div>
    </article>
  );
}
