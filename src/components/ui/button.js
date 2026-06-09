"use client";

import { cn } from "@/lib/utils";

export function Button({ className = "", variant = "default", ...props }) {
  const variants = {
    default: "default-button",
    glass: "glass-button",
    filled:
      "nav-filled-back-button base xl:w-[260px] w-[230px] xl:py-[10px] py-[8px] px-[25px] my-[7px] rounded-3xl",
    gradient: "one-border-button shadow-lg shadow-orange-400/50",
    bordersq: "square-one-border-button",
    navblur: "nav-blur-white-button",
    blur: "blur-white-button shadow-lg shadow-cyan-800/50",
    schedule:
      "base company-blue-text text-black uppercase xl:w-[260px] w-[230px] xl:py-[10px] py-[8px] px-[25px] my-[7px] rounded-lg",
    products:
      "nav-button-gradient w-[180px] xl:w-[195px] text-white xl:px-[45px] py-[8px] xl:py-[10px] rounded-[25px] base ",
    scroll:
      " fixed bottom-5 sm:right-5 right-44 z-[99999] company-yellow-bg company-blue-text font-black w-24 h-14 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all duration-300 cursor-pointer",
    call: "base company-blue-text text-black uppercase xl:w-[260px] w-[100px] xl:py-[10px] py-[7px] px-[0px] my-[7px] rounded-3xl",
  };

  return <button {...props} className={cn(variants[variant], className)} />;
}
