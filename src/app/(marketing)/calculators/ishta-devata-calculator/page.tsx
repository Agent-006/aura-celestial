import React from "react";
import { CalculatorHeader } from "@/features/calculators/components/shared";
import { IshtaDevataCalculator } from "@/features/calculators/ishta-devata-calculator/components/IshtaDevataCalculator/IshtaDevataCalculator";
import styles from "./page.module.scss";

export const metadata = {
  title: "Ishta Devata Calculator | Aura Celestial",
  description:
    "Sub-arcsecond Jaimini sutra logic computing your soul's tutelary deity (Ishta Devata) based on the planetary lord of the 12th house from your Atmakaraka in the Navamsha (D9) chart.",
};

export default function IshtaDevataCalculatorPage() {
  return (
    <main className={styles.pageContainer}>
      <CalculatorHeader
        eyebrow="NAVANSHA D9 ATMAKARAKA & KARAKAMSHA ANALYSIS"
        title="Ishta Devata Calculator & Spiritual Lineage Cockpit"
        description="Sub-arcsecond Jaimini sutra logic computing your soul's tutelary deity (Ishta Devata) based on the planetary lord of the 12th house from your Atmakaraka in the Navamsha (D9) chart."
      />
      <IshtaDevataCalculator />
    </main>
  );
}
