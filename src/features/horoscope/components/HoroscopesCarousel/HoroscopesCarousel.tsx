"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { RashiItem } from "../../types/horoscope.types";
import { RashiCard } from "../RashiCard/RashiCard";

import "swiper/css";
import "swiper/css/free-mode";

interface HoroscopesCarouselProps {
  items: RashiItem[];
  className?: string;
}

export function HoroscopesCarousel({ items, className = "" }: HoroscopesCarouselProps) {
  return (
    <div className={className}>
      <Swiper
        modules={[Autoplay, FreeMode]}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={24} // Matches our $spacing-lg/md gaps
        breakpoints={{
          // Mobile
          320: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          // Tablet
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          // Desktop (Your requested 5 visible cards)
          1280: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
        }}
        className="mySwiper"
      >
        {items.map((rashi) => (
          <SwiperSlide key={rashi.id} style={{ height: "auto" }}>
            <RashiCard rashi={rashi} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
