# Gal Gerel — Next.js + TypeScript

## Бүтэц

```
app/
  layout.tsx        # Fraunces + Manrope, LangProvider, CartProvider
  page.tsx          # Бүх хэсгийг угсардаг
  globals.css       # CSS variables, reveal, marquee, drift animation
components/
  TopBar.tsx        # Header + lang toggle + cart icon
  Hero.tsx
  Marquee.tsx
  Story.tsx
  Featured.tsx
  Collection.tsx
  ProductCard.tsx
  Craft.tsx
  Showroom.tsx
  Reviews.tsx
  CTA.tsx
  Footer.tsx
  CartDrawer.tsx
  RevealMount.tsx   # IntersectionObserver mounter
context/
  LangContext.tsx   # MN / EN toggle (useLang)
  CartContext.tsx   # add / remove / open (useCart)
lib/
  types.ts          # Lang, Product, CartItem
  products.ts       # 12 бүтээгдэхүүн + image URL-ууд
  i18n.ts           # MN + EN dictionary
  format.ts         # fmtPrice (mn ₮ / en $)
  useReveal.ts      # IntersectionObserver hook
public/
  logo.jpg
```

## Суулгах

```bash
npx create-next-app@latest gal-gerel --ts --tailwind --app --src-dir=false
cd gal-gerel
# дээрх файлуудыг хуул
npm run dev
```

## Анхаарах

- `tsconfig.json` дотор `"paths": { "@/*": ["./*"] }` тохируулсан байх ёстой (default Next.js дээр аль хэдийн байгаа).
- `next.config.ts`-д Unsplash domain whitelist хийсэн.
- Зургуудыг өөрийн bucket / CDN-аас солихоор `lib/products.ts`-г засах.
# galgerel1
