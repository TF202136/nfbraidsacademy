"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function DuvidasFrequentes() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Título com animação */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white"
        >
          Dúvidas Frequentes
        </motion.h2>

        {/* Accordion ShadCN */}
        <Accordion type="multiple" className="text-left space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Preciso ter experiência com tranças para fazer o curso?
            </AccordionTrigger>
            <AccordionContent>
              Não! O curso é do zero ao avançado. Você vai aprender desde as
              técnicas básicas até as mais avançadas com passo a passo fácil de
              seguir.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Vou receber um certificado após concluir o curso?
            </AccordionTrigger>
            <AccordionContent>
              Sim! Após finalizar todas as aulas, você recebe automaticamente
              seu certificado digital de conclusão.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>O acesso ao curso é vitalício?</AccordionTrigger>
            <AccordionContent>
              Sim! Você poderá assistir às aulas quantas vezes quiser, quando
              quiser. O acesso é vitalício.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Posso acessar o curso pelo celular?
            </AccordionTrigger>
            <AccordionContent>
              Com certeza! Todo o conteúdo é 100% online e pode ser acessado
              pelo celular, tablet ou computador.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>E se eu não gostar do curso?</AccordionTrigger>
            <AccordionContent>
              Você tem 7 dias de garantia incondicional. Se não gostar,
              devolvemos 100% do seu dinheiro. Simples assim.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
