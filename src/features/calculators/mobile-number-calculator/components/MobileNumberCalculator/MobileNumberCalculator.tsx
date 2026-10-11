"use client";

import React, { useState } from "react";
import { useMobileTelemetry } from "../../hooks/useMobileTelemetry";
import { MobileForm } from "../MobileForm/MobileForm";
import { MobileNumberCalculatorFormValues } from "../../schemas/mobile-number-calculator.schema";
import { MobileTelemetryData } from "../../types/mobile-number-calculator.types";
import { MobileStats } from "../MobileStats/MobileStats";
import { NavagrahaAlignment } from "../NavagrahaAlignment/NavagrahaAlignment";
import { PhaseDistribution } from "../PhaseDistribution/PhaseDistribution";
import { MobilePillars } from "../MobilePillars/MobilePillars";
import { MobileMatrix } from "../MobileMatrix/MobileMatrix";
import { MobileRemedials } from "../MobileRemedials/MobileRemedials";
import { MobileFooter } from "../MobileFooter/MobileFooter";
import styles from "./mobile-number-calculator.module.scss";

export const MobileNumberCalculator: React.FC = () => {
  const [telemetryData, setTelemetryData] =
    useState<MobileTelemetryData | null>(null);

  const { mutate: calculate, isPending: isLoading } = useMobileTelemetry({
    onSuccess: (data) => {
      setTelemetryData(data);
      setTimeout(() => {
        document
          .getElementById("mobile-results")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
  });

  const handleSubmit = (values: MobileNumberCalculatorFormValues) => {
    calculate(values);
  };

  return (
    <div className={styles.calculatorWrapper}>
      <MobileForm onSubmit={handleSubmit} isLoading={isLoading} />

      {telemetryData && (
        <div id="mobile-results" className={styles.resultsContainer}>
          <MobileStats stats={telemetryData.stats} />

          <div className={styles.visualRow}>
            <NavagrahaAlignment digits={telemetryData.navagrahaAlignment} />
            <PhaseDistribution phases={telemetryData.phaseDistribution} />
          </div>

          <MobilePillars pillars={telemetryData.pillars} />

          <MobileMatrix matrix={telemetryData.matrix} />

          <MobileRemedials />

          <MobileFooter />
        </div>
      )}
    </div>
  );
};
