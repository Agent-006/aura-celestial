import React from "react";
import { AgeCalculator } from "@/features/calculators/age-calculator/components/AgeCalculator/AgeCalculator";
import styles from "./page.module.scss";

export const metadata = {
  title: "Age Calculator & Vedic Chronometry Cockpit | Aura Celestial",
  description:
    "Multi-dimensional temporal ephemeris measuring biological chronological age, Vedic Ghati-Pala-Vipala cycles, sidereal Solar returns, and lunar tithi age.",
};

export default function AgeCalculatorPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div className={styles.eyebrow}>
          AURA OBSERVATORY CHRONOMETRY MODULE | BUILD 4.2
        </div>
        <h1 className={styles.title}>
          Age Calculator & Vedic Chronometry Cockpit
        </h1>
        <p className={styles.description}>
          Multi-dimensional temporal ephemeris measuring biological
          chronological age, Vedic Ghati-Pala-Vipala cycles, sidereal Solar
          returns (Varshphal ingress), and lunar tithi age with sub-arcsecond
          astronomical precision.
        </p>
      </div>

      <div className={styles.calculatorWrapper}>
        <AgeCalculator />
      </div>
    </div>
  );
}
