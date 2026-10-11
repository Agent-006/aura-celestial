import React from "react";
import { Metadata } from "next";
import { SunSignCalculator } from "@/features/calculators/sun-sign-calculator/components/SunSignCalculator/SunSignCalculator";
import { CalculatorHeader } from "@/features/calculators/components/shared/CalculatorHeader/CalculatorHeader";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Sun Sign Calculator | Tropical & Sidereal Ephemeris | Aura Celestial",
  description:
    "Calculate your exact Sun Sign in both Western Tropical and Vedic Sidereal systems with high-precision NASA JPL ephemeris data.",
};

export default function SunSignCalculatorPage() {
  return (
    <main className={styles.pageMain}>
      <CalculatorHeader
        eyebrow="EPHEMERIS SERIES // SURYA (THE SUN) // DUAL CONSTRUCT"
        title="Sun Sign (Surya Rashi) & Dual Ephemeris"
        description="Continuous geocentric solar telemetry reconciling equinoctial tropical seasons with Vedic sidereal stellar cartography."
      />

      <SunSignCalculator />
    </main>
  );
}
