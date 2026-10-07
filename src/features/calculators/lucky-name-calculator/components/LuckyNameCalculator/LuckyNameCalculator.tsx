"use client";

import React, { useState } from "react";
import { useLuckyNameTelemetry } from "../../hooks/useLuckyNameTelemetry";
import { LuckyNameCalculatorFormValues } from "../../schemas/lucky-name-calculator.schema";
import { LuckyNameForm } from "../LuckyNameForm/LuckyNameForm";
import { LuckyNameTelemetry } from "../LuckyNameTelemetry/LuckyNameTelemetry";
import { LetterDecomposition } from "../LetterDecomposition/LetterDecomposition";
import { TriadSynastry } from "../TriadSynastry/TriadSynastry";
import { LuckyNamePillars } from "../LuckyNamePillars/LuckyNamePillars";
import { LuckyNameMatrix } from "../LuckyNameMatrix/LuckyNameMatrix";
import { LuckyNameRemedials } from "../LuckyNameRemedials/LuckyNameRemedials";
import { LuckyNameFooter } from "../LuckyNameFooter/LuckyNameFooter";
import styles from "./lucky-name-calculator.module.scss";

export const LuckyNameCalculator: React.FC = () => {
  const { mutate, isPending, data } = useLuckyNameTelemetry();
  const [hasCalculated, setHasCalculated] = useState(false);

  const handleCalculate = (values: LuckyNameCalculatorFormValues) => {
    mutate(values, {
      onSuccess: () => {
        setHasCalculated(true);
      },
    });
  };

  return (
    <div className={styles.calculatorWrapper}>
      <LuckyNameForm onCalculate={handleCalculate} isLoading={isPending} />

      {hasCalculated && data && (
        <div className={styles.resultsContainer}>
          <LuckyNameTelemetry data={data.telemetry} name={data.decomposition.name} />
          
          <LetterDecomposition data={data.decomposition} />
          
          <TriadSynastry triad={data.triad} />

          <LuckyNamePillars pillars={data.pillars} />

          <LuckyNameMatrix matrix={data.matrix} />

          <LuckyNameRemedials remedials={data.remedials} />

          <LuckyNameFooter />
        </div>
      )}
    </div>
  );
};
