import { CinematicHero } from "@/components/cinematic-hero";
import { ProductStory } from "@/components/product-story";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050806] text-stone-50">
      <CinematicHero />
      <ProductStory />
    </main>
  );
}
