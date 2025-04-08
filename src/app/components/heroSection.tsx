"use client";
import React from "react";
import { Button } from "@/components/ui/button"; // usando shadcn/ui
import Link from "next/link";
import { PlayCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-center px-6 bg-[url('/bg4.jpg')] dark:bg-[url('/bg4.jpg')]"
      aria-label="Hero section with call to action"
    >
      {/* Overlay escurecida para contraste e legibilidade */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70 z-0" />

      {/* Conteúdo principal */}
      <div className="relative z-10 text-white max-w-2xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-xl">
          Transforme Tranças em Liberdade: Domine a Arte e Venda para o Mundo.
        </h1>

        <p className="text-base md:text-lg text-white/90 drop-shadow-md">
          De hobby a carreira dos sonhos. Aprenda as técnicas profissionais de
          tranças, construa sua marca e lance seu império online com o curso
          mais completo e transformador do mercado.
        </p>

        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <Link href="#formulario" passHref>
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-2xl shadow-xl"
            >
              Quero Aprender Agora
            </Button>
          </Link>

          {/* Botão com ícone para vídeo explicativo */}
          <Link
            href="#video-explicativo"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
          >
            <PlayCircle className="w-6 h-6" />
            Ver vídeo explicativo
          </Link>
        </div>
      </div>
    </section>
  );
}
