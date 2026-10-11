import React from "react";
import { Metadata } from "next";
import { RisingSignCalculator } from "@/features/calculators/rising-sign-calculator/components/RisingSignCalculator/RisingSignCalculator";
import { CalculatorHeader } from "@/features/calculators/components/shared/CalculatorHeader/CalculatorHeader";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Rising Sign Calculator | Ascendant Lagna | Aura Celestial",
  description:
    "Calculate your exact Rising Sign (Lagna) in both Western Tropical and Vedic Sidereal systems. Understand your psychological persona and spiritual path.",
};

export default function RisingSignCalculatorPage() {
  return (
    <main className={styles.pageMain}>
      <CalculatorHeader
        eyebrow="EPHEMERIS SERIES // LAGNA (RISING SIGN) // EASTERN HORIZON"
        title="Rising Sign (Lagna) & Eastern Horizon Ascendant"
        description="Continuous geocentric computation of the zodiac sign ascending on the true eastern horizon at the precise minute and geographic coordinates of nativity, establishing the invariant 1st House Bhavachakra pivot."
      />

      <RisingSignCalculator />
    </main>
  );
}
