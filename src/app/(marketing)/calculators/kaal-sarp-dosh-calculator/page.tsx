import React from "react";
import { Metadata } from "next";
import { CalculatorHeader } from "@/features/calculators/components/shared";
import { KaalSarpCalculator } from "@/features/calculators/kaal-sarp-dosh-calculator/components/KaalSarpCalculator/KaalSarpCalculator";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Kaal Sarp Dosha Diagnostic | Aura Celestial",
  description:
    "Sub-arcsecond Vedic astrometry comparing planetary encasement between the Lunar Ascending (Rahu) and Descending (Ketu) nodes.",
};

export default function KaalSarpCalculatorPage() {
  return (
    <main className={styles.pageContainer}>
      <CalculatorHeader
        eyebrow="NODAL DOSHA DIAGNOSTIC DOSSIER | 1ST-7TH HOUSE TENSION | SUB-ARCSECOND ORBITAL AXIS"
        title="Kaal Sarp Dosha Diagnostic & Rahu-Ketu Serpent Axis Cockpit"
        description="Sub-arcsecond Vedic astrometry comparing planetary encasement between the Lunar Ascending (Rahu) and Descending (Ketu) nodes. Classifying 12 classical Sarpa formations, Savya vs. Apasavya directionality, and canonical Bhanga (cancellation) vectors."
      />
      <KaalSarpCalculator />
    </main>
  );
}
