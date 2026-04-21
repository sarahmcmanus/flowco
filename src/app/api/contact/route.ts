import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const { name, email, subject, message, _gotcha } = await req.json();

  // Honeypot: bots fill this field, humans don't
  if (_gotcha) {
    return NextResponse.json({ ok: true }); // silently discard
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Not yet configured — log and return success so form UI still works in dev
    console.log("Contact form submission (RESEND_API_KEY not set):", { name, email, subject, message });
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Flowing Coherence Contact Form <onboarding@resend.dev>",
    to: "sarah@flowingcoherence.com",
    replyTo: email,
    subject: subject ? `[Contact] ${subject}` : `[Contact] Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send message. Please try emailing directly." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
