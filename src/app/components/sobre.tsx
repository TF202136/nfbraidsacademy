"use client";

import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Users, Brush, DollarSign, Share2 } from "lucide-react";

const modules = [
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    title: "Fundamentos das Tranças",
    description:
      "Aprenda as bases técnicas para executar tranças com perfeição e durabilidade profissional.",
  },
  {
    icon: <Brush className="w-8 h-8 text-primary" />,
    title: "Estilos em Alta & Técnicas Avançadas",
    description:
      "Domine box braids, knotless, twists e mais estilos que são tendência no Brasil e no exterior.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Atendimento Premium & Fidelização",
    description:
      "Aprenda como encantar suas clientes e fazer com que elas recomendem e voltem sempre.",
  },
  {
    icon: <Share2 className="w-8 h-8 text-primary" />,
    title: "Instagram e TikTok para Trancistas",
    description:
      "Crie conteúdo irresistível e transforme seguidores em clientes pagantes todos os dias.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Branding Pessoal & Autoridade",
    description:
      "Construa sua marca como trancista, torne-se referência e aumente seu valor de mercado.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    title: "Venda de Cursos & Escalabilidade",
    description:
      "Aprenda como transformar seu talento em um curso online e ganhar mesmo enquanto dorme.",
  },
];

export default function WhatYouWillLearn() {
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
          O Que Você Vai Aprender
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Descubra as habilidades que vão transformar seu talento em liberdade financeira e sucesso online.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center justify-center mb-4">
                {mod.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                {mod.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {mod.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
