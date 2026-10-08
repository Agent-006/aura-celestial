import { CALCULATORS_DATA } from "../../data/calculatorsData";
import { CalculatorCard } from "../CalculatorCard/CalculatorCard";
import { CalculatorsBackground } from "../CalculatorsBackground/CalculatorsBackground";
import styles from "./calculators-section.module.scss";

export function CalculatorsSection() {
  return (
    <section className={styles.section}>
      <CalculatorsBackground />
      <div className={styles.container}>
        {/* --- Header --- */}
        <div className={styles.header}>
          <div className={styles.titleInfo}>
            <span className={styles.eyebrow}>
              - SCIENTIFIC EPHEMERIS ENGINES -
            </span>
            <h2 className={styles.title}>
              High-Precision Astronomical Calculators
            </h2>
          </div>
          <div className={styles.descriptionInfo}>
            <p className={styles.description}>
              Accurate sidereal mathematical engines calculated at sub arcsecond
              resolution.
            </p>
          </div>
        </div>
        {/* --- 3-Column Grid --- */}
        <div className={styles.grid}>
          {CALCULATORS_DATA.map((calc) => (
            <CalculatorCard key={calc.id} calculator={calc} />
          ))}
        </div>
      </div>
    </section>
  );
}
