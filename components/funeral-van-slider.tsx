"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  src: string;
  alt: string;
}

export default function FuneralVanSlider() {
  const slides: Slide[] = [
    { src: "/funeral-van2.jpg", alt: "R.S. Poddar Charitable Trust Funeral Van" },
    { src: "/funeral-van.jpg", alt: "R.S. Poddar Charitable Trust Funeral Van" },
    { src: "/funeral-van3.jpg", alt: "R.S. Poddar Charitable Trust Funeral Van" },
    { src: "/funeral-van4.jpg", alt: "R.S. Poddar Charitable Trust Funeral Van" },
    { src: "/funeral-van5.jpg", alt: "R.S. Poddar Charitable Trust Funeral Van" },
  ];

  return (
    <div className="relative w-full min-w-0 max-w-4xl mx-auto">
     <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}
  pagination={{ clickable: true }}
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  loop
  className="w-full max-w-full rounded-lg shadow-lg"
>
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={slide.src}
              alt={slide.alt}
              width={800}
              height={500}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
              className="w-full h-auto rounded-lg object-cover"
              priority={idx === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
    </div>
  );
}
