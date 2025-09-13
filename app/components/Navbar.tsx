"use client";

import { useState } from "react";
import {
  Home,
  Image as ImageIcon,
  Video,
  Camera,
  Wand2,
  PenTool,
  PenLine,
  Folder,
  Images,
  Headset,
  Bell,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggleButton } from "../utils/ThemeToggleButton";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white dark:bg-neutral-900 dark:border-neutral-800">
      <div className="flex items-center justify-between px-4 md:px-6 py-3">
        {/* Left */}
        <div className="flex items-center gap-2">
          <svg
            aria-label="Krea Logo"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black dark:text-white"
          >
            <path d="M8.34 1.266c1.766-.124 3.324 1.105 3.551 2.802.216 1.612-.887 3.171-2.545 3.536-.415.092-.877.066-1.317.122a4.63 4.63 0 0 0-2.748 1.34l-.008.004-.01-.001-.006-.005-.003-.009q0-.009.005-.016a.04.04 0 0 0 .007-.022 438 438 0 0 1-.01-4.541c.003-1.68 1.33-3.086 3.085-3.21" />
            <path d="M8.526 15.305c-2.247-.018-3.858-2.23-3.076-4.3a3.31 3.31 0 0 1 2.757-2.11c.384-.04.845-.03 1.215-.098 1.9-.353 3.368-1.806 3.665-3.657.066-.41.031-.9.128-1.335.449-2.016 2.759-3.147 4.699-2.236 1.011.476 1.69 1.374 1.857 2.447q.051.33.034.818c-.22 5.842-5.21 10.519-11.279 10.47m2.831.93a.04.04 0 0 1-.021-.02l-.001-.006.002-.006q0-.003.003-.004l.006-.003q3.458-.792 5.992-3.185.045-.042.083.007c.27.357.554.74.78 1.106a10.6 10.6 0 0 1 1.585 4.89q.037.53.023.819c-.084 1.705-1.51 3.08-3.31 3.09-1.592.01-2.992-1.077-3.294-2.597-.072-.36-.05-.858-.11-1.238q-.282-1.755-1.715-2.84zm-3.369 6.64c-1.353-.235-2.441-1.286-2.684-2.593a5 5 0 0 1-.05-.817V15.14q0-.021.016-.007c.884.786 1.814 1.266 3.028 1.346l.326.01c1.581.051 2.92 1.087 3.229 2.592.457 2.225-1.557 4.195-3.865 3.793" />
          </svg>
          <div className="w-6 h-6 bg-purple-500 rounded-full" />
          <span className="font-medium hidden sm:block text-black dark:text-white">
            benevolentimibbet
          </span>
          <ChevronDown size={16} className="text-gray-500" />
        </div>

        {/* Center */}
        <nav className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center gap-2 px-3 py-1 rounded-xl text-black dark:text-white bg-gray-200 dark:bg-neutral-800 overflow-x-auto">
            {[
              { icon: Home, active: true },
              { icon: ImageIcon },
              { icon: Video },
              { icon: Camera },
              { icon: Wand2 },
              { icon: PenTool },
              { icon: PenLine },
              { icon: Folder },
            ].map(({ icon: Icon, active }, idx) => (
              <button
                key={idx}
                className={`py-2 px-3 rounded-xl transition-colors ${
                  active
                    ? "bg-white dark:bg-neutral-700 shadow-sm"
                    : "hover:bg-gray-200 dark:hover:bg-neutral-700"
                }`}
              >
                <Icon size={20} />
              </button>
            ))}
          </div>
        </nav>

        {/* Right */}
        <div className="hidden md:flex items-center gap-2 text-black dark:text-white">
          <button className="flex items-center gap-1 px-3 py-1 rounded-md bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700">
            <Images size={16} />
            <span className="text-sm">Gallery</span>
          </button>
          <button className="flex items-center gap-1 px-3 py-1 rounded-md bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700">
            <Headset size={16} />
            <span className="text-sm">Support</span>
          </button>
          <button className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700">
            <Bell size={20} />
          </button>
          <ThemeToggleButton />
          <div className="w-6 h-6 rounded-full bg-gray-400" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md bg-gray-100 dark:bg-neutral-800"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-64 bg-white dark:bg-neutral-900 shadow-lg z-50 flex flex-col p-4"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-md bg-gray-100 dark:bg-neutral-800"
              >
                <X size={20} />
              </button>
            </div>

            {/* Center buttons */}
            <div className="flex flex-col gap-2 mb-4">
              {[
                { icon: Home, label: "Home", active: true },
                { icon: ImageIcon, label: "Images" },
                { icon: Video, label: "Video" },
                { icon: Camera, label: "Camera" },
                { icon: Wand2, label: "Magic" },
                { icon: PenTool, label: "Pen Tool" },
                { icon: PenLine, label: "Pen Line" },
                { icon: Folder, label: "Files" },
              ].map(({ icon: Icon, label, active }, idx) => (
                <button
                  key={idx}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                    active
                      ? "bg-gray-200 dark:bg-neutral-700"
                      : "hover:bg-gray-100 dark:hover:bg-neutral-800"
                  }`}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Right buttons */}
            <div className="flex flex-col gap-2">
              <button className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 dark:bg-neutral-800">
                <Images size={18} />
                <span>Gallery</span>
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 dark:bg-neutral-800">
                <Headset size={18} />
                <span>Support</span>
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 dark:bg-neutral-800">
                <Bell size={18} />
                <span>Notifications</span>
              </button>
              <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 dark:bg-neutral-800">
                <ThemeToggleButton />
                <span>Theme</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
