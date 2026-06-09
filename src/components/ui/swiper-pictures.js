"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";

const images = [
  "/images/content-blocks/cabinets-painting-cabinets-installation.webp",
  "/images/content-blocks/cabinets-painting-cabinets-restauration-sarasota-tampa.webp",
  "/images/content-blocks/cabinets-remodel-drywall-texture-painting.webp",
  "/images/content-blocks/drywall-renovation-painting-texture-sarasota-tampa.webp",
  "/images/content-blocks/exterier-painting-garage-door.webp",
  "/images/content-blocks/fance-remodel-renovation-sarasota-painting.webp",
  "/images/content-blocks/flooring-tiling-sarasota-tampa-hardwood-demolation-laminate.webp",
  "/images/content-blocks/laminate-flooring-painting-baseboards-trim.webp",
  "/images/content-blocks/painting-interierpaintig-sarasota-tampa-exterier.webp",
  "/images/content-blocks/painting-trim-flooring-baseboards.webp",
  "/images/content-blocks/remodel-renovation-flooring-laminate-painting-ceiling-baseboards-trim.webp",
  "/images/content-blocks/tiling-floors-tile-flooring-laminate-hardwood.webp",
];

export function WorksSlider() {
  return (
    <section className="w-screen overflow-hidden py-12">
      <h2 className="text-center text-2xl uppercase py-5">GALLERY</h2>
      <Swiper
        modules={[Autoplay]}
        loop
        centeredSlides
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={false}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1.15,
          },
          768: {
            slidesPerView: 1.5,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        className="works-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={image}
                alt={`Project ${index + 1}`}
                width={500}
                height={650}
                className="w-auto h-[500px] md:h-[420px] xl:h-[650px] object-cover rounded-2xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
