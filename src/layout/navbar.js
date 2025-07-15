"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RightNav } from "@/components/navbarContent/rightBar";
import Burger from "./burger";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);

    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1400);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  if (!isMounted) return null;

  return isDesktop ? (
    <nav className="nav">
      <div className="flex flex-row items-start">
        <Link href="/">
          <Image
            className="pb-4 ml-4"
            src="/images/main-power-washing-handyman-hritsev-bright-fix-drive-way-washing-logo.webp"
            alt="main-power-washing-handyman-hritsev-bright-fix-drive-way-washing-logo"
            width={100}
            height={150}
          />
        </Link>

        <RightNav />
      </div>
      <div className="nav_bar">
        <ul className="nav_links_list">
          <li className="">
            <Link href="/">
              <Button variant="bordersq">main</Button>
            </Link>
          </li>
          <li className="main_bar">
            <Link href="/about">
              <Button variant="bordersq">about Us</Button>
            </Link>
          </li>

          <li className="main_bar">
            <Link href="/services">
              <Button variant="bordersq">services</Button>
            </Link>
          </li>
          <li className="main_bar">
            <Link href="/news">
              <Button variant="bordersq">news</Button>
            </Link>
          </li>
          <li className="main_bar">
            <Link href="/contact">
              <Button variant="bordersq">contact</Button>
            </Link>
          </li>
          <li className="main_bar">
            <Link href="/schedule">
              <Button variant="schedule">get schedule</Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  ) : (
    <Burger />
  );
}

export default Navbar;
