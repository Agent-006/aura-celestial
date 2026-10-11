import React from "react";
import { CalculatorHeader } from "@/features/calculators/components/shared";
import { LoShuCalculator } from "@/features/calculators/lo-shu-grid-calculator/components/LoShuCalculator/LoShuCalculator";
import styles from "./page.module.scss";

export default function LoShuGridCalculatorPage() {
  return (
    <main className={styles.pageContainer}>
      <CalculatorHeader 
        eyebrow="CHINESE MAGICAL SQUARE ALGORITHMS"
        title="Lo Shu Grid Calculator & Sacred Energy Planes Cockpit"
        description="Ancient 3x3 magic square numerology synthesizing natal birth date digits into cosmic elemental coordinates, evaluating the prevalence of will, thought, action, or dharmic destiny with sub-arcsecond remedial alignments."
      />
      <LoShuCalculator />
    </main>
  );
}
