"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Luana Oliveira",
    image: "/aluna1.jpg",
    text: "Eu fazia tranças como hobby, hoje atendo 15 clientes por semana e lancei meu perfil profissional com mais de 10 mil seguidores. Esse curso mudou minha vida!",
  },
  {
    name: "Juliana Lopes",
    image: "/aluna2.jpg",
    text: "Em menos de 2 meses já recuperei o valor do investimento e hoje vivo só de tranças. As estratégias de Instagram e atendimento fizeram toda diferença!",
  },
  {
    name: "Carla Mendes",
    image: "/aluna3.jpg",
    text: "Achei que ia aprender só a fazer trança, mas aprendi a criar uma marca, atrair clientes e me posicionar como referência. É mais que um curso, é uma virada de chave.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white dark:bg-gray-950 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
        >
          Transformações Reais
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Veja como o curso já impactou a vida de dezenas de mulheres que decidiram apostar no seu talento e viver do que amam.
        </motion.p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <span className="text-sm font-semibold text-gray-800 dark:text-white">
                  {item.name}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                “{item.text}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
