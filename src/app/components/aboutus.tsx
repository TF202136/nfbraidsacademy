"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="bg-white dark:bg-zinc-900 py-20 px-6 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/about-us-image.jpg" // Replace with your image path
            alt="About Us"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 dark:text-white">
            Nossa História e Missão
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
            Somos apaixonados por tranças e dedicados a compartilhar nosso conhecimento com o mundo. Nossa jornada começou com [sua história breve], e desde então, temos nos dedicado a capacitar pessoas a transformar sua paixão em uma carreira de sucesso.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
            Nossa missão é fornecer educação de alta qualidade e recursos práticos para que você possa dominar a arte das tranças e construir um negócio online próspero. Acreditamos que todos têm o potencial de alcançar seus sonhos, e estamos aqui para te ajudar a trilhar esse caminho.
          </p>
          <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 text-lg mb-8">
            <li>Técnicas Exclusivas e Atualizadas</li>
            <li>Suporte e Comunidade Ativa</li>
            <li>Estratégias de Negócio Comprovadas</li>
          </ul>
          <button className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 px-6 py-4 rounded-lg text-white font-semibold shadow-xl hover:scale-105 transition-transform">
            Conheça Nossos Cursos
          </button>
        </motion.div>
      </div>
    </section>
  );
}