import { MobileNumberCalculator } from "@/features/calculators/mobile-number-calculator/components/MobileNumberCalculator/MobileNumberCalculator";
import styles from "./page.module.scss";

export default function MobileNumberCalculatorPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div className={styles.eyebrow}>
          AURA OBSERVATORY CELLULAR METRICS | MOBILE FREQUENCY HARMONIZER HUB-8
        </div>
        <h1 className={styles.title}>
          Mobile Number Numerology Calculator & Cellular Frequency Cockpit
        </h1>
        <p className={styles.description}>
          Deconstruct the overarching numerological signature of your primary
          mobile vector. Analyze synastry matches, identify planetary blockers,
          and un-block karmic channels for business and personal growth.
        </p>
      </div>

      <MobileNumberCalculator />
    </div>
  );
}
