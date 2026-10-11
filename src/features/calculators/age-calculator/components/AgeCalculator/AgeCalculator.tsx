"use client";

import React, { useState } from "react";
import { useAgeTelemetry } from "../../hooks/useAgeTelemetry";
import { AgeForm } from "../AgeForm/AgeForm";
import { AgeCalculatorFormValues } from "../../schemas/age-calculator.schema";
import { AgeTelemetryData } from "../../types/age-calculator.types";
import { AgeStats } from "../AgeStats/AgeStats";
import { OrbitalReturns } from "../OrbitalReturns/OrbitalReturns";
import { ChronometryPillars } from "../ChronometryPillars/ChronometryPillars";
import { PlanetaryRevolutions } from "../PlanetaryRevolutions/PlanetaryRevolutions";
import { LongevitySadhana } from "../LongevitySadhana/LongevitySadhana";
import { AgeFooter } from "../AgeFooter/AgeFooter";
import styles from "./age-calculator.module.scss";

export const AgeCalculator: React.FC = () => {
  const [telemetryData, setTelemetryData] = useState<AgeTelemetryData | null>(
    null,
  );

  const { mutate: calculate, isPending: isLoading } = useAgeTelemetry({
    onSuccess: (data) => {
      setTelemetryData(data);
      setTimeout(() => {
        document
          .getElementById("age-results")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
  });

  const handleSubmit = (values: AgeCalculatorFormValues) => {
    calculate(values);
  };

  return (
    <div className={styles.calculatorWrapper}>
      <AgeForm onSubmit={handleSubmit} isLoading={isLoading} />

      {telemetryData && (
        <div id="age-results" className={styles.resultsContainer}>
          <AgeStats stats={telemetryData.stats} />

          <OrbitalReturns orbital={telemetryData.orbital} />

          <ChronometryPillars pillars={telemetryData.pillars} />

          <PlanetaryRevolutions revolutions={telemetryData.revolutions} />

          <LongevitySadhana sadhana={telemetryData.sadhana} />

          <AgeFooter />
        </div>
      )}
    </div>
  );
};
