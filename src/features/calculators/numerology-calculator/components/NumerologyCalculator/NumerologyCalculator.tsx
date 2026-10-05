"use client";

import React, { useState } from "react";
import { NumerologyForm } from "../NumerologyForm/NumerologyForm";
import { ArchetypeCards } from "../ArchetypeCards/ArchetypeCards";
import { SoundMatrix } from "../SoundMatrix/SoundMatrix";
import { MasterKarmicTelemetry } from "../MasterKarmicTelemetry/MasterKarmicTelemetry";
import { EpicyclicMatrix } from "../EpicyclicMatrix/EpicyclicMatrix";
import { Remedies } from "../Remedies/Remedies";
import { useNumerologyTelemetry } from "../../hooks/useNumerologyTelemetry";
import { NumerologyFormValues } from "../../types/numerology.types";
import styles from "./numerology-calculator.module.scss";

export const NumerologyCalculator = () => {
  const [formData, setFormData] = useState<NumerologyFormValues | null>(null);

  const { telemetry, isCalculating } = useNumerologyTelemetry(formData);

  const handleCalculate = (data: NumerologyFormValues) => {
    setFormData(data);
    // Smooth scroll to results after a brief delay
    setTimeout(() => {
      document
        .getElementById("numerology-results")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 1300); // 1200ms API mock + 100ms buffer
  };

  return (
    <div className={styles.calculatorWrapper}>
      <NumerologyForm onCalculate={handleCalculate} isLoading={isCalculating} />

      {telemetry && (
        <div id="numerology-results" className={styles.resultsWrapper}>
          <div className={styles.decorativeDivider}>
            <span className={styles.star}>✧</span>
            <span className={styles.line}></span>
            <span className={styles.star}>✧</span>
          </div>

          <ArchetypeCards telemetry={telemetry} />

          <div className={styles.twoColumnGrid}>
            <SoundMatrix
              matrix={telemetry.phoneticMatrix}
              totalValue={telemetry.namank.value}
            />
            <MasterKarmicTelemetry
              masterNumbers={telemetry.masterNumbers}
              karmicDebts={telemetry.karmicDebts}
            />
          </div>

          <EpicyclicMatrix matrix={telemetry.epicyclicMatrix} />

          <Remedies remedies={telemetry.remedies} />
        </div>
      )}
    </div>
  );
};
