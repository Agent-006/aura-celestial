"use client";

import { useMutation } from "@tanstack/react-query";
import { AgeTelemetryData } from "../types/age-calculator.types";
import { MOCK_AGE_DATA } from "../data/age-calculator.data";
import { AgeCalculatorFormValues } from "../schemas/age-calculator.schema";

const calculateAgeTelemetry = async (
  values: AgeCalculatorFormValues,
): Promise<AgeTelemetryData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_AGE_DATA);
    }, 1500);
  });
};

export function useAgeTelemetry(options?: {
  onSuccess?: (data: AgeTelemetryData) => void;
}) {
  return useMutation({
    mutationFn: calculateAgeTelemetry,
    onSuccess: options?.onSuccess,
  });
}
