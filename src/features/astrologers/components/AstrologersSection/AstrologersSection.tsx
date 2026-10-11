"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AstrologerCard } from "../AstrologerCard/AstrologerCard";
import { AstrologerFilters } from "../AstrologerFilters/AstrologerFilters";
import {
  MOCK_ASTROLOGERS,
  FILTER_CATEGORIES,
} from "../../data/mockAstrologers";
import { StarfieldCanvas } from "@/components/ui/StarfieldCanvas/StarfieldCanvas";
import { SectionSeparator } from "@/components/ui/SectionSeparator/SectionSeparator";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from "./astrologers-section.module.scss";

export function AstrologersSection() {
  const [activeCategory, setActiveCategory] = useState(FILTER_CATEGORIES[0]);

  const astrologers = MOCK_ASTROLOGERS;

  return (
    <section className={styles.section}>
      {/* Background Elements */}
      <div className={styles.topSeparator}><SectionSeparator /></div>
      <StarfieldCanvas className={styles.starfield} />
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.bottomSeparator}><SectionSeparator /></div>

      <div className={styles.container}>
        {/* --- Header Area --- */}
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <span className={styles.eyebrow}>
              - VERIFIED VEDIC FACULTY -
            </span>
            <h2 className={styles.title}>
              Connect With an Astrologer Who Understands You
            </h2>
          </div>
        </div>
        {/* --- Interactive Filters --- */}
        <AstrologerFilters
          categories={FILTER_CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        {/* --- Cards Carousel --- */}
        <div className={styles.carouselContainer}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1.15}
            loop={true}
            speed={700}
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            grabCursor={true}
            pagination={{ clickable: true, el: `.${styles.swiperPagination}` }}
            breakpoints={{
              540: { slidesPerView: 2.15, spaceBetween: 24 },
              768: { slidesPerView: 3.15, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 32 },
            }}
          >
            {astrologers.map((astrologer) => (
              <SwiperSlide key={astrologer.id} style={{ height: 'auto' }}>
                <AstrologerCard astrologer={astrologer} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.swiperPagination} />
        </div>
      </div>
    </section>
  );
}
