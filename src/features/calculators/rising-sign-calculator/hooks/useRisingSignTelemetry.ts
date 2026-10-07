"use client";

import { useQuery } from "@tanstack/react-query";
import { RisingSignTelemetryData } from "../types/rising-sign.types";
import { RisingSignFormValues } from "../schemas/rising-sign.schema";
import { mockRisingSignData } from "../data/rising-sign.data";

const calculateRisingSign = async (
  data: RisingSignFormValues,
): Promise<RisingSignTelemetryData> => {
  // Simulate complex ephemeris API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockRisingSignData);
    }, 1500);
  });
};

export const useRisingSignTelemetry = (
  formData: RisingSignFormValues | null,
  options?: { onSuccess?: () => void; onError?: () => void },
) => {
  return useQuery({
    queryKey: ["risingSign", formData],
    queryFn: () => {
      if (!formData) throw new Error("No form data provided");
      return calculateRisingSign(formData);
    },
    enabled: !!formData,
    staleTime: Infinity,
    ...options,
  });
};
