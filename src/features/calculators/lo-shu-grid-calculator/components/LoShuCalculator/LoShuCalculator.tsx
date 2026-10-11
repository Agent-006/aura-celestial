"use client";

import React, { useState } from "react";
import { useLoShuTelemetry } from "../../hooks/useLoShuTelemetry";
import { LoShuForm } from "../LoShuForm/LoShuForm";
import { LoShuFormValues } from "../../schemas/lo-shu.schema";
import { LoShuTelemetryData } from "../../types/lo-shu.types";
import { SacredTelemetryStats } from "../SacredTelemetryStats/SacredTelemetryStats";
import { SacredLoShuMatrix } from "../SacredLoShuMatrix/SacredLoShuMatrix";
import { EnergyPlanes } from "../EnergyPlanes/EnergyPlanes";
import { TattvaHarmonization } from "../TattvaHarmonization/TattvaHarmonization";
import { LoShuFooter } from "../LoShuFooter/LoShuFooter";
import styles from "./lo-shu-calculator.module.scss";

export const LoShuCalculator: React.FC = () => {
  const [telemetryData, setTelemetryData] = useState<LoShuTelemetryData | null>(null);
  
  const { mutate: calculate, isPending: isLoading } = useLoShuTelemetry({
    onSuccess: (data) => {
      setTelemetryData(data);
      // Smooth scroll to results
      setTimeout(() => {
        document.getElementById("lo-shu-results")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
  });

  const handleSubmit = (values: LoShuFormValues) => {
    calculate(values);
  };

  return (
    <div className={styles.calculatorWrapper}>
      <LoShuForm onSubmit={handleSubmit} isLoading={isLoading} />
      
      {telemetryData && (
        <div id="lo-shu-results" className={styles.resultsContainer}>
          <SacredTelemetryStats stats={telemetryData.stats} />
          
          <SacredLoShuMatrix 
            grid={telemetryData.grid} 
            resonances={telemetryData.resonances} 
          />
          
          <EnergyPlanes planes={telemetryData.planes} />
          
          <TattvaHarmonization 
            missingRemedies={telemetryData.missingRemedies} 
            protocols={telemetryData.protocols} 
          />
          
          <LoShuFooter />
        </div>
      )}
    </div>
  );
};
