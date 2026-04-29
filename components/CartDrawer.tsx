"use client";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { useCart } from "@/context/CartContext";
import { fmtPrice } from "@/lib/format";

export default function CartDrawer() {
  const { lang, t: tt } = useLang();
  const { items, open, setOpen, remove } = useCart();
  const total = items.reduce((s, it) => s + it.price * it.qty, 0);

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-[var(--ink)]/40 z-[60] transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />
      <aside
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[440px] bg-[var(--paper)] z-[70] flex flex-col transition-transform duration-500 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-6 border-b hairline">
          <div className="serif text-[22px]">{tt.cart}</div>
          <button onClick={() => setOpen(false)} className="w-8 h-8 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 && (
            <div className="serif italic text-[var(--muted)] text-[18px] mt-12 text-center">
              {lang === "mn" ? "Сагс хоосон байна" : "Your cart is empty"}
            </div>
          )}
          {items.map((it) => (
            <div key={it.id} className="flex gap-4 py-5 border-b hairline">
              <div className="relative w-20 h-24 shrink-0">
                <Image src={it.img} alt="" fill sizes="80px" className="object-cover" />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="serif text-[16px]">{lang === "mn" ? it.name_mn : it.name_en}</div>
                <div className="mono-label text-[var(--muted)] mt-1">× {it.qty}</div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="figure text-[15px]">{fmtPrice(it.price * it.qty, lang)}</div>
                  <button onClick={() => remove(it.id)} className="mono-label text-[var(--muted)] hover:text-[var(--ink)]">
                    {lang === "mn" ? "Хасах" : "Remove"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {items.length > 0 && (
          <div className="p-6 border-t hairline">
            <div className="flex items-baseline justify-between mb-5">
              <div className="mono-label text-[var(--muted)]">{lang === "mn" ? "Нийт" : "Subtotal"}</div>
              <div className="serif text-[28px] font-light">{fmtPrice(total, lang)}</div>
            </div>
            <button className="w-full bg-[var(--ink)] text-[var(--paper)] py-4 mono-label">
              {lang === "mn" ? "Захиалга баталгаажуулах" : "Checkout"}
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
