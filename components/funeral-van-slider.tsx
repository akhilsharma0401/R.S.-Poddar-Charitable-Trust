"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <div className="relative w-full max-w-4xl mx-auto">
     <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}
  pagination={{ clickable: true }}
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  loop
  className="rounded-lg shadow-lg"
  
>
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={slide.src}
              alt={slide.alt}
              width={800}
              height={500}
              className="w-full h-auto rounded-lg object-cover"
              priority={idx === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      {/* <button
        className="custom-prev absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#453066] hover:text-[#db4637] p-3 rounded-full shadow-lg transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        className="custom-next absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#453066] hover:text-[#db4637] p-3 rounded-full shadow-lg transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button> */}
    </div>
  );
}
