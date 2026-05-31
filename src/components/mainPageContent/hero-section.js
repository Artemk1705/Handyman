import { Button } from "@/components/ui/button";
import Link from "next/link";

export function MainPageHero() {
  return (
    <div className="relative w-screen h-[85vh] md:h-[105vh] flex items-center justify-center overflow-hidden">
      {/* 🎥 Видео на фоне */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://brightfix.s3.us-east-2.amazonaws.com/main-full-hero-video-remodel-renovation-sarasota-tampa.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* 🔲 Затемнение сверху */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />

      {/* 📄 Текст и кнопка */}
      <div className="title_main_text_container">
        <div className="absolute top-[17px] left-[25px] text-white flex flex-col items-start text-left 2xl:top-[27%] xl:top-[115px] ml-0 cursor-default z-20">
          <div>
            <h1 className="font-header company-yellow text-6xl sm:text-3xl md:text-7xl lg:text-8xl xl:text-8xl uppercase text-shadow-lg">
              your local, trusted
              <br />
              remodeling &<br />
              renovation services
            </h1>

            <p className="my-10 xl:mb-7 xl:my-7 xl:w-2/5 w-100 text-xl text-shadow-lg company-yellow">
              Your trusted <strong>Remodel & renovation experts</strong>, right
              next to you — offering
              <strong> 24/7 emergency service</strong>, expert
              <strong>house remodeling</strong> (kitchens, bathrooms, bedrooms),
              <strong> general home maintenance & repairs</strong>,
              <strong>
                {" "}
                fence repair/installation, paintin interior/exterior, and more
              </strong>
              , and{" "}
              <strong>
                local, dependable service with over 5 years of experience
              </strong>
              .
            </p>
          </div>
          <a href="sms:+15626436373">
            <Button variant="navblur">GET SCHEDULE</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
