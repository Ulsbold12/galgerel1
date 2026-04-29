export type Lang = "mn" | "en";

export type Product = {
  id: number;
  category: number;
  name_mn: string;
  name_en: string;
  price: number;
  img: string;
};

export type CartItem = Product & { qty: number };
