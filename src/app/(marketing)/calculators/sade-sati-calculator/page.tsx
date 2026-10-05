"use client";

import React, { useState } from "react";
import { SadeSatiForm } from "@/features/calculators/sade-sati-calculator/components/SadeSatiForm/SadeSatiForm";
import { EphemerisDashboard } from "@/features/calculators/sade-sati-calculator/components/EphemerisDashboard/EphemerisDashboard";
import { PeakPhaseTelemetry } from "@/features/calculators/sade-sati-calculator/components/PeakPhaseTelemetry/PeakPhaseTelemetry";
import { OrbitalTrajectory } from "@/features/calculators/sade-sati-calculator/components/OrbitalTrajectory/OrbitalTrajectory";
import { ChandraKundli } from "@/features/calculators/sade-sati-calculator/components/ChandraKundli/ChandraKundli";
import { ShantiProtocols } from "@/features/calculators/sade-sati-calculator/components/ShantiProtocols/ShantiProtocols";
import { SadeSatiFormValues } from "@/features/calculators/sade-sati-calculator/types/sadesati.types";
import styles from "./page.module.scss";

export default function SadeSatiCalculatorPage() {
  const [hasCalculated, setHasCalculated] = useState(false);
  const [formData, setFormData] = useState<SadeSatiFormValues | null>(null);

  const handleCalculate = (data: SadeSatiFormValues) => {
    setFormData(data);
    // In a real app, this triggers your API call.
    // For now, we simulate the transition to the results view.
    setHasCalculated(true);
  };

  return (
    <main className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        {!hasCalculated ? (
          <div className={styles.formSection}>
            <SadeSatiForm onCalculate={handleCalculate} />
          </div>
        ) : (
          <div className={styles.resultsSection}>
            <button
              className={styles.backBtn}
              onClick={() => setHasCalculated(false)}
            >
              ← RECALCULATE
            </button>

            {/* Assembled Telemetry Sections */}
            <EphemerisDashboard />
            <PeakPhaseTelemetry />
            <OrbitalTrajectory />
            <ChandraKundli />
            <ShantiProtocols />
          </div>
        )}
      </div>
    </main>
  );
}
