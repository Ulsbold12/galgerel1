import type { Lang } from "./types";

export function fmtPrice(n: number, lang: Lang): string {
  if (lang === "mn") {
    return new Intl.NumberFormat("mn-MN").format(n * 3500) + "₮";
  }
  return "$" + new Intl.NumberFormat("en-US").format(n);
}
