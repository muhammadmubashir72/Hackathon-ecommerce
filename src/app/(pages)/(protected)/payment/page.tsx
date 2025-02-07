"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import convertToSubcurrency from "@/app/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCart } from "../../(public)/cart/context/CartContext";
import CheckoutPage from "../../../lib/stripe";
import Loader from "../../(public)/Loader3D/Loader";
if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Home() {
  const { cart } = useCart();
  const router = useRouter();
  const [amount, setAmount] = useState<number | null>(null);

  useEffect(() => {
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    setAmount(subtotal);
  }, [cart]);
  useEffect(() => {
    if (cart && cart.length === 0) {
      router.push("/cart");
    }
  }, [cart, router]);

  if (amount === null || amount <= 0) {
    return Loader;
  }

  return (
<main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-myBlueImage">
<div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Bandage</h1>
        <h2 className="text-2xl">
          has requested <span className="font-bold"> ${amount}</span>
        </h2>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </main>
  );
}
