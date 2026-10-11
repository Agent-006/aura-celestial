"use client";

import React, { useState } from "react";
import { RashiForm } from "../RashiForm/RashiForm";
import { ChandraTelemetryRadar } from "../ChandraTelemetryRadar/ChandraTelemetryRadar";
import { DualLunarEphemeris } from "../DualLunarEphemeris/DualLunarEphemeris";
import { RashiDestiny } from "../RashiDestiny/RashiDestiny";
import { ChandraRemedies } from "../ChandraRemedies/ChandraRemedies";
import { useRashiTelemetry } from "../../hooks/useRashiTelemetry";
import { RashiFormValues } from "../../schemas/rashi.schema";
import styles from "./rashi-calculator.module.scss";

export const RashiCalculator: React.FC = () => {
  const [formData, setFormData] = useState<RashiFormValues | null>(null);

  const { data, isLoading, error } = useRashiTelemetry(formData);

  const handleCalculate = (values: RashiFormValues) => {
    setFormData(values);
  };

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.topSection}>
        <RashiForm onCalculate={handleCalculate} isCalculating={isLoading} />
        {data && <ChandraTelemetryRadar data={data} />}
      </div>

      {error && (
        <div className={styles.errorState}>
          Unable to resolve ephemeris data. Please verify birth metrics.
        </div>
      )}

      {data && (
        <div className={styles.resultsContainer}>
          <DualLunarEphemeris data={data} />
          <RashiDestiny data={data} />
          <ChandraRemedies data={data} />
        </div>
      )}
    </div>
  );
};
