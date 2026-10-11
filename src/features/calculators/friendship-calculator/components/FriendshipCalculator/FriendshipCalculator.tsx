"use client";

import React, { useState } from "react";
import { FriendshipForm } from "../FriendshipForm/FriendshipForm";
import { HarmonicTelemetry } from "../HarmonicTelemetry/HarmonicTelemetry";
import { PlatonicDimensions } from "../PlatonicDimensions/PlatonicDimensions";
import { ComraderyMatrix } from "../ComraderyMatrix/ComraderyMatrix";
import { FriendshipHarmonization } from "../FriendshipHarmonization/FriendshipHarmonization";
import { useFriendshipTelemetry } from "../../hooks/useFriendshipTelemetry";
import { FriendshipFormValues } from "../../schemas/friendship.schema";

export const FriendshipCalculator: React.FC = () => {
  const [formValues, setFormValues] = useState<FriendshipFormValues | null>(
    null,
  );

  const {
    mutate: calculate,
    data,
    isPending: isLoading,
  } = useFriendshipTelemetry({
    onSuccess: (result) => {
      // scroll down logic could go here
    },
  });

  const handleCalculate = (values: FriendshipFormValues) => {
    setFormValues(values);
    calculate(values);
  };

  return (
    <div className="calculator-wrapper">
      <FriendshipForm onSubmit={handleCalculate} isLoading={isLoading} />

      {data && formValues && (
        <div className="results-wrapper animate-fade-in">
          <HarmonicTelemetry data={data} formValues={formValues} />
          <PlatonicDimensions dimensions={data.dimensions} />
          <ComraderyMatrix concordances={data.concordances} />
          <FriendshipHarmonization protocols={data.protocols} />
        </div>
      )}
    </div>
  );
};
