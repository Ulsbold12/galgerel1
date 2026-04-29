"use client";
import { useLang } from "@/context/LangContext";

type Item = { q: string; a: string; c: string };

export default function Reviews() {
  const { lang, t: tt } = useLang();
  const t = tt.reviews;

  const items: Item[] =
    lang === "mn"
      ? [
          { q: "Хорин жилийн өмнө аав маань захиалсан ширээ өнөөдөр ч хагардаагүй. Энэ удаа би ор захиаллаа.", a: "Энхтуяа", c: "Улаанбаатар" },
          { q: "Гар хийцийн нэг бүтээгдэхүүн дээр зургаан долоо хоног хүлээх нь үнэ цэнэтэй санагдсан.", a: "Болормаа", c: "Дархан" },
          { q: "Шударга, тайван бизнес. Эзэмшигч өөрөө миний гэрт ширээний угсралтыг шалгаж өгсөн.", a: "Цэрэндорж", c: "Эрдэнэт" },
        ]
      : [
          { q: "My father commissioned a table twenty years ago. Not a single crack. Now I've ordered a bed.", a: "Enkhtuya", c: "Ulaanbaatar" },
          { q: "Six weeks of waiting felt entirely worth it the moment the piece arrived.", a: "Bolormaa", c: "Darkhan" },
          { q: "An honest, quiet business. The owner himself came to inspect the assembly in my home.", a: "Tserendorj", c: "Erdenet" },
        ];

  return (
    <section className="relative bg-[var(--bone)] py-24 lg:py-40">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="max-w-[820px] mb-16 lg:mb-24">
          <div className="mono-label text-[var(--muted)] mb-6 reveal">{t.eyebrow}</div>
          <h2 className="serif font-light leading-[0.98] text-[44px] lg:text-[64px] tracking-tight reveal">{t.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-16 lg:gap-x-12">
          {items.map((r, i) => (
            <figure key={i} className="reveal" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="serif text-[60px] leading-none text-[var(--ink)]/30 mb-6">&ldquo;</div>
              <blockquote className="serif text-[22px] lg:text-[24px] font-light leading-[1.45] mb-8 max-w-[34ch]">{r.q}</blockquote>
              <figcaption className="border-t hairline pt-5">
                <div className="serif text-[18px]">{r.a}</div>
                <div className="mono-label text-[var(--muted)] mt-1">{r.c}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
