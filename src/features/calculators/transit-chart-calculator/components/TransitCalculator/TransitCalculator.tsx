import React, { useState } from "react";
import { useTransitTelemetry } from "../../hooks/useTransitTelemetry";
import { TransitForm } from "../TransitForm/TransitForm";
import { TransitFormValues } from "../../schemas/transit.schema";
import { TransitTelemetryData } from "../../types/transit.types";
import { TransitAstrometricGauges } from "../TransitAstrometricGauges/TransitAstrometricGauges";
import { DualTransitOverlay } from "../DualTransitOverlay/DualTransitOverlay";
import { GrahaGocharMatrix } from "../GrahaGocharMatrix/GrahaGocharMatrix";
import { AshtakavargaHeatmap } from "../AshtakavargaHeatmap/AshtakavargaHeatmap";
import { TransitRemedialProtocols } from "../TransitRemedialProtocols/TransitRemedialProtocols";
import { TransitFooter } from "../TransitFooter/TransitFooter";
import styles from "./transit-calculator.module.scss";

export const TransitCalculator: React.FC = () => {
  const [telemetryData, setTelemetryData] = useState<TransitTelemetryData | null>(null);

  const { mutate: calculate, isPending: isLoading } = useTransitTelemetry({
    onSuccess: (data) => {
      setTelemetryData(data);
      setTimeout(() => {
        document.getElementById("transit-results")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
  });

  const handleSubmit = (values: TransitFormValues) => {
    calculate(values);
  };

  return (
    <div className={styles.calculatorWrapper}>
      <TransitForm onSubmit={handleSubmit} isLoading={isLoading} />
      
      {telemetryData && (
        <div id="transit-results" className={styles.resultsContainer}>
          <TransitAstrometricGauges gauges={telemetryData.gauges} />
          
          <DualTransitOverlay barometers={telemetryData.barometers} />
          
          <GrahaGocharMatrix vectors={telemetryData.vectors} />
          
          <AshtakavargaHeatmap heatmap={telemetryData.heatmap} />
          
          <TransitRemedialProtocols protocols={telemetryData.protocols} />
          
          <TransitFooter />
        </div>
      )}
    </div>
  );
};
