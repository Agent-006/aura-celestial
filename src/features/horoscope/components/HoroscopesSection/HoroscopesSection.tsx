import { RASHI_DATA } from "../../data/rashiData";
import { StarfieldCanvas } from "@/components/ui/StarfieldCanvas/StarfieldCanvas";
import { SectionSeparator } from "@/components/ui/SectionSeparator/SectionSeparator";
import { HoroscopesCarousel } from "../HoroscopesCarousel/HoroscopesCarousel";
import styles from "./horoscopes-section.module.scss";

export function HoroscopesSection() {
  return (
    <section className={styles.section}>
      {/* Background Elements */}
      <div className={styles.topSeparator}>
        <SectionSeparator position="top" />
      </div>
      <StarfieldCanvas className={styles.starfield} />
      <div className={styles.glowOverlay} />
      <div className={styles.bottomSeparator}>
        <SectionSeparator position="bottom" />
      </div>
      <div className={styles.container}>
        {/* --- Header --- */}
        <div className={styles.header}>
          <div className={styles.titleInfo}>
            <span className={styles.eyebrow}>- SIDEREAL EPHEMERIDES -</span>
            <h2 className={styles.title}>12 Rashi Daily Horoscopes</h2>
          </div>

          <div className={styles.epochInfo}>
            <span className={styles.epochText}>
              Ephemeris Epoch: Today&apos;s Chandra Transit
            </span>
          </div>
        </div>

        {/* --- Carousel --- */}
        <HoroscopesCarousel
          items={RASHI_DATA}
          className={styles["horoscopes-carousel-wrapper"]}
        />
      </div>
    </section>
  );
}
