"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleBurger = () => setIsOpen(!isOpen);
  const closeBurger = () => setIsOpen(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="relative company-yellow-bg">
      <button
        onClick={toggleBurger}
        className="flex flex-col justify-center items-center space-y-1 z-50 p-7"
      >
        <span className="w-10 h-1 company-blue-bg" />
        <span className="w-10 h-1 company-blue-bg" />
        <span className="w-10 h-1 company-blue-bg" />
      </button>
      <Link href="/">
        <Image
          className="absolute top-0 left-1/2 -translate-x-1/2"
          src="/images/main-power-washing-handyman-hritsev-bright-fix-drive-way-washing-logo.webp"
          width={75}
          height={80}
          alt="Logo"
        />
      </Link>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeBurger}
      />
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
                width={75}
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
            className="text-xl font-semibold company-blue-text hover:underline"
          >
            Main
          </Link>
          <Link
            href="/about"
            onClick={closeBurger}
            className="text-xl font-semibold company-blue-text hover:underline"
          >
            About Us
          </Link>
          <Link
            href="/services"
            onClick={closeBurger}
            className="text-xl font-semibold company-blue-text hover:underline"
          >
            Services
          </Link>
          <Link
            href="/news"
            onClick={closeBurger}
            className="text-xl font-semibold company-blue-text hover:underline"
          >
            News
          </Link>
          <Link
            href="/contact"
            onClick={closeBurger}
            className="text-xl font-semibold company-blue-text hover:underline"
          >
            Contact
          </Link>
          <Link
            href="/schedule"
            onClick={closeBurger}
            className="text-xl font-semibold company-blue-text hover:underline"
          >
            Get schedule
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Burger;
