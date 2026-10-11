import React from "react";
import styles from "./love-compatibility-results.module.scss";
import { HarmonyIndexCard } from "../HarmonyIndexCard/HarmonyIndexCard";
import { NadiDoshaCard } from "../NadiDoshaCard/NadiDoshaCard";
import { AstrologersSummaryCard } from "../AstrologerSummaryCard/AstrologerSummaryCard";

export function LoveCompatibilityResults() {
  return (
    <section className={styles.resultsContainer}>
      <div className={styles.grid}>
        {/* Left Column: The Big Dial */}
        <div className={styles.leftColumn}>
          <HarmonyIndexCard />
        </div>

        {/* Right Column: Stacked Data */}
        <div className={styles.rightColumn}>
          <NadiDoshaCard />
          <AstrologersSummaryCard />
        </div>
      </div>
    </section>
  );
}
