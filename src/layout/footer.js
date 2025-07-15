"use client";

import { LeftFootbar } from "@/components/footbarContent/left-side";
import { RightFootbar } from "@/components/footbarContent/right-side";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className=" w-screen">
      <div className="text-center py-8 text-white uppercase font-medium text-xl company-blue-bg">
        Your Trusted Partner in Air Conditioning Services (360) 607-8204
      </div>
      <div className="flex xl:flex-row flex-col justify-evenly company-yellow-bg w-screen py-10">
        <LeftFootbar />

        <div className="logo_block">
          <Image
            src="/images/main-power-washing-handyman-hritsev-bright-fix-drive-way-washing-logo.webp"
            alt="main-power-washing-handyman-hritsev-bright-fix-drive-way-washing-logo"
            width={175}
            height={150}
          />
        </div>
        <RightFootbar />
      </div>
      <div className="w-screen flex-col xl:flex-row justify-evenly items-center text-center px-0 py-5 xl:px-0 xl:py-8.5 text-white company-blue-bg uppercase font-medium text-l">
        <div className="">© 2025 Hritsev Bright Fix All RIGHT RESERVED.</div>
        <div className="flex flex-col xl:flex-row justify-evenly">
          <div className="flex justify-evenly xl:w-80 w-screen underline text-sm py-3 xl:py-0">
            <Link href="/sitemap">Sitemap</Link>
            <Link href="">Privacy</Link>
            <Link href="">Terms</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
