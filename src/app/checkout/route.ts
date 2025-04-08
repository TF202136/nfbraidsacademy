// app/api/checkout-sessions/route.ts
// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2023-10-16",
// });

// export async function POST() {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     mode: "payment",
//     line_items: [
//       {
//         price_data: {
//           currency: "brl",
//           product_data: {
//             name: "Curso Tranças com Propósito",
//             description: "A formação completa para se tornar uma trançadeira profissional.",
//           },
//           unit_amount: 19700, // R$197,00 (em centavos)
//         },
//         quantity: 1,
//       },
//     ],
//     success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/obrigado`,
//     cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
//   });

//   return NextResponse.json({ id: session.id });
// }
