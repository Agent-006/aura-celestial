"use client";

import React, { useState } from "react";
import { NakshatraForm } from "@/features/calculators/nakshatra-calculator/components/NakshatraForm/NakshatraForm";
import { NakshatraDashboard } from "@/features/calculators/nakshatra-calculator/components/NakshatraDashboard/NakshatraDashboard";
import { AstrologicalAnatomy } from "@/features/calculators/nakshatra-calculator/components/AstrologicalAnatomy/AstrologicalAnatomy";
import { LunarAlmanac } from "@/features/calculators/nakshatra-calculator/components/LunarAlmanac/LunarAlmanac";
import { DoshaAndDharma } from "@/features/calculators/nakshatra-calculator/components/DoshaAndDharma/DoshaAndDharma";
import { NakshatraFormValues } from "@/features/calculators/nakshatra-calculator/types/nakshatra.types";
import styles from "./page.module.scss";

export default function NakshatraCalculatorPage() {
  const [hasCalculated, setHasCalculated] = useState(false);
  const [formData, setFormData] = useState<NakshatraFormValues | null>(null);

  const handleCalculate = (data: NakshatraFormValues) => {
    setFormData(data);
    // In a real app, you would pass `data` down or use it in the API call.
    // For now, we simulate the calculation process and swap to results.
    setHasCalculated(true);
  };

  return (
    <main className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        {!hasCalculated ? (
          <div className={styles.formSection}>
            <NakshatraForm onCalculate={handleCalculate} />
          </div>
        ) : (
          <div className={styles.resultsSection}>
            <button
              className={styles.backBtn}
              onClick={() => setHasCalculated(false)}
            >
              ← RECALCULATE
            </button>

            {/* The 4 Telemetry Sections we built */}
            <NakshatraDashboard />
            <AstrologicalAnatomy />
            <LunarAlmanac />
            <DoshaAndDharma />
          </div>
        )}
      </div>
    </main>
  );
}
