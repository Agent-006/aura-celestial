import React from "react";
import { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { CalculatorHeader } from "@/features/calculators/components/shared";
import { MangalDoshaCalculator } from "@/features/calculators/mangal-dosha-calculator/components/MangalDoshaCalculator/MangalDoshaCalculator";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title:
    "Mangal Dosha Calculator (Kuja Dosha & Anshik Mars Analysis) | Aura Celestial",
  description:
    "Continuous Vedic Martian trajectory ephemeris computing natal Mars placement across Houses 1, 2, 4, 7, 8, and 12, evaluating 16 classical Parashari cancellation (Nivarana) yogas.",
};

export default function MangalDoshaCalculatorPage() {
  return (
    <main className={styles.pageContainer}>
      <CalculatorHeader
        eyebrow="VEDIC GEOMETRIC TELEMETRY MATRIX — MANGAL (MARS) DOSHA SCANNER"
        title="Mangal Dosha Calculator (Kuja Dosha & Anshik Mars Analysis)"
        description="Continuous Vedic Martian trajectory ephemeris computing natal Mars placement across Houses 1, 2, 4, 7, 8, and 12, evaluating 16 classical Parashari cancellation (Nivarana) yogas with DE441 sub-arcsecond accuracy."
        badge={
          <div className={styles.badge}>
            <ShieldCheck size={20} className={styles.badgeIcon} />
            <div className={styles.badgeContent}>
              <span className={styles.badgeLabel}>DIAGNOSTIC STATUS</span>
              <span className={styles.badgeValue}>
                LOW DOSHA (CANCELLED VIA JUPITER ASPECT)
              </span>
            </div>
          </div>
        }
      />
      <MangalDoshaCalculator />
    </main>
  );
}
