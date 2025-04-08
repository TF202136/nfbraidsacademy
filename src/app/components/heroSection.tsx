"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-center px-6 bg-[url('/bg4.jpg')] dark:bg-[url('/bg4.jpg')]"
      aria-label="Hero section with call to action"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70 z-0" />

      {/* Conteúdo principal */}
      <div className="relative z-10 text-white max-w-4xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-xl">
          Transforme Tranças em Liberdade: Domine a Arte e Venda para o Mundo.
        </h1>

        <p className="text-base md:text-lg text-white/90 drop-shadow-md">
          De hobby a carreira dos sonhos. Aprenda técnicas profissionais de
          tranças, construa sua marca e lance seu império online com o curso
          mais completo do mercado.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <Link href="#formulario" passHref>
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-2xl shadow-xl"
            >
              Quero Aprender Agora
            </Button>
          </Link>

          {/* Dialog com vídeo explicativo */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-lg">
                <PlayCircle className="w-6 h-6" />
                Ver vídeo explicativo
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl p-0 bg-black border-none">
              <DialogTitle className="absolute w-1 h-1 p-0 m-[-1px] overflow-hidden whitespace-nowrap border-0 clip-[rect(0,0,0,0)]">
                Vídeo Explicativo do Curso
              </DialogTitle>
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl">
                <video controls className="w-full h-full" autoPlay>
                  <source src="/0407.mp4" type="video/mp4" />
                  <source src="/0407.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
