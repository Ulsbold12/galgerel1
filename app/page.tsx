import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import Featured from "@/components/Featured";
import Collection from "@/components/Collection";
import Craft from "@/components/Craft";
import Showroom from "@/components/Showroom";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import RevealMount from "@/components/RevealMount";

export default function Page() {
  return (
    <main className="relative w-full bg-[var(--paper)] text-[var(--ink)]">
      <RevealMount />
      <TopBar />
      <Hero />
      <Marquee />
      <Story />
      <Featured />
      <Collection />
      <Craft />
      <Showroom />
      <Reviews />
      <CTA />
      <Footer />
      <CartDrawer />
    </main>
  );
}
