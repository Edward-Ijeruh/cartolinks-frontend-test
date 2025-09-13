"use client";

import { ChevronDown } from "lucide-react";

const tools = [
  {
    name: "Image",
    tag: "New",
    desc: "Generate images with custom styles in Flux and ideogram",
    img: "/image.png",
  },
  {
    name: "Video",
    desc: "Generate videos with Runway, Luma and more.",
    img: "/video.png",
  },
  {
    name: "Realtime",
    desc: "Realtime AI rendering on a canvas. Instant feedback loops.",
    img: "/realtime.png",
  },
  {
    name: "Enhancer",
    tag: "New",
    desc: "Upscale and enhance images and videos up to 22k.",
    img: "/enhancer.png",
  },
  {
    name: "Edit",
    tag: "New",
    desc: "Add objects, change style, or expand photos and generations.",
    img: "/edit.png",
  },
  {
    name: "Video Lipsync",
    tag: "New",
    desc: "Lip sync any video to any audio.",
    img: "/video-lipsync.png",
  },
  {
    name: "Motion Transfer",
    tag: "New",
    desc: "Transfer motion to images and animate characters.",
    img: "/motion-transfer.png",
  },
  {
    name: "Train",
    desc: "Train Krea to replicate your style, products or characters.",
    img: "/train.png",
  },
];

export default function GenerateGrid() {
  return (
    <div className="px-6 py-8 bg-gray-50 dark:bg-neutral-900 text-black dark:text-white">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold dark:text-white">Generate</h3>
        <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-blue-600">
          <ChevronDown className="w-4 h-4" />
          Show all
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map((t, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-4 rounded-xl transition"
          >
            {/* Left: Image */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Center: Content */}
            <div className="flex-1 mx-4">
              <div className="flex items-center gap-2">
                <h4 className="font-medium text-sm dark:text-white">
                  {t.name}
                </h4>
                {t.tag && (
                  <span className="px-2 py-0.5 text-xs bg-blue-500 text-white rounded-full">
                    {t.tag}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                {t.desc}
              </p>
            </div>

            {/* Right: Open button */}
            <button className="flex-shrink-0 px-4 py-1 text-sm font-medium bg-gray-100 dark:bg-neutral-800 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 transition">
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
