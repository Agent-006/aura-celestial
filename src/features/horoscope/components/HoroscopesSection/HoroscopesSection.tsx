import { Calendar } from "lucide-react";
import { RASHI_DATA } from "../../data/rashiData";
import { RashiCard } from "../RashiCard/RashiCard";
import styles from "./horoscopes-section.module.scss";

export function HoroscopesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* --- Header --- */}
        <div className={styles.header}>
          <div className={styles.titleInfo}>
            <span className={styles.eyebrow}>— SIDEREAL EPHEMERIDES</span>
            <h2 className={styles.title}>12 Rashi Daily Horoscopes</h2>
          </div>

          <div className={styles.epochInfo}>
            <Calendar size={14} className={styles.icon} />
            <span className={styles.epochText}>
              Ephemeris Epoch: Today&apos;s Chandra Transit
            </span>
          </div>
        </div>
        {/* --- 6-Column Grid --- */}
        <div className={styles.grid}>
          {RASHI_DATA.map((rashi) => (
            <RashiCard key={rashi.id} rashi={rashi} />
          ))}
        </div>
      </div>
    </section>
  );
}
