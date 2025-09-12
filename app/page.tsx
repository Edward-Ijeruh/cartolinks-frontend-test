"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import GenerateGrid from "./components/GenerateGrid";
import Footer from "./components/Footer";

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        theme === "dark" ? "bg-neutral-900" : "bg-gray-50"
      }`}
    >
      <Navbar />
      <main className="flex-1">
        <HeroCarousel />
        <GenerateGrid />
      </main>
      <Footer />
    </div>
  );
}
