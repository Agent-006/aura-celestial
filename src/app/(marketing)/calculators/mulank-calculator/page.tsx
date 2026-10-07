import React from "react";
import { MulankCalculator } from "@/features/calculators/mulank-calculator/components/MulankCalculator/MulankCalculator";
import styles from "./page.module.scss";

export const metadata = {
  title: "Mulank Calculator & Vedic Root Number Cockpit | Aura Celestial",
  description:
    "Sub-arcsecond Vedic Numerology computation of your Mulank (Root Number 1-9), ruling Navagraha Graha, elemental Tattva resonance, and cosmic vibrational frequency according to Chaldean and Vedic Sankhya Shastra.",
};

export default function MulankCalculatorPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div className={styles.eyebrow}>
          AURA OBSERVATORY CHRONOMETRY MODULE | CHASSIS HUB-9 / ROOT NUMBER
          INGRESS V2.0
        </div>
        <h1 className={styles.title}>
          Mulank Calculator & Vedic Root Number Cockpit
        </h1>
        <p className={styles.description}>
          Sub-arcsecond Vedic Numerology computation of your Mulank (Root Number
          1-9), ruling Navagraha Graha, elemental Tattva resonance, and cosmic
          vibrational frequency according to Chaldean and Vedic Sankhya Shastra.
        </p>
      </div>

      <div className={styles.calculatorWrapper}>
        <MulankCalculator />
      </div>
    </div>
  );
}
