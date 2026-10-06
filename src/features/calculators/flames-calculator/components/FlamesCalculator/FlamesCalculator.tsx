"use client";

import React from "react";
import { FlamesFormValues } from "../../schemas/flames.schema";
import { useFlamesTelemetry } from "../../hooks/useFlamesTelemetry";
import { FlamesForm } from "../FlamesForm/FlamesForm";
import { AffinityTelemetry } from "../AffinityTelemetry/AffinityTelemetry";
import { SixDimensions } from "../SixDimensions/SixDimensions";
import { DualEphemerisMatrix } from "../DualEphemerisMatrix/DualEphemerisMatrix";
import { FlamesHarmonization } from "../FlamesHarmonization/FlamesHarmonization";
import styles from "./flames-calculator.module.scss";

export const FlamesCalculator: React.FC = () => {
  const { mutate: calculate, data, isPending: isLoading } = useFlamesTelemetry({
    onSuccess: () => {
      // scroll logic can go here
    },
  });

  const handleSubmit = (values: FlamesFormValues) => {
    calculate(values);
  };

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.topSection}>
        <div className={styles.formArea}>
          <FlamesForm onSubmit={handleSubmit} isLoading={isLoading} data={data ?? null} />
        </div>
        
        <div className={styles.visualizerArea}>
          {data ? (
            <AffinityTelemetry data={data} />
          ) : (
            <div className={styles.awaitingTelemetry}>
              Awaiting subjects telemetry for FLAMES processing...
            </div>
          )}
        </div>
      </div>

      {data && (
        <>
          <SixDimensions dimensions={data.dimensions} />
          <DualEphemerisMatrix ephemeris={data.ephemeris} />
          <FlamesHarmonization protocols={data.protocols} />
        </>
      )}
    </div>
  );
};
