import React from "react";
import { TithiSummaryCard } from "../TithiSummaryCard/TithiSummaryCard";
import { IlluminationCard } from "../IlluminationCard/IlluminationCard";
import { LunarVisualCard } from "../LunarVisualCard/LunarVisualCard";
import styles from "./moon-phase-results.module.scss";

export function MoonPhaseResults() {
  return (
    <section className={styles.resultsContainer}>
      <div className={styles.topGrid}>
        <TithiSummaryCard />
        <IlluminationCard />
      </div>
      <LunarVisualCard />
    </section>
  );
}
