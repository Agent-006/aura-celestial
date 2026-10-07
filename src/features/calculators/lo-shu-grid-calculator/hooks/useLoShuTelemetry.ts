"use client";

import { useMutation } from "@tanstack/react-query";
import { LoShuTelemetryData } from "../types/lo-shu.types";
import { MOCK_LO_SHU_DATA } from "../data/lo-shu.data";
import { LoShuFormValues } from "../schemas/lo-shu.schema";

const calculateLoShuData = async (
  values: LoShuFormValues
): Promise<LoShuTelemetryData> => {
  // Simulate API calculation delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_LO_SHU_DATA);
    }, 1500);
  });
};

export function useLoShuTelemetry(options?: {
  onSuccess?: (data: LoShuTelemetryData) => void;
}) {
  return useMutation({
    mutationFn: calculateLoShuData,
    onSuccess: options?.onSuccess,
  });
}
