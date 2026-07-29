"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ContactButton } from "@/components/ui/contact-button";
import { Button } from "@/components/ui/button";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleBurger = () => setIsOpen(!isOpen);
  const closeBurger = () => setIsOpen(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="relative company-yellow-bg h-55 w-full">
      {/* Бургер */}
      <button
        onClick={toggleBurger}
        className="absolute left-4 top-30 -translate-y-1/2 z-30 flex flex-col space-y-1"
      >
        <span className="w-10 h-1 company-blue-bg rounded" />
        <span className="w-10 h-1 company-blue-bg rounded" />
        <span className="w-10 h-1 company-blue-bg rounded" />
      </button>

      {/* Центр */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center gap-3 pointer-events-auto">
          <Link href="/">
            <Image
              src="/images/main-power-washing-handyman-hritsev-bright-fix-drive-way-washing-logo.webp"
              width={57}
              height={80}
              alt="Logo"
            />
          </Link>

          <Button variant="blur">
            <Link className="uppercase text-xs xl:text-base" href="/areas">
              OUR AREAS
            </Link>
          </Button>

          <ContactButton
            type="call"
            variant="call"
            text="CALL US (562) 643-6373"
            href="tel:+15626436373"
          />
        </div>
      </div>

      {/* Затемнение */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeBurger}
      />

      {/* Боковое меню */}
      <div
        className={`fixed top-0 left-0 w-4/5 max-w-sm h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col justify-between items-center p-6 border-b">
          <div className="w-full flex justify-between items-center">
            <Link href="/">
              <Image
                className="absolute top-1 left-1/2 -translate-x-1/2"
                src="/images/main-power-washing-handyman-hritsev-bright-fix-drive-way-washing-logo.webp"
                width={57}
                height={100}
                alt="Logo"
              />
            </Link>

            <button onClick={closeBurger} className="text-2xl font-bold">
              &times;
            </button>
          </div>
        </div>

        <div className="flex flex-col text-start space-y-6 p-6 uppercase company-blue-text">
          <Link
            href="/"
            onClick={closeBurger}
            className="text-xl font-semibold hover:underline"
          >
            Main
          </Link>

          <Link
            href="/about"
            onClick={closeBurger}
            className="text-xl font-semibold hover:underline"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            onClick={closeBurger}
            className="text-xl font-semibold hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Burger;
