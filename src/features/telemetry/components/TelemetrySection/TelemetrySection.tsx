"use client";

import { useState } from "react";
import { TelemetryForm } from "../TelemetryForm/TelemetryForm";
import { TelemetryFormValues } from "../../schemas/telemetry.schema";
import { EphemerisProfile } from "../EphemerisProfile/EphemerisProfile";
import styles from "./telemetry-section.module.scss";

export function TelemetrySection() {
  const [isComputing, setIsComputing] = useState(false);

  const handleCompute = async (data: TelemetryFormValues) => {
    setIsComputing(true);
    // Simulate API delay to show the loading state
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Telemetry computed with data:", data);
    setIsComputing(false);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* --- Left Column: Context & Form --- */}
        <div className={styles.leftColumn}>
          <div className={styles.textContent}>
            <span className={styles.eyebrow}>
              — AUTOMATED TELEMETRY COMPUTATION
            </span>
            <h2 className={styles.title}>Astrology, Personalized Around You</h2>
            <p className={styles.description}>
              Enter your coordinate points. Aura executes NASA JPL algorithms to
              render your sidereal Vedic Lagna (D1) chart with live Mahadasha
              timers.
            </p>
          </div>

          <TelemetryForm onSubmit={handleCompute} isLoading={isComputing} />
        </div>
        {/* --- Right Column: The Chart Result --- */}
        <div className={styles.rightColumn}>
          <EphemerisProfile />
        </div>
      </div>
    </section>
  );
}
