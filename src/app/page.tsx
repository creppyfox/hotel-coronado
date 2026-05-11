import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutUs } from "@/components/sections/AboutUs";
import { Location } from "@/components/sections/Location";
import { TouristSpots } from "@/components/sections/TouristSpots";
import { RecommendedRestaurants } from "@/components/sections/RecommendedRestaurants";

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <Location />
      <TouristSpots />
      <RecommendedRestaurants />
      <Footer />
    </main>
  );
}
