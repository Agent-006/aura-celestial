import { DestinyCalculator } from "@/features/calculators/destiny-number-calculator/components/DestinyCalculator/DestinyCalculator";
import styles from "./page.module.scss";

export default function DestinyNumberCalculatorPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div className={styles.eyebrow}>
          AURA OBSERVATORY ALGORITHM | DESTINY NUMBER MODULE
        </div>
        <h1 className={styles.title}>
          Bhagyank Calculator & Sacred Destiny Number Cockpit
        </h1>
        <p className={styles.description}>
          Sub-arcsecond full birth date chronometry computing your in-depth
          Bhagyank (Destiny / Life Path Number 1-9), governing Karmic Graha,
          compound vibration matrix, and dharmic termination according to
          classical Chaldean and Vedic Sankhya Shastra.
        </p>
      </div>

      <DestinyCalculator />
    </div>
  );
}
