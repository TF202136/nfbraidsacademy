"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaFinal() {
  return (
    <section className="bg-gradient-to-b from-yellow-50 to-white dark:from-yellow-900/20 dark:to-gray-950 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white"
        >
          Agora é a sua vez de transformar sua vida como trançadeira profissional
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg"
        >
          Garanta acesso ao curso completo, todos os bônus e comece hoje mesmo a construir sua independência financeira com as tranças.
        </motion.p>

        {/* Botão */}
        <motion.a
          href="#comprar" // Ajusta para o ID da sua seção de checkout
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-500 text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all"
        >
          Quero Me Inscrever Agora
          <ArrowRight className="ml-2 w-5 h-5" />
        </motion.a>

        {/* Oferta limitada */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 text-sm text-red-600 dark:text-red-400 font-medium"
        >
          ⚠️ Oferta com bônus e valor promocional por tempo limitado!
        </motion.div>
      </div>
    </section>
  );
}
