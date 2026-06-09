"use client";

import { Button } from "@/components/ui/button";

export function ContactButton({
  type = "call",
  variant = "call",
  text,
  className = "",
}) {
  const isCall = type === "call";

  const href = isCall ? "tel:+15626436373" : "sms:+15626436373";

  const buttonText = text || (isCall ? "CALL US" : "GET SCHEDULE");

  return (
    <a
      href={href}
      className={className}
      onClick={() => {
        window.gtag?.("event", "conversion", {
          send_to: "AW-18199502292/kiCoCP60vrscENS7meZD",
        });
      }}
    >
      <Button variant={variant}>{buttonText}</Button>
    </a>
  );
}
