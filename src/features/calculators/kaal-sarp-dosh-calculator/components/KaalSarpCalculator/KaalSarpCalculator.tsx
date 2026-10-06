"use client";

import React, { useState } from "react";
import { KaalSarpForm } from "../KaalSarpForm/KaalSarpForm";
import { SerpentArchitecture } from "../SerpentArchitecture/SerpentArchitecture";
import { ClassicalFormations } from "../ClassicalFormations/ClassicalFormations";
import { NodalVectorsMatrix } from "../NodalVectorsMatrix/NodalVectorsMatrix";
import { KaalSarpHarmonization } from "../KaalSarpHarmonization/KaalSarpHarmonization";
import { useKaalSarpTelemetry } from "../../hooks/useKaalSarpTelemetry";
import { KaalSarpFormValues } from "../../schemas/kaal-sarp.schema";

export const KaalSarpCalculator: React.FC = () => {
  const [formValues, setFormValues] = useState<KaalSarpFormValues | null>(null);

  const {
    mutate: calculate,
    data,
    isPending: isLoading,
  } = useKaalSarpTelemetry();

  const handleCalculate = (values: KaalSarpFormValues) => {
    setFormValues(values);
    calculate(values);
  };

  return (
    <div className="calculator-wrapper">
      <KaalSarpForm onSubmit={handleCalculate} isLoading={isLoading} />

      {data && formValues && (
        <div className="results-wrapper animate-fade-in">
          <SerpentArchitecture stats={data.stats} />
          <ClassicalFormations formations={data.formations} />
          <NodalVectorsMatrix vectors={data.vectors} />
          <KaalSarpHarmonization protocols={data.protocols} />
        </div>
      )}
    </div>
  );
};
