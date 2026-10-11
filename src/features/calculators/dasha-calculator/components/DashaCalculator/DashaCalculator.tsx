"use client";

import React, { useState } from "react";
import { DashaForm } from "../DashaForm/DashaForm";
import { DashaTelemetryAutomator } from "../DashaTelemetryAutomator/DashaTelemetryAutomator";
import { VimshottariEphemerisTable } from "../VimshottariEphemerisTable/VimshottariEphemerisTable";
import { KarmicUnfoldmentLevels } from "../KarmicUnfoldmentLevels/KarmicUnfoldmentLevels";
import { DashaHarmonizationProtocol } from "../DashaHarmonizationProtocol/DashaHarmonizationProtocol";
import { useDashaTelemetry } from "../../hooks/useDashaTelemetry";
import { DashaFormValues } from "../../schemas/dasha.schema";
import styles from "./dasha-calculator.module.scss";

export const DashaCalculator = () => {
  const [formData, setFormData] = useState<DashaFormValues | null>(null);

  const { data, isLoading } = useDashaTelemetry(formData);

  const handleCalculate = (values: DashaFormValues) => {
    setFormData(values);
  };

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.topSection}>
        <div style={{ position: "relative" }}>
          <DashaForm onCalculate={handleCalculate} isCalculating={isLoading} />
          {isLoading && (
            <div className={styles.loadingOverlay}>
              <div className={styles.spinner} />
              <span className={styles.loadingText}>
                Synchronizing Dasha Timelines...
              </span>
            </div>
          )}
        </div>
        {data && <DashaTelemetryAutomator data={data} />}
      </div>

      {data && (
        <>
          <VimshottariEphemerisTable data={data} />
          <KarmicUnfoldmentLevels data={data} />
          <DashaHarmonizationProtocol data={data} />
        </>
      )}
    </div>
  );
};
