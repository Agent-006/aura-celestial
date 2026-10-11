"use client";

'use client';

import React, { useState } from 'react';
import { SunSignForm } from '../SunSignForm/SunSignForm';
import { SolarVisuals } from '../SolarVisuals/SolarVisuals';
import { DualSignResults } from '../DualSignResults/DualSignResults';
import { PrecessionAnalysis } from '../PrecessionAnalysis/PrecessionAnalysis';
import { SolarRemedies } from '../SolarRemedies/SolarRemedies';
import { useSunSignTelemetry } from '../../hooks/useSunSignTelemetry';
import { SunSignFormValues } from '../../schemas/sun-sign.schema';
import styles from './sun-sign-calculator.module.scss';

export const SunSignCalculator: React.FC = () => {
  const [formData, setFormData] = useState<SunSignFormValues | null>(null);

  const { data, isLoading, isError } = useSunSignTelemetry(formData);

  const handleCalculate = (data: SunSignFormValues) => {
    setFormData(data);
  };

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.topSection}>
        <SunSignForm
          onCalculate={handleCalculate}
          isCalculating={isLoading}
          telemetry={data}
        />
        <SolarVisuals />
      </div>

      {isError && (
        <div className={styles.errorState}>
          <p>Failed to compute solar coordinates. Please try again.</p>
        </div>
      )}

      {data && !isLoading && (
        <div className={styles.resultsContainer}>
          <DualSignResults tropical={data.tropical} sidereal={data.sidereal} />
          
          <PrecessionAnalysis data={data.precession} />
          
          <SolarRemedies remedies={data.remedies} />
        </div>
      )}
    </div>
  );
};
