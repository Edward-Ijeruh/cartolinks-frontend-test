"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroCarousel() {
  return (
    <section className="w-full bg-gray-50 dark:bg-neutral-900 py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mx-auto px-4">
        {/* Column 1 */}
        <div className="flex flex-col items-center md:items-end flex-1">
          {/* Card */}
          <div className="relative w-full h-[300px] md:h-[380px] rounded-xl overflow-hidden shadow">
            <Image
              src="/first-carousel-image.jpg"
              alt="WAN 2.2 Image generation"
              fill
              className="object-cover"
            />

            {/* Overlay text */}
            <div className="absolute inset-0 p-6 text-white z-10">
              {/* Top Left: Text */}
              <div className="flex justify-start">
                <p className="text-xs uppercase font-medium opacity-80 drop-shadow-lg">
                  NEW IMAGE MODEL
                </p>
              </div>

              {/* Center: Text */}
              <div className="absolute inset-0 flex justify-center items-center">
                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                  WAN 2.2
                </h1>
              </div>

              {/* Bottom */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-col">
                {/* Heading */}
                <p className="text-md md:text-lg font-bold drop-shadow-lg mb-2">
                  WAN 2.2 Image Generation
                </p>

                {/* Next */}
                <div className="flex flex-col md:flex-row justify-between items-start w-full">
                  {/* Paragraph */}
                  <p className="text-sm md:max-w-sm">
                    Generate complex images with the new and powerful WAN 2.2
                    model. Exceptional prompt adherence and ultra-realistic
                    textures.
                  </p>

                  {/* Button */}
                  <button className="mt-3 md:mt-0 px-5 py-2 bg-white text-black rounded-full text-sm font-medium shadow">
                    Try WAN 2.2
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-1 mt-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === 0
                    ? "bg-black dark:bg-white"
                    : "bg-gray-400 dark:bg-neutral-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col items-center md:items-end flex-1">
          {/* Card */}
          <div className="relative w-full h-[300px] md:h-[380px] rounded-xl overflow-hidden shadow">
            <Image
              src="/second-carousel-image.jpg"
              alt="FLUX1 Krea"
              fill
              className="object-cover"
            />

            {/* Overlay text */}
            <div className="absolute inset-0 p-6 text-white z-10">
              {/* Top Left: Text */}
              <div className="flex justify-start">
                <p className="text-xs uppercase font-medium opacity-80 drop-shadow-lg">
                  OPEN SOURCE MODEL
                </p>
              </div>

              {/* Center: Text */}
              <div className="absolute inset-0 flex justify-center items-center">
                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                  FLUX1 Krea
                </h1>
              </div>

              {/* Bottom */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-col">
                {/* Heading */}
                <p className="text-md md:text-lg font-bold drop-shadow-lg mb-2">
                  FLUX1 Krea Image Generation
                </p>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-start w-full">
                  {/* Paragraph */}
                  <p className="text-sm md:max-w-sm">
                    We’re making the weights open-source. Download and run our
                    model weights, read the technical report, or generate with
                    it in Krea Image.
                  </p>

                  {/* Button */}
                  <button className="mt-3 md:mt-0 px-5 py-2 bg-white text-black rounded-full text-sm font-medium shadow">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex gap-3 mt-3 text-black dark:text-white">
            <button className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 shadow">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 shadow">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
