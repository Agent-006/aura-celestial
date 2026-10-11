"use client";

import { useMutation } from "@tanstack/react-query";
import { LuckyVehicleFormValues } from "../schemas/lucky-vehicle.schema";
import { LuckyVehicleTelemetryData } from "../types/lucky-vehicle.types";
import { MOCK_LUCKY_VEHICLE_DATA } from "../data/lucky-vehicle.data";

const calculateVehicleMatrix = async (
  formData: LuckyVehicleFormValues
): Promise<LuckyVehicleTelemetryData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_LUCKY_VEHICLE_DATA);
    }, 1800);
  });
};

export function useLuckyVehicleTelemetry(options?: {
  onSuccess?: (data: LuckyVehicleTelemetryData) => void;
}) {
  return useMutation({
    mutationFn: calculateVehicleMatrix,
    onSuccess: options?.onSuccess,
  });
}
