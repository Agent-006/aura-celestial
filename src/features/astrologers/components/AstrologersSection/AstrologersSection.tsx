"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AstrologerCard } from "../AstrologerCard/AstrologerCard";
import { AstrologerFilters } from "../AstrologerFilters/AstrologerFilters";
import {
  MOCK_ASTROLOGERS,
  FILTER_CATEGORIES,
} from "../../data/mockAstrologers";
import { AstrologersBackground } from "../AstrologersBackground/AstrologersBackground";
import styles from "./astrologers-section.module.scss";

export function AstrologersSection() {
  const [activeCategory, setActiveCategory] = useState(FILTER_CATEGORIES[0]);

  const astrologers = MOCK_ASTROLOGERS;

  return (
    <section className={styles.section}>
      <AstrologersBackground />
      <div className={styles.container}>
        {/* --- Header Area --- */}
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <span className={styles.eyebrow}>
              &mdash; VERIFIED VEDIC FACULTY
            </span>
            <h2 className={styles.title}>
              Connect With an Astrologer Who Understands You
            </h2>
          </div>

          <a href="/astrologers" className={styles.viewAllLink}>
            VIEW ALL 240+ VERIFIED SCHOLARS <ArrowUpRight size={16} />
          </a>
        </div>
        {/* --- Interactive Filters --- */}
        <AstrologerFilters
          categories={FILTER_CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        {/* --- Cards Grid --- */}
        <div className={styles.grid}>
          {astrologers.map((astrologer) => (
            <AstrologerCard key={astrologer.id} astrologer={astrologer} />
          ))}
        </div>
      </div>
    </section>
  );
}
