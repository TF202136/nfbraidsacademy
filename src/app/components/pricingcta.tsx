"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PricingCTASection() {
  return (
    <section className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white py-16 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-yellow-100/20 to-yellow-50/5 dark:from-yellow-900/10 dark:to-black/10" />

      <motion.div
        className="relative z-10 max-w-2xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100 px-4 py-1 rounded-full text-sm font-medium shadow-inner shadow-yellow-200/50 mb-4 animate-pulse">
          <Image
            src="/garantia-selo.png"
            alt="Garantia"
            width={28}
            height={28}
          />
          Oferta Limitada + Garantia de 7 dias
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Invista no seu talento por apenas
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300 text-5xl">
            R$ 497,00
          </span>
        </h2>

        <p className="text-lg text-zinc-600 dark:text-zinc-300">
          Curso completo com acesso vitalício, atualizações exclusivas, grupo VIP, certificado digital e suporte direto com a Narcisa.
        </p>

        <Link href="#formulario" passHref>
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-400 text-black text-xl font-bold px-10 py-6 rounded-2xl shadow-2xl shadow-yellow-300 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Quero Garantir Minha Vaga
          </Button>
        </Link>

        <p className="text-sm text-zinc-500 mt-4">
          Pagamento 100% seguro · Garantia de 7 dias · Acesso imediato
        </p>
      </motion.div>
    </section>
  );
}
