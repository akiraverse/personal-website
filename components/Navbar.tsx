"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const [activeItem, setActiveItem] = useState("About Me");
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = ({ id }: { id: string }) => {
    const el = document.getElementById(id) as HTMLElement | null;
    if (!el) return;

    const yOffset = -220; 
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const menuItems = [
    "About Me",
    "What I Do",
    "Tech Stack",
    "Certificates",
    "Projects",
    "Blogs",
    "Connect",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/30 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto p-7">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Aqilah
          </div>

          {/* Desktop + Tablet menu */}
          <div className="hidden lg:flex gap-2">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveItem(item);
                  scrollToSection({
                    id: item.toLowerCase().replace(/\s+/g, "-"),
                  });
                }}
                className={`transition-colors duration-600 cursor-pointer font-bold rounded-xl px-5 py-2 
                  text-sm lg:text-lg
                  ${
                    activeItem === item
                      ? "text-emerald-400 bg-slate-800 bg-opacity-40"
                      : "text-gray-300 hover:text-emerald-400"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-gray-300"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={32} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 cshadow-xl transform transition-transform duration-300
        ${isOpen ? "translate-x-0 backdrop-blur-lg " : "translate-x-full"}
      `}
      >

        <div className="w-full bg-gray-900/80 backdrop-blur-3xl p-7 rounded-b-lg">
        <div className="flex justify-between items-center mb-6">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} className="text-gray-300" />
          </button>
        </div>


        <div className="flex flex-col gap-4 pt-4 ">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveItem(item);
                setIsOpen(false);
                scrollToSection({
                  id: item.toLowerCase().replace(/\s+/g, "-"),
                });
              }}
              className={`text-left text-xl font-semibold rounded-lg px-4 py-2 transition-colors
                ${
                  activeItem === item
                    ? "text-emerald-400 bg-slate-800 bg-opacity-50"
                    : "text-gray-300 hover:text-emerald-400"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
        </div>
      </aside>
    </nav>
  );
}
