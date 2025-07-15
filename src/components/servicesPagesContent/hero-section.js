import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection({ title, backgroundImage }) {
  return (
    <div
      className="w-screen h-[75dvh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-1/2 text-white flex flex-col items-center text-center cursor-default z-20">
        <h1 className="font-header company-yellow text-6xl sm:text-3xl md:text-7xl lg:text-8xl xl:text-8xl uppercase text-shadow-lg mb-10">
          {title}
        </h1>
        <Link href="/schedule">
          <Button variant="navblur">GET SCHEDULE</Button>
        </Link>
      </div>
    </div>
  );
}
