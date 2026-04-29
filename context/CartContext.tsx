"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import type { CartItem, Product } from "@/lib/types";

type CartCtx = {
  items: CartItem[];
  count: number;
  open: boolean;
  setOpen: (b: boolean) => void;
  add: (p: Product) => void;
  remove: (id: number) => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const add = (p: Product) => {
    setItems((prev) => {
      const ex = prev.find((x) => x.id === p.id);
      if (ex) return prev.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x));
      return [...prev, { ...p, qty: 1 }];
    });
    setOpen(true);
  };

  const remove = (id: number) => setItems((prev) => prev.filter((x) => x.id !== id));
  const count = items.reduce((s, it) => s + it.qty, 0);

  return (
    <Ctx.Provider value={{ items, count, open, setOpen, add, remove }}>{children}</Ctx.Provider>
  );
}

export function useCart(): CartCtx {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCart must be used inside CartProvider");
  return v;
}
