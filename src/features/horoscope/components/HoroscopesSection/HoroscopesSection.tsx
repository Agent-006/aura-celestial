import { RASHI_DATA } from "../../data/rashiData";
import { HoroscopesBackground } from "../HoroscopesBackground/HoroscopesBackground";
import { HoroscopesCarousel } from "../HoroscopesCarousel/HoroscopesCarousel";
import styles from "./horoscopes-section.module.scss";

export function HoroscopesSection() {
  return (
    <section className={styles.section}>
      <HoroscopesBackground />
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
