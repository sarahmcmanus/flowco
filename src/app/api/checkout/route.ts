import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { error: "Stripe is not configured." },
      { status: 500 }
    );
  }

  const stripe = new Stripe(secretKey);
  const { amountUsd } = await req.json();
  const amount = Math.round(parseFloat(amountUsd) * 100); // cents

  if (!amount || amount < 100) {
    return NextResponse.json(
      { error: "Minimum payment is $1.00." },
      { status: 400 }
    );
  }

  const origin = req.headers.get("origin") ?? "https://flowingcoherence.com";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: amount,
          product_data: {
            name: "Session payment — Flowing Coherence",
            description: "Top-up or session extension with Sarah McManus",
          },
        },
      },
    ],
    success_url: `${origin}/coaching?payment=success`,
    cancel_url: `${origin}/coaching#pay`,
  });

  return NextResponse.json({ url: session.url });
}
