import type { Product } from "./types";

export const HERO_IMG     = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80";
export const STORY_IMG    = "https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&q=80";
export const FEATURED_IMG = "https://images.unsplash.com/photo-1549497538-303791108f95?w=1200&q=80";
export const CRAFT_IMG    = "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=1600&q=80";
export const SHOWROOM_IMG = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80";
export const CTA_IMG      = "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1600&q=80";

export const PRODUCTS: Product[] = [
  { id: 1,  category: 0, name_mn: "Хус сандал",          name_en: "Birch armchair",      price: 480,  img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900&q=80" },
  { id: 2,  category: 1, name_mn: "Гэр бүлийн ширээ",    name_en: "Family dining table", price: 1850, img: "https://images.unsplash.com/photo-1549497538-303791108f95?w=900&q=80" },
  { id: 3,  category: 2, name_mn: "Дөрвөн үүдтэй шүүгээ",name_en: "Four-door cabinet",   price: 2200, img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=900&q=80" },
  { id: 4,  category: 3, name_mn: "Үе дамжих ор",        name_en: "Heritage bed",        price: 2950, img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80" },
  { id: 5,  category: 4, name_mn: "Зэс бариултай чийдэн",name_en: "Brass table lamp",    price: 320,  img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=900&q=80" },
  { id: 6,  category: 0, name_mn: "Намхан сандал",       name_en: "Low stool",           price: 220,  img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=900&q=80" },
  { id: 7,  category: 1, name_mn: "Бичгийн ширээ",       name_en: "Writing desk",        price: 980,  img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=900&q=80" },
  { id: 8,  category: 2, name_mn: "Номын тавиур",        name_en: "Library shelf",       price: 1450, img: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=900&q=80" },
  { id: 9,  category: 3, name_mn: "Хүүхдийн ор",         name_en: "Children's cot",      price: 690,  img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&q=80" },
  { id: 10, category: 4, name_mn: "Тааз чийдэн",         name_en: "Pendant lamp",        price: 410,  img: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=900&q=80" },
  { id: 11, category: 1, name_mn: "Дугуй кофены ширээ",  name_en: "Round coffee table",  price: 540,  img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=900&q=80" },
  { id: 12, category: 0, name_mn: "Гар хийц зөөлөн сандал", name_en: "Soft handcrafted chair", price: 720, img: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=900&q=80" },
];
