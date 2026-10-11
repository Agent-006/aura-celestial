"use client";

import { useMutation } from "@tanstack/react-query";
import { TransitTelemetryData } from "../types/transit.types";
import { MOCK_TRANSIT_DATA } from "../data/transit.data";
import { TransitFormValues } from "../schemas/transit.schema";

const calculateTransitData = async (
  values: TransitFormValues
): Promise<TransitTelemetryData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_TRANSIT_DATA);
    }, 1500);
  });
};

export function useTransitTelemetry(options?: {
  onSuccess?: (data: TransitTelemetryData) => void;
}) {
  return useMutation({
    mutationFn: calculateTransitData,
    onSuccess: options?.onSuccess,
  });
}
