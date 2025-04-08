"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils"; // Certifique-se de ter essa função utilitária

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f5f5dc]/90 backdrop-blur-lg border-b border-[#e6e2d3] dark:bg-black/80 dark:border-gray-800 transition-all duration-500 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Branding */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-[#1a1a1a] dark:text-white transition-colors"
        >
          Narcisa <span className="text-yellow-500">Filipe</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[16px] text-[#1a1a1a] dark:text-gray-200 font-medium">
          {[
            { label: "Início", href: "/#ebooks" },
            { label: "Sobre o Curso", href: "/#sobre" },
            { label: "Depoimentos", href: "/#faq" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-black dark:hover:text-white transition-all duration-200 hover:underline hover:scale-[1.05]"
            >
              {item.label}
            </Link>
          ))}

          <Button
            asChild
            className="ml-4 bg-[#FFD700] text-black hover:bg-[#e6c200] dark:bg-white dark:text-black transition-transform duration-200 hover:scale-[1.05]"
          >
            <Link href="/checkout">Quero me inscrever</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#1a1a1a] dark:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 overflow-hidden bg-[#f5f5dc] dark:bg-black border-t border-[#e6e2d3] dark:border-gray-700",
          isOpen
            ? "max-h-[300px] opacity-100 px-6 pb-6 pt-2"
            : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col space-y-4 text-base font-medium text-[#1a1a1a] dark:text-gray-200">
          {[
            { label: "Início", href: "/#ebooks" },
            { label: "Sobre o Curso", href: "/#sobre" },
            { label: "Depoimentos", href: "/#faq" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <Button
            className="w-full bg-[#FFD700] text-black hover:bg-[#e6c200] dark:bg-white dark:text-black mt-2"
            onClick={() => setIsOpen(false)}
            asChild
          >
            <Link href="/checkout">Comprar Agora</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
