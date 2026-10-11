"use client";

import React, { useState } from "react";
import { AtmakarakaForm } from "../AtmakarakaForm/AtmakarakaForm";
import { KarakaCards } from "../KarakaCards/KarakaCards";
import { SevenMinisterTable } from "../SevenMinistersTable/SevenMinistersTable";
import { NavamsaMatrix } from "../NavamsaMatrix/NavamsaMatrix";
import { SynergyCalculus } from "../SynergyCalculus/SynergyCalculus";
import { HarmonicProtocols } from "../HarmonicProtocols/HarmonicProtocols";
import { useAtmakarakaTelemetry } from "../../hooks/useAtmakarakaTelemetry";
import { AtmakarakaFormValues } from "../../types/atmakaraka.types";
import styles from "./atmakaraka-darakaraka-calculator.module.scss";

export const AtmakarakaDarakarakaCalculator: React.FC = () => {
  const [formData, setFormData] = useState<AtmakarakaFormValues | null>(null);

  const { telemetry: data, isCalculating: isLoading, error } = useAtmakarakaTelemetry(formData);

  const handleCalculate = (data: AtmakarakaFormValues) => {
    setFormData(data);
  };

  return (
    <div className={styles.calculatorContainer}>
      <AtmakarakaForm onCalculate={handleCalculate} isLoading={isLoading} />

      {isLoading && (
        <div className={styles.loadingState}>
          <div className={styles.spinner}></div>
          <p>Analyzing Jaimini Sutras...</p>
        </div>
      )}

      {error && (
        <div className={styles.errorState}>
          <p>Failed to calculate. Please try again later.</p>
        </div>
      )}

      {data && !isLoading && (
        <div className={styles.resultsContainer}>
          <div className={styles.resultsHeader}>
            <h2 className={styles.resultsTitle}>Cosmic Analysis Complete</h2>
            <p className={styles.resultsSubtitle}>
              Your soul&apos;s sovereign path and destined partnerships.
            </p>
          </div>

          <KarakaCards
            atmakaraka={data.atmakaraka}
            darakaraka={data.darakaraka}
          />

          <SevenMinisterTable ministers={data.sevenMinisters} />

          <NavamsaMatrix
            navamsaPlacement={data.navamsaPlacement}
            atmakaraka={data.atmakaraka}
          />

          <SynergyCalculus metrics={data.synergyCalculus} />

          <HarmonicProtocols protocols={data.protocols} />
        </div>
      )}
    </div>
  );
};
