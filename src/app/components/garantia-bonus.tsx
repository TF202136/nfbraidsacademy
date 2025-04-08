"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Gift, Timer, Sparkles } from "lucide-react";
import Image from "next/image";

export default function GarantiaEBonus() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-20">
        {/* Garantia */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 relative overflow-hidden"
        >
          {/* Selo visual */}
          <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2">
            <Image
              src="/garantia-selo.png" // Coloque uma imagem de selo de garantia no diretório public
              alt="Selo de Garantia"
              width={120}
              height={120}
            />
          </div>

          <div className="flex flex-col items-center gap-4 pt-16">
            <ShieldCheck className="w-12 h-12 text-green-500" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Suporte Incondicional 24/7.
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl">
              Teste o curso sem risco! Se dentro de 7 dias você sentir que o
              conteúdo não é pra você, basta enviar um e-mail e devolvemos 100%
              do seu dinheiro. Sem burocracia.
            </p>
          </div>

          {/* Contador animado (falso, ilustrativo) */}
          <div className="mt-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-xl text-sm font-medium shadow-lg"
            >
              ⚠️ Oferta com bônus termina em:{" "}
              <span className="font-bold">02h 48min</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Bônus */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {/* Bônus 1 */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg">
            <Gift className="w-10 h-10 text-yellow-500 mb-4" />
            <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">
              Bônus 1: Kit de Estilos
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Um catálogo com +50 referências de estilos de tranças pra você
              oferecer aos clientes e se destacar.
            </p>
          </div>

          {/* Bônus 2 */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg">
            <Gift className="w-10 h-10 text-yellow-500 mb-4" />
            <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">
              Bônus 2: Estratégia Instagram Pro
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Aprenda como montar seu perfil de trançadeira profissional e
              atrair clientes com autoridade e engajamento.
            </p>
          </div>

          {/* Bônus 3 */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg">
            <Timer className="w-10 h-10 text-red-500 mb-4" />
            <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">
              Bônus 3: Módulo Avançado VIP
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Receba antes de todo mundo a nova versão do curso com técnicas
              exclusivas de finalização e precificação premium.
            </p>
          </div>

          {/* Bônus Surpresa */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl border-2 border-white dark:border-gray-900"
          >
            <Sparkles className="w-10 h-10 mb-4" />
            <h4 className="font-semibold text-lg mb-2">
              Bônus Surpresa: Acesso à Comunidade VIP
            </h4>
            <p className="text-sm">
              Entre num grupo exclusivo com alunas, lives com a Narcisa e
              mentorias quinzenais. Só disponível nesta oferta especial!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
