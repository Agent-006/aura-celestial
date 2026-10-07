import React from "react";
import { Metadata } from "next";
import { CalculatorHeader } from "@/features/calculators/components/shared";
import { LuckyVehicleCalculator } from "@/features/calculators/lucky-vehicle-number/components/LuckyVehicleCalculator/LuckyVehicleCalculator";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Lucky Vehicle Number Calculator | Aura Celestial",
  description: "A specialized Vedic numerology and automotive ephemeris engine synthesizing vehicle license registrations and core numerology.",
};

export default function LuckyVehicleCalculatorPage() {
  return (
    <main className={styles.pageContainer}>
      <CalculatorHeader
        eyebrow="AUTOMOTIVE ASTRO-DIVINATION // VEHICLE EPHEMERIS DOSSIER | SONIC SYNC: INDICATOR ALIGNMENT | CHALDEAN PYTHAGOREAN SYNCHRO MATRIX | TRIGOCENTRIC DIGITAL VECTOR"
        title="Lucky Vehicle Number Calculator"
        description="A specialized Vedic numerology and automotive ephemeris engine synthezing vehicle license registrations, natal vibration, core numerology (Mulank & Bhagyank), planetary vehicle lords (Shukra & Shani), and color-chakra concordance."
      />
      <LuckyVehicleCalculator />
    </main>
  );
}
