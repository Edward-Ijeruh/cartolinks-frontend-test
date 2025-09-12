"use client";

import { FileText, CreditCard } from "lucide-react";

export default function Footer() {
  return (
    <div className="mt-12">
      {/* Gallery Section Header */}
      <div className="flex justify-between items-center px-6 mb-4 ">
        <h3 className="text-lg font-semibold dark:text-white">Gallery</h3>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-3 py-1 rounded-md bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition text-sm font-medium">
            <FileText className="w-4 h-4" />
            Legal
          </button>
          <button className="flex items-center gap-1 px-3 py-1 rounded-md bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition text-sm font-medium">
            <CreditCard className="w-4 h-4" />
            Pricing
          </button>
        </div>
      </div>

      {/* AI Banner */}
      <div className="flex flex-col md:flex-row justify-between items-center py-10 px-6 bg-black text-white gap-6 md:gap-0">
        {/* Left: Krea AI */}
        <div className="flex items-center gap-3">
          <svg
            aria-label="Krea Logo"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white w-8 h-8"
          >
            <path d="M8.34 1.266c1.766-.124 3.324 1.105 3.551 2.802.216 1.612-.887 3.171-2.545 3.536-.415.092-.877.066-1.317.122a4.63 4.63 0 0 0-2.748 1.34l-.008.004-.01-.001-.006-.005-.003-.009q0-.009.005-.016a.04.04 0 0 0 .007-.022 438 438 0 0 1-.01-4.541c.003-1.68 1.33-3.086 3.085-3.21" />
            <path d="M8.526 15.305c-2.247-.018-3.858-2.23-3.076-4.3a3.31 3.31 0 0 1 2.757-2.11c.384-.04.845-.03 1.215-.098 1.9-.353 3.368-1.806 3.665-3.657.066-.41.031-.9.128-1.335.449-2.016 2.759-3.147 4.699-2.236 1.011.476 1.69 1.374 1.857 2.447q.051.33.034.818c-.22 5.842-5.21 10.519-11.279 10.47m2.831.93a.04.04 0 0 1-.021-.02l-.001-.006.002-.006q0-.003.003-.004l.006-.003q3.458-.792 5.992-3.185.045-.042.083.007c.27.357.554.74.78 1.106a10.6 10.6 0 0 1 1.585 4.89q.037.53.023.819c-.084 1.705-1.51 3.08-3.31 3.09-1.592.01-2.992-1.077-3.294-2.597-.072-.36-.05-.858-.11-1.238q-.282-1.755-1.715-2.84zm-3.369 6.64c-1.353-.235-2.441-1.286-2.684-2.593a5 5 0 0 1-.05-.817V15.14q0-.021.016-.007c.884.786 1.814 1.266 3.028 1.346l.326.01c1.581.051 2.92 1.087 3.229 2.592.457 2.225-1.557 4.195-3.865 3.793" />
          </svg>
          <span className="font-bold text-2xl md:text-3xl">Krea AI</span>
        </div>

        {/* Right: Curated by */}
        <div className="flex items-center gap-2 md:gap-3 mt-4 md:mt-0">
          <span className="text-xl md:text-2xl font-bold">Curated by</span>
          <img
            src="/mobbin.png"
            alt="Curator"
            className="w-10 h-10 md:w-12 md:h-12 object-cover"
          />
          <span className="text-xl md:text-2xl font-bold">Mobbin</span>
        </div>
      </div>
    </div>
  );
}
