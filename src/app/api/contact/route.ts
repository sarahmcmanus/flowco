import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  console.log("[contact] POST received");

  let body: Record<string, string>;
  try {
    body = await req.json();
    console.log("[contact] parsed body:", { ...body, message: body.message?.slice(0, 50) });
  } catch (e) {
    console.error("[contact] failed to parse request body:", e);
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message, _gotcha } = body;

  if (_gotcha) {
    console.log("[contact] honeypot triggered, discarding");
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    console.log("[contact] missing required fields:", { name: !!name, email: !!email, message: !!message });
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  console.log("[contact] RESEND_API_KEY present:", !!apiKey, "length:", apiKey?.length);

  if (!apiKey) {
    console.log("[contact] no API key — logging submission only");
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(apiKey);

    const payload = {
      from: "Flowing Coherence <hello@contact.flowingcoherence.com>",
      to: "mcmanus.sarah.a@gmail.com",
      replyTo: email,
      subject: subject ? `[Contact] ${subject}` : `[Contact] Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    };
    console.log("[contact] sending via Resend, payload:", { ...payload, text: payload.text.slice(0, 80) });

    const result = await resend.emails.send(payload);
    console.log("[contact] Resend result:", JSON.stringify(result));

    if (result.error) {
      console.error("[contact] Resend API error:", JSON.stringify(result.error));
      return NextResponse.json(
        { error: `Resend error: ${result.error.message ?? JSON.stringify(result.error)}` },
        { status: 500 }
      );
    }

    console.log("[contact] success, id:", result.data?.id);
    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    console.error("[contact] unexpected exception:", e);
    const msg = e instanceof Error ? e.message : JSON.stringify(e);
    return NextResponse.json({ error: `Unexpected error: ${msg}` }, { status: 500 });
  }
}
