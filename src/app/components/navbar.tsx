"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { ThemeToggle } from "@/app/components/ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f5f5dc]/90 backdrop-blur-lg border-b border-[#e6e2d3] dark:bg-black/80 dark:border-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Branding */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-[#1a1a1a] dark:text-white transition-colors"
        >
          Narcisa <span className="text-yellow-400">Filipe</span>
        </Link>

        {/* Menu - Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-[#36454F] dark:text-gray-300 font-medium transition-colors">
          <Link
            href="/#ebooks"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="/#sobre"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Sobre o curso
          </Link>
          <Link
            href="/#faq"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
           Depoimento
          </Link>
          {/* <ThemeToggle /> */}
          <Button className="ml-4 bg-[#FFD700] text-black hover:bg-[#e6c200] dark:bg-white dark:text-black transition-colors">
          <Link href="/checkout">Quero me inscrever</Link>
          </Button>
        </nav>

        {/* Menu Button - Mobile */}
        <button
          className="md:hidden text-[#1a1a1a] dark:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 text-[#36454F] dark:text-gray-300 font-medium bg-[#f5f5dc] dark:bg-black border-t border-[#e6e2d3] dark:border-gray-700 transition-colors">
          <Link
            href="/#ebooks"
            onClick={() => setIsOpen(false)}
            className="block"
          >
            E-books
          </Link>
          <Link
            href="/#sobre"
            onClick={() => setIsOpen(false)}
            className="block"
          >
            Sobre
          </Link>
          <Link href="/#faq" onClick={() => setIsOpen(false)} className="block">
            FAQ
          </Link>
          {/* <ThemeToggle /> */}
          <Button className="w-full bg-[#FFD700] text-black hover:bg-[#e6c200] dark:bg-white dark:text-black transition-colors">
            Comprar Agora
          </Button>
        </div>
      )}
    </header>
  );
}
