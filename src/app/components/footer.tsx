"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black text-gray-700 dark:text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Marca */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Tranças com Propósito
            </h2>
            <p className="text-sm">
              Curso completo para quem quer se tornar uma trançadeira
              profissional, transformar vidas e alcançar independência
              financeira.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
              Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#sobre" className="hover:text-yellow-600">
                  Sobre o curso
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-yellow-600">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-yellow-600">
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a
                  href="#comprar"
                  className="hover:text-yellow-600 font-medium"
                >
                  Quero me inscrever
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
              Redes Sociais
            </h3>
            <div className="flex justify-center md:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600"
              >
                <Instagram />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                <Facebook />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-600"
              >
                <Youtube />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-gray-800"
              >
                <FaTiktok className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-6">
          © {new Date().getFullYear()} Narcisa Filipe · Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
