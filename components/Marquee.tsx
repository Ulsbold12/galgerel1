"use client";
import { useLang } from "@/context/LangContext";

export default function Marquee() {
  const { lang } = useLang();
  const items =
    lang === "mn"
      ? ["Гар хийц", "Хус мод", "Монгол урчууд", "Үе дамжих чанар", "Захиалгат", "1978 оноос"]
      : ["Hand-made", "Birch & pine", "Mongolian masters", "Built to last", "Made to order", "Since 1978"];
  const row = [...items, ...items, ...items];

  return (
    <div className="border-y hairline py-5 overflow-hidden bg-[var(--bone)]">
      <div className="marquee-track flex gap-12 whitespace-nowrap">
        {row.map((s, i) => (
          <span key={i} className="serif italic font-light text-[28px] lg:text-[36px] text-[var(--ink)]/80 inline-flex items-center gap-12">
            {s}
            <span className="w-2 h-2 rounded-full bg-[var(--ink)]/30" />
          </span>
        ))}
      </div>
    </div>
  );
}
