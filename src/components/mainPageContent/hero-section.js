"use client";

import { ContactButton } from "../ui/contact-button";

export function MainPageHero() {
  return (
    <div className="relative w-screen h-[95vh] md:h-[105vh] flex items-center justify-center overflow-hidden">
      {/* Видео */}
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
      {/* Затемнение */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />

      {/* Контент */}
      <div className="title_main_text_container">
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2

            flex
            flex-col
            items-center
            text-center

            w-[90%]
            text-white
            cursor-default
            z-20

            xl:top-[115px]
            xl:left-[25px]
            xl:translate-x-0
            xl:translate-y-0

            xl:items-start
            xl:text-left
            xl:w-auto

            2xl:top-[27%]
          "
        >
          <div className="mb-12 flex justify-center xl:justify-start w-full">
            <ContactButton
              variant="blur"
              text="GET ESTIMATE"
              href="https://book.housecallpro.com/book/Hritsev--Co/e668808153154b5fb4c9b36835d07026?v2=true"
            />
          </div>
          <h1 className="font-header company-yellow text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase text-shadow-lg">
            your local, trusted
            <br />
            remodeling
            <br />&
            <br />
            renovation services
            <br />
            <br />
            Licensed <br /> & <br /> Insured
          </h1>
        </div>
      </div>
    </div>
  );
}
