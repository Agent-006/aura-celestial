import React, { useState } from "react";
import { useMulankTelemetry } from "../../hooks/useMulankTelemetry";
import { MulankForm } from "../MulankForm/MulankForm";
import { MulankCalculatorFormValues } from "../../schemas/mulank-calculator.schema";
import { MulankTelemetryData } from "../../types/mulank-calculator.types";
import { MulankStats } from "../MulankStats/MulankStats";
import { CoreResonanceTriad } from "../CoreResonanceTriad/CoreResonanceTriad";
import { MulankPillars } from "../MulankPillars/MulankPillars";
import { ComparativeMatrix } from "../ComparativeMatrix/ComparativeMatrix";
import { MulankRemedials } from "../MulankRemedials/MulankRemedials";
import { MulankFooter } from "../MulankFooter/MulankFooter";
import styles from "./mulank-calculator.module.scss";

export const MulankCalculator: React.FC = () => {
  const [telemetryData, setTelemetryData] =
    useState<MulankTelemetryData | null>(null);

  const { mutate: calculate, isPending: isLoading } = useMulankTelemetry({
    onSuccess: (data) => {
      setTelemetryData(data);
      setTimeout(() => {
        document
          .getElementById("mulank-results")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
  });

  const handleSubmit = (values: MulankCalculatorFormValues) => {
    calculate(values);
  };

  return (
    <div className={styles.calculatorWrapper}>
      <MulankForm onSubmit={handleSubmit} isLoading={isLoading} />

      {telemetryData && (
        <div id="mulank-results" className={styles.resultsContainer}>
          <MulankStats stats={telemetryData.stats} />

          <CoreResonanceTriad triad={telemetryData.triad} />

          <MulankPillars pillars={telemetryData.pillars} />

          <ComparativeMatrix matrix={telemetryData.matrix} />

          <MulankRemedials />

          <MulankFooter />
        </div>
      )}
    </div>
  );
};
