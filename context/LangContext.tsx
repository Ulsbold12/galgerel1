"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import type { Lang } from "@/lib/types";
import { I18N } from "@/lib/i18n";

type LangCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof I18N)["mn"];
};

const Ctx = createContext<LangCtx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("mn");
  return <Ctx.Provider value={{ lang, setLang, t: I18N[lang] }}>{children}</Ctx.Provider>;
}

export function useLang(): LangCtx {
  const v = useContext(Ctx);
  if (!v) throw new Error("useLang must be used inside LangProvider");
  return v;
}
