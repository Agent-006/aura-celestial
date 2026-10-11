"use client";

import React from "react";
import { LuckyVehicleFormValues } from "../../schemas/lucky-vehicle.schema";
import { useLuckyVehicleTelemetry } from "../../hooks/useLuckyVehicleTelemetry";
import { LuckyVehicleForm } from "../LuckyVehicleForm/LuckyVehicleForm";
import { VehicleAstrometricResonance } from "../VehicleAstrometricResonance/VehicleAstrometricResonance";
import { VibrationsMatrix } from "../VibrationsMatrix/VibrationsMatrix";
import { StructuralConcordance } from "../StructuralConcordance/StructuralConcordance";
import { VehicleHarmonization } from "../VehicleHarmonization/VehicleHarmonization";
import styles from "./lucky-vehicle-calculator.module.scss";

export const LuckyVehicleCalculator: React.FC = () => {
  const { mutate: calculate, data, isPending: isLoading } = useLuckyVehicleTelemetry();

  const handleSubmit = (values: LuckyVehicleFormValues) => {
    calculate(values);
  };

  return (
    <div className={styles.calculatorContainer}>
      <LuckyVehicleForm onSubmit={handleSubmit} isLoading={isLoading} />
      
      {data && (
        <>
          <VehicleAstrometricResonance data={data} />
          <VibrationsMatrix vibrations={data.vibrations} />
          <StructuralConcordance concordances={data.concordances} />
          <VehicleHarmonization protocols={data.protocols} />
        </>
      )}
    </div>
  );
};
