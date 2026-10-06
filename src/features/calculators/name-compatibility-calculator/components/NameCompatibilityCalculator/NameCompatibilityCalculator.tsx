import React, { useState } from "react";
import { useNameCompatibilityTelemetry } from "../../hooks/useNameCompatibilityTelemetry";
import { NameCompatibilityForm } from "../NameCompatibilityForm/NameCompatibilityForm";
import { NameCompatibilityFormValues } from "../../schemas/name-compatibility.schema";
import { NameCompatibilityTelemetryData } from "../../types/name-compatibility.types";
import { NameCompatibilityStats } from "../NameCompatibilityStats/NameCompatibilityStats";
import { ResonanceWaveform } from "../ResonanceWaveform/ResonanceWaveform";
import { CorePillarAnalysis } from "../CorePillarAnalysis/CorePillarAnalysis";
import { DecompositionMatrix } from "../DecompositionMatrix/DecompositionMatrix";
import { OnomasticRemedials } from "../OnomasticRemedials/OnomasticRemedials";
import { NameCompatibilityFooter } from "../NameCompatibilityFooter/NameCompatibilityFooter";
import styles from "./name-compatibility-calculator.module.scss";

export const NameCompatibilityCalculator: React.FC = () => {
  const [telemetryData, setTelemetryData] =
    useState<NameCompatibilityTelemetryData | null>(null);

  const { mutate: calculate, isPending: isLoading } =
    useNameCompatibilityTelemetry({
      onSuccess: (data) => {
        setTelemetryData(data);
        setTimeout(() => {
          document
            .getElementById("name-comp-results")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      },
    });

  const handleSubmit = (values: NameCompatibilityFormValues) => {
    calculate(values);
  };

  return (
    <div className={styles.calculatorWrapper}>
      <NameCompatibilityForm onSubmit={handleSubmit} isLoading={isLoading} />

      {telemetryData && (
        <div id="name-comp-results" className={styles.resultsContainer}>
          <NameCompatibilityStats stats={telemetryData.stats} />

          <ResonanceWaveform stats={telemetryData.stats} />

          <CorePillarAnalysis pillars={telemetryData.pillars} />

          <DecompositionMatrix
            matrixA={telemetryData.matrixA}
            matrixB={telemetryData.matrixB}
          />

          <OnomasticRemedials remedials={telemetryData.remedials} />

          <NameCompatibilityFooter />
        </div>
      )}
    </div>
  );
};
