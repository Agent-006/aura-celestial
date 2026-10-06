"use client";

import React, { useState } from "react";
import { Download, MessageSquare, FileText } from "lucide-react";
import { BirthChartFormValues } from "../../schemas/birth-chart.schema";
import { useBirthChartTelemetry } from "../../hooks/useBirthChartTelemetry";
import { BirthChartForm } from "../BirthChartForm/BirthChartForm";
import { RashiChakraVisualizer } from "../RashiChakraVisualizer/RashiChakraVisualizer";
import { NavagrahaPlanetaryPositions } from "../NavagrahaPlanetaryPositions/NavagrahaPlanetaryPositions";
import { ShodashvargaDivisionalHarmonics } from "../ShodashvargaDivisionalHarmonics/ShodashvargaDivisionalHarmonics";
import { BhavaHouseSignificators } from "../BhavaHouseSignificators/BhavaHouseSignificators";
import { NatalHarmonizationShield } from "../NatalHarmonizationShield/NatalHarmonizationShield";
import styles from "./birth-chart-calculator.module.scss";

export const BirthChartCalculator: React.FC = () => {
  const [formData, setFormData] = useState<BirthChartFormValues | null>(null);

  const { data, isLoading } = useBirthChartTelemetry(formData, {
    onSuccess: () => {
      // scroll logic
    },
  });

  const handleSubmit = (values: BirthChartFormValues) => {
    setFormData(values);
  };

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.topSection}>
        <div className={styles.formArea}>
          <BirthChartForm onSubmit={handleSubmit} isLoading={isLoading} />
          {isLoading && (
            <div className={styles.loadingOverlay}>
              <div className={styles.spinner} />
              <span className={styles.loadingText}>
                Computing Natal Telemetry...
              </span>
            </div>
          )}
        </div>
        
        <div className={styles.visualizerArea}>
          {data ? (
            <RashiChakraVisualizer data={data} />
          ) : (
            <div className={styles.awaitingTelemetry}>
              Awaiting subject telemetry for Chart processing...
            </div>
          )}
        </div>
      </div>

      {data && (
        <>
          <NavagrahaPlanetaryPositions data={data} />
          <ShodashvargaDivisionalHarmonics data={data} />
          <BhavaHouseSignificators data={data} />
          <NatalHarmonizationShield data={data} />

          <div className={styles.dossierSection}>
            <div className={styles.dossierInfo}>
              <div className={styles.iconWrapper}>
                <FileText size={24} />
              </div>
              <div className={styles.text}>
                <h4>Complete Astrometric Natal Record Ready</h4>
                <p>Base Chart, D-Charts, and Karmic Vectors Computed</p>
              </div>
            </div>
            
            <div className={styles.dossierActions}>
              <button className={styles.btnOutline}>
                <Download size={16} /> Export Full Birth Chart PDF
              </button>
              <button className={styles.btnPrimary}>
                <MessageSquare size={16} /> Consult Vedic Astrologer
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
