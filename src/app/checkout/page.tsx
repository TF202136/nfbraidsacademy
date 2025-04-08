"use client";

import { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaCreditCard } from "react-icons/fa";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function CheckoutPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify({
          amount: 5000, // Preço em centavos (50.00 USD)
          currency: "usd",
          customerData: formData, // Inclui os dados do cliente
        }),
      });

      const session = await response.json();
      if (session.url) {
        window.location.href = session.url;
      }
    } catch (error) {
      setError("Algo deu errado. Tente novamente.");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 p-10 rounded-lg shadow-xl">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
          Checkout - Curso Tranças com Propósito
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Preencha o formulário abaixo e prepare-se para transformar sua carreira com nosso curso exclusivo!
        </p>

        {/* Formulário de Informações do Cliente */}
        <form className="mb-8">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">
              Nome Completo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Seu nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="seuemail@exemplo.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="phone">
              Telefone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="(XX) XXXXX-XXXX"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </form>

        {/* Informações do curso */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            O que você vai aprender
          </h2>
          <ul className="text-gray-600 dark:text-gray-300 mt-4 space-y-2">
            <li>Dominar as técnicas de tranças profissionais</li>
            <li>Estratégias para conquistar e fidelizar clientes</li>
            <li>Como precificar e gerar lucro com seu trabalho</li>
            <li>Planos de marketing para expandir sua clientela</li>
          </ul>
        </div>

        {/* Preço */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            £350
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-300">Total</div>
        </div>

        {/* Botão de Checkout */}
        <Button
        //    isLoading={isLoading}
          onClick={handleCheckout}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center justify-center"
        >
          <FaCreditCard className="mr-3" /> Finalizar Compra
        </Button>

        {/* Erro */}
        {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}
      </div>
    </div>
  );
}