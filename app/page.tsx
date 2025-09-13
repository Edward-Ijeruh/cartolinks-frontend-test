import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import GenerateGrid from "./components/GenerateGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col  bg-gray-50 dark:bg-neutral-900">
      <Navbar />
      <main className="flex-1">
        <HeroCarousel />
        <GenerateGrid />
      </main>
      <Footer />
    </div>
  );
}
