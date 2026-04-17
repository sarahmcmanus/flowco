"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

interface CalEmbedProps {
  calLink: string; // e.g. "sarahmcmanus" or "sarahmcmanus/30min"
}

export default function CalEmbed({ calLink }: CalEmbedProps) {
  const initialized = useRef(false);

  function initCal() {
    if (initialized.current) return;
    initialized.current = true;
    // @ts-ignore
    const Cal = window.Cal;
    if (!Cal) return;
    Cal("init", { origin: "https://cal.com" });
    Cal("inline", {
      elementOrSelector: "#cal-inline",
      calLink,
    });
    Cal("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }

  // In case the script was already loaded by a previous render
  useEffect(() => {
    // @ts-ignore
    if (window.Cal) initCal();
  });

  return (
    <div className="w-full rounded-2xl overflow-hidden">
      <div id="cal-inline" style={{ width: "100%", minHeight: 600 }} />
      <Script
        src="https://app.cal.com/embed/embed.js"
        strategy="lazyOnload"
        onLoad={initCal}
      />
    </div>
  );
}
