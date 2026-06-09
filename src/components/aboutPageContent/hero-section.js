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
              At Hritsev Remodel, we specialize in transforming homes through
              professional remodeling, renovation, and improvement services.
              From interior painting and drywall repair to flooring
              installation, custom carpentry, kitchen renovations, and bathroom
              remodels, we help homeowners create spaces that are more
              functional, comfortable, and visually appealing. Our team is
              committed to quality craftsmanship, attention to detail, and
              reliable service on every project.
            </p>
          </div>
          <a
            href="sms:+15626436373"
            onClick={() => {
              window.gtag?.("event", "conversion", {
                send_to: "AW-18199502292/kiCoCP60vrscENS7meZD",
              });
            }}
          >
            <Button variant="navblur">GET SCHEDULE</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
