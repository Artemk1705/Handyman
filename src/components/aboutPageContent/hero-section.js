import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutPageHero() {
  return (
    <div className="relative w-screen h-[75vh] bg-[url('/images/air-quality.webp')] bg-cover bg-center flex items-center justify-center">
      {/* Градиентный фон слева направо поверх изображения */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />

      <div className="flex-col flex items-center z-20">
        <div className="w-screen xl:w-1/2 text-white flex flex-col items-center text-center">
          <div className="text-shadow-lg company-yellow">
            <h1 className="font-header company-yellow text-6xl sm:text-3xl md:text-7xl lg:text-8xl xl:text-8xl uppercase text-shadow-lg mb-10">
              About Us
            </h1>
            <p className="leading-8 pb-10">
              Your go-to handyman and pressure washing team — ready to handle
              everything from routine home repairs to complete exterior
              cleaning. We provide reliable, detail-focused service for
              homeowners and small businesses looking to maintain and improve
              their properties with confidence. Whether it’s mounting a TV,
              fixing a fence, or pressure washing a weathered patio — we get it
              done right, on time, and with care.
            </p>
          </div>
          <Link href="/schedule">
            <Button variant="navblur">GET SCHEDULE</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
