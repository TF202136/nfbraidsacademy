"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="bg-white dark:bg-zinc-900 py-20 px-6 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Seção de Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 dark:text-white">
            Conheça Sua Mentora: Narcisa Filipe
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
            Olá, futura trancista de sucesso! Sou [Nome da Mentora], e minha
            jornada no mundo das tranças começou em 2018. Na época, eu tinha um
            sonho: transformar minha paixão em uma carreira que me permitisse
            ter liberdade financeira e tempo para fazer o que amo.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
            Após anos de dedicação, aprendizado e aprimoramento de técnicas, em
            2024, realizei meu sonho de abrir meu próprio salão. Foi um marco
            incrível, mas senti que ainda havia mais para alcançar.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
            Decidi então compartilhar meu conhecimento e experiência com outras
            pessoas que, assim como eu, buscam a liberdade financeira através
            das tranças. Criei este curso completo para te guiar em cada passo,
            desde as técnicas básicas até as estratégias avançadas para
            construir um negócio de sucesso.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
            Se você está pronta para transformar sua paixão em uma fonte de
            renda, construir sua própria marca e alcançar a liberdade
            financeira, este curso é para você!
          </p>
          <button className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 px-6 py-4 rounded-lg text-white font-semibold shadow-xl hover:scale-105 transition-transform">
            Comece Sua Jornada Agora
          </button>
        </motion.div>

        {/* Imagem da Mentora (opcional) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Substitua "/sua-imagem.jpg" pela imagem da mentora */}
          <img
            src="/sua-imagem.jpg"
            alt="[Nome da Mentora]"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
