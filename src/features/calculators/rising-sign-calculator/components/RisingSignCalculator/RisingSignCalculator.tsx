"use client";

import React, { useState } from "react";
import { RisingSignForm } from "../RisingSignForm/RisingSignForm";
import { HorizonEphemerisVector } from "../HorizonEphemerisVector/HorizonEphemerisVector";
import { AscendantDualComparison } from "../AscendantDualComparison/AscendantDualComparison";
import { BhavachakraTable } from "../BhavachakraTable/BhavachakraTable";
import { LagnaRemedies } from "../LagnaRemedies/LagnaRemedies";
import { useRisingSignTelemetry } from "../../hooks/useRisingSignTelemetry";
import { RisingSignFormValues } from "../../schemas/rising-sign.schema";
import styles from "./rising-sign-calculator.module.scss";

export const RisingSignCalculator: React.FC = () => {
  const [formData, setFormData] = useState<RisingSignFormValues | null>(null);

  const { data, isLoading, error } = useRisingSignTelemetry(formData);

  const handleCalculate = (values: RisingSignFormValues) => {
    setFormData(values);
  };

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.topSection}>
        <RisingSignForm
          onCalculate={handleCalculate}
          isCalculating={isLoading}
        />
        {data && <HorizonEphemerisVector data={data} />}
      </div>

      {error && (
        <div className={styles.errorState}>
          Unable to resolve ephemeris data. Please verify birth metrics.
        </div>
      )}

      {data && (
        <div className={styles.resultsContainer}>
          <AscendantDualComparison data={data} />
          <BhavachakraTable data={data} />
          <LagnaRemedies data={data} />
        </div>
      )}
    </div>
  );
};
