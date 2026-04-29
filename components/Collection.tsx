"use client";
import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { PRODUCTS } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function Collection() {
  const { t: tt } = useLang();
  const t = tt.collection;
  const [filter, setFilter] = useState<number>(-1);
  const filtered = filter === -1 ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section id="collection" className="relative bg-[var(--paper)] py-24 lg:py-40">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <div>
            <div className="mono-label text-[var(--muted)] mb-6 reveal">{t.eyebrow}</div>
            <h2 className="serif font-light leading-[0.98] text-[44px] lg:text-[72px] tracking-tight reveal">{t.title}</h2>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-3">
            <button onClick={() => setFilter(-1)} className={`mono-label transition-opacity ${filter === -1 ? "opacity-100" : "opacity-40 hover:opacity-70"}`}>{t.filterAll}</button>
            {t.filters.map((f, i) => (
              <button key={i} onClick={() => setFilter(i)} className={`mono-label transition-opacity ${filter === i ? "opacity-100" : "opacity-40 hover:opacity-70"}`}>{f}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-x-10 lg:gap-y-24">
          {filtered.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}
