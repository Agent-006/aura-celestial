import { LuckyNameCalculator } from "@/features/calculators/lucky-name-calculator/components/LuckyNameCalculator/LuckyNameCalculator";
import styles from "./page.module.scss";

export default function LuckyNameCalculatorPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div className={styles.eyebrow}>
          AURA OBSERVATORY ALGORITHM | ONOMASTIC NAME ALGORITHMS
        </div>
        <h1 className={styles.title}>
          Lucky Name Numerology Calculator & Onomastic Vibrational Cockpit
        </h1>
        <p className={styles.description}>
          Precision decoding of your legal or proposed name using Chaldean (or
          Pythagorean) lexico-syllabic algorithms. Identifies your true
          &lsquo;Namank&rsquo; (Name Number), Triad Convergence
          (Mulank/Bhagyank/Namank), and Phonetic Harmonic Resonance to detect
          karmic roadblocks or peak expression vectors.
        </p>
      </div>

      <LuckyNameCalculator />
    </div>
  );
}
