"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name:     (form.elements.namedItem("name")    as HTMLInputElement).value,
      email:    (form.elements.namedItem("email")   as HTMLInputElement).value,
      subject:  (form.elements.namedItem("subject") as HTMLInputElement).value,
      message:  (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      _gotcha:  (form.elements.namedItem("_gotcha") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? `Server error ${res.status}`);
      setStatus("sent");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl p-8 text-center"
        style={{ background: "linear-gradient(135deg, #FDF0E4 0%, #F0EDF8 100%)", border: "1px solid #C4830A33" }}
      >
        <p className="font-heading text-xl text-[#2C2416] mb-2">Message sent!</p>
        <p className="text-[#6B5744]">I&apos;ll be in touch soon.</p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-[#2C2416]/15 bg-white text-[#2C2416] placeholder:text-[#6B5744]/50 focus:outline-none focus:border-[#C4830A] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — hidden from humans, bots fill it in */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-[#C4830A] uppercase tracking-wider mb-1">
            Name
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-[#C4830A] uppercase tracking-wider mb-1">
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="your@email.com" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-medium text-[#C4830A] uppercase tracking-wider mb-1">
          Subject
        </label>
        <input id="subject" name="subject" type="text" placeholder="What's this about?" className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-[#C4830A] uppercase tracking-wider mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Your message…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-[#C4830A] hover:bg-[#a36d08] disabled:opacity-60 text-white font-medium px-7 py-3 rounded-full transition-colors"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
