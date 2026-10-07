"use client";

import React, { useState } from "react";
import { useDestinyTelemetry } from "../../hooks/useDestinyTelemetry";
import { DestinyForm } from "../DestinyForm/DestinyForm";
import { DestinyNumberCalculatorFormValues } from "../../schemas/destiny-number-calculator.schema";
import { DestinyTelemetryData } from "../../types/destiny-number-calculator.types";
import { DestinyTelemetry } from "../DestinyTelemetry/DestinyTelemetry";
import { DestinyVisualizer } from "../DestinyVisualizer/DestinyVisualizer";
import { DestinyPillars } from "../DestinyPillars/DestinyPillars";
import { DestinyMatrix } from "../DestinyMatrix/DestinyMatrix";
import { DestinyRemedials } from "../DestinyRemedials/DestinyRemedials";
import { DestinyFooter } from "../DestinyFooter/DestinyFooter";
import styles from "./destiny-calculator.module.scss";

export const DestinyCalculator: React.FC = () => {
  const [telemetryData, setTelemetryData] =
    useState<DestinyTelemetryData | null>(null);

  const { mutate: calculate, isPending: isLoading } = useDestinyTelemetry({
    onSuccess: (data) => {
      setTelemetryData(data);
      setTimeout(() => {
        document
          .getElementById("destiny-results")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
  });

  const handleSubmit = (values: DestinyNumberCalculatorFormValues) => {
    calculate(values);
  };

  return (
    <div className={styles.calculatorWrapper}>
      <DestinyForm onSubmit={handleSubmit} isLoading={isLoading} />

      {telemetryData && (
        <div id="destiny-results" className={styles.resultsContainer}>
          <DestinyTelemetry telemetry={telemetryData.telemetry} />

          <DestinyVisualizer pinnacleCycles={telemetryData.pinnacleCycles} />

          <DestinyPillars pillars={telemetryData.pillars} />

          <DestinyMatrix matrix={telemetryData.matrix} />

          <DestinyRemedials remedials={telemetryData.remedials} />

          <DestinyFooter />
        </div>
      )}
    </div>
  );
};
