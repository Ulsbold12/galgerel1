import type { Lang } from "./types";

type Dict = {
  nav: {
    collection: string;
    story: string;
    craft: string;
    showroom: string;
    contact: string;
  };
  cart: string;
  search: string;
  hero: {
    eyebrow: string;
    title: string[];
    cursive: string;
    sub: string;
    cta1: string;
    cta2: string;
  };
  story: { eyebrow: string; title: string; body: string[] };
  featured: { eyebrow: string; title: string; tag: string };
  collection: {
    eyebrow: string;
    title: string;
    filterAll: string;
    filters: string[];
    addToCart: string;
  };
  craft: {
    eyebrow: string;
    title: string;
    steps: { n: string; t: string; d: string }[];
  };
  showroom: {
    eyebrow: string;
    title: string;
    addr: string;
    hours: string;
    visit: string;
  };
  reviews: { eyebrow: string; title: string };
  cta: {
    eyebrow: string;
    title: string[];
    cursive: string;
    sub: string;
    btn: string;
    btn2: string;
  };
  footer: {
    tagline: string;
    newsletter: string;
    placeholder: string;
    subscribe: string;
    rights: string;
  };
};

export const I18N: Record<Lang, Dict> = {
  mn: {
    nav: {
      collection: "Цуглуулга",
      story: "Бидний тухай",
      craft: "Урлал",
      showroom: "Үзэсгэлэн",
      contact: "Холбогдох",
    },
    cart: "Сагс",
    search: "Хайх",
    hero: {
      eyebrow: "Гал Гэрэл — Уламжлалт гар хийц",
      title: ["Таны гэрийн", "дулааныг", "бид урлана"],
      cursive: "гар хийцийн тавилга",
      sub: "Монгол модчин урлаачдын гараар бүтсэн, үе дамжих тавилга. Бүхэн зориулалттай.",
      cta1: "Цуглуулга үзэх",
      cta2: "Үзэсгэлэн рүү очих",
    },
    story: {
      eyebrow: "01 — Бидний тухай",
      title: "Гэр бүлийн уламжлал, 2 үеийн гар",
      body: [
        "Гал Гэрэл нь 2000 онд Улаанбаатар хотод үндэслэгдсэн. Анх  эцэг маань модны цех нээж, өрөөний модон тавилга хийж байсан гэдэг. Өнөөдөр 2 дахь үеийн урчууд хуучны багажийг шинэ хэлбэрт оруулан, монгол гэр орны халуун дулаан мэдрэмжийг үе дамжуулсаар байна.",
        "Бид түргэн үйлдвэрлэлд итгэдэггүй. Нэг ширээ хийхэд 12-16 долоо хоног зарцуулдаг. Энэ нь хурд биш, харин чанарын асуудал.",
      ],
    },
    featured: {
      eyebrow: "02 — Шилдэг бүтээл",
      title: "Энэ улирлын онцлох",
      tag: "Гар хийц • Хязгаарлагдмал тоо",
    },
    collection: {
      eyebrow: "03 — Цуглуулга",
      title: "Бүхэн зориулалттай",
      filterAll: "Бүгд",
      filters: [
        "Сандал",
        "Ширээ",
        "Шүүгээ",
        "Орны бүтээгдэхүүн",
        "Гэрэлтүүлэг",
      ],
      addToCart: "Сагсанд",
    },
    craft: {
      eyebrow: "04 — Урлал",
      title: "Материал ба гар хийц",
      steps: [
        {
          n: "I",
          t: "Мод сонгох",
          d: "Зөвхөн 80+ настай хус, нарс. Хатаалтын процесс 9 сар үргэлжилнэ.",
        },
        {
          n: "II",
          t: "Зүсэлт",
          d: "Гараар, ширэм багажаар. Ямар ч CNC байхгүй.",
        },
        {
          n: "III",
          t: "Угсралт",
          d: "Шураг биш, монгол ёсны мод холболт. 200+ жилийн ашиглалт.",
        },
        {
          n: "IV",
          t: "Өнгөлгөө",
          d: "Самрын тосоор хольсон зөгийн балны лак. 7 удаа давхарлана.",
        },
      ],
    },
    showroom: {
      eyebrow: "05 — Үзэсгэлэн",
      title: "Биеэр ирж мэдэрнэ үү",
      addr: "Улаанбаатар хот, Сүхбаатар дүүрэг,\n1-р хороо, Жигжиджавын гудамж 14",
      hours: "Даваа — Бямба\n10:00 — 19:00",
      visit: "Цаг захиалах",
    },
    reviews: { eyebrow: "06 — Захиалагчид", title: "Үе дамжих гэрчлэл" },
    cta: {
      eyebrow: "07 — Захиалга",
      title: ["Таны өрөөнд", "галын дулаан", "оршин", "буух болтугай"],
      cursive: "захиалаарай",
      sub: "Захиалгат тавилга бэлтгэхэд 12-16 долоо хоног зарцуулна.",
      btn: "Захиалга өгөх",
      btn2: "Каталог татах",
    },
    footer: {
      tagline: "Таны гэрийн дулааныг бид урлана",
      newsletter: "Шинэ цуглуулгын тухай мэдээ",
      placeholder: "Имэйл хаяг",
      subscribe: "Бүртгүүлэх",
      rights: "© 2026 Gal Gerel. Бүх эрх хуулиар хамгаалагдсан.",
    },
  },
  en: {
    nav: {
      collection: "Collection",
      story: "Our story",
      craft: "Craft",
      showroom: "Showroom",
      contact: "Contact",
    },
    cart: "Cart",
    search: "Search",
    hero: {
      eyebrow: "Gal Gerel — Mongolian artisanal furniture",
      title: ["The home,", "lit by", "fire"],
      cursive: "handmade furniture",
      sub: "Built by hand by Mongolian master woodworkers. Pieces meant to outlive us.",
      cta1: "View collection",
      cta2: "Visit showroom",
    },
    story: {
      eyebrow: "01 — Our story",
      title: "A family workshop, three generations of hands",
      body: [
        "Founded in 1978 in Ulaanbaatar, Gal Gerel began as our grandfather's small woodshop. Today the third generation works the same benches with the same hand tools — joining old craft with quiet, modern lines.",
        "We do not believe in hurry. A single dining table takes 12 to 16 weeks. The wait is the work.",
      ],
    },
    featured: {
      eyebrow: "02 — Featured",
      title: "This season's piece",
      tag: "Handmade • Limited series",
    },
    collection: {
      eyebrow: "03 — Collection",
      title: "Made to last",
      filterAll: "All",
      filters: ["Seating", "Tables", "Storage", "Bedroom", "Lighting"],
      addToCart: "Add to cart",
    },
    craft: {
      eyebrow: "04 — Craft",
      title: "Material & process",
      steps: [
        {
          n: "I",
          t: "Selection",
          d: "Only 80+ year birch and pine. Air-dried for nine months before the saw touches it.",
        },
        {
          n: "II",
          t: "Cutting",
          d: "Hand tools, cast-iron planes. No CNC in this shop.",
        },
        {
          n: "III",
          t: "Joinery",
          d: "Mortise and tenon, no screws. Built to last 200 years.",
        },
        {
          n: "IV",
          t: "Finishing",
          d: "Beeswax cut with cedar oil. Seven coats, hand-buffed between each.",
        },
      ],
    },
    showroom: {
      eyebrow: "05 — Showroom",
      title: "Come and feel it in person",
      addr: "Ulaanbaatar, Sukhbaatar district\n1st khoroo, Jigjidjav street 14",
      hours: "Mon — Sat\n10:00 — 19:00",
      visit: "Book a visit",
    },
    reviews: {
      eyebrow: "06 — Words from our clients",
      title: "Living testimony",
    },
    cta: {
      eyebrow: "07 — Order",
      title: ["Let firelight", "rest", "in your", "rooms."],
      cursive: "commission yours",
      sub: "Custom commissions take 12 to 16 weeks of careful work.",
      btn: "Place an order",
      btn2: "Download catalog",
    },
    footer: {
      tagline: "The home, lit by fire",
      newsletter: "Letters about new collections",
      placeholder: "Your email",
      subscribe: "Subscribe",
      rights: "© 2026 Gal Gerel. All rights reserved.",
    },
  },
};
