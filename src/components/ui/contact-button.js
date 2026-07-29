"use client";

import { Button } from "@/components/ui/button";

export function ContactButton({
  type = "call",
  variant = "call",
  text,
  href = "#",
  className = "",
}) {
  const isCall = type === "call";

  const buttonText = text || (isCall ? "CALL US" : "GET SCHEDULE");

  const handleClick = () => {
    window.gtag?.("event", "conversion", {
      send_to: "AW-18199502292/kiCoCP60vrscENS7meZD",
    });
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      <Button variant={variant}>{buttonText}</Button>
    </a>
  );
}
