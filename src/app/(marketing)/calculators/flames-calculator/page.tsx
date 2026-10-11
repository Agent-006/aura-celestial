import React from "react";
import { Metadata } from "next";
import { CalculatorHeader } from "@/features/calculators/components/shared";
import { FlamesCalculator } from "@/features/calculators/flames-calculator/components/FlamesCalculator/FlamesCalculator";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "FLAMES Calculator (Astral Matrix & Affinity Calculus) | Aura Celestial",
  description:
    "A high-precision ephemeris and astrological harmonization engine synthesizing phoneme/letter frequency cancellation, planetary relation names, and bi-dimensional over-archip vectors.",
};

export default function FlamesCalculatorPage() {
  return (
    <main className={styles.pageContainer}>
      <CalculatorHeader
        eyebrow="NUMEROLOGY / ASTRO RESONANCE / FLAMES VERSE MATCH"
        title="FLAMES Calculator (Astral Matrix & Affinity Calculus)"
        description="A high-precision ephemeris and astrological harmonization engine synthesizing phoneme/letter frequency cancellation, planetary relation names, and bi-dimensional over-archip vectors."
        badge={
          <div className={styles.badgeContainer}>
            <span className={styles.badgeLabel}>GLOBAL AFFINITY INDEX</span>
            <div className={styles.badgeValue}>
              94.2% Symmetry
            </div>
          </div>
        }
      />
      <FlamesCalculator />
    </main>
  );
}
