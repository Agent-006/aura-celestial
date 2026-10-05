import React from "react";
import { NumerologyCalculator } from "@/features/calculators/numerology-calculator";
import styles from "./page.module.scss";

export const metadata = {
  title: "Numerology Calculator | Aura Celestial",
  description:
    "Synthesize your sacred vibrational matrix and energetic blueprint.",
};

export default function NumerologyCalculatorPage() {
  return (
    <main className={styles.pageMain}>
      <h1 className={styles.pageTitle}>Vibrational Matrix Calculator</h1>
      <NumerologyCalculator />
    </main>
  );
}
