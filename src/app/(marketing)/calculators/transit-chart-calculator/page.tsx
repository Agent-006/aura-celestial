import React from "react";
import { CalculatorHeader } from "@/features/calculators/components/shared";
import { TransitCalculator } from "@/features/calculators/transit-chart-calculator/components/TransitCalculator/TransitCalculator";
import styles from "./page.module.scss";

export default function TransitChartCalculatorPage() {
  return (
    <main className={styles.pageContainer}>
      <CalculatorHeader 
        eyebrow="HELIOCENTRIC & GEOCENTRIC OBSERVATORY | ISO 8601 UTC"
        title="Transit Chart Calculator & Planetary Gochar Ephemeris Cockpit"
        description="Real-time sub-arcsecond Vedic Gochar diagnostics mapping transiting Grahas across natal bhavas, calculating planetary velocities, retrograde intersections, bindu shifts, and Vedha obstruction vectors, calibrated to Swiss Ephemeris DE431 micro-coordinates."
      />
      <TransitCalculator />
    </main>
  );
}
