import React from "react";
import { Metadata } from "next";
import { Download, PlusCircle } from "lucide-react";
import { CalculatorHeader } from "@/features/calculators/components/shared";
import { BirthChartCalculator } from "@/features/calculators/birth-chart-calculator/components/BirthChartCalculator/BirthChartCalculator";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Birth Chart Calculator | Janam Kundli & Natal Ephemeris | Aura Celestial",
  description:
    "Generate your precise 12-house Vedic birth chart (Rashi Chakra), detailing planetary coordinates, dignities, divisional charts (Vargas), and core karmic significators based on exact birth telemetry.",
};

export default function BirthChartCalculatorPage() {
  return (
    <main className={styles.pageContainer}>
      <CalculatorHeader
        eyebrow="VEDIC ASTROLOGY (JYOTISH)"
        title={
          <>
            Birth Chart Calculator <i>Janam Kundli</i> &amp; Natal Ephemeris
          </>
        }
        description="Generate your precise 12-house Vedic birth chart (Rashi Chakra), detailing planetary coordinates, dignities, divisional charts (Vargas), and core karmic significators based on exact birth telemetry."
        badge={
          <div className={styles.actionsGroup}>
            <button className={`${styles.actionBtn} ${styles.generateBtn}`}>
              <PlusCircle size={14} /> GENERATE NEW CHART
            </button>
            <button className={`${styles.actionBtn} ${styles.downloadBtn}`}>
              <Download size={14} /> DOWNLOAD KUNDLI PDF
            </button>
          </div>
        }
      />
      <BirthChartCalculator />
    </main>
  );
}
