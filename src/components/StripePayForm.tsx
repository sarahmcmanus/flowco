"use client";

import { useState } from "react";

export default function StripePayForm() {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amountUsd: amount }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      window.location.href = data.url;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-start">
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B5744] font-medium">
          $
        </span>
        <input
          type="number"
          min="1"
          step="0.01"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="pl-8 pr-4 py-3 rounded-full border border-[#2C2416]/20 bg-white text-[#2C2416] placeholder:text-[#6B5744]/50 focus:outline-none focus:border-[#C4830A] w-40"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-[#C4830A] hover:bg-[#a36d08] disabled:opacity-60 text-white font-medium px-6 py-3 rounded-full transition-colors shrink-0"
      >
        {loading ? "Redirecting…" : "Pay via Stripe"}
      </button>
      {error && <p className="text-red-600 text-sm self-center">{error}</p>}
    </form>
  );
}
